import React from 'react'
import img from '../../assets/img/approch.jpg'

const Approach = () => {
  return (
    <div className='flex flex-col-reverse justify-center items-center md:flex-row gap-5 mt-16'>
         <div className='w-full md:w-2/4 space-y-5'> 
            <h1 className='text-4xl font-bold'>Our Approach</h1>
            <h2 className='font-semibold text-lg lg:text-2xl'>Empower individuals to achieve sustainable mobility solutions and inspire a positive impact on the environment.</h2>
            <p className='text-sm lg:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem, saepe nihil veritatis alias vel velit. Repellat dolores esse iure adipisci non id sit incidunt, eius sapiente praesentium inventore sunt nisi unde deleniti sed est ratione, odio qui ducimus at a exercitationem illum! Quam, aliquam incidunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis perspiciatis cupiditate praesentium veritatis, distinctio quod ut dolorum! Nam, ad suscipit. Numquam distinctio eos laudantium fugit reprehenderit accusamus officiis rem minus? impedit sapiente iste possimus.</p>
        </div>
        <div className='w-full md:w-2/5'>
            <img src={img} alt="img" />
        </div>
    </div>
  )
}

export default Approach