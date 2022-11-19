import React from "react";
import image from "../../Assets/illustration-intro.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse justify-evenly px-6 mx-auto mt-10 md:flex-row md:max-w-7xl">
        <div className="flex flex-col space-y-6 md:w-1/2">
          <h2 className="max-w-md text-4xl text-center font-bold md:text-5xl md:text-left">
            Bring everyone together to build better products.
          </h2>
          <p className="max-w-sm text-center md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="#home" className="bg-red bg-brightRed text-white rounded-2xl py-1 px-3">Get started</a>
          </div>
        </div>
        <div className="md:w-1/2">
            <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
