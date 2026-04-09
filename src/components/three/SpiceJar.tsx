"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface SpiceJarProps {
  /** Color of the spice inside */
  spiceColor?: string;
  /** Rotation speed multiplier */
  rotationSpeed?: number;
  /** Show powder particles floating inside */
  showParticles?: boolean;
}

/* ═══════════════════════════════════════════════════════
   The actual 3D jar mesh — glass with spice inside
   ═══════════════════════════════════════════════════════ */
function Jar({
  spiceColor = "#C5923A",
  rotationSpeed = 0.15,
}: {
  spiceColor?: string;
  rotationSpeed?: number;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <group ref={group} position={[0, -0.3, 0]}>
      {/* Glass jar body — cylindrical with rounded top */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[1.1, 1.2, 2.6, 64, 1, false]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.05}
          metalness={0}
          transmission={0.95}
          transparent
          opacity={0.35}
          thickness={0.5}
          ior={1.45}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Spice inside — fills the bottom 75% of the jar */}
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[1.05, 1.15, 1.8, 64]} />
        <meshStandardMaterial
          color={spiceColor}
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>

      {/* Spice top surface — slightly uneven for realism */}
      <mesh position={[0, 0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.05, 64]} />
        <meshStandardMaterial
          color={spiceColor}
          roughness={1}
          metalness={0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Gold lid */}
      <group position={[0, 1.45, 0]}>
        {/* Lid main */}
        <mesh castShadow>
          <cylinderGeometry args={[1.18, 1.15, 0.35, 64]} />
          <meshStandardMaterial
            color="#C5923A"
            roughness={0.25}
            metalness={0.9}
          />
        </mesh>
        {/* Lid top rim */}
        <mesh position={[0, 0.18, 0]} castShadow>
          <torusGeometry args={[1.13, 0.04, 16, 64]} />
          <meshStandardMaterial
            color="#D4A84E"
            roughness={0.2}
            metalness={0.95}
          />
        </mesh>
        {/* Center emblem */}
        <mesh position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.85, 64]} />
          <meshStandardMaterial
            color="#A67B2E"
            roughness={0.3}
            metalness={0.85}
          />
        </mesh>
      </group>

      {/* Glass jar base shine */}
      <mesh position={[0, -1.32, 0]}>
        <cylinderGeometry args={[1.2, 1.15, 0.08, 64]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.1}
          metalness={0}
          transmission={0.9}
          transparent
          opacity={0.5}
          thickness={0.3}
          ior={1.45}
        />
      </mesh>

      {/* Subtle label ring around jar */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[1.13, 1.18, 0.7, 64, 1, true]} />
        <meshPhysicalMaterial
          color="#1B3A5C"
          roughness={0.4}
          metalness={0.1}
          side={THREE.DoubleSide}
          transparent
          opacity={0.92}
        />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════
   Exported canvas component — drop-in for any layout
   ═══════════════════════════════════════════════════════ */
export function SpiceJar({
  spiceColor = "#C5923A",
  rotationSpeed = 0.15,
  showParticles = false,
}: SpiceJarProps) {
  // Suppress unused warning
  void showParticles;

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.5, 5], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        {/* Lighting setup for premium look */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.8}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-5, 3, -5]} intensity={0.6} color="#3A7CA5" />
        <pointLight position={[0, 2, 3]} intensity={0.8} color="#C5923A" />

        {/* Gentle floating motion */}
        <Float
          speed={1.2}
          rotationIntensity={0.15}
          floatIntensity={0.3}
          floatingRange={[-0.05, 0.05]}
        >
          <Jar spiceColor={spiceColor} rotationSpeed={rotationSpeed} />
        </Float>

        {/* Soft shadow beneath */}
        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.35}
          scale={8}
          blur={2.5}
          far={4}
          color="#0F172A"
        />

        {/* Studio environment for reflections */}
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
