import React, { useState, useEffect } from "react";
import { LuLeaf, LuChevronDown, LuChevronUp, LuHeart, LuSearch, LuCheck } from "react-icons/lu";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCatDataHandler } from "../../hooks/useCatDataHandler";
import { productImages } from "../../assets/images";
import { useCart } from "../../context/CartContext";

/* ─────────────── dummy product data for the grid ─────────────── */
const productImageList = [
  productImages.honey,
  productImages.moringa,
  productImages.tulsitea,
  productImages.ghee,
  productImages.tulsigreentea,
  productImages.tulsihoney,
  productImages.amlapowder,
  productImages.triphla,
  productImages.immunity,
  productImages.turmericimmun,
  productImages.lemontea,
  productImages.jaggery,
  productImages.cleanseshake,
  productImages.quinoa,
  productImages.uptan,
  productImages.honey,
];

const generateDummyProducts = (count = 45) => {
  const names = [
    "Hibiscus Tea", "Moringa Powder", "Tulsi Green Tea", "A2 Bilona Ghee",
    "Amla Powder", "Triphala Churna", "Immunity Booster", "Turmeric Latte",
    "Lemon Ginger Tea", "Organic Jaggery", "Cleanse Shake", "Quinoa Seeds",
    "Ashwagandha Powder", "Honey Raw", "Tulsi Honey",
  ];
  const weights = [
    "Organic Weight Loss", "India's Weight Loss", "India's Single Flower",
    "Organic Superfood", "Premium Ayurvedic",
  ];
  const badges = ["ENERGY", "IMMUNITY", "DETOX", "WELLNESS", "VITALITY"];

  return Array.from({ length: count }, (_, i) => ({
    id: `prod-${i + 1}`,
    name: names[i % names.length],
    slug: names[i % names.length].toLowerCase().replace(/\s+/g, "-"),
    weight: weights[i % weights.length],
    badge: badges[i % badges.length],
    image: productImageList[i % productImageList.length],
    price: (200 + Math.floor(Math.random() * 200)).toFixed(2),
    originalPrice: (400 + Math.floor(Math.random() * 200)).toFixed(2),
    discount: Math.floor(20 + Math.random() * 30),
  }));
};

const allProducts = generateDummyProducts(45);

/* ─────────────── reusable checkbox ─────────────── */
const CustomCheckbox = ({ id, label, count, checked, onChange }) => (
  <div className="flex items-center justify-between py-1.5 group">
    <div className="flex items-center gap-2.5 overflow-hidden">
      <div className="relative flex items-center shrink-0">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="peer h-[15px] w-[15px] appearance-none rounded-[3px] border border-gray-300 bg-white checked:border-[#2d5a3d] checked:bg-[#2d5a3d] focus:outline-none transition-all cursor-pointer"
        />
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <label htmlFor={id} className="text-[13px] text-gray-600 cursor-pointer select-none truncate leading-none">
        {label}
      </label>
    </div>
    {count != null && (
      <span className="text-[11px] text-gray-400 bg-gray-100 rounded-full px-1.5 py-0.5 shrink-0 ml-2 font-medium">
        {count}
      </span>
    )}
  </div>
);

/* ─────────────── filter accordion ─────────────── */
const FilterAccordion = ({ title, icon, defaultOpen = true, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 py-4 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between bg-transparent cursor-pointer group"
      >
        <div className="flex items-center gap-2">
          {icon || <LuLeaf className="text-[15px] text-[#6f9071]" />}
          <h4 className="text-[12px] font-bold tracking-[0.08em] text-gray-500 uppercase">
            {title}
          </h4>
        </div>
        {isOpen ? (
          <LuChevronUp className="text-gray-400 text-[15px]" />
        ) : (
          <LuChevronDown className="text-gray-400 text-[15px]" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] mt-3" : "max-h-0"}`}>
        <div className="max-h-48 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
          {children}
        </div>
      </div>
    </div>
  );
};

/* ─────────────── product card ─────────────── */
const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Image area */}
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-[#f8f7f2] block">
        {/* Badge */}
        <span className="absolute top-2.5 left-2.5 z-10 bg-[#2d5a3d] text-white text-[9px] font-bold tracking-wider px-2 py-1 rounded-sm uppercase">
          {product.badge}
        </span>
        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
          className="absolute top-2.5 right-2.5 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all cursor-pointer"
        >
          <LuHeart
            className={`text-[14px] transition-colors ${wishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`}
          />
        </button>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Details */}
      <div className="p-3 pt-2.5 flex flex-col gap-1 flex-1">
        <p className="text-[10px] text-gray-400 font-medium tracking-wide uppercase truncate">
          {product.weight}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-[13.5px] font-semibold text-gray-800 leading-tight line-clamp-1 hover:text-[#2d5a3d] transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price row */}
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-[14px] font-bold text-gray-900">₹ {product.price}</span>
          <span className="text-[11px] text-gray-400 line-through">₹{product.originalPrice}</span>
          <span className="text-[10px] font-semibold text-[#2d5a3d]">({product.discount}% off)</span>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className={`mt-2 w-full text-[11px] font-bold tracking-wider uppercase py-2 rounded cursor-pointer active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5 ${
            added
              ? "bg-emerald-600 text-white"
              : "bg-[#2d5a3d] text-white hover:bg-[#1e4230]"
          }`}
        >
          {added ? <><LuCheck className="text-[13px]" /> Added</> : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
const ProductList = () => {
  const { categoryData, goalData, wellnessData } = useCatDataHandler();
  const { categorySlug, subCategorySlug } = useParams();

  const [filters, setFilters] = useState({
    category: [],
    subCategory: [],
    goal: [],
    goalSubCategory: [],
    wellness: [],
    wellnessSubCategory: [],
    priceRange: [],
    ingredients: [],
    dietary: [],
  });

  const [expanded, setExpanded] = useState({});
  const [sortBy, setSortBy] = useState("Recommended");
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(16);

  useEffect(() => {
    if (categorySlug) {
      setFilters((prev) => ({ ...prev, category: [categorySlug] }));
      setExpanded((prev) => ({ ...prev, [categorySlug]: true }));
    }
    if (subCategorySlug) {
      setFilters((prev) => ({ ...prev, subCategory: [subCategorySlug] }));
    }
  }, [categorySlug, subCategorySlug]);

  const toggleFilter = (group, value) => {
    setFilters((prev) => {
      const exists = prev[group].includes(value);
      return {
        ...prev,
        [group]: exists
          ? prev[group].filter((item) => item !== value)
          : [...prev[group], value],
      };
    });
  };

  const toggleAccordion = (slug) => {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const clearAllFilters = () => {
    setFilters({
      category: [],
      subCategory: [],
      goal: [],
      goalSubCategory: [],
      wellness: [],
      wellnessSubCategory: [],
      priceRange: [],
      ingredients: [],
      dietary: [],
    });
    setExpanded({});
  };

  /* Static filter data matching the design */
  const priceRanges = [
    { id: "0-500", label: "₹ 500" },
    { id: "500-1000", label: "₹ 500 - ₹1000" },
    { id: "1000-1500", label: "₹1000 - ₹1500" },
    { id: "1500-2000", label: "₹1500 - ₹2000" },
    { id: "2000+", label: "₹2000 & More" },
  ];

  const ingredients = [
    { id: "ashwagandha", label: "Ashwagandha" },
    { id: "amla", label: "Amla" },
    { id: "hibiscus", label: "Hibiscus" },
    { id: "moringa", label: "Moringa" },
  ];

  const dietaryPrefs = [
    { id: "nut-free", label: "Nut Free" },
    { id: "dairy-free", label: "Dairy Free" },
    { id: "gluten-free", label: "Gluten Free" },
    { id: "sugar-free", label: "Sugar Free" },
    { id: "keto-free", label: "Keto Free" },
    { id: "vegan", label: "Vegan" },
  ];

  const tabs = ["All", "Ayurvedic Powders", "Superfoods", "Wellness", "Dietary"];

  const visibleProducts = allProducts.slice(0, visibleCount);

  /* Determine page title from route */
  const pageTitle = categorySlug
    ? categorySlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Immunity Support";

  return (
    <div className="w-full bg-white min-h-screen font-body">
      {/* ─── Breadcrumb ─── */}
      <div className="w-full border-b border-gray-100 bg-[#fafaf8]">
        <div className="max-w-[1340px] mx-auto px-6 py-3">
          <nav className="flex items-center gap-1.5 text-[12px] text-gray-400">
            <Link to="/" className="hover:text-[#2d5a3d] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#2d5a3d] transition-colors">Shop by Goal</Link>
            <span>/</span>
            <span className="text-gray-600 font-medium">{pageTitle}</span>
          </nav>
        </div>
      </div>

      {/* ─── Page Header ─── */}
      <div className="max-w-[1340px] mx-auto px-6 pt-5 pb-2">
        <h1 className="text-2xl font-bold text-gray-900 font-heading">{pageTitle}</h1>
        <p className="text-[13px] text-gray-400 mt-1">
          Natural Products to strengthen your Immunity and daily wellness.
        </p>
      </div>

      {/* ─── Main Content Area ─── */}
      <div className="max-w-[1340px] mx-auto px-6 pb-12 flex gap-6">
        {/* ═══════ LEFT SIDEBAR ═══════ */}
        <aside className="w-[260px] shrink-0 sticky top-4 self-start">
          {/* Filter header */}
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <h5 className="text-[13px] font-bold text-gray-700 tracking-wider uppercase">
              Filters
            </h5>
            <button
              onClick={clearAllFilters}
              className="text-[11px] font-semibold text-[#2d5a3d] uppercase tracking-wide hover:underline cursor-pointer"
            >
              Clear All
            </button>
          </div>

          {/* ── Category filter ── */}
          <FilterAccordion title="Category" defaultOpen={true}>
            {categoryData.map((cat) => (
              <div key={cat.slug}>
                <div className="flex items-center justify-between">
                  <CustomCheckbox
                    id={cat.slug}
                    label={cat.name}
                    checked={filters.category.includes(cat.slug)}
                    onChange={() => {
                      toggleFilter("category", cat.slug);
                      setExpanded((prev) => ({ ...prev, [cat.slug]: true }));
                    }}
                  />
                  {cat.subcategories?.length > 0 && (
                    <button
                      onClick={() => toggleAccordion(cat.slug)}
                      className="p-0.5 cursor-pointer text-gray-400 hover:text-gray-600"
                    >
                      {expanded[cat.slug] ? (
                        <LuChevronUp className="text-[13px]" />
                      ) : (
                        <LuChevronDown className="text-[13px]" />
                      )}
                    </button>
                  )}
                </div>
                {expanded[cat.slug] && (
                  <div className="ml-5 border-l border-gray-100 pl-3">
                    {cat.subcategories?.map((sub) => (
                      <CustomCheckbox
                        key={sub.slug}
                        id={sub.slug}
                        label={sub.name}
                        checked={filters.subCategory.includes(sub.slug)}
                        onChange={() => toggleFilter("subCategory", sub.slug)}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </FilterAccordion>

          {/* ── Goal filter ── */}
          <FilterAccordion title="Goal">
            {goalData.map((goal) => (
              <div key={goal.slug}>
                <div className="flex items-center justify-between">
                  <CustomCheckbox
                    id={goal.slug}
                    label={goal.name}
                    checked={filters.goal.includes(goal.slug)}
                    onChange={() => {
                      toggleFilter("goal", goal.slug);
                      setExpanded((prev) => ({ ...prev, [goal.slug]: true }));
                    }}
                  />
                  {goal.items?.length > 0 && (
                    <button
                      onClick={() => toggleAccordion(goal.slug)}
                      className="p-0.5 cursor-pointer text-gray-400 hover:text-gray-600"
                    >
                      {expanded[goal.slug] ? (
                        <LuChevronUp className="text-[13px]" />
                      ) : (
                        <LuChevronDown className="text-[13px]" />
                      )}
                    </button>
                  )}
                </div>
                {expanded[goal.slug] && (
                  <div className="ml-5 border-l border-gray-100 pl-3">
                    {goal.items?.map((sub) => (
                      <CustomCheckbox
                        key={sub.slug}
                        id={sub.slug}
                        label={sub.name}
                        checked={filters.goalSubCategory.includes(sub.slug)}
                        onChange={() => toggleFilter("goalSubCategory", sub.slug)}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </FilterAccordion>

          {/* ── Price Range ── */}
          <FilterAccordion title="Price Range">
            {priceRanges.map((range) => (
              <CustomCheckbox
                key={range.id}
                id={range.id}
                label={range.label}
                checked={filters.priceRange.includes(range.id)}
                onChange={() => toggleFilter("priceRange", range.id)}
              />
            ))}
          </FilterAccordion>

          {/* ── Ingredients ── */}
          <FilterAccordion title="Ingredients">
            {ingredients.map((ing) => (
              <CustomCheckbox
                key={ing.id}
                id={ing.id}
                label={ing.label}
                checked={filters.ingredients.includes(ing.id)}
                onChange={() => toggleFilter("ingredients", ing.id)}
              />
            ))}
          </FilterAccordion>

          {/* ── Dietary Preference ── */}
          <FilterAccordion title="Dietary Preference">
            {dietaryPrefs.map((pref) => (
              <CustomCheckbox
                key={pref.id}
                id={pref.id}
                label={pref.label}
                checked={filters.dietary.includes(pref.id)}
                onChange={() => toggleFilter("dietary", pref.id)}
              />
            ))}
          </FilterAccordion>

          {/* ── Wellness filter ── */}
          <FilterAccordion title="Wellness">
            {wellnessData.map((wellness) => (
              <div key={wellness.slug}>
                <div className="flex items-center justify-between">
                  <CustomCheckbox
                    id={wellness.slug}
                    label={wellness.name}
                    checked={filters.wellness.includes(wellness.slug)}
                    onChange={() => {
                      toggleFilter("wellness", wellness.slug);
                      setExpanded((prev) => ({ ...prev, [wellness.slug]: true }));
                    }}
                  />
                  {wellness.items?.length > 0 && (
                    <button
                      onClick={() => toggleAccordion(wellness.slug)}
                      className="p-0.5 cursor-pointer text-gray-400 hover:text-gray-600"
                    >
                      {expanded[wellness.slug] ? (
                        <LuChevronUp className="text-[13px]" />
                      ) : (
                        <LuChevronDown className="text-[13px]" />
                      )}
                    </button>
                  )}
                </div>
                {expanded[wellness.slug] && (
                  <div className="ml-5 border-l border-gray-100 pl-3">
                    {wellness.items?.map((sub) => (
                      <CustomCheckbox
                        key={sub.slug}
                        id={sub.slug}
                        label={sub.name}
                        checked={filters.wellnessSubCategory.includes(sub.slug)}
                        onChange={() => toggleFilter("wellnessSubCategory", sub.slug)}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </FilterAccordion>
        </aside>

        {/* ═══════ RIGHT CONTENT ═══════ */}
        <div className="flex-1 min-w-0">
          {/* Top bar: product count + sort + tabs */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100 mb-4">
            <p className="text-[12px] text-gray-400">
              Showing <span className="font-semibold text-gray-600">{allProducts.length}</span> products in {pageTitle.toLowerCase()}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-gray-400">Sort By :</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-md px-3 py-1.5 pr-7 text-[12px] text-gray-700 font-medium cursor-pointer focus:outline-none focus:border-[#2d5a3d]"
                >
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Popularity</option>
                </select>
                <LuChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-[12px] text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Tab filters */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer border ${
                  activeTab === tab
                    ? "bg-[#2d5a3d] text-white border-[#2d5a3d]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#2d5a3d] hover:text-[#2d5a3d]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Grid — 4 columns */}
          <div className="grid grid-cols-4 gap-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom: count + show more */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-100">
            <p className="text-[13px] text-gray-400">
              Showing <span className="font-semibold text-gray-600">{visibleCount}</span> of{" "}
              <span className="font-semibold text-gray-600">{allProducts.length}</span> Products
            </p>
            {visibleCount < allProducts.length && (
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 16, allProducts.length))}
                className="px-5 py-2 border border-gray-300 rounded text-[12px] font-semibold text-gray-600 uppercase tracking-wider hover:border-[#2d5a3d] hover:text-[#2d5a3d] transition-all cursor-pointer"
              >
                Show More Products
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;