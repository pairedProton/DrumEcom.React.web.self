import React from "react";
import SectionHeader from "../../ui/SectionHeader";
import { goalsData } from "../../../constants/homeDesignData";

const ShopByGoalSection = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-4">
      <SectionHeader
        title="Shop by Goal"
        subtitle="Targeted solutions for your specific wellness journey."
      />
      <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-4">
        {goalsData.map(({ id, title, icon: Icon }) => (
          <button
            key={id}
            className="group flex flex-col items-center rounded-xl overflow-hidden bg-white shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
          >
            <div className="w-full flex justify-center bg-cream pt-5 pb-3">
              <span className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                <Icon />
              </span>
            </div>
            <span className="py-3 text-sm font-medium text-zinc-700 font-body">
              {title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ShopByGoalSection;
