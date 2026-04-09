export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  shortDescription: string;
  description: string;
  origin: string;
  features: string[];
  specifications: Record<string, string>;
};

export const categories = [
  { name: "All", slug: "all" },
  { name: "Dehydrated", slug: "dehydrated" },
  { name: "Spices", slug: "spices" },
] as const;

export const products: Product[] = [
  {
    slug: "dehydrated-garlic-powder",
    name: "Dehydrated Garlic Powder",
    category: "Dehydrated",
    categorySlug: "dehydrated",
    image: "/images/products/garlic-powder.jpg",
    shortDescription:
      "Premium dehydrated garlic in multiple forms — Chopped/Minced (8-40 mesh), Granules (40-80 mesh), and Powder (80-100+ mesh).",
    description:
      "Our dehydrated garlic powder is sourced directly from local producers across India and processed to retain natural aroma and flavor. Available in multiple mesh sizes to suit diverse industrial and food manufacturing requirements. Every batch is lab-tested for purity and compliance with international standards.",
    origin: "India",
    features: [
      "Chopped / Minced (8 – 40 Mesh Size)",
      "Granules (40 – 80 Mesh Size)",
      "Fine Powder (80 – 100+ Mesh Size)",
      "Lab tested for purity and safety",
      "Export-grade industrial packaging",
      "Customized compliance for destination country",
      "No additives or preservatives",
    ],
    specifications: {
      Product: "Dehydrated Garlic Powder",
      Origin: "India",
      Forms: "Chopped/Minced, Granules, Powder",
      "Mesh Sizes": "8-40 / 40-80 / 80-100+",
      Moisture: "< 6%",
      Packaging: "Export-grade, moisture-resistant",
      "Lab Testing": "Accredited laboratory verified",
    },
  },
  {
    slug: "onion-powder",
    name: "Onion Powder",
    category: "Dehydrated",
    categorySlug: "dehydrated",
    image: "/images/products/onion-powder.jpg",
    shortDescription:
      "Premium dehydrated onion powder with rich pungent flavor, ideal for food manufacturing and seasoning applications.",
    description:
      "Our onion powder is made from fresh, premium-quality Indian onions processed under strict quality controls. Perfect for food manufacturers, seasoning companies, and instant food producers worldwide.",
    origin: "India",
    features: [
      "Premium dehydrated onion",
      "Strong pungent natural flavor",
      "Lab tested before dispatch",
      "Custom particle sizes available",
      "Export-compliant packaging",
      "No artificial colors or preservatives",
    ],
    specifications: {
      Product: "Onion Powder",
      Origin: "India",
      Moisture: "< 5%",
      Color: "White to light cream",
      Packaging: "Export-grade packaging",
      "Lab Testing": "Accredited laboratory verified",
    },
  },
  {
    slug: "turmeric",
    name: "Turmeric",
    category: "Spices",
    categorySlug: "spices",
    image: "/images/products/turmeric.jpg",
    shortDescription:
      "High-curcumin turmeric sourced from India's renowned growing regions, lab tested for quality and compliance.",
    description:
      "Our turmeric is sourced from the best producing regions across India. With rigorous lab testing for curcumin content, purity, and safety compliance, every shipment meets exact technical specifications required by international buyers.",
    origin: "India",
    features: [
      "High curcumin content",
      "Vibrant golden-yellow color",
      "Lab tested for purity and safety",
      "Compliance with destination country regulations",
      "Strategic export packaging",
      "Verified supply chain",
    ],
    specifications: {
      Product: "Turmeric",
      Origin: "India",
      "Curcumin Content": "As per client specification",
      Moisture: "< 10%",
      Packaging: "Export-grade packaging",
      "Lab Testing": "Accredited laboratory verified",
    },
  },
  {
    slug: "ginger",
    name: "Ginger",
    category: "Spices",
    categorySlug: "spices",
    image: "/images/products/ginger.jpg",
    shortDescription:
      "Fresh and dried ginger sourced directly from local Indian producers, with verified quality and compliance.",
    description:
      "Our ginger is sourced directly from local producers across India with full visibility into origin and quality. Each batch undergoes comprehensive lab analysis to verify purity, safety, and compliance with international standards before dispatch.",
    origin: "India",
    features: [
      "Direct sourcing from local producers",
      "Available in fresh and dried forms",
      "Lab tested for quality assurance",
      "Customized compliance protocols",
      "Strategic export packaging",
      "Verified delivery chain",
    ],
    specifications: {
      Product: "Ginger",
      Origin: "India",
      Forms: "Fresh / Dried / Powder",
      Moisture: "As per specification",
      Packaging: "Export-grade packaging",
      "Lab Testing": "Accredited laboratory verified",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === "all") return products;
  return products.filter((p) => p.categorySlug === categorySlug);
}
