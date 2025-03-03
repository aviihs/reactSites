import React from 'react'

const FeaturedCard = ({id, img, name, price}) => {
  return (
    <div>
        <div className="border-2 border-secondary text-black bg-slate-100 rounded-xl mb-2 cursor-pointer hover:scale-90 transition duration-200 ease-linear">
            <img src={img} alt="car" />
        </div>
        <div className=" rounded-t-xl w-full">
            <h1>{name}</h1>
            <div className="">
                <h2>Starting at {price}</h2>
            </div>
        </div>
    </div>
  )
  
}

export default FeaturedCard