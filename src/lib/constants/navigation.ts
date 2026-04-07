export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Whole Spices", href: "/products?category=whole-spices" },
      { name: "Ground Spices", href: "/products?category=ground-spices" },
      { name: "Dehydrated Vegetables", href: "/products?category=dehydrated" },
      { name: "Seeds & Grains", href: "/products?category=seeds-grains" },
      { name: "Oils", href: "/products?category=oils" },
    ],
  },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/contact" },
] as const;

export const companyInfo = {
  name: "Ocean Crest",
  tagline: "Premium Spice Exports",
  phone: "+91 98765 43210",
  email: "info@oceancrestexports.com",
  whatsapp: "+919876543210",
  address: {
    street: "42 Marine Drive, Export Zone",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400001",
    country: "India",
  },
  social: {
    linkedin: "https://linkedin.com/company/oceancrest",
    facebook: "https://facebook.com/oceancrest",
    instagram: "https://instagram.com/oceancrest",
    twitter: "https://twitter.com/oceancrest",
  },
  stats: {
    countries: 25,
    products: 100,
    years: 15,
    clients: 500,
  },
} as const;
