// import React, { useEffect } from 'react'
// import Navbar from './components/Navbar'
// import Homer from './pages/Homer'
// // import Sliders from './components/Sliders'
// import Scrolltitles from './components/Scrolltitles'
// import Cards from './components/Cards'
// import About from './components/About'
// import Whatwedo from './components/Whatwedo'
// import Genai from './components/Genai'
// import Clients from './components/Clients'
// import Footer from './components/Footer'
// import Contact from './components/Contact'
// import Locations from './pages/Locations'
// import Servicesection from './pages/Servicesection'
// import Servicesectioxxx from './pages/Servicesectioxxx'
// import CaseStudies from './pages/CaseStudies'
// import Solutions from './pages/Solutions'
// import Waccommerce from './pages/Waccommerce'
// import Banner2 from './pages/Banner2'
// import Insights from './pages/Insights'
// import Industries from './pages/Industries'

// import Lenis from '@studio-freight/lenis';
// import Home from './components/Home'

// const App = () => {

//   return (
//     <div className='overflow-x-hidden'>
//       <Navbar/>
//       <div className='min-h-[70vh]'>
//         <Homer/>
//       </div>
//       <Cards/>
//       <About/>
//       <Whatwedo/>
//       <Genai/>
//       <Clients/>
//       <Footer/>
//       <div className='bg-black'>
//         <Contact/>
//         {/* <Locations/> */}
//         {/* <Servicesection/> */}
//         <Servicesectioxxx/>
//       </div>
//       <CaseStudies/>
//       <div className='bg-gradient-to-b from-green-100 via-green-300 to-gray-50'>
//         <Solutions/>
//         <Waccommerce/>
//       </div>
//       <Banner2/>
//       <Insights/>
//       <Industries/>
//       {/* <div className='w-full h-full'>
//         <Home/>
//       </div> */}
//     </div>
//   )
// }

// export default App

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import Homepagelayout from "./components/Homepagelayout";
import CaseStudies from "./pages/CaseStudies";
import Servicesectioxxx from "./pages/Servicesectioxxx";
import Solutions from "./pages/Solutions";
import Waccommerce from "./pages/Waccommerce";
import Insights from "./pages/Insights";
import Industries from "./pages/Industries";

const App = () => {
  return (
    <div className="overflow-x-hidden">
        <Navbar />
      <Routes>
        <Route path="/" element={<Homepagelayout />} />
        <Route path="/services" element={<Servicesectioxxx />} />
        <Route path="/solution" element={<div className="mt-24"><Solutions /></div>} />
        <Route path="/case-studies" element={<div className="mt-24"><CaseStudies /></div>} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/industries" element={<div className="mt-24"><Industries /></div>} />
      </Routes>

      <div className="bg-black">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
