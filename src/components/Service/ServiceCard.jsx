import React from 'react'

const ServiceCard = ({icon, title}) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100 border-2 hover:border-secondary hover:text-gray-200 hover:bg-[#2F2F2E] transition duration-200 ease-in-out cursor-pointer rounded-xl'>
        <p>{icon}</p>
        <h1 className='text-primary text-3xl font-bold '>{title}</h1>
        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsam provident impedit incidunt consequatur suscipit odit voluptatum error eum explicabo optio nihil minima, commodi, saepe ipsa quod sit vero mollitia consectetur ad quaerat voluptates deserunt alias labore. Corporis, id quos.</p>
    </div>
  )
}

export default ServiceCard