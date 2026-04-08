import React from "react";
import MegaMenu from "./MegaMenu";
import { useState } from "react";
import { icons } from "../../../assets/images";
import {useCatSubCat} from '../../../hooks/useMegaMenu'

const NavbarMenu = () => {


    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const {categories,loading,error} = useCatSubCat()
  return (
    <nav className="nav ml-10 select-none text-zinc-800 text-sm font-family-heading">
      <ul className="flex gap-8">
        <li
          className="relative flex items-center gap-1"
          onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
        >
          <span className="cursor-pointer onHoverGreen">Shop By Category</span>
          <span className="onHoverGreen">
            {isMegaMenuOpen ? <icons.upIcon /> : <icons.downIcon />}
          </span>
          {isMegaMenuOpen && (
            <MegaMenu
              categories={categories}
              loading={loading}
              error={error}
              menuOpenStatus={[isMegaMenuOpen, setIsMegaMenuOpen]}
            />
          )}
        </li>
        <li
          className="relative flex items-center gap-1"
          onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
        >
          <span className="cursor-pointer onHoverGreen">Shop By Wellness</span>
          <span className="onHoverGreen">
            {isMegaMenuOpen ? <icons.upIcon /> : <icons.downIcon />}
          </span>
          {isMegaMenuOpen && (
            <MegaMenu
              categories={categories}
              loading={loading}
              error={error}
              menuOpenStatus={[isMegaMenuOpen, setIsMegaMenuOpen]}
            />
          )}
        </li>
        <li
          className="relative flex items-center gap-1"
          onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
        >
          <span className="cursor-pointer onHoverGreen">Shop By Goal</span>
          <span className="onHoverGreen">
            {isMegaMenuOpen ? <icons.upIcon /> : <icons.downIcon />}
          </span>
          {isMegaMenuOpen && (
            <MegaMenu
              categories={categories}
              loading={loading}
              error={error}
              menuOpenStatus={[isMegaMenuOpen, setIsMegaMenuOpen]}
            />
          )}
        </li>
        <li className="onHoverGreen">Deal of the Day</li>
        <li className="onHoverGreen">Combo Offers</li>
        <li className="onHoverGreen">Track Order</li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
