"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  Html,
  useProgress,
} from "@react-three/drei";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════════
   Product-specific spice bag/jar models
   Each product slug maps to a distinct 3D representation
   ═══════════════════════════════════════════════════════ */

const PRODUCT_CONFIG: Record<
  string,
  {
    type: "jar" | "bag";
    spiceColor: string;
    labelColor: string;
    accentColor: string;
  }
> = {
  "dehydrated-garlic-powder": {
    type: "bag",
    spiceColor: "#E8DCC4",
    labelColor: "#1B3A5C",
    accentColor: "#C5923A",
  },
  "onion-powder": {
    type: "bag",
    spiceColor: "#D4B896",
    labelColor: "#1B3A5C",
    accentColor: "#C5923A",
  },
  turmeric: {
    type: "jar",
    spiceColor: "#D97706",
    labelColor: "#1B3A5C",
    accentColor: "#C5923A",
  },
  ginger: {
    type: "jar",
    spiceColor: "#C4724E",
    labelColor: "#1B3A5C",
    accentColor: "#C5923A",
  },
};

/* ═══════ SPICE JAR MODEL ═══════ */
function JarModel({
  spiceColor,
  accentColor,
}: {
  spiceColor: string;
  accentColor: string;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={group} position={[0, -0.3, 0]}>
      {/* Glass jar body */}
      <mesh castShadow>
        <cylinderGeometry args={[1.1, 1.2, 2.6, 64]} />
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
        />
      </mesh>

      {/* Spice contents */}
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[1.05, 1.15, 1.8, 64]} />
        <meshStandardMaterial color={spiceColor} roughness={0.95} />
      </mesh>

      <mesh position={[0, 0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.05, 64]} />
        <meshStandardMaterial color={spiceColor} roughness={1} side={THREE.DoubleSide} />
      </mesh>

      {/* Gold lid */}
      <group position={[0, 1.45, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[1.18, 1.15, 0.35, 64]} />
          <meshStandardMaterial color={accentColor} roughness={0.25} metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.18, 0]} castShadow>
          <torusGeometry args={[1.13, 0.04, 16, 64]} />
          <meshStandardMaterial color="#D4A84E" roughness={0.2} metalness={0.95} />
        </mesh>
      </group>

      {/* Navy label band */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[1.13, 1.18, 0.7, 64, 1, true]} />
        <meshPhysicalMaterial
          color="#1B3A5C"
          roughness={0.4}
          metalness={0.1}
          side={THREE.DoubleSide}
          opacity={0.92}
          transparent
        />
      </mesh>
    </group>
  );
}

/* ═══════ SPICE BAG MODEL ═══════ */
function BagModel({
  spiceColor,
  labelColor,
  accentColor,
}: {
  spiceColor: string;
  labelColor: string;
  accentColor: string;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* Main bag body — tall rounded rectangle (standup pouch) */}
      <mesh castShadow>
        <boxGeometry args={[1.8, 2.6, 0.85]} />
        <meshStandardMaterial
          color={labelColor}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Top crimp seal */}
      <mesh position={[0, 1.42, 0]} castShadow>
        <boxGeometry args={[1.85, 0.2, 0.15]} />
        <meshStandardMaterial
          color={accentColor}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Bottom crimp */}
      <mesh position={[0, -1.35, 0]}>
        <boxGeometry args={[1.85, 0.15, 0.2]} />
        <meshStandardMaterial
          color={accentColor}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Front label window — where spice color shows */}
      <mesh position={[0, 0, 0.431]}>
        <planeGeometry args={[1.3, 1.1]} />
        <meshStandardMaterial
          color={spiceColor}
          roughness={0.9}
          metalness={0}
        />
      </mesh>

      {/* Gold ring accent around label */}
      <mesh position={[0, 0, 0.432]}>
        <ringGeometry args={[0.68, 0.72, 64]} />
        <meshStandardMaterial
          color={accentColor}
          roughness={0.2}
          metalness={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Top stripe */}
      <mesh position={[0, 1.0, 0.431]}>
        <planeGeometry args={[1.75, 0.05]} />
        <meshStandardMaterial color={accentColor} metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Bottom stripe */}
      <mesh position={[0, -1.0, 0.431]}>
        <planeGeometry args={[1.75, 0.05]} />
        <meshStandardMaterial color={accentColor} metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}

/* ═══════ LOADING INDICATOR ═══════ */
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-xs text-primary/60 font-medium tracking-wider uppercase">
        {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

/* ═══════ MAIN EXPORTED COMPONENT ═══════ */
interface ProductViewer3DProps {
  productSlug: string;
  className?: string;
}

export function ProductViewer3D({ productSlug, className }: ProductViewer3DProps) {
  const config = PRODUCT_CONFIG[productSlug] || PRODUCT_CONFIG.turmeric;

  return (
    <div className={className}>
      <Canvas
        shadows
        camera={{ position: [0, 0.5, 5.5], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <ambientLight intensity={0.55} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.6}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#3A7CA5" />
          <pointLight position={[0, 2, 3]} intensity={0.7} color={config.accentColor} />

          {/* Model based on type */}
          {config.type === "jar" ? (
            <JarModel
              spiceColor={config.spiceColor}
              accentColor={config.accentColor}
            />
          ) : (
            <BagModel
              spiceColor={config.spiceColor}
              labelColor={config.labelColor}
              accentColor={config.accentColor}
            />
          )}

          {/* Ground shadow */}
          <ContactShadows
            position={[0, -1.7, 0]}
            opacity={0.35}
            scale={8}
            blur={2.5}
            far={4}
            color="#0F172A"
          />

          {/* Studio reflections */}
          <Environment preset="studio" />

          {/* Interactive rotation — user can drag to rotate */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={4}
            maxDistance={8}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
