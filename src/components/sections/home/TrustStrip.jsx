import React from "react";
import { trustItems } from "../../../constants/homeDesignData";

const TrustStrip = () => {
  return (
    <section className="w-full bg-brand text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-4 flex items-center justify-center md:justify-around flex-wrap gap-x-12 gap-y-3">
        {trustItems.map(({ id, label, icon: Icon }) => (
          <div key={id} className="flex items-center gap-2 text-sm font-body">
            <Icon className="text-lg text-white/90" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
