export type Certificate = {
  id: string;
  name: string;
  description: string;
  issuingBody: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    id: "fssai",
    name: "FSSAI",
    description: "Food Safety and Standards Authority of India — ensuring food safety compliance for all products.",
    issuingBody: "Government of India",
    image: "/images/certificates/fssai.png",
  },
  {
    id: "iso-22000",
    name: "ISO 22000:2018",
    description: "International standard for food safety management systems, ensuring safe food supply chains.",
    issuingBody: "International Organization for Standardization",
    image: "/images/certificates/iso-22000.png",
  },
  {
    id: "haccp",
    name: "HACCP",
    description: "Hazard Analysis and Critical Control Points — systematic approach to food safety and biological hazards.",
    issuingBody: "Codex Alimentarius Commission",
    image: "/images/certificates/haccp.png",
  },
  {
    id: "apeda",
    name: "APEDA",
    description: "Agricultural and Processed Food Products Export Development Authority registration for export authorization.",
    issuingBody: "Ministry of Commerce, India",
    image: "/images/certificates/apeda.png",
  },
  {
    id: "spice-board",
    name: "Spice Board of India",
    description: "Registration with India's Spice Board for quality assurance and export promotion of Indian spices.",
    issuingBody: "Ministry of Commerce, India",
    image: "/images/certificates/spice-board.png",
  },
  {
    id: "fda",
    name: "US FDA Registered",
    description: "Registered with the United States Food and Drug Administration for export to American markets.",
    issuingBody: "US Food and Drug Administration",
    image: "/images/certificates/fda.png",
  },
  {
    id: "halal",
    name: "Halal Certified",
    description: "Halal certification ensuring all products meet Islamic dietary requirements for Middle Eastern markets.",
    issuingBody: "Halal Certification Authority",
    image: "/images/certificates/halal.png",
  },
  {
    id: "gmp",
    name: "GMP Certified",
    description: "Good Manufacturing Practices certification ensuring consistent quality in production processes.",
    issuingBody: "Certification Body",
    image: "/images/certificates/gmp.png",
  },
  {
    id: "organic",
    name: "India Organic (NPOP)",
    description: "National Programme for Organic Production certification for select organic spice products.",
    issuingBody: "APEDA / Government of India",
    image: "/images/certificates/organic.png",
  },
];
