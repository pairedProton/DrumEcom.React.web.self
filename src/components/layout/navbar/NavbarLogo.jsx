import React from 'react'
import {logoImages} from '../../../assets/images'

const NavbarLogo = () => {
  return (
    <figure className="figure h-full aspect-square  ">
      <img src={logoImages.lightlogo} alt="lightlogo" className="drop-shadow-xl" />
    </figure>
  );
}

export default NavbarLogo