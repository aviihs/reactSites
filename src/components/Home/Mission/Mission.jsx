import React from "react";
import img from "../../../assets/img/mission.jpg";

const Mission = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="">
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-primary">Mission</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-8">
        <div className="w-full md:w-2/4">
          <img src={img} alt="img" className="rounded-lg"/>
        </div>
        <div className="w-full md:w-2/4 space-y-4">
          <h1 className="font-bold text-primary text-lg lg:text-3xl">To create a community where every journey is extra-ordinary.</h1>
          <h2 className="font-semibold lg:text-2xl text-lg">
            Empower individuals to achieve sustainable mobility solutions and
            inspire a positive impact on the environment.
          </h2>
          <p className="text-sm lg:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            omnis?
          </p>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            laboriosam eos. Culpa repudiandae itaque at cupiditate aliquam, esse
            vel enim quod minus assumenda, possimus suscipit provident commodi
            quis est? A dolores fugiat in quos cum, hic et quaerat dolor enim
            similique necessitatibus nihil dignissimos incidunt. Sequi aut quia,
            ullam exercitationem commodi quibusdam doloremque consequatur quos
            quas mollitia quisquam modi possimus magnam quasi non. Vero dolores
            consectetur unde omnis iusto ullam? Dicta pariatur, modi quibusdam
            illo quaerat sed nulla odio fuga iste dolor veniam facere possimus
            libero maxime ea nostrum reiciendis laudantium sequi impedit.
            Architecto debitis commodi minus hic qui. Ea!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
