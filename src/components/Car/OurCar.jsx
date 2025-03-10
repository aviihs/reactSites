import React from "react";

const OurCar = () => {
  const carsData = [
    { id: 0, img: car1, name: "Cadillac Escalade", price: "22,440" },
    { id: 1, img: car2, name: "BMW Series 3", price: "54,890" },
    { id: 2, img: car3, name: "Mercedes", price: "75,890" },
    { id: 3, img: car4, name: "BMW 7 Series", price: "55,789" },
    { id: 4, img: car5, name: "Mercedes Benz", price: "95,776" },
    { id: 5, img: car6, name: "Range Rover", price: "88,450" },
  ];

  return (
    <div className="container mx-auto pt-24">
      <div>
        <h1 className="font-bold text-center text-4xl">
          Our <span className="text-primary">Cars</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        {carsData.map((item) => (
          <div>
            <CarCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCar;
