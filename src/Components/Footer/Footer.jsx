import React from "react";
import logo from "../../Assets/logo.svg";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsPinterest } from 'react-icons/bs';
import { CgCopyright } from 'react-icons/cg'

const Footer = () => {
  return (
    <section>
      <div className="container bg-veryDarkBlue flex flex-col px-2 pt-7 pb-5 max-w-full mid:px-20 md:flex-row md:justify-around">
        <div className="flex flex-col justify-between md:space-y-10">
          <img src={logo} alt="" />
          <div className="flex flex-row space-x-2">
            <AiFillTwitterCircle className="text-white"/>
            <AiOutlineFacebook className="text-white"/>
            <AiOutlineInstagram className="text-white"/>
            <AiOutlineYoutube className="text-white"/>
            <BsPinterest className="text-white"/>
          </div>
        </div>
        <div className="flex flex-row">
            <div className="flex flex-col space-y-1 mr-20">
                <p className="text-white text-xs">Home</p>
                <p className="text-white text-xs">Pricing</p>
                <p className="text-white text-xs">Products</p>
                <p className="text-white text-xs">About Us</p>
            </div>
            <div className="flex flex-col space-y-1 ml-20">
                <p className="text-white text-xs">Home</p>
                <p className="text-white text-xs">Pricing</p>
                <p className="text-white text-xs">Products</p>
            </div>
        </div>
        <div className="flex flex-col justify-between text-center items-center space-y-4 md:space-y-0">
            <div className="flex flex-row  items-center justify-around space-x-4  mt-4 md:justify-between md:mt-o">
                <input type="text" placeholder="Updates in your inbox" className="rounded-xl py-1 px-3 focus:outline-none"/>
                <div className="flex bg-brightRed py-1 px-2 rounded-2xl">
                    <a href="#home" className="text-sm text-white">Go</a>
                </div>
            </div>
            <p className="flex flex-row items-center text-xs text-white">Copyright <CgCopyright /> 2020. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
