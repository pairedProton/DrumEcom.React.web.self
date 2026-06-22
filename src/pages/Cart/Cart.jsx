import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuMinus,
  LuPlus,
  LuTrash2,
  LuHeart,
  LuShieldCheck,
  LuCheck,
  LuArrowRight,
  LuTag,
} from "react-icons/lu";
import { useCart } from "../../context/CartContext";
import { productImages } from "../../assets/images";

/* ──────── related products for "You May Also Like" ──────── */
const relatedProducts = [
  { id: "rp1", name: "Hibiscus Tea", slug: "hibiscus-tea", weight: "India's Weight Loss", image: productImages.honey, price: "349.00", originalPrice: "549.00", discount: 36, badge: "ENERGY" },
  { id: "rp2", name: "Hibiscus Tea", slug: "hibiscus-tea-2", weight: "India's Weight Loss", image: productImages.moringa, price: "349.00", originalPrice: "549.00", discount: 36, badge: "IMMUNITY" },
  { id: "rp3", name: "Hibiscus Tea", slug: "hibiscus-tea-3", weight: "India's Weight Loss", image: productImages.tulsitea, price: "349.00", originalPrice: "549.00", discount: 36, badge: "DETOX" },
  { id: "rp4", name: "Hibiscus Tea", slug: "hibiscus-tea-4", weight: "India's Weight Loss", image: productImages.ghee, price: "349.00", originalPrice: "549.00", discount: 36, badge: "WELLNESS" },
  { id: "rp5", name: "Hibiscus Tea", slug: "hibiscus-tea-5", weight: "India's Weight Loss", image: productImages.tulsigreentea, price: "349.00", originalPrice: "549.00", discount: 36, badge: "VITALITY" },
];

/* ──────── Stepper component for progress ──────── */
const CartStepper = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "Cart" },
    { id: 2, label: "Address" },
    { id: 3, label: "Payment" },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-6">
      {steps.map((step, i) => (
        <React.Fragment key={step.id}>
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors ${
                step.id <= currentStep
                  ? "bg-[#2d5a3d] text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {step.id < currentStep ? (
                <LuCheck className="text-[13px]" />
              ) : (
                step.id
              )}
            </div>
            <span
              className={`text-[12px] font-medium ${
                step.id <= currentStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-20 h-px mx-3 ${
                step.id < currentStep ? "bg-[#2d5a3d]" : "bg-gray-200"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

/* ──────── Cart Item Row ──────── */
const CartItem = ({ item, onUpdateQty, onRemove, onMoveToWishlist }) => (
  <div className="flex gap-5 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
    {/* Image */}
    <Link to={`/product/${item.slug}`} className="shrink-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 rounded-lg object-cover hover:scale-105 transition-transform"
      />
    </Link>

    {/* Info */}
    <div className="flex-1 flex flex-col justify-between min-w-0">
      <div>
        <Link
          to={`/product/${item.slug}`}
          className="text-[15px] font-semibold text-gray-800 hover:text-[#2d5a3d] transition-colors"
        >
          {item.name}
        </Link>
        <p className="text-[11px] text-gray-400 mt-0.5">{item.weight}</p>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => onUpdateQty(item.id, item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <LuMinus className="text-[12px]" />
          </button>
          <span className="w-8 h-8 flex items-center justify-center text-[13px] font-semibold text-gray-800 border-x border-gray-200 bg-[#f8f7f2]">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQty(item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <LuPlus className="text-[12px]" />
          </button>
        </div>

        <button
          onClick={() => onMoveToWishlist(item.id)}
          className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#2d5a3d] transition-colors cursor-pointer"
        >
          <LuHeart className="text-[12px]" />
          Move to Wishlist
        </button>

        <button
          onClick={() => onRemove(item.id)}
          className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
        >
          <LuTrash2 className="text-[12px]" />
          Delete
        </button>
      </div>
    </div>

    {/* Price */}
    <div className="text-right shrink-0 flex flex-col items-end justify-center">
      <span className="text-[16px] font-bold text-gray-900">
        ₹ {(item.price * item.quantity).toFixed(2)}
      </span>
      {item.originalPrice > item.price && (
        <>
          <span className="text-[11px] text-gray-400 line-through">
            ₹ {(item.originalPrice * item.quantity).toFixed(2)}
          </span>
          <span className="text-[10px] font-semibold text-[#2d5a3d] mt-0.5">
            ({item.discount || Math.round((1 - item.price / item.originalPrice) * 100)}% off)
          </span>
        </>
      )}
    </div>
  </div>
);

/* ──────── Mini Product Card ──────── */
const MiniCard = ({ product }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col group">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-[#f8f7f2] block">
        <span className="absolute top-2 left-2 z-10 bg-[#2d5a3d] text-white text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded-sm uppercase">
          {product.badge}
        </span>
        <button className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-white/80 cursor-pointer">
          <LuHeart className="text-[11px] text-gray-400" />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-2.5 flex flex-col gap-0.5">
        <p className="text-[9px] text-gray-400 font-medium tracking-wide uppercase truncate">
          {product.weight}
        </p>
        <h3 className="text-[12px] font-semibold text-gray-800 leading-tight">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-[13px] font-bold text-gray-900">₹ {product.price}</span>
          <span className="text-[10px] text-gray-400 line-through">
            ₹{product.originalPrice}
          </span>
          <span className="text-[9px] font-semibold text-[#2d5a3d]">
            ({product.discount}% off)
          </span>
        </div>
        <button
          onClick={handleAdd}
          className={`mt-1.5 w-full text-[10px] font-bold tracking-wider uppercase py-1.5 rounded cursor-pointer transition-all duration-200 flex items-center justify-center gap-1 ${
            added
              ? "bg-emerald-600 text-white"
              : "bg-[#2d5a3d] text-white hover:bg-[#1e4230]"
          }`}
        >
          {added ? (
            <>
              <LuCheck className="text-[11px]" /> Added
            </>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN CART PAGE
   ═══════════════════════════════════════════════ */
const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    totalItems,
    subtotal,
    totalOriginal,
    couponDiscount,
    shipping,
    gst,
    total,
  } = useCart();

  const [couponCode, setCouponCode] = useState("");

  const handleMoveToWishlist = (id) => {
    /* For now, just remove from cart */
    removeFromCart(id);
  };

  /* ── Empty cart state ── */
  if (cartItems.length === 0) {
    return (
      <div className="w-full bg-white min-h-screen font-body">
        {/* Breadcrumb */}
        <div className="w-full border-b border-gray-100 bg-[#fafaf8]">
          <div className="max-w-[1280px] mx-auto px-6 py-3">
            <nav className="flex items-center gap-1.5 text-[12px] text-gray-400">
              <Link to="/" className="hover:text-[#2d5a3d] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-600 font-medium">Cart</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-full bg-[#e8f0e8] flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-[#2d5a3d]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 font-heading mb-2">
            Your cart is empty
          </h2>
          <p className="text-[13px] text-gray-400 mb-6 max-w-md">
            Looks like you haven't added any products yet. Explore our organic
            collection and find something you love!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#2d5a3d] text-white text-[13px] font-bold tracking-wider uppercase px-6 py-3 rounded-lg hover:bg-[#1e4230] transition-all"
          >
            Continue Shopping <LuArrowRight className="text-[14px]" />
          </Link>
        </div>
      </div>
    );
  }

  const savingsAmount = (totalOriginal - subtotal).toFixed(2);

  return (
    <div className="w-full bg-white min-h-screen font-body">
      {/* ─── Breadcrumb ─── */}
      <div className="w-full border-b border-gray-100 bg-[#fafaf8]">
        <div className="max-w-[1280px] mx-auto px-6 py-3">
          <nav className="flex items-center gap-1.5 text-[12px] text-gray-400">
            <Link
              to="/"
              className="hover:text-[#2d5a3d] transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-600 font-medium">Cart</span>
          </nav>
        </div>
      </div>

      {/* ─── Page Header + Stepper ─── */}
      <div className="max-w-[1280px] mx-auto px-6 pt-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-900 font-heading">
            Cart
          </h1>
          <span className="text-[13px] text-[#2d5a3d] font-semibold">
            {totalItems} {totalItems === 1 ? "Item" : "Items"}
          </span>
        </div>
        <CartStepper currentStep={1} />
      </div>

      {/* ─── Main Content ─── */}
      <div className="max-w-[1280px] mx-auto px-6 pb-12">
        <div className="flex gap-6 items-start">
          {/* ═══ Left: Cart Items ═══ */}
          <div className="flex-1 flex flex-col gap-3">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQty={updateQuantity}
                onRemove={removeFromCart}
                onMoveToWishlist={handleMoveToWishlist}
              />
            ))}

            {/* Add more from wishlist */}
            <button className="flex items-center gap-2 text-[12px] text-gray-400 hover:text-[#2d5a3d] py-3 border-t border-dashed border-gray-200 mt-1 cursor-pointer transition-colors">
              <LuHeart className="text-[14px]" />
              ADD MORE FROM WISHLIST
            </button>
          </div>

          {/* ═══ Right: Order Summary ═══ */}
          <div className="w-[360px] shrink-0 sticky top-4">
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-800 mb-4">
                Order Summary
              </h3>

              {/* Summary rows */}
              <div className="space-y-2.5 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-gray-500">Items</span>
                  <span className="text-gray-700 font-medium">
                    {totalItems}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Item MRP</span>
                  <span className="text-gray-700 font-medium">
                    ₹ {totalOriginal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Product Discount</span>
                  <span className="text-[#2d5a3d] font-medium">
                    − ₹ {savingsAmount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Coupon Discount</span>
                  <span className="text-gray-700 font-medium">
                    ₹ {couponDiscount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className={`font-medium ${shipping === 0 ? "text-[#2d5a3d]" : "text-gray-700"}`}>
                    {shipping === 0 ? "FREE" : `₹ ${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">GST / Tax</span>
                  <span className="text-gray-700 font-medium">
                    ₹ {gst.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-4 border-gray-100" />

              {/* Offers & Rewards */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">
                  Offers & Rewards
                </span>
                <button className="text-[11px] text-[#2d5a3d] font-semibold cursor-pointer hover:underline">
                  Apply All Coupons →
                </button>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-3 border-t border-gray-200">
                <span className="text-[15px] font-bold text-gray-800 uppercase tracking-wide">
                  Total
                </span>
                <span className="text-xl font-bold text-gray-900">
                  ₹ {total.toFixed(2)}
                </span>
              </div>

              {/* Proceed to Checkout */}
              <Link
                to="/checkout"
                className="mt-3 w-full bg-[#2d5a3d] text-white text-[13px] font-bold tracking-wider uppercase py-3.5 rounded-lg cursor-pointer hover:bg-[#1e4230] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <LuArrowRight className="text-[14px]" />
              </Link>

              {/* Continue Shopping */}
              <Link
                to="/products"
                className="mt-2 w-full text-[12px] font-semibold text-[#2d5a3d] uppercase tracking-wider py-2 flex items-center justify-center hover:underline"
              >
                Continue Shopping
              </Link>

              {/* Savings banner */}
              {parseFloat(savingsAmount) > 0 && (
                <div className="mt-3 flex items-center gap-2 p-3 bg-[#e8f0e8] rounded-lg">
                  <LuTag className="text-[#2d5a3d] text-[14px] shrink-0" />
                  <p className="text-[11px] text-[#2d5a3d] font-medium leading-snug">
                    Yoho! You are saving <strong>₹ {savingsAmount}</strong> on this order.
                    Complete payment to grab this deal!
                  </p>
                </div>
              )}

              {/* Trust badge */}
              <div className="mt-3 flex items-center gap-2 text-[10px] text-gray-400">
                <LuShieldCheck className="text-[#2d5a3d] text-[14px] shrink-0" />
                <span>Safe & Secure Payments · 100% Authentic Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ You May Also Like ═══ */}
      <section className="bg-[#fafaf8] border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-800 font-heading">
              You May Also Like
            </h2>
            <Link
              to="/products"
              className="text-[12px] text-[#2d5a3d] font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {relatedProducts.map((rp) => (
              <MiniCard key={rp.id} product={rp} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;