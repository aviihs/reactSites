import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className="fixed top-0 w-full z-10  bg-secondary text-white py-1">
      <nav className=" px-8 py-5 md:p-5 container mx-auto items-center flex justify-between">
        <div className="flex items-center gap-2">
          <GiSteeringWheel size={35} className="text-primary" />
          <Link className="font-bold text-2xl" to="/">
            WheelsDeal
          </Link>
        </div>
        <div className=" hidden md:flex items-center gap-8 font-medium text-xl">
          <Link
            to="/"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            About Us
          </Link>
          <Link
            to="/car"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Our Cars
          </Link>
          <Link
            to="/service"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Services
          </Link>
          <button className="hidden lg:flex border-2 border-primary text-lg px-4 py-1 rounded-md hover:bg-primary transition duration-200 ease-linear">
            Sign In
          </button>
        </div>

        <div className=" md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-secondary top-16 left-0 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit rounded-lg transition-transform duration-300 ease-linear`}
      >
        <Link
          to="/"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          About Us
        </Link>
        <Link
          to="/car"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Our Cars
          
        </Link>
        <Link
          to="/service"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Services
        </Link>
        <div>
        <button className="border-2 border-primary text-lg px-4 py-1 rounded-md ">
          Sign In
        </button>
        </div>
      </div>
      <Outlet />
    </header>
  );
};

export default Navbar;
