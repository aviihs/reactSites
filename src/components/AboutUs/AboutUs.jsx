import React from "react";
import Vision from "./Vision";
import Approach from "./Approach";

const AboutUs = () => {
  return (
    <div className=" container mx-auto  pt-24">
      <div className="">
        <h1 className="font-bold text-center text-4xl">
          About <span className="text-primary">Us</span>
        </h1>
      </div>
      <Vision />
      <Approach />
    </div>
  );
};

export default AboutUs;
