import React from "react";
import SectionHeader from "../../ui/SectionHeader";
import { shopCategories } from "../../../constants/homeDesignData";

const ShopByCategoryGreen = () => {
  return (
    <section className="w-full bg-brand py-10 md:py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          title="Shop by Category"
          subtitle="Targeted solutions for your specific wellness journey."
          dark
        />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          {shopCategories.map(({ id, title, icon: Icon }) => (
            <button
              key={id}
              className="group flex flex-col items-center gap-3 bg-cream rounded-xl py-7 hover:bg-white transition-colors"
            >
              <span className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                <Icon />
              </span>
              <span className="text-sm font-medium text-zinc-700 font-body">
                {title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategoryGreen;
