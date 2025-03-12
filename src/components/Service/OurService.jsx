import React from 'react'
import { GiCarWheel } from 'react-icons/gi'
import { SiCoronaengine, SiGoogleearthengine } from 'react-icons/si'
import { MdDesignServices } from 'react-icons/md'
import { IoSettings } from 'react-icons/io5'
import { FaCar } from 'react-icons/fa'
import Service from '../../pages/Service'
import ServiceCard from './ServiceCard'

const OurService = () => {
    const icon1 = <GiCarWheel className='text-green-500 mx-auto' size={50} />
    const icon2 = <SiGoogleearthengine className='text-green-500 mx-auto' size={50}/>
    const icon3 = <MdDesignServices className='text-green-500 mx-auto' size={50}/>
    const icon4 = <IoSettings className='text-green-500 mx-auto' size={50}/>
    const icon5 = <FaCar className='text-green-500 mx-auto' size={50}/>
    const icon6 = <SiCoronaengine className='text-green-500 mx-auto' size={50}/>
  return (
    <div className='container mx-auto pt-24'>
    <h1 className='font-bold text-3xl text-center'>Our <span className='text-primary'>Service</span></h1>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 ">
        < ServiceCard icon={icon1} title="Tires & Wheels" />
        < ServiceCard icon={icon2} title="Exhaust System" />
        < ServiceCard icon={icon3} title="Cars Maintenance" />
        < ServiceCard icon={icon4} title="Brake Repairs" />
        < ServiceCard icon={icon5} title="Body Services" />
        < ServiceCard icon={icon6} title="Engine Service" />
    </div>
    </div>
  )
}

export default OurService