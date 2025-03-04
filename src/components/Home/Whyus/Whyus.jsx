import React from "react";
import WhyUsCard from "./WhyUsCard";
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";

const Whyus = () => {
    const icon1 = <SiWebmoney className="text-green-500 mx-auto " size={48} />;
    const icon2 = <FaUsers className="text-green-500 mx-auto " size={48} />;
    const icon3 = <FaShippingFast className="text-green-500 mx-auto " size={48} />;
  return (
    <div className="flex flex-col justify-center container mx-auto py-10 md:mt-16"> 
      <h1 className="font-bold text-center text-4xl">
        Why Choose <span className="text-primary">WheelsDeal(us) </span>?
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
        exercitationem?
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <WhyUsCard icon={icon1} title="Financial Options" />
        <WhyUsCard icon={icon2} title="Satisfied Customers" />
        <WhyUsCard icon={icon3} title="Fast and Easy Booking" />
      </div>
    </div>
  );
};

export default Whyus;
