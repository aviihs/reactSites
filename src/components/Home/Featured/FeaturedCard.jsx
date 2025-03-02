import React from 'react'

const FeaturedCard = ({id, img, name, price}) => {
  return (
    <div>
        <div className="">
            <img src={img} alt="car" />
        </div>
        <div className="">
            <h1>{name}</h1>
            <div className="">
                <h2>Starting at {price}</h2>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCard