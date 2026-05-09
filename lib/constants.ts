export const SITE_CONFIG = {
  name: "HomeShine Interior",
  tagline: "Crafting Spaces, Creating Experiences",
  description: "Premium interior design services in Pune",
  url: "https://homeshineinterior.in",
  email: "contact@homeshineinterior.in",
  phone: "+91 73043 40533",
  whatsappNumber: "917304340533", // Format for WhatsApp links
  address: {
    building: "VTP Altitude",
    floor: "4th Floor",
    officeNumber: "Office 434",
    street: "Aundh-Ravet BRTS Road",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    fullAddress: "VTP Altitude, 4th Floor, Office 434, Aundh-Ravet BRTS Road, Pune, Maharashtra, India",
  },
  businessHours: "Mon-Sat: 10 AM - 7 PM",
  socialLinks: {
    instagram: "#",
    facebook: "#",
    pinterest: "#",
    linkedin: "#",
  },
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE", // Update with actual embed URL
};

export const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  {
    href: "/services",
    label: "Services",
    submenu: [
      { href: "/services/modular-kitchen", label: "Modular Kitchen Design" },
      { href: "/services/residential", label: "Residential Interiors" },
      { href: "/services/commercial", label: "Commercial Interiors" },
      { href: "/services/complete-home", label: "Complete Home Solutions" },
    ],
  },
  { href: "/process", label: "Our Process" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const SERVICE_CATEGORIES = [
  "residential",
  "commercial",
  "modular-kitchen",
  "hospitality",
] as const;

export type ServiceCategory = typeof SERVICE_CATEGORIES[number];
