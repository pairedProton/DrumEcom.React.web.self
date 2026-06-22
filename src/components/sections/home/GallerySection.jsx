import React from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { galleryImages } from "../../../constants/homeDesignData";

const GallerySection = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="aspect-[3/4] overflow-hidden rounded-xl bg-cream"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-end gap-3">
        <button className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500 hover:border-brand hover:text-brand transition-colors">
          <LuArrowLeft />
        </button>
        <button className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500 hover:border-brand hover:text-brand transition-colors">
          <LuArrowRight />
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
