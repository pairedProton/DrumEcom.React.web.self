import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";


const NavbarActions = () => {
  const { totalItems } = useCart();

  return (
    <div className='flex gap-5 pr-2 items-center' >
      {/* <CiSearch className='text-xl hover:text-primary transition-colors cursor-pointer' /> */}
      <CiUser className='text-xl hover:text-primary transition-colors cursor-pointer' />
      <CiHeart className='text-xl hover:text-primary transition-colors cursor-pointer' />
      <Link to="/cart" className="relative">
        <PiShoppingCartSimpleThin className='text-xl hover:text-primary transition-colors cursor-pointer' />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#2d5a3d] text-white text-[9px] font-bold px-1 leading-none">
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  )
}

export default NavbarActions