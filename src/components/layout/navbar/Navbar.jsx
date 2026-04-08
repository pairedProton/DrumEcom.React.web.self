import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarActions from "./NavbarActions";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header className=" w-full h-26  flex flex-col p-1 px-4 shadow-lg  justify-between items-center z-40 bg-bg">
      <div className="upperNav w-full flex h-3/4 justify-between items-center">
        <NavbarLogo />
        <SearchBar />
        <NavbarActions />
      </div>
      <div className="lowerNav flex w-full  "></div>

      <NavbarMenu />
    </header>
  );
};

export default Navbar;
