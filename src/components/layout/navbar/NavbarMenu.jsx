import React from 'react'

const NavbarMenu = () => {
  return (
    <nav className="nav ml-10">
        <ul className='flex gap-8' >
          <li  className='cursor-pointer hover:text-emerald-600 transition-colors' >Shop By Category</li>
          <li  className='cursor-pointer hover:text-emerald-600 transition-colors' >Deal of the Day</li>
          <li  className='cursor-pointer hover:text-emerald-600 transition-colors' >Combo Offers</li>
          <li  className='cursor-pointer hover:text-emerald-600 transition-colors' >Track Order</li>
        </ul>
      </nav>
  )
}

export default NavbarMenu