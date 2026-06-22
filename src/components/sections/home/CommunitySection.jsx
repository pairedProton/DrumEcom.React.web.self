import React from "react";
import { LuStar } from "react-icons/lu";
import SectionHeader from "../../ui/SectionHeader";
import { communityReviews } from "../../../constants/homeDesignData";

const CommunitySection = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-4">
      <SectionHeader title="What our community says" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {communityReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl border border-zinc-100 shadow-sm p-6 flex flex-col gap-4"
          >
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: review.rating }).map((_, i) => (
                <LuStar key={i} className="fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <p className="text-sm text-zinc-600 font-body leading-relaxed">
              “{review.text}”
            </p>
            <div className="flex items-center gap-3 mt-2">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-800 font-heading">
                  {review.name}
                </span>
                <span className="text-xs text-zinc-400 font-body">
                  {review.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;
