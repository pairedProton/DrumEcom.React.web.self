import React from "react";
import { LuHeart } from "react-icons/lu";

const DesignProductCard = ({ product }) => {
  const { badge, category, name, tagline, price, mrp, discount, image } =
    product;

  return (
    <div className="flex flex-col bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative bg-cream/60 p-4 flex items-center justify-center h-48">
        {badge && (
          <span className="absolute top-3 left-3 bg-brand text-white text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded">
            {badge}
          </span>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-zinc-500 hover:text-brand shadow-sm transition-colors">
          <LuHeart className="text-base" />
        </button>
        <img
          src={image}
          alt={name}
          className="h-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1.5 p-4">
        <span className="text-[11px] uppercase tracking-wide text-zinc-400 font-body">
          {category}
        </span>
        <h3 className="text-base font-semibold text-zinc-800 font-heading leading-tight">
          {name}
        </h3>
        <p className="text-xs text-zinc-500 font-body">{tagline}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-semibold text-zinc-800 font-heading">
            ₹{price.toFixed(2)}
          </span>
          <span className="text-xs line-through text-zinc-400 font-body">
            ₹{mrp.toFixed(2)}
          </span>
          <span className="text-xs font-semibold text-brand font-body">
            ({discount}% Off)
          </span>
        </div>
        <button className="mt-3 w-full bg-brand text-white text-sm font-semibold font-heading py-2.5 rounded-md hover:bg-brand-dark transition-colors">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default DesignProductCard;
