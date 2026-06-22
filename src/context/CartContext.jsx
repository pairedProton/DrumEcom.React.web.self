import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const STORAGE_KEY = "taurus_cart";

/* Read initial cart from localStorage */
const getInitialCart = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart);

  /* Persist to localStorage whenever cart changes */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  /* ── Add item (or increment if it already exists) ── */
  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          slug: product.slug,
          image: product.image,
          price: parseFloat(product.price),
          originalPrice: parseFloat(product.originalPrice || product.price),
          weight: product.weight || "100g",
          discount: product.discount || 0,
          quantity: qty,
        },
      ];
    });
  };

  /* ── Remove item ── */
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  /* ── Update quantity ── */
  const updateQuantity = (productId, newQty) => {
    if (newQty < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  /* ── Clear entire cart ── */
  const clearCart = () => setCartItems([]);

  /* ── Computed values ── */
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalOriginal = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const couponDiscount = 0;
  const shipping = subtotal >= 500 ? 0 : 49;
  const gst = +(subtotal * 0.05).toFixed(2);
  const total = +(subtotal - couponDiscount + shipping + gst).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        totalOriginal,
        couponDiscount,
        shipping,
        gst,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
