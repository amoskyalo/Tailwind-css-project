import React from "react";
import logo from "../../Assets/logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className="container flex flex-row justify-around items-center mt-4 py-1">
        <div className="logo">
          <img src={logo} alt="" className="h-5" />
        </div>
        <div className="nav-links hidden flex-row space-x-4 justify-center md:flex">
          <a href="#home" className="text-base font-bold text-darkBlue md:lg">
            Pricing
          </a>
          <a href="#home" className="text-base font-bold text-darkBlue md:lg">
            Product
          </a>
          <a href="#home" className="text-base font-bold text-darkBlue md:lg">
            About Us
          </a>
          <a href="#home" className="text-base font-bold text-darkBlue md:lg">
            Careers
          </a>
          <a href="#home" className="text-base font-bold text-darkBlue md:lg">
            Community
          </a>
        </div>
        <div className="button hidden md:block">
          <a
            href="#home"
            className="bg-brightRed py-2 px-4 rounded-2xl text-white text-sm md:text-base"
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
