/**
 * Single source of truth for all site copy, contact details and lists.
 * Edit this file to change the brand, phone number, areas, reviews, etc.
 */

export const site = {
  name: "MR SERVICES",
  url: "https://www.mrservices.co.in",
  title: "MR SERVICES | Expert Electronics & Appliance Repair in Visakhapatnam",
  description:
    "Fast and reliable repair services for Laptops, Mobiles, LED TVs, Washing Machines, and Home Theatres in Madhurawada, Gajuwaka, and surrounding areas. All brands supported.",
  phone: "9010635353",
  phoneDisplay: "+91 90106 35353",
  whatsapp: "919010635353",
  email: "contact@mrservices.co.in",
  location: "Madhurawada, Visakhapatnam",
  hours: "9:00 AM - 9:00 PM",
  hoursLong: "Mon - Sun: 9 AM - 9 PM",
  // Static on purpose: the page is fully prerendered (cacheComponents).
  copyrightYear: 2026,
  poweredBy: "Powered by Tensorik Technologies Private Limited",
  logo: { src: "/images/logo.png", width: 600, height: 232 },
  social: {
    instagram: "#",
    website: "#",
  },
} as const;

export const telHref = `tel:${site.phone}`;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function bookServiceHref(service: string) {
  return whatsappHref(
    `Hello ${site.name}, I want to book a service for ${service}.`,
  );
}

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Service Areas", href: "#areas" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const images = {
  hero: { src: "/images/hero_branded.png", width: 1024, height: 1024 },
  workshop: { src: "/images/workshop_branded.png", width: 1024, height: 1024 },
  appliance: { src: "/images/appliance_branded.png", width: 1024, height: 1024 },
  tv: { src: "/images/tv_repair.png", width: 1920, height: 950 },
  lab: { src: "/images/lab.png", width: 1088, height: 726 },
  mobile: { src: "/images/mobile_repair.png", width: 1920, height: 950 },
} as const;

export const hero = {
  badge: `Available ${site.hours}`,
  titleStart: "Fast & Reliable",
  titleAccent: "Electronics Repair",
  titleEnd: "at Your Doorstep",
  lead: "We provide expert repair services for Laptops, Mobiles, TVs, and more. Trusted by 1000+ customers for quick response and high-quality repairs in Visakhapatnam.",
  note: "Book Your Repair Service Today",
  rating: "4.9/5",
  ratingLabel: "Customer Rating",
  sameDay: "⚡ Same Day Service",
};

export type ServiceIcon = "laptop" | "smartphone" | "tv" | "settings" | "speaker";

export const services: {
  title: string;
  description: string;
  icon: ServiceIcon;
  tint: string;
}[] = [
  {
    title: "Laptop Repair",
    description:
      "Screen replacement, battery issues, motherboard repair, and software troubleshooting.",
    icon: "laptop",
    tint: "bg-blue-100 text-blue-600",
  },
  {
    title: "Mobile Repair",
    description:
      "Display repair, charging port fix, battery replacement for all smartphone brands.",
    icon: "smartphone",
    tint: "bg-purple-100 text-purple-600",
  },
  {
    title: "LED TV Repair",
    description:
      "Picture issues, sound problems, backlight replacement, and panel repairs.",
    icon: "tv",
    tint: "bg-orange-100 text-orange-600",
  },
  {
    title: "Washing Machine",
    description:
      "Front load, top load, and semi-automatic machine repairs at your home.",
    icon: "settings",
    tint: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Home Theatre",
    description:
      "Audio system repair, speaker replacement, and connectivity troubleshooting.",
    icon: "speaker",
    tint: "bg-emerald-100 text-emerald-600",
  },
];

export const brands = [
  "Samsung",
  "LG",
  "Sony",
  "Apple",
  "Dell",
  "HP",
  "Acer",
  "Asus",
  "Xiaomi",
  "OnePlus",
  "Panasonic",
] as const;

export const brandLogo = (brand: string) =>
  `/brands/${brand.toLowerCase()}.png`;

export type FeatureIcon =
  | "shield-check"
  | "zap"
  | "badge-indian-rupee"
  | "globe"
  | "circle-check"
  | "house";

export const features: { title: string; description: string; icon: FeatureIcon }[] = [
  {
    title: "Experienced Technicians",
    description:
      "Our team consists of certified professionals with years of repair experience.",
    icon: "shield-check",
  },
  {
    title: "Fast Doorstep Service",
    description:
      "Quick response time and same-day repair for most issues at your home.",
    icon: "zap",
  },
  {
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden charges. Quality service at best rates.",
    icon: "badge-indian-rupee",
  },
  {
    title: "All Brands Supported",
    description:
      "Expertise in all major brands like Samsung, LG, HP, Dell, Apple, etc.",
    icon: "globe",
  },
  {
    title: "Genuine Spare Parts",
    description:
      "We only use 100% genuine and high-quality replacement parts for durability.",
    icon: "circle-check",
  },
  {
    title: "Home Service Available",
    description: "No need to carry heavy appliances; we come to you for repairs.",
    icon: "house",
  },
];

export const stats = [
  { value: 10, suffix: "+", label: ["Years of", "Experience"] },
  { value: 5, suffix: "K+", label: ["Successful", "Repairs"] },
] as const;

export const areas: { name: string; lat: number; lng: number }[] = [
  { name: "Madhurawada", lat: 17.8164, lng: 83.3551 },
  { name: "Gajuwaka", lat: 17.6904, lng: 83.2106 },
  { name: "RTC Complex", lat: 17.7231, lng: 83.3047 },
  { name: "Tagarapu Valasa", lat: 17.9269, lng: 83.4236 },
  { name: "MVP Colony", lat: 17.7413, lng: 83.3355 },
];

export const mapView = {
  center: [17.8, 83.32] as [number, number],
  zoom: 11,
  region: "Visakhapatnam District",
};

export const about = {
  paragraphs: [
    "MR SERVICES was founded with a simple mission: to provide high-quality, reliable, and affordable electronics repair services to the local community in Visakhapatnam.",
    "With years of experience in the industry, our technicians are trained to handle everything from complex motherboard repairs to simple screen replacements. We understand how essential your devices are to your daily life, which is why we prioritize speed and efficiency without compromising on quality.",
  ],
  points: [
    "Vocal for Local - Serving Visakhapatnam and surroundings",
    "Committed to 100% customer satisfaction",
    "Transparent communication and fair warranties",
    "Always using genuine parts for all repairs",
  ],
};

export const testimonials: { text: string; name: string; area: string }[] = [
  {
    text: "Excellent service! My laptop display was replaced within hours. Highly professional team.",
    name: "Rajesh Kumar",
    area: "Madhurawada",
  },
  {
    text: "The only place I trust for my mobile repairs. Very honest and affordable pricing.",
    name: "Suresh P.",
    area: "Gajuwaka",
  },
  {
    text: "Great experience with washing machine repair. They came home and fixed it quickly.",
    name: "Anitha Rao",
    area: "MVP Colony",
  },
  {
    text: "My AC stopped cooling right in the middle of summer. Called MR Services, and the technician had it fixed perfectly by the afternoon. Lifesavers!",
    name: "Vikram Varma",
    area: "Tagarapu Valasa",
  },
  {
    text: "I was worried about my smart TV losing power, but they diagnosed the motherboard issue correctly and fixed it without overcharging.",
    name: "Deepthi M.",
    area: "RTC Complex",
  },
  {
    text: "Fastest doorstep repair I have ever seen. They repaired my double-door refrigerator's compressor quietly and professionally.",
    name: "Kiran Das",
    area: "Seethammadhara",
  },
  {
    text: "Super polite staff. They repaired my heavy microwave oven at my house so I didn't have to carry it anywhere. Highly recommended.",
    name: "Pooja Reddy",
    area: "Rushikonda",
  },
  {
    text: "Built my custom desktop PC nicely, and when I had an issue with the power supply a year later, they replaced it instantly under warranty.",
    name: "Srinivas K.",
    area: "Gajuwaka",
  },
];

export const footer = {
  tagline:
    "We provide Visakhapatnam's fastest and most reliable doorstep repair services for all your premium electronics and home appliances.",
  company: [
    { label: "Services", href: "#services" },
    { label: "Coverage", href: "#areas" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  specialties: [
    "Laptop & Desktop",
    "Mobile Phones",
    "LED/LCD Televisions",
    "Washing Machines",
    "Refrigerators & ACs",
  ],
};
