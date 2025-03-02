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
    {
      id: 0,
      img: car1,
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 1,
      img: car2,
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 2,
      img: car3,
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 3,
      img: car4,
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 4,
      img: car5,
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 5,
      img: car6,
      name: "Cadillac Escalade",
      price: "22,440",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className="font-bold text-center text-4xl">
        Featured <span className="text-primary ">Cars</span>
      </h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium
        consequuntur rerum mollitia id, nam veniam quae adipisci quos vero nihil
        aspernatur. Maxime adipisci molestias doloremque possimus, laborum
        distinctio incidunt!
      </p>

      <div className=""></div>
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
  );
};

export default Featured;
