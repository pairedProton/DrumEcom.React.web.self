import React from "react";
import { LuLeaf } from "react-icons/lu";
import { heroData } from "../../../constants/homeDesignData";

const HeroSection = () => {
  const { label, title, subtitle, primaryCta, secondaryCta, products } =
    heroData;

  return (
    <section className="w-full flex flex-col">
      {/* Sage banner with floating products */}
      <div className="relative w-full h-[260px] md:h-[420px] bg-hero overflow-hidden">
        {/* decorative wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-white/40"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64 C360,140 1080,-20 1440,64 L1440,120 L0,120 Z"
          />
        </svg>

        {/* leaf decorations */}
        <LuLeaf className="absolute top-8 left-8 text-brand/30 text-5xl rotate-12" />
        <LuLeaf className="absolute top-10 right-10 text-brand/30 text-6xl -rotate-45" />
        <LuLeaf className="absolute bottom-16 left-1/4 text-brand/20 text-4xl rotate-90" />

        {/* product arrangement */}
        <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 flex items-center justify-center gap-4 md:gap-10">
          {products.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`object-contain drop-shadow-xl ${
                i === 2
                  ? "h-32 md:h-64"
                  : i % 2 === 0
                  ? "h-20 md:h-40 mt-10"
                  : "h-24 md:h-48 -mt-8"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Intro text */}
      <div className="w-full bg-white py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center gap-4">
          <span className="text-[11px] tracking-[0.2em] font-semibold text-zinc-400 font-body">
            {label}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-800 font-heading leading-tight">
            {title}
          </h1>
          <p className="text-sm md:text-base text-zinc-500 font-body max-w-xl">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <button className="bg-brand text-white px-7 py-3 rounded-md text-sm font-semibold font-heading hover:bg-brand-dark transition-colors">
              {primaryCta}
            </button>
            <button className="border border-brand text-brand px-7 py-3 rounded-md text-sm font-semibold font-heading hover:bg-brand hover:text-white transition-colors">
              {secondaryCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
