import React from 'react'
import { GiCarWheel } from 'react-icons/gi'
import { SiCoronaengine, SiGoogleearthengine } from 'react-icons/si'
import { MdDesignServices } from 'react-icons/md'
import { IoSettings } from 'react-icons/io5'
import { FaCar } from 'react-icons/fa'
import Service from '../../pages/Service'
import ServiceCard from './ServiceCard'

const OurService = () => {
    const icon1 = <GiCarWheel />
    const icon2 = <SiGoogleearthengine />
    const icon3 = <MdDesignServices />
    const icon4 = <IoSettings />
    const icon5 = <FaCar />
    const icon6 = <SiCoronaengine />
  return (
    <div>
    <div>Our <span>Service</span></div>
    <div className="">
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