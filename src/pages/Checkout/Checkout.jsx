import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuCheck,
  LuChevronDown,
  LuChevronUp,
  LuShieldCheck,
  LuCreditCard,
  LuSmartphone,
  LuBanknote,
  LuBuilding,
  LuStar,
} from "react-icons/lu";
import { useCart } from "../../context/CartContext";
import { productImages } from "../../assets/images";

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

/* ──────── Accordion Component ──────── */
const Accordion = ({ title, icon: Icon, children, defaultOpen = false, rightElement }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl border border-gray-100 mb-4 overflow-hidden shadow-sm">
      <div
        className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="text-xl text-[#2d5a3d]" />}
          <h2 className="text-[16px] font-bold text-gray-800 tracking-wide">{title}</h2>
        </div>
        <div className="flex items-center gap-3">
          {rightElement}
          {isOpen ? (
            <LuChevronUp className="text-gray-400" />
          ) : (
            <LuChevronDown className="text-gray-400" />
          )}
        </div>
      </div>
      {isOpen && <div className="px-6 pb-6 border-t border-gray-100 pt-4">{children}</div>}
    </div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN CHECKOUT PAGE
   ═══════════════════════════════════════════════ */
const Checkout = () => {
  const {
    cartItems,
    totalItems,
    subtotal,
    totalOriginal,
    couponDiscount,
    shipping,
    gst,
    total,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("");

  const savingsAmount = (totalOriginal - subtotal).toFixed(2);

  return (
    <div className="w-full bg-white min-h-screen font-body pb-16">
      {/* ─── Breadcrumb ─── */}
      <div className="w-full border-b border-gray-100 bg-[#fafaf8]">
        <div className="max-w-[1280px] mx-auto px-6 py-3">
          <nav className="flex items-center gap-1.5 text-[12px] text-gray-400">
            <Link to="/" className="hover:text-[#2d5a3d] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/cart" className="hover:text-[#2d5a3d] transition-colors">
              Cart
            </Link>
            <span>/</span>
            <span className="text-gray-600 font-medium">Checkout</span>
          </nav>
        </div>
      </div>

      {/* ─── Page Header + Stepper ─── */}
      <div className="max-w-[1280px] mx-auto px-6 pt-6 mb-2">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-900 font-heading">Checkout</h1>
          <span className="text-[13px] text-[#2d5a3d] font-semibold">
            {totalItems} {totalItems === 1 ? "Item" : "Items"}
          </span>
        </div>
        <CartStepper currentStep={2} />
      </div>

      {/* ─── Main Content ─── */}
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex gap-8 items-start">
          {/* ═══ Left: Forms & Options ═══ */}
          <div className="flex-1">
            {/* ── Shipping Information ── */}
            <Accordion
              title="Shipping Information"
              icon={LuBuilding}
              defaultOpen={true}
              rightElement={
                <span className="text-[11px] text-[#2d5a3d] font-bold uppercase cursor-pointer hover:underline">
                  ADD NEW ADDRESS +
                </span>
              }
            >
              <form className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-600">First Name*</label>
                  <input type="text" placeholder="John" className="border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#2d5a3d]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-600">Last Name*</label>
                  <input type="text" placeholder="Doe" className="border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#2d5a3d]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-600">Email*</label>
                  <input type="email" placeholder="johndoe@gmail.com" className="border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#2d5a3d]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-600">Number*</label>
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#2d5a3d]">
                    <div className="bg-gray-50 border-r border-gray-200 px-3 py-2 flex items-center gap-1.5 shrink-0 cursor-pointer">
                      <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="IN" className="w-4 h-3 object-cover" />
                      <span className="text-[13px]">+91</span>
                      <LuChevronDown className="text-[12px] text-gray-500" />
                    </div>
                    <input type="tel" placeholder="00000 00000" className="w-full px-3 py-2 text-[13px] focus:outline-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-600">Address*</label>
                  <input type="text" placeholder="Please enter your address" className="border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#2d5a3d]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-600">Pin Code*</label>
                  <input type="text" placeholder="Please enter your pin code" className="border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:border-[#2d5a3d]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-600">City*</label>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] appearance-none focus:outline-none focus:border-[#2d5a3d] text-gray-500">
                      <option value="">Please Select</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="delhi">Delhi</option>
                      <option value="bangalore">Bangalore</option>
                    </select>
                    <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[14px]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-600">State*</label>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] appearance-none focus:outline-none focus:border-[#2d5a3d] text-gray-500">
                      <option value="">Please Select</option>
                      <option value="mh">Maharashtra</option>
                      <option value="dl">Delhi</option>
                      <option value="ka">Karnataka</option>
                    </select>
                    <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[14px]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-gray-600">Country*</label>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] appearance-none focus:outline-none focus:border-[#2d5a3d] text-gray-500">
                      <option value="">Please Select</option>
                      <option value="in">India</option>
                    </select>
                    <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[14px]" />
                  </div>
                </div>

                <div className="col-span-2 mt-2">
                  <label className="text-[11px] font-semibold text-gray-600 block mb-2">Save address as</label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="addressType" className="accent-[#2d5a3d]" defaultChecked />
                      <span className="text-[13px] text-gray-700">Home</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="addressType" className="accent-[#2d5a3d]" />
                      <span className="text-[13px] text-gray-700">Work</span>
                    </label>
                  </div>
                </div>

                <div className="col-span-2 mt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-[#2d5a3d] w-4 h-4 rounded border-gray-300" defaultChecked />
                    <span className="text-[12px] text-gray-600">Set this as my default address</span>
                  </label>
                </div>

                <div className="col-span-2 mt-2">
                  <button type="button" className="w-full py-3 border border-[#2d5a3d] text-[#2d5a3d] rounded-lg text-[12px] font-bold tracking-wider uppercase hover:bg-[#f2f7f4] transition-colors">
                    Save Address
                  </button>
                </div>
              </form>
            </Accordion>

            {/* ── Offers & Rewards ── */}
            <Accordion
              title="Offers & Rewards"
              icon={LuBanknote}
              defaultOpen={true}
              rightElement={
                <span className="text-[10px] text-gray-400 font-medium">1 Available Offer <span className="text-[#2d5a3d] font-bold cursor-pointer hover:underline">VIEW ALL</span></span>
              }
            >
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <input type="text" placeholder="Enter Coupon Code" className="flex-1 border border-gray-200 rounded-l-lg px-4 py-2.5 text-[13px] focus:outline-none focus:border-[#2d5a3d]" />
                  <button className="bg-white border-y border-r border-gray-200 text-[#2d5a3d] text-[11px] font-bold uppercase px-6 rounded-r-lg hover:bg-gray-50 transition-colors">
                    Apply
                  </button>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wide">Brand Offer</span>
                  <span className="text-[10px] text-gray-400">2 Offers available</span>
                </div>

                <div className="border border-gray-100 rounded-lg p-3 bg-[#fafaf8]">
                  <h4 className="text-[12px] font-bold text-gray-800">BUY 2 GET 1 PRODUCT FREE</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Code: TAURUS20</p>
                  <p className="text-[10px] text-[#2d5a3d] font-medium mt-1 cursor-pointer hover:underline">Know More</p>
                  <button className="w-full py-1.5 bg-[#f2f7f4] text-[#2d5a3d] text-[10px] font-bold uppercase rounded mt-3 hover:bg-[#e2ede6] transition-colors">
                    Apply
                  </button>
                </div>

                <div className="border border-gray-100 rounded-lg p-3 bg-[#fafaf8]">
                  <h4 className="text-[12px] font-bold text-gray-800">FREE SHIPPING OVER ₹999</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Valid all day every day</p>
                  <button className="w-full py-1.5 bg-[#f2f7f4] text-[#2d5a3d] text-[10px] font-bold uppercase rounded mt-3 hover:bg-[#e2ede6] transition-colors">
                    Apply
                  </button>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wide">Payment Offer</span>
                  <span className="text-[10px] text-gray-400">1 Offers available</span>
                </div>

                <div className="border border-[#e8dccb] bg-[#fdfcf9] rounded-lg p-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#e8dccb] text-[#5c4a3d] text-[8px] font-bold px-2 py-0.5 rounded-bl-lg uppercase">
                    Bank Offers applicable on Credit/Debit Cards
                  </div>
                  <h4 className="text-[12px] font-bold text-gray-800 mt-2">UPTO ₹500 CASHBACK ON USING UPI</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Valid on all transactions.</p>
                  <p className="text-[11px] text-gray-500">Use AU Small Finance Bank UPI</p>
                  <p className="text-[10px] text-[#2d5a3d] font-medium mt-1 cursor-pointer hover:underline">Know More</p>
                  <button className="w-full py-1.5 bg-[#f2f7f4] text-[#2d5a3d] text-[10px] font-bold uppercase rounded mt-3 hover:bg-[#e2ede6] transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </Accordion>

            {/* ── Payment Method ── */}
            <Accordion
              title="Payment Method"
              icon={LuBanknote}
              defaultOpen={true}
            >
              <div className="flex flex-col gap-3">
                <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-[#2d5a3d] bg-[#f2f7f4]' : 'border-gray-200 hover:border-[#2d5a3d] bg-white'}`}>
                  <input type="radio" name="payment" className="mt-1 accent-[#2d5a3d]" onChange={() => setPaymentMethod('card')} />
                  <div>
                    <div className="flex items-center gap-2">
                      <LuCreditCard className="text-[#2d5a3d]" />
                      <span className="text-[13px] font-bold text-gray-800 uppercase">Credit / Debit Card</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1">Visa, Mastercard, Rupay & all International Cards</p>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-[#2d5a3d] bg-[#f2f7f4]' : 'border-gray-200 hover:border-[#2d5a3d] bg-white'}`}>
                  <input type="radio" name="payment" className="mt-1 accent-[#2d5a3d]" onChange={() => setPaymentMethod('upi')} />
                  <div>
                    <div className="flex items-center gap-2">
                      <LuSmartphone className="text-[#2d5a3d]" />
                      <span className="text-[13px] font-bold text-gray-800 uppercase">UPI</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1">Google Pay, Phone Pe & Paytm</p>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-[#2d5a3d] bg-[#f2f7f4]' : 'border-gray-200 hover:border-[#2d5a3d] bg-white'}`}>
                  <input type="radio" name="payment" className="mt-1 accent-[#2d5a3d]" onChange={() => setPaymentMethod('cod')} />
                  <div>
                    <div className="flex items-center gap-2">
                      <LuBanknote className="text-[#2d5a3d]" />
                      <span className="text-[13px] font-bold text-gray-800 uppercase">Cash on Delivery</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1">₹50 additional handling fee</p>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all ${paymentMethod === 'netbanking' ? 'border-[#2d5a3d] bg-[#f2f7f4]' : 'border-gray-200 hover:border-[#2d5a3d] bg-white'}`}>
                  <input type="radio" name="payment" className="mt-1 accent-[#2d5a3d]" onChange={() => setPaymentMethod('netbanking')} />
                  <div>
                    <div className="flex items-center gap-2">
                      <LuBuilding className="text-[#2d5a3d]" />
                      <span className="text-[13px] font-bold text-gray-800 uppercase">Net Banking</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1">₹50 additional handling fee</p>
                  </div>
                </label>
              </div>
            </Accordion>

            {/* Bottom info cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-6 rounded-xl border border-gray-100 bg-white flex flex-col justify-center">
                <LuShieldCheck className="text-4xl text-[#2d5a3d] mb-3" />
                <h3 className="text-[16px] font-bold text-[#2d5a3d] leading-tight mb-2">100% Secure<br/>Transaction</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Your data is encrypted using 256-bit SSL technology. We never store your CVV or sensitive card details.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-100 bg-[#fafaf8] flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <LuStar key={s} className="fill-amber-400 text-amber-400 text-[14px]" />
                  ))}
                </div>
                <p className="text-[12px] text-gray-800 font-medium italic leading-relaxed mb-4">
                  "Taurus organic completely transformed my morning routine. The Ashwagandha root is a game-changer for my stress levels. Truly premium quality."
                </p>
                <div className="flex items-center gap-3">
                  <img src="https://organicindia.com/cdn/shop/files/lalit_88x88_crop_center.png?v=1667396537" alt="User" className="w-10 h-10 rounded-full object-cover border border-[#2d5a3d]" />
                  <div>
                    <p className="text-[12px] font-bold text-gray-800">Aditi Sen</p>
                    <p className="text-[10px] text-gray-400 flex items-center gap-1">
                      <LuCheck className="text-[#2d5a3d]" /> Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ═══ Right: Order Summary ═══ */}
          <div className="w-[400px] shrink-0 sticky top-4">
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-4 font-heading">
                Order Summary
              </h3>

              {/* Cart Items List */}
              <div className="flex flex-col gap-4 mb-5 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover border border-gray-100 shrink-0" />
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <h4 className="text-[13px] font-semibold text-gray-800 truncate">{item.name}</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">{item.weight}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[13px] font-bold text-gray-900">₹ {(item.price * item.quantity).toFixed(2)}</span>
                        <span className="text-[11px] text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded">Qty: {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary rows */}
              <div className="space-y-2.5 text-[13px] border-t border-gray-100 pt-4">
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

              {/* Total */}
              <div className="flex justify-between items-center py-4 border-y border-gray-100 mt-4 mb-4">
                <span className="text-[15px] font-bold text-gray-800 uppercase tracking-wide">
                  Total
                </span>
                <span className="text-xl font-bold text-gray-900">
                  ₹ {total.toFixed(2)}
                </span>
              </div>

              {/* Continue to Payment */}
              <Link
                to="/order-success"
                className="w-full bg-[#2d5a3d] text-white text-[13px] font-bold tracking-wider uppercase py-3.5 rounded-lg cursor-pointer hover:bg-[#1e4230] active:scale-[0.99] transition-all duration-200 text-center block"
              >
                Continue to Payment
              </Link>

              {/* Policy & Help */}
              <p className="text-[10px] text-gray-400 text-center mt-4 leading-relaxed px-2">
                By placing your order you agree to our Terms of Service and Privacy Policy.
              </p>
              <div className="text-center mt-2">
                <button className="text-[11px] text-[#2d5a3d] font-bold uppercase hover:underline">
                  Need Help?
                </button>
              </div>

              {/* Trust badge */}
              <div className="mt-4 flex items-start gap-2 p-3 bg-[#e8f0e8] rounded-lg">
                <LuShieldCheck className="text-[#2d5a3d] text-[18px] shrink-0" />
                <span className="text-[10px] text-[#2d5a3d] font-medium leading-snug">
                  Safe & Secure Payments. We value your privacy and use military-grade encryption to secure your details.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;