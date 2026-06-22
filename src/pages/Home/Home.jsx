import React from "react";
import HeroSection from "../../components/sections/home/HeroSection";
import ShopByGoalSection from "../../components/sections/home/ShopByGoalSection";
import TrustStrip from "../../components/sections/home/TrustStrip";
import ProductShowcase from "../../components/sections/home/ProductShowcase";
import ShopByCategoryGreen from "../../components/sections/home/ShopByCategoryGreen";
import CommunitySection from "../../components/sections/home/CommunitySection";
import GallerySection from "../../components/sections/home/GallerySection";
import ValuesStrip from "../../components/sections/home/ValuesStrip";
import WellnessWisdomSection from "../../components/sections/home/WellnessWisdomSection";
import {
  bestsellerProducts,
  bundleProducts,
} from "../../constants/homeDesignData";

const Home = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <HeroSection />
      <ShopByGoalSection />
      <TrustStrip />
      <ProductShowcase title="Our Bestseller" products={bestsellerProducts} />
      <ProductShowcase
        title="Bundles & Gift Sets"
        subtitle="Complete kits curated for you."
        products={bundleProducts}
      />
      <ShopByCategoryGreen />
      <CommunitySection />
      <GallerySection />
      <ValuesStrip />
      <WellnessWisdomSection />
    </div>
  );
};

export default Home;
