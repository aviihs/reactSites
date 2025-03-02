import React from "react";
import img from "../../../assets/img/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="h-screen container mx-auto flex flex-col justify-center md:flex-row items-center ">
        <div className="w-full md:w-2/4 space-y-5 mt-10">
          <h1 className="capitalize text-4xl lg:text-6xl font-bold leading-tight ">
            Find Your Perfect ride today
          </h1>
          <p className="text-lg lg:text-2xl font-medium">
            Over 1000+ New Cars Available Hero
          </p>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            sapiente itaque laudantium voluptatem quibusdam voluptatum
            recusandae debitis provident ea illum. Recusandae eum quidem quam
            quibusdam.
          </p>
          <div className=" flex gap-8">
            <button className="cursor-pointer bg-primary py-3 px-4 rounded-md hover:scale-95 transition duration-150 ease-in">Explore More</button>
            <button className="cursor-pointer border-2 border-primary py-3 px-6 rounded-md hover:bg-primary duration-200 ease-in">See Cars</button>
          </div>
        </div>
        <div className="w-full md:w-2/4 mt-4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
