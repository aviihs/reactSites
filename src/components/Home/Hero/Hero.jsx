import React from 'react'
import img from '../../../assets/img/hero.jpg';

const Hero = () => {
  return (
    <div className='bg-black text-white'>
    <div className="h-screen container mx-auto flex flex-col justify-center md:flex-row items-center ">
        <div className="w-full md:w-2/4 space-y-5 mt-10">    
            <h1 className="capitalize  ">Find Your Perfect ride today</h1>
            <p className="">Over 1000+ New Cars Available Hero</p>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente itaque laudantium voluptatem quibusdam voluptatum recusandae debitis provident ea illum. Recusandae eum quidem quam quibusdam.</p>
            <button>Explore More</button>
            <button>See Cars</button>
        </div>
        <div className="w-full md:w-2/4 mt-4">
            <img src={img} alt="img" />
        </div>
    </div>
    </div>
  )
}

export default Hero