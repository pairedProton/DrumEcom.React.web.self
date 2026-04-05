import React from "react";
import Navbar from "../components/layout/navbar/Navbar";
// import Footer2 from "../components/layout/Footer2";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
import {footerLinks, footerContact} from "../constants/footerData";
import DevToggle from "../components/ui/DevToggle";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <DevToggle/> {/* floating button */}
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      {/* <Footer2 /> */}
      <Footer footerLinks={footerLinks} footerContact={footerContact} />
    </div>
  );
};

export default MainLayout;
