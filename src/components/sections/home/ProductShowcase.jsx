import React from "react";
import SectionHeader from "../../ui/SectionHeader";
import DesignProductCard from "../../ui/DesignProductCard";

const ProductShowcase = ({ title, subtitle, products = [] }) => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-4">
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <DesignProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
