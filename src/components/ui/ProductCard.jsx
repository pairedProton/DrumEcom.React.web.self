import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className="productCard w-58 h-auto flex flex-col gap-4 justify-between items-start shrink-0 bg-white p-4 rounded-xl">
      <div className="productImage w-full h-auto">
        <img
          src={item.image}
          className="w-full h-auto object-cover object-center rounded-md"
          alt=""
        />
      </div>
      <div className="productDetails w-full h-auto flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-emerald-700 font-heading ">
          {item.name}
        </h3>
        <div className="productPriceSec flex gap-2">
          <p className="text-md font-semibold  font-heading text-zinc-800">
            {item.price}
          </p>
          <p className="text-sm font-semibold line-through text-gray-500 font-heading self-center">
            {item.salePrice}
          </p>
        </div>
        <div className="productButton">
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-md font-semibold font-heading w-full  hover:bg-emerald-800 transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard