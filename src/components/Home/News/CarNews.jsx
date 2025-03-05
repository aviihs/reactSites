import React from "react";
import Slider from "react-slick";
import CarNewsCard from "./CarNewsCard";

const CarNews = () => {
  const newsData = [
    {
      id: 0,
      img: "src/assets/img/news1.jpg",
      desc: "Toyota touts internal combustion engine potential, even in EV era",
    },
    {
      id: 1,
      img: "src/assets/img/news2.jpg",
      desc: "BMW Group India clocks best-ever annual sales in 2023, leads luxury electric car segments.",
    },
    {
      id: 2,
      img: "src/assets/img/news3.jpg",
      desc: "MG Astor 2024 launched in India, prices statrs at RS. 9.98 lakhs.",
    },
    {
      id: 3,
      img: "src/assets/img/news4.jpg",
      desc: "Kia Sonet Facelifts in Indai at Rs. 7.99 Lakhs, Tata Nexon & Maruti Suzuki Brezza rival",
    },
    {
      id: 4,
      img: "src/assets/img/news5.jpg",
      desc: "First Shift: New-Vehicle inventory reaches 3-years high",
    },
    {
      id: 5,
      img: "src/assets/img/news6.jpg",
      desc: "JLR India sales rises 74% in Q3 on robst demand fr Range Rover, Range Rover Velar, Defender",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // More readable
    pauseOnHover: true,
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
    <div className="container mx-auto mt-24">
      <h1 className="font-bold text-4xl text-center">
        Cars <span className="text-primary">News and Advices.</span>
      </h1>
      <p className="text-center mt-4 "> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam
        dicta perferendis quia?
      </p>
      <div className="mt-8">
        < Slider {...settings}>
          {newsData.map((item) => (
            <CarNewsCard key={item.id} img={item.img} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarNews;
