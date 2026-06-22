import React from "react";
import { Link } from "react-router-dom";
import { LuCheckCircle } from "react-icons/lu";
import { useCart } from "../../context/CartContext";

const OrderSuccess = () => {
  const { cartItems, subtotal, totalOriginal, couponDiscount, shipping, gst, total } = useCart();
  const savingsAmount = (totalOriginal - subtotal).toFixed(2);

  // Generate a random order number for display purposes
  const orderNumber = Math.floor(100000000 + Math.random() * 900000000);
  const today = new Date().toLocaleDateString("en-GB"); // DD/MM/YYYY

  return (
    <div className="w-full bg-white min-h-screen font-body pb-20">
      <div className="max-w-[1000px] mx-auto px-6 pt-12">
        {/* ─── Header Section ─── */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          {/* Illustration Box */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="relative w-24 h-40 border-4 border-gray-800 rounded-3xl flex items-center justify-center bg-white shadow-sm">
              <div className="absolute top-2 w-8 h-1 bg-gray-200 rounded-full"></div>
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <LuCheckCircle className="text-3xl" />
              </div>
            </div>
            {/* Person illustration placeholder (using emoji or simple shape since no actual image asset is provided) */}
            <div className="w-32 h-40 flex items-end justify-center">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-successfully-completed-task-4268351-3560995.png" alt="Success Celebration" className="h-full object-contain" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 font-heading mb-3">
            Thank you for your Purchase!
          </h1>
          <p className="text-[13px] text-gray-500 max-w-lg leading-relaxed">
            Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
          </p>
        </div>

        {/* ─── Order Details Grid ─── */}
        <div className="flex gap-6 items-start">
          {/* Left: Order Summary */}
          <div className="flex-1 bg-[#fafaf8] rounded-xl border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 font-heading mb-6">Order Summary</h2>

            {/* Meta info */}
            <div className="grid grid-cols-3 gap-4 mb-6 text-[11px]">
              <div>
                <p className="text-gray-400 mb-1">Date</p>
                <p className="font-semibold text-gray-800">{today}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Order Number</p>
                <p className="font-semibold text-gray-800">{orderNumber}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Payment Method</p>
                <p className="font-semibold text-gray-800 uppercase">MasterCard</p>
              </div>
            </div>

            {/* Items List */}
            <div className="flex flex-col gap-5 border-y border-gray-200 py-6 mb-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover border border-gray-200 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-bold text-gray-800">{item.name}</h4>
                    </div>
                    <div className="text-[12px] text-gray-500 w-16 text-center">{item.weight}</div>
                    <div className="text-[12px] text-gray-500 w-16 text-center">Qty {item.quantity}</div>
                    <div className="text-[13px] font-medium text-gray-700 w-20 text-right">
                      ₹ {(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))
              ) : (
                /* Fallback if cart is empty but user navigates here directly */
                <div className="text-center text-sm text-gray-500 py-4">No items found in this order.</div>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 text-[12px]">
              <div className="flex justify-between">
                <span className="text-gray-500">Total MRP</span>
                <span className="text-gray-800 font-medium">₹ {totalOriginal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Discount on MRP</span>
                <span className="text-[#2d5a3d] font-medium">− ₹ {savingsAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Coupon Discount</span>
                <span className="text-gray-800 font-medium">₹ {couponDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="text-gray-800 font-medium">
                  {shipping === 0 ? "FREE" : `₹ ${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">GST / Tax</span>
                <span className="text-gray-800 font-medium">₹ {gst.toFixed(2)}</span>
              </div>
            </div>

            {/* Final Total */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
              <span className="text-[14px] font-bold text-gray-800 uppercase tracking-wide">TOTAL</span>
              <span className="text-[16px] font-bold text-gray-900">₹ {total.toFixed(2)}</span>
            </div>
          </div>

          {/* Right: Billing Address */}
          <div className="w-[320px] shrink-0">
            <div className="bg-[#fafaf8] rounded-xl border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 font-heading mb-6">Billing Address</h2>
              
              <div className="space-y-4 text-[12px]">
                <div className="grid grid-cols-[70px_1fr] gap-2">
                  <span className="text-gray-800 font-bold uppercase tracking-wide">NAME</span>
                  <span className="text-gray-600">John Doe</span>
                </div>
                <div className="grid grid-cols-[70px_1fr] gap-2">
                  <span className="text-gray-800 font-bold uppercase tracking-wide">ADDRESS</span>
                  <span className="text-gray-600 leading-relaxed">
                    801, Oak Street, Delhi, India.
                  </span>
                </div>
                <div className="grid grid-cols-[70px_1fr] gap-2">
                  <span className="text-gray-800 font-bold uppercase tracking-wide">PHONE</span>
                  <span className="text-gray-600">+91 9825479999</span>
                </div>
                <div className="grid grid-cols-[70px_1fr] gap-2">
                  <span className="text-gray-800 font-bold uppercase tracking-wide">EMAIL</span>
                  <span className="text-gray-600">johndoe@gmail.com</span>
                </div>
              </div>

              <button className="w-full mt-8 py-3.5 border border-[#2d5a3d] text-[#2d5a3d] text-[12px] font-bold uppercase tracking-wider rounded-lg hover:bg-[#f2f7f4] transition-colors">
                Track Your Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
