import React from "react";
import { valuesData } from "../../../constants/homeDesignData";

const ValuesStrip = () => {
  return (
    <section className="w-full bg-cream/50 py-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {valuesData.map(({ id, title, subtitle, icon: Icon }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center gap-2"
          >
            <Icon className="text-3xl text-brand" />
            <h3 className="text-base font-semibold text-zinc-800 font-heading">
              {title}
            </h3>
            <p className="text-sm text-zinc-500 font-body">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesStrip;
