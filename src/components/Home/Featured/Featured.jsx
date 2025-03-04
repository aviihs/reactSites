import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";
import car1 from "../../../assets/img/car1.png";
import car2 from "../../../assets/img/car2.png";
import car3 from "../../../assets/img/car3.png";
import car4 from "../../../assets/img/car4.png";
import car5 from "../../../assets/img/car5.png";
import car6 from "../../../assets/img/car6.png";

const Featured = () => {
  const carsData = [
    { id: 0, img: car1, name: "Cadillac Escalade", price: "22,440" },
    { id: 1, img: car2, name: "BMW Series 3", price: "54,890" },
    { id: 2, img: car3, name: "Mercedes", price: "75,890" },
    { id: 3, img: car4, name: "BMW 7 Series", price: "55,789" },
    { id: 4, img: car5, name: "Mercedes Benz", price: "95,776" },
    { id: 5, img: car6, name: "Range Rover", price: "88,450" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200, // Smoother transition
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // More readable
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-full mx-auto py-10">
      <h1 className="font-bold text-center text-4xl">
        Featured <span className="text-primary">Cars</span>
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
        Explore our exclusive collection of premium cars. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Maxime adipisci molestias doloremque possimus.
      </p>

      <div className="container mx-auto mt-10 ">
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeaturedCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;