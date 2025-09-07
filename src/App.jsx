import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import Sliders from './components/Sliders'
import Scrolltitles from './components/Scrolltitles'
import Cards from './components/Cards'
import About from './components/About'
import Whatwedo from './components/Whatwedo'
import Genai from './components/Genai'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Locations from './pages/Locations'
import Servicesection from './pages/Servicesection'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <div className='min-h-[70vh]'>
        <Home/>
      </div>
      <Cards/>
      <About/>
      <Whatwedo/>
      <Genai/>
      <Clients/>
      <Footer/>
      <div className='bg-black'>
        <Contact/>
        {/* <Locations/> */}
        <Servicesection/>
      </div>
    </div>
  )
}

export default App