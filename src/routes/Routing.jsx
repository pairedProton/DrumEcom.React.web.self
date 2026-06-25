import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/info/About";
import Terms from "../pages/info/Terms";
import Privacy from "../pages/info/Privacy";
import FAQs from "../pages/info/FAQs";
import TrackOrder from "../pages/info/TrackOrder";
import Contact from "../pages/info/Contact";
import Certifications from "../pages/info/Certifications";

const Routing = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        {/* Shop All Products */}
        <Route path="/products" element={<ProductList />} />

{/* main Categories  */}

        {/* Shop by Category Page */}
        <Route path="/products/category/:categorySlug" element={<ProductList />} />

        {/* Shop Sub-Category Page */}
        <Route
          path="/products/category/:categorySlug/:subCategorySlug"
          element={<ProductList />}
        />
        

{/* wellness Categories  */}


        {/* Shop by Category Page */}
        <Route path="/products/wellness/:categorySlug" element={<ProductList />} />

        {/* Shop Sub-Category Page */}
        <Route
          path="/products/wellness/:categorySlug/:subCategorySlug"
          element={<ProductList />}
        />

    {/* Goal Category */}


        {/* Shop by Category Page */}
        <Route path="/products/goal/:categorySlug" element={<ProductList />} />

        {/* Shop Sub-Category Page */}
        <Route
          path="/products/goal/:categorySlug/:subCategorySlug"
          element={<ProductList />}
        />


        {/* Product Details */}
        <Route path="/product/:productSlug" element={<ProductDetails />} />
        
        {/* Cart */}
        <Route path="/cart" element={<Cart />} />
        
        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Info Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/organic-certification" element={<Certifications />} />
      </Route>
    </Routes>
  );
};

export default Routing;
