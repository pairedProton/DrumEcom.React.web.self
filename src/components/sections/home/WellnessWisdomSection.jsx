import React from "react";
import { LuArrowRight } from "react-icons/lu";
import SectionHeader from "../../ui/SectionHeader";
import { blogPosts } from "../../../constants/homeDesignData";

const WellnessWisdomSection = () => {
  return (
    <section className="w-full bg-cream/40 py-10 md:py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader title="Wellness Wisdom" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex gap-4 bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden p-3"
            >
              <div className="w-28 h-24 shrink-0 rounded-lg overflow-hidden bg-cream">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-1.5 pr-2">
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand font-heading">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-500 font-body leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-1 text-xs font-semibold text-zinc-800 font-body hover:text-brand transition-colors">
                  Learn More <LuArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessWisdomSection;
