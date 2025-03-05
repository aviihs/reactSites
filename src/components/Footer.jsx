import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-14 bg-secondary text-white ">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-2xl pb-4">WheelsDeal</h1>
          <p className="mb-2 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            laborum iste recusandae autem iusto perspiciatis sunt itaque
            sapiente alias hic eaque pariatur placeat, numquam, qui sint
            dolores. Pariatur laboriosam, iste optio consequuntur nulla neque.
            Ducimus ex voluptatibus, culpa modi quia beatae minus voluptate,
            aliquam ea illo velit? Error, provident. Cum?
          </p>
        </div>
        <div className="">
          <h1 className="font-semibold text-xl pb-4 pt-5 mb:pt-0">
            Pages Links
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/about"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              About Us
            </Link>
            <Link
              to="/car"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Our Cars
            </Link>
            <Link
              to="/service"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Services
            </Link>
          </div>
        </div>
        <div className="">
          <h1 className="font-semibold text-xl pb-4 pt-5 mb:pt-0">
            Used Cars for sale
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Toyota Camry
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Chevrolet Corvette
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Volkswagen Golf
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Nissan Rogue
            </Link>
          </div>
        </div>
        <div className="">
          <h1 className="font-semibold text-xl pb-4 pt-5 mb:pt-0">
            Learn More
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              User-Friendly
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Search and Filters
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Secure Payment
            </Link>
            <Link
              to="/"
              className="hover:translate-x-3 transition duration-200 ease-linear"
            >
              Geolocation Services
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="sm:text-sm text-center py-4">
          &#169;Copyright to & Developed by
          <span className="text-primary font-semibold mx-2">Shiva Bhusal</span>
          || All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;


