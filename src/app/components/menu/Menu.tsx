import React from "react";
import MobileMenu from "./MobileMenu";
// import Logo from "./Logo";
import MenuItems from "./MenuItems";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <nav id="main-menu" className="bg-none fixed w-full z-20 top-0 start-0 opacity-100 hidden md:block">
        <div className="container flex items-center justify-between mx-auto px-4 py-3 md:py-0">
          <div className="w-56">
          <Link href="/#home" ><img src="/images/sblimologo.png" alt="LOGO" /></Link>
          </div>
          <MenuItems />
        </div>
      </nav>
      <MobileMenu />
    </>
  );
};

export default Menu;