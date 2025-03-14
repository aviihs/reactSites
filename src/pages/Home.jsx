import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import Featured from '../components/Home/Featured/Featured'
import Whyus from '../components/Home/Whyus/Whyus'
import Mission from '../components/Home/Mission/Mission' 
import CarNews from '../components/Home//News/CarNews'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    < Hero />
    < Featured />
    < Whyus />
    < Mission />
    < CarNews />
    < Footer />
    </>
  )
}

export default Home