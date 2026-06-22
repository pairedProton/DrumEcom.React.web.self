import { productImages } from "../assets/images";
import {
  LuLeaf,
  LuShield,
  LuZap,
  LuMoon,
  LuScale,
  LuDroplets,
  LuWheat,
  LuSparkles,
  LuCupSoda,
} from "react-icons/lu";

const {
  ghee,
  honey,
  jaggery,
  tulsitea,
  tulsigreentea,
  tulsihoney,
  lemontea,
  amlapowder,
  cleanseshake,
  immunity,
} = productImages;

/* ---------------- HERO ---------------- */
export const heroData = {
  label: "PREMIUM ORGANIC PRODUCTS",
  title: "Wellness made simple, naturally!",
  subtitle:
    "Discover natural, organic solutions for your everyday wellness, carefully curated for your needs.",
  primaryCta: "SHOP BY GOAL",
  secondaryCta: "EXPLORE PRODUCTS",
  // Floating products for the hero banner arrangement
  products: [honey, tulsitea, ghee, tulsihoney, immunity],
};

/* ---------------- SHOP BY GOAL ---------------- */
export const goalsData = [
  { id: "digestion", title: "Digestion", icon: LuLeaf },
  { id: "immunity", title: "Immunity", icon: LuShield },
  { id: "energy", title: "Energy", icon: LuZap },
  { id: "sleep", title: "Sleep", icon: LuMoon },
  { id: "weight", title: "Weight Balance", icon: LuScale },
  { id: "detox", title: "Detox", icon: LuDroplets },
];

/* ---------------- TRUST STRIP ---------------- */
export const trustItems = [
  { id: "natural", label: "100% Natural", icon: LuLeaf },
  { id: "nochem", label: "No Chemicals", icon: LuSparkles },
  { id: "families", label: "Trusted by Families", icon: LuShield },
];

/* ---------------- PRODUCTS ---------------- */
export const bestsellerProducts = [
  {
    id: "bs1",
    badge: "Best Seller",
    category: "Pantry",
    name: "Hibiscus Tea",
    tagline: "Helps in Weight Loss",
    price: 349,
    mrp: 449,
    discount: 30,
    image: tulsitea,
  },
  {
    id: "bs2",
    badge: "Top Rated",
    category: "Pantry",
    name: "Hibiscus Tea",
    tagline: "Helps in Weight Loss",
    price: 349,
    mrp: 449,
    discount: 30,
    image: tulsitea,
  },
  {
    id: "bs3",
    badge: "Best Seller",
    category: "Pantry",
    name: "Hibiscus Tea",
    tagline: "Helps in Weight Loss",
    price: 349,
    mrp: 449,
    discount: 30,
    image: tulsitea,
  },
  {
    id: "bs4",
    badge: "Best Seller",
    category: "Pantry",
    name: "Hibiscus Tea",
    tagline: "Helps in Weight Loss",
    price: 349,
    mrp: 449,
    discount: 30,
    image: tulsitea,
  },
];

export const bundleProducts = [
  {
    id: "bn1",
    badge: "Best Seller",
    category: "Pantry",
    name: "Hibiscus Tea",
    tagline: "Helps in Weight Loss",
    price: 349,
    mrp: 449,
    discount: 30,
    image: tulsitea,
  },
  {
    id: "bn2",
    badge: "Top Rated",
    category: "Pantry",
    name: "Hibiscus Tea",
    tagline: "Helps in Weight Loss",
    price: 349,
    mrp: 449,
    discount: 30,
    image: tulsitea,
  },
  {
    id: "bn3",
    badge: "Best Seller",
    category: "Pantry",
    name: "Hibiscus Tea",
    tagline: "Helps in Weight Loss",
    price: 349,
    mrp: 449,
    discount: 30,
    image: tulsitea,
  },
  {
    id: "bn4",
    badge: "Best Seller",
    category: "Pantry",
    name: "Hibiscus Tea",
    tagline: "Helps in Weight Loss",
    price: 349,
    mrp: 449,
    discount: 30,
    image: tulsitea,
  },
];

/* ---------------- SHOP BY CATEGORY (green band) ---------------- */
export const shopCategories = [
  { id: "pantry", title: "Pantry Staples", icon: LuWheat },
  { id: "wellness", title: "Wellness", icon: LuLeaf },
  { id: "personal", title: "Personal Care", icon: LuSparkles },
  { id: "teas", title: "Teas & Drinks", icon: LuCupSoda },
];

/* ---------------- COMMUNITY REVIEWS ---------------- */
export const communityReviews = [
  {
    id: "r1",
    rating: 5,
    text: "Taurus Organic has completely transformed my morning routine. The Ashwagandha Gold is a game-changer for my stress levels. Truly premium quality.",
    name: "John Doe",
    location: "From Bangalore",
    avatar:
      "https://organicindia.com/cdn/shop/files/lalit_88x88_crop_center.png?v=1667396537",
  },
  {
    id: "r2",
    rating: 5,
    text: "Taurus Organic has completely transformed my morning routine. The Ashwagandha Gold is a game-changer for my stress levels. Truly premium quality.",
    name: "John Doe",
    location: "From Bangalore",
    avatar:
      "https://organicindia.com/cdn/shop/files/shradhya_88x88_crop_center.png?v=1667394204",
  },
];

/* ---------------- GALLERY ---------------- */
export const galleryImages = [
  "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1602874801007-aa30d89e7a16?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
];

/* ---------------- VALUES STRIP ---------------- */
export const valuesData = [
  {
    id: "natural",
    title: "100% Natural",
    subtitle: "Pure from soil to shelf",
    icon: LuLeaf,
  },
  {
    id: "nochem",
    title: "No Chemicals",
    subtitle: "Zero synthetic fillers or additives",
    icon: LuSparkles,
  },
  {
    id: "ethical",
    title: "Ethically Sourced",
    subtitle: "Direct partnerships with local farmers",
    icon: LuShield,
  },
];

/* ---------------- WELLNESS WISDOM (blog) ---------------- */
export const blogPosts = [
  {
    id: "tulsi",
    title: "BENEFITS OF TULSI",
    excerpt: "Explore why the Queen of Herbs is central to our daily rituals.",
    image:
      "https://organicindia.com/cdn/shop/files/613X630-tulsi-farm-image.png?v=1666268098",
  },
  {
    id: "immunity",
    title: "HOW TO BOOST IMMUNITY NATURALLY",
    excerpt:
      "Simple lifestyle shifts and herbal support for a stronger you.",
    image:
      "https://organicindia.com/cdn/shop/files/Section-613x630_diabetic_f426302b-2e4b-4e95-983d-71479a1ac0b5.png?v=1668598897",
  },
];
