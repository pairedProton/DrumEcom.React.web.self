import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@pages/Home/Home"));
const ProductList = lazy(() => import("@pages/ProductList/ProductList"));
const ProductDetails = lazy(() => import("@pages/ProductDetails/ProductDetails"));
const Cart = lazy(() => import("@pages/Cart/Cart"));
const Checkout = lazy(() => import("@pages/Checkout/Checkout"));
const MainLayout = lazy(() => import("@layouts/MainLayout"));
const About = lazy(() => import("@pages/info/About"));
const Terms = lazy(() => import("@pages/info/Terms"));
const Privacy = lazy(() => import("@pages/info/Privacy"));
const FAQs = lazy(() => import("@pages/info/FAQs"));
const TrackOrder = lazy(() => import("@pages/info/TrackOrder"));
const Contact = lazy(() => import("@pages/info/Contact"));
const Certifications = lazy(() => import("@pages/info/Certifications"));

const App = () => {

  const routes = [
    { path: "/", element: <Home /> },

    // Shop All Products
    { path: "/products", element: <ProductList /> },

    // main Categories

    // Shop by Category Page
    { path: "/products/category/:categorySlug", element: <ProductList /> },

    // Shop Sub-Category Page
    { path: "/products/category/:categorySlug/:subCategorySlug", element: <ProductList /> },

    // wellness Categories

    // Shop by Category Page
    { path: "/products/wellness/:categorySlug", element: <ProductList /> },

    // Shop Sub-Category Page
    { path: "/products/wellness/:categorySlug/:subCategorySlug", element: <ProductList /> },

    // Goal Category

    // Shop by Category Page
    { path: "/products/goal/:categorySlug", element: <ProductList /> },

    // Shop Sub-Category Page
    { path: "/products/goal/:categorySlug/:subCategorySlug", element: <ProductList /> },

    // Product Details
    { path: "/product/:productSlug", element: <ProductDetails /> },

    // Cart
    { path: "/cart", element: <Cart /> },

    // Checkout
    { path: "/checkout", element: <Checkout /> },

    // Info Pages
    { path: "/about", element: <About /> },
    { path: "/terms", element: <Terms /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "/faqs", element: <FAQs /> },
    { path: "/track-order", element: <TrackOrder /> },
    { path: "/contact", element: <Contact /> },
    { path: "/organic-certification", element: <Certifications /> },
  ]

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {
          routes?.map((route, index) => <Route key={index} path={route.path} element={route.element} />)
        }
      </Route>
    </Routes>
  );
}

export default App