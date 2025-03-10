import React from 'react'

const CarCard = ({id, img, name, price}) => {
  return (
    <div className='border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 cursor-pointer' key={id}>
        <img src={img} alt="img" />
        <h1 className='font-bold text-xl pl-5 text-primary'>{name}</h1>
        <p className='pl-5 pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati recusandae iure sunt perferendis dolore veritatis tenetur. Iure, laboriosam necessitatibus laborum non maxime, distinctio impedit beatae unde aperiam sequi, autem doloremque.</p>
        <div className="flex justify-between items-center px-6 pb-3">
            <h3 className='font-semibold text-xl'>${price}</h3>
            <button type='submit' className='bg-secondary text-white text-base px-2 md:text-lg md:px-3 py-1 rounded-md hover:bg-primary transition duration-200 ease-linear'>Book Now</button>
        </div>
    </div>
  )
}

export default CarCard