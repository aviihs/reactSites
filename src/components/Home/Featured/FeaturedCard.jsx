import React from "react";

const FeaturedCard = ({ id, img, name, price }) => {
  return (
    <div
      className="border-2 border-secondary text-black bg-slate-100 rounded-xl mb-2 cursor-pointer hover:scale-90 transition duration-200 ease-linear"
      key={id}
    >
      <div className="">
        <img src={img} alt="car" className="rounded-t-xl w-full"/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-xl text-primary pt-2">{name}</h1>
        <div className="flex gap-10 pt-2">
          <h2 className="font-medium text-lg">Starting at {price}</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
