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
import Servicesectioxxx from './pages/Servicesectioxxx'
import CaseStudies from './pages/CaseStudies'
import Solutions from './pages/Solutions'
import Waccommerce from './pages/Waccommerce'
import Banner2 from './pages/Banner2'
import Insights from './pages/Insights'
import Industries from './pages/Industries'

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
        {/* <Servicesection/> */}
        <Servicesectioxxx/>
      </div>
      <CaseStudies/>
      <div className='bg-gradient-to-b from-green-100 via-green-300 to-gray-50'>
        <Solutions/>
        <Waccommerce/>
      </div>
      <Banner2/>
      <Insights/>
      <Industries/>
    </div>
  )
}

export default App