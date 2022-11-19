import React from "react";

const Simplify = () => {
  return (
    <section id="simply">
      <div className="container flex flex-col items-center justify-around px-5 py-6 bg-brightRed min-w-full simply md:flex-row md:px-20 md:items-left">
        <h2 className="text-white font-bold text-center text-3xl md:max-w-md md:text-left">
          Simplify how your team works today
        </h2>
        <div className="flex items-center">
          <a href="#home" className="bg-white py-1.5 px-3 rounded-2xl text-sm">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Simplify;
