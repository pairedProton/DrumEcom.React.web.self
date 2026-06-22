import React from "react";

const SectionHeader = ({ title, subtitle, viewAll = true, dark = false }) => {
  return (
    <div className="w-full flex items-end justify-between gap-4">
      <div className="flex flex-col gap-1">
        <h2
          className={`text-2xl md:text-3xl font-semibold font-heading ${
            dark ? "text-white" : "text-zinc-800"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-sm font-body ${
              dark ? "text-white/80" : "text-zinc-500"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {viewAll && (
        <button
          className={`text-sm font-body shrink-0 hover:underline underline-offset-4 transition-all ${
            dark ? "text-white/90" : "text-brand"
          }`}
        >
          View All
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
