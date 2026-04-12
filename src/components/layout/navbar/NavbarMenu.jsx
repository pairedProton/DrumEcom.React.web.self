import React from "react";
import MegaMenu from "./MegaMenu";
import { useState } from "react";
import { icons } from "../../../assets/images";
import {useCatDataHandler} from '../../../hooks/useCatDataHandler'

const NavbarMenu = () => {

    // const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    // const {categories,loading,error} = useMegaMenu()
    const [activeMenu, setActiveMenu] = useState(null);
    const {categoryData,wellnessData,goalData,loading,error} = useCatDataHandler()

    const getMenuData = () => {
  if (activeMenu === "category") return categoryData
  if (activeMenu === "wellness") return wellnessData
  if (activeMenu === "goal") return goalData
}

  return (
    <nav className="relative nav ml-10 select-none text-zinc-800 text-sm font-family-heading"
    // onMouseLeave={() => setActiveMenu(null)}
    >
      {activeMenu && (
        <MegaMenu
          categories={getMenuData()}
          loading={loading}
          error={error}
          setActiveMenu={setActiveMenu}
          // menuOpenStatus={[isMegaMenuOpen, setIsMegaMenuOpen]}
          type={activeMenu}
        />
      )}
      <ul className="flex gap-8 ">
        <li
          className="relative flex items-center gap-1 "
          // onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          onMouseEnter={() => setActiveMenu("category")}
          // onMouseLeave={() => setActiveMenu(null)}
        >
          <span className="cursor-pointer onHoverGreen">Shop By Category</span>
          <span className="onHoverGreen">
            {activeMenu === "category" ? <icons.upIcon /> : <icons.downIcon />}
          </span>
        </li>
        <li
          className="relative flex items-center gap-1"
          // onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          onMouseEnter={() => setActiveMenu("wellness")}
          // onMouseLeave={() => setActiveMenu(null)}
        >
          <span className="cursor-pointer onHoverGreen">Shop By Wellness</span>
          <span className="onHoverGreen">
            {activeMenu === "wellness" ? <icons.upIcon /> : <icons.downIcon />}
          </span>
        </li>
        <li
          className="relative flex items-center gap-1"
          // onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          onMouseEnter={() => setActiveMenu("goal")}
          // onMouseLeave={() => setActiveMenu(null)}
        >
          <span className="cursor-pointer onHoverGreen">Shop By Goal</span>
          <span className="onHoverGreen">
            {activeMenu === "goal" ? <icons.upIcon /> : <icons.downIcon />}
          </span>
        </li>
        <li className="onHoverGreen"
        onMouseEnter={() => setActiveMenu(null)}
        >Deal of the Day</li>
        <li className="onHoverGreen"
        onMouseEnter={() => setActiveMenu(null)}
        >Combo Offers</li>
        <li className="onHoverGreen"
        onMouseEnter={() => setActiveMenu(null)}
        >Track Order</li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
