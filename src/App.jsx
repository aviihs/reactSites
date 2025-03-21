import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Car from './pages/Car.jsx'
import Service from './pages/Service.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    < > 
      <BrowserRouter>
      < Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/car" element={<Car />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App