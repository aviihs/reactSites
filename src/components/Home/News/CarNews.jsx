import React from "react";
import Slider from "react-slick";
import CarNewsCard from "./CarNewsCard";
import news1 from "../../../assets/img/news1.jpg";
import news2 from "../../../assets/img/news2.jpg";
import news3 from "../../../assets/img/news3.jpg";
import news4 from "../../../assets/img/news4.jpg";
import news5 from "../../../assets/img/news5.jpg";
import news6 from "../../../assets/img/news6.jpg";

const newsData = [
  { id: 0, img: news1, desc: "Toyota touts internal combustion engine potential, even in EV era" },
  { id: 1, img: news2, desc: "BMW Group India clocks best-ever annual sales in 2023, leads luxury electric car segments." },
  { id: 2, img: news3, desc: "MG Astor 2024 launched in India, prices start at Rs. 9.98 lakhs." },
  { id: 3, img: news4, desc: "Kia Sonet Facelift in India at Rs. 7.99 Lakhs, rival to Tata Nexon & Maruti Suzuki Brezza." },
  { id: 4, img: news5, desc: "First Shift: New-vehicle inventory reaches a 3-year high." },
  { id: 5, img: news6, desc: "JLR India sales rise 74% in Q3 due to robust demand for Range Rover, Velar, and Defender." },
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    { breakpoint: 1023, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const CarNews = () => {
  return (
    <div className="container mx-auto mt-24 px-4">
      <h1 className="font-bold text-4xl text-center text-gray-900">
        Cars <span className="text-primary">News and Advices.</span>
      </h1>
      <p className="text-center mt-4 text-gray-600">
        Stay updated with the latest trends and insights in the automotive industry.
      </p>
      <div className="mt-8">
        <Slider {...settings}>
          {newsData.map((item) => (
            <CarNewsCard key={item.id} img={item.img} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarNews;