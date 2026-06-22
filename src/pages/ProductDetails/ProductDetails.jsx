import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  LuStar,
  LuHeart,
  LuMinus,
  LuPlus,
  LuChevronLeft,
  LuChevronRight,
  LuShieldCheck,
  LuTruck,
  LuLeaf,
  LuRecycle,
  LuDroplets,
  LuFlame,
  LuCheck,
} from "react-icons/lu";
import { productImages } from "../../assets/images";
import { useReviews } from "../../hooks/useReviews";
import { useCart } from "../../context/CartContext";

/* ──────── product images for thumbnails ──────── */
const productImageList = [
  productImages.honey,
  productImages.moringa,
  productImages.tulsitea,
  productImages.ghee,
  productImages.tulsigreentea,
  productImages.tulsihoney,
];

/* ──────── mock product data ──────── */
const mockProduct = {
  name: "Hibiscus Tea",
  slug: "hibiscus-tea",
  tagline:
    "A premium, handcrafted blend of organic hibiscus flowers sourced from the fertile fields of Himalayan farms. Our single‑origin tea is sun‑dried to perfection for a rich, vibrant infusion.",
  rating: 4.5,
  reviewCount: 42,
  price: 348.0,
  originalPrice: 549.0,
  discount: 37,
  weight: "100g",
  variants: ["50g", "100g", "250g"],
  images: [
    productImages.honey,
    productImages.tulsitea,
    productImages.moringa,
    productImages.ghee,
    productImages.tulsigreentea,
  ],
  badges: [
    { icon: "organic", label: "100% Organic" },
    { icon: "ship", label: "Free Shipping 500+" },
    { icon: "natural", label: "Purely Natural" },
    { icon: "recycle", label: "Eco Packaging" },
  ],
  description: `Taurus Organic's Hibiscus Tea is a perfectly balanced, naturally fragrant herbal tea made from 100% pure, sun-dried hibiscus petals. Sourced from certified organic farms across South India, Rajasthan, and the Himalayan foothills, every flower is handpicked at peak bloom. This ensures the highest concentration of vitamin C, antioxidants, and anthocyanins — the very compounds that give our tea its signature deep crimson color and its tangy, slightly sweet flavor profile. Rich in polyphenols and completely caffeine-free, Hibiscus Tea is a naturally revitalizing drink for any time of day. It helps support cardiovascular health, lower blood pressure, and promote healthy skin. Whether you steep it hot or cold-brew it overnight, the result is always a gorgeous ruby cup of pure well-being.`,
  howToUse: [
    "Boil 200ml of fresh water and let it cool for 30 seconds.",
    "Add 1 teaspoon of hibiscus tea into an infuser or cup.",
    "Pour the water over the tea and steep for 5-7 minutes.",
    "Strain, add honey or lemon to taste, and enjoy hot or iced.",
  ],
  ingredients: [
    "100% Organic Hibiscus Sabdariffa Petals",
    "No artificial colors, flavors, or preservatives",
  ],
  features: [
    { icon: "heart", title: "Heart Health", desc: "Supports healthy blood pressure & cholesterol" },
    { icon: "leaf", title: "Rich Antioxidants", desc: "High in vitamin C and polyphenols" },
    { icon: "drop", title: "Caffeine Free", desc: "Enjoy anytime without jitters" },
    { icon: "flame", title: "Metabolism Boost", desc: "Naturally supports weight management" },
  ],
};

/* ──────── "You May Also Like" products ──────── */
const relatedProducts = [
  { id: "r1", name: "Hibiscus Tea", slug: "hibiscus-tea", weight: "Organic Single Flower", image: productImages.honey, price: "349.00", originalPrice: "549.00", badge: "ENERGY" },
  { id: "r2", name: "Hibiscus Tea", slug: "hibiscus-tea-2", weight: "India's Single Flower", image: productImages.moringa, price: "349.00", originalPrice: "549.00", badge: "IMMUNITY" },
  { id: "r3", name: "Hibiscus Tea", slug: "hibiscus-tea-3", weight: "Organic Superfood", image: productImages.tulsitea, price: "349.00", originalPrice: "549.00", badge: "DETOX" },
  { id: "r4", name: "Ashwagandha Tea", slug: "ashwagandha-tea", weight: "Premium Ayurvedic", image: productImages.ghee, price: "399.00", originalPrice: "599.00", badge: "WELLNESS" },
  { id: "r5", name: "Moringa Powder", slug: "moringa-powder", weight: "Organic Superfood", image: productImages.tulsigreentea, price: "299.00", originalPrice: "499.00", badge: "VITALITY" },
];

/* ──────── Star Rating Component ──────── */
const StarRating = ({ rating, size = 14, showCount = false, count = 0 }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <LuStar
        key={star}
        className={`transition-colors ${
          star <= Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : star - 0.5 <= rating
            ? "fill-amber-400/50 text-amber-400"
            : "text-gray-200"
        }`}
        style={{ width: size, height: size }}
      />
    ))}
    {showCount && (
      <span className="text-[12px] text-gray-400 ml-1">
        {rating} · {count} Reviews
      </span>
    )}
  </div>
);

/* ──────── Trust Badge ──────── */
const TrustBadge = ({ icon, label }) => {
  const iconMap = {
    organic: <LuShieldCheck className="text-[18px] text-[#2d5a3d]" />,
    ship: <LuTruck className="text-[18px] text-[#2d5a3d]" />,
    natural: <LuLeaf className="text-[18px] text-[#2d5a3d]" />,
    recycle: <LuRecycle className="text-[18px] text-[#2d5a3d]" />,
  };
  return (
    <div className="flex items-center gap-2 px-3 py-2 border border-gray-100 rounded-lg bg-[#fafaf8]">
      {iconMap[icon] || <LuShieldCheck className="text-[18px] text-[#2d5a3d]" />}
      <span className="text-[11px] text-gray-600 font-medium leading-tight">{label}</span>
    </div>
  );
};

/* ──────── Feature Card ──────── */
const FeatureCard = ({ icon, title, desc }) => {
  const iconMap = {
    heart: <LuShieldCheck className="text-xl text-[#2d5a3d]" />,
    leaf: <LuLeaf className="text-xl text-[#2d5a3d]" />,
    drop: <LuDroplets className="text-xl text-[#2d5a3d]" />,
    flame: <LuFlame className="text-xl text-[#2d5a3d]" />,
  };
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-100 bg-[#fafaf8] hover:shadow-sm transition-shadow">
      <div className="w-10 h-10 rounded-full bg-[#e8f0e8] flex items-center justify-center shrink-0">
        {iconMap[icon]}
      </div>
      <div>
        <h4 className="text-[13px] font-semibold text-gray-800">{title}</h4>
        <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

/* ──────── Mini Product Card (for You May Also Like) ──────── */
const MiniProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col w-full">
      <div className="relative overflow-hidden bg-[#f8f7f2]">
        <span className="absolute top-2 left-2 z-10 bg-[#2d5a3d] text-white text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded-sm uppercase">
          {product.badge}
        </span>
        <img src={product.image} alt={product.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-2.5 flex flex-col gap-0.5">
        <p className="text-[9px] text-gray-400 font-medium tracking-wide uppercase truncate">{product.weight}</p>
        <h3 className="text-[12px] font-semibold text-gray-800 leading-tight">{product.name}</h3>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-[13px] font-bold text-gray-900">₹ {product.price}</span>
          <span className="text-[10px] text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>
        <button
          onClick={handleAdd}
          className={`mt-1.5 w-full text-[10px] font-bold tracking-wider uppercase py-1.5 rounded cursor-pointer transition-all duration-200 flex items-center justify-center gap-1 ${
            added ? "bg-emerald-600 text-white" : "bg-[#2d5a3d] text-white hover:bg-[#1e4230]"
          }`}
        >
          {added ? <><LuCheck className="text-[11px]" /> Added</> : "Add to Cart"}
        </button>
      </div>
    </Link>
  );
};

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
const ProductDetails = () => {
  const { productSlug } = useParams();
  const { reviews } = useReviews();
  const { addToCart } = useCart();
  const product = mockProduct;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.weight);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [wishlisted, setWishlisted] = useState(false);
  const [carouselStart, setCarouselStart] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.slug + "-" + selectedVariant,
      name: product.name,
      slug: product.slug,
      image: product.images[0],
      price: product.price,
      originalPrice: product.originalPrice,
      weight: selectedVariant,
      discount: product.discount,
    }, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const tabs = [
    { id: "details", label: "More Details" },
    { id: "howto", label: "How to Use / Benefits" },
    { id: "faqs", label: "FAQs" },
  ];

  const scrollCarousel = (dir) => {
    if (dir === "left" && carouselStart > 0) setCarouselStart(carouselStart - 1);
    if (dir === "right" && carouselStart < relatedProducts.length - 4) setCarouselStart(carouselStart + 1);
  };

  return (
    <div className="w-full bg-white min-h-screen font-body">
      {/* ─── Breadcrumb ─── */}
      <div className="w-full border-b border-gray-100 bg-[#fafaf8]">
        <div className="max-w-[1280px] mx-auto px-6 py-3">
          <nav className="flex items-center gap-1.5 text-[12px] text-gray-400">
            <Link to="/" className="hover:text-[#2d5a3d] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#2d5a3d] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-600 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ═══════════════════════════════════════
           HERO SECTION
         ═══════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="flex gap-10">
          {/* ── Left: Image Gallery ── */}
          <div className="w-[52%] shrink-0">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden bg-[#f0ede2] aspect-[4/3] mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-opacity duration-300"
              />
              {/* Wishlist button */}
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all cursor-pointer shadow-sm"
              >
                <LuHeart className={`text-[16px] transition-colors ${wishlisted ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2.5">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImage === i ? "border-[#2d5a3d] shadow-md" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: Product Info ── */}
          <div className="flex-1 pt-1">
            {/* Name */}
            <h1 className="text-3xl font-bold text-gray-900 font-heading leading-tight">
              {product.name}
            </h1>

            {/* Tagline */}
            <p className="text-[13px] text-gray-400 mt-2 leading-relaxed max-w-[480px]">
              {product.tagline}
            </p>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <StarRating rating={product.rating} size={16} showCount count={product.reviewCount} />
            </div>

            {/* Divider */}
            <hr className="my-4 border-gray-100" />

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-gray-900">₹ {product.price.toFixed(2)}</span>
              <span className="text-[14px] text-gray-400 line-through">₹{product.originalPrice.toFixed(2)}</span>
              <span className="text-[12px] font-semibold text-[#2d5a3d] bg-[#e8f0e8] px-2 py-0.5 rounded-full">
                {product.discount}% off
              </span>
            </div>

            {/* Variant selector */}
            <div className="mt-5">
              <p className="text-[12px] text-gray-500 font-medium mb-2 uppercase tracking-wide">Select Size</p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 rounded-lg text-[12px] font-medium border transition-all cursor-pointer ${
                      selectedVariant === v
                        ? "bg-[#2d5a3d] text-white border-[#2d5a3d]"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#2d5a3d]"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-5 flex items-center gap-3">
              {/* Qty selector */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <LuMinus className="text-[14px]" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-[14px] font-semibold text-gray-800 border-x border-gray-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <LuPlus className="text-[14px]" />
                </button>
              </div>
              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className={`flex-1 text-[13px] font-bold tracking-wider uppercase py-3 rounded-lg cursor-pointer active:scale-[0.99] transition-all duration-200 shadow-sm flex items-center justify-center gap-2 ${
                  addedToCart ? "bg-emerald-600 text-white" : "bg-[#2d5a3d] text-white hover:bg-[#1e4230]"
                }`}
              >
                {addedToCart ? <><LuCheck className="text-[15px]" /> Added to Cart</> : "Add to Cart"}
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {product.badges.map((b, i) => (
                <TrustBadge key={i} icon={b.icon} label={b.label} />
              ))}
            </div>

            {/* Buy it with */}
            <div className="mt-6 p-4 rounded-lg border border-dashed border-gray-200 bg-[#fafaf8]">
              <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mb-1">
                Bundle & Save
              </p>
              <p className="text-[12px] text-gray-400">
                Add <span className="font-semibold text-[#2d5a3d]">Tulsi Green Tea</span> and save 15% on your order
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           TABS SECTION
         ═══════════════════════════════════════ */}
      <section className="border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-[13px] font-semibold tracking-wide transition-all cursor-pointer border-b-2 ${
                  activeTab === tab.id
                    ? "text-[#2d5a3d] border-[#2d5a3d]"
                    : "text-gray-400 border-transparent hover:text-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === "details" && (
              <div className="max-w-3xl">
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-heading">
                  About {product.name}
                </h3>
                <p className="text-[13px] text-gray-500 leading-[1.8]">{product.description}</p>

                {/* Ingredients */}
                <h4 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Ingredients</h4>
                <ul className="space-y-1.5">
                  {product.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-2 text-[12px] text-gray-500">
                      <LuCheck className="text-[#2d5a3d] text-[12px] shrink-0" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "howto" && (
              <div className="max-w-3xl">
                <h3 className="text-lg font-bold text-gray-800 mb-4 font-heading">How to Use</h3>
                <ol className="space-y-3">
                  {product.howToUse.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#2d5a3d] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-[13px] text-gray-500 leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {activeTab === "faqs" && (
              <div className="max-w-3xl space-y-4">
                <h3 className="text-lg font-bold text-gray-800 mb-4 font-heading">Frequently Asked Questions</h3>
                {[
                  { q: "Is this tea caffeine-free?", a: "Yes, Hibiscus Tea is 100% naturally caffeine-free and safe for consumption at any time of day." },
                  { q: "Can I drink it cold?", a: "Absolutely! Cold-brew overnight in the fridge for a refreshing iced tea." },
                  { q: "How many cups per pack?", a: "The 100g pack yields approximately 50 cups of tea." },
                  { q: "Is this suitable for pregnant women?", a: "We recommend consulting your doctor before consuming herbal teas during pregnancy." },
                ].map((faq, i) => (
                  <div key={i} className="p-4 rounded-lg border border-gray-100 bg-[#fafaf8]">
                    <h4 className="text-[13px] font-semibold text-gray-700">{faq.q}</h4>
                    <p className="text-[12px] text-gray-400 mt-1.5 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           FEATURE CARDS
         ═══════════════════════════════════════ */}
      <section className="bg-[#fafaf8] border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <div className="grid grid-cols-4 gap-4">
            {product.features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           REVIEWS SECTION
         ═══════════════════════════════════════ */}
      <section className="border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <h2 className="text-xl font-bold text-gray-800 font-heading mb-1">
            #Customers Love
          </h2>
          {/* Overall rating */}
          <div className="flex items-center gap-3 mb-6">
            <StarRating rating={product.rating} size={18} />
            <span className="text-[13px] text-gray-400">Based on {product.reviewCount} reviews</span>
          </div>

          {/* Review cards grid */}
          <div className="grid grid-cols-3 gap-5">
            {(reviews || []).slice(0, 3).map((review) => (
              <div key={review.id} className="p-5 rounded-xl border border-gray-100 bg-[#fafaf8] flex flex-col">
                <StarRating rating={5} size={13} />
                <p className="text-[12px] text-gray-500 mt-3 leading-relaxed flex-1 line-clamp-4">
                  "{review.review || review.message}"
                </p>
                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-100">
                  <img
                    src={review.imageUrl || review.image || "https://organicindia.com/cdn/shop/files/lalit_88x88_crop_center.png?v=1667396537"}
                    alt={review.name}
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#2d5a3d]"
                  />
                  <div>
                    <p className="text-[12px] font-semibold text-gray-700">{review.name}</p>
                    <p className="text-[10px] text-gray-400">{review.post}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review navigation dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:border-[#2d5a3d] transition-colors">
              <LuChevronLeft className="text-[14px] text-gray-400" />
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:border-[#2d5a3d] transition-colors">
              <LuChevronRight className="text-[14px] text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           YOU MAY ALSO LIKE
         ═══════════════════════════════════════ */}
      <section className="border-t border-gray-100 bg-[#fafaf8]">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-800 font-heading">You May Also Like</h2>
            <Link to="/products" className="text-[12px] text-[#2d5a3d] font-semibold hover:underline">
              View All →
            </Link>
          </div>

          <div className="relative">
            {/* Carousel arrows */}
            {carouselStart > 0 && (
              <button
                onClick={() => scrollCarousel("left")}
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
              >
                <LuChevronLeft className="text-[16px] text-gray-500" />
              </button>
            )}
            {carouselStart < relatedProducts.length - 4 && (
              <button
                onClick={() => scrollCarousel("right")}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
              >
                <LuChevronRight className="text-[16px] text-gray-500" />
              </button>
            )}

            {/* Cards */}
            <div className="flex gap-4 overflow-hidden">
              {relatedProducts.slice(carouselStart, carouselStart + 4).map((rp) => (
                <div key={rp.id} className="flex-1 min-w-0">
                  <MiniProductCard product={rp} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           TRUST MERIT BADGES
         ═══════════════════════════════════════ */}
      <section className="border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <div className="flex items-center justify-center gap-12">
            {[
              { icon: <LuShieldCheck className="text-2xl text-[#2d5a3d]" />, label: "100% Authentic" },
              { icon: <LuTruck className="text-2xl text-[#2d5a3d]" />, label: "Pan India Delivery" },
              { icon: <LuRecycle className="text-2xl text-[#2d5a3d]" />, label: "Biodegradable Packaging" },
            ].map((merit, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-[#e8f0e8] flex items-center justify-center">
                  {merit.icon}
                </div>
                <span className="text-[11px] text-gray-500 font-medium text-center">{merit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
           WELLNESS WISDOM
         ═══════════════════════════════════════ */}
      <section className="bg-[#2d5a3d]">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white font-heading">Wellness Wisdom</h2>
            <Link to="/products" className="text-[12px] text-white/70 font-semibold hover:text-white transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              {
                img: productImages.moringa,
                title: "BENEFITS OF TULSI",
                desc: "Discover the ancient Ayurvedic herb that boosts immunity, reduces stress, and promotes overall well-being naturally.",
              },
              {
                img: productImages.tulsigreentea,
                title: "HOW TO BOOST YOUR IMMUNITY",
                desc: "Simple daily habits and organic superfoods that can strengthen your immune system and keep you healthy year-round.",
              },
            ].map((post, i) => (
              <div key={i} className="flex gap-5 p-5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors cursor-pointer group">
                <img src={post.img} alt={post.title} className="w-28 h-28 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform" />
                <div className="flex flex-col justify-center">
                  <h3 className="text-[13px] font-bold text-white/90 tracking-wide uppercase">{post.title}</h3>
                  <p className="text-[11px] text-white/60 mt-2 leading-relaxed line-clamp-3">{post.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;