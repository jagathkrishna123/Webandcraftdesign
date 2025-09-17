// // // import React from "react";
// // // import { OUR_CLIENTS } from "../constants";

// // // const Clients = () => {
// // //   return (
// // //     <section className="bg-black text-white py-16 px-6 md:px-20">
// // //       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
// // //         <h2 className="text-4xl md:text-5xl font-bold">Clients</h2>
// // //         <p className="text-lg md:w-1/2 mt-4 md:mt-0">
// // //           Our clients are everything to us; so are we to them.
// // //         </p>
// // //       </div>

// // //       {/* Client Logos */}
// // //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
// // //         {OUR_CLIENTS.map((item, index) => (
// // //           <img
// // //             key={index}
// // //             src={item.img}
// // //             alt=""
// // //             className="h-12 object-contain grayscale hover:grayscale-0 transition"
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* Button */}
// // //       <div className="flex justify-center mt-12">
// // //         <button className="border border-gray-500 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-white hover:text-black transition">
// // //           View all clients →
// // //         </button>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Clients;

// // import React from 'react'
// // import Mggs from "../assets/message.svg"
// // import Sales from "../assets/sales.svg"
// // import Email from "../assets/email.svg"
// // import Hrenq from "../assets/hrenq.svg"
// // import Flag from "../assets/flag.webp"
// // import Gate from "../assets/gate.webp"
// // const Locations = () => {
// //   return (
// //     <div className='flex flex-col max-w-7xl mx-auto mt-16 text-white'>
// //         <div className='flex flex-col items-center justify-center'>
// //             <p className='text-[50px]'>Our Locations</p>
// //             <p className='text-[18px]'>We work in all corners of the world. Find a WAC location near you.</p>
// //         </div>

// //         <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-8'>
// //             <div className='grid grid-cols-1 gap-4 '>
// //                 <img src={Gate} alt="" className='w-[450px]' />
// //                 <p className='flex flex-row items-center gap-8'><img src={Flag} alt="" className='w-[50px]' />INDIA</p>
// //                 <p>Webandcrafts Technology Solutions Pvt. Ltd. Special Economic Zone (SEZ) Infopark Thrissur, Koratty P.O, Thrissur - 680308, Kerala, India.</p>
// //                 <p className='font-bold mb-6'>Google Map</p>
// //             </div>

// //             <div className='grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-3'>
// //                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center  gap-8 border border-gray-600'>
// //                     <img src={Mggs} alt="" />
// //                     <div className='flex flex-col'>
// //                         <p>General Enquiry</p>
// //                         <p>+91 480 2733 111</p>
// //                     </div>
// //                 </div>
// //                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
// //                     <img src={Sales} alt="" />
// //                     <div className='flex flex-col'>
// //                         <p>General Enquiry</p>
// //                         <p>+91 480 2733 111</p>
// //                     </div>
// //                 </div>
// //                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
// //                     <img src={Email} alt="" />
// //                     <div className='flex flex-col'>
// //                         <p>General Enquiry</p>
// //                         <p>+91 480 2733 111</p>
// //                     </div>
// //                 </div>
// //                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
// //                     <img src={Hrenq} alt="" />
// //                     <div className='flex flex-col'>
// //                         <p>General Enquiry</p>
// //                         <p>+91 480 2733 111</p>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //         <hr className='border-gray-900' />
// //         {/* ......................................................................................................................... */}
// //         <div className='mt-10 flex flex-row'>
// //             <div className='flex flex-col gap-8'>
// //                 <img src={Gate} alt="" className='w-[450px]' />
// //                 <p className='flex flex-row gap-8 items-center'><img src={Flag} alt="" className='w-[50px]' />USA</p>
// //                 <p>Webandcrafts LLC, 20 F Street Northwest, 7th floor, Washington, District of Columbia 20001.</p>
// //                 <p className='font-bold underline'>Google map</p>
// //             </div>

// //             <div className=' flex flex-row gap-6'>
// //                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
// //                     <img src={Sales} alt="" />
// //                     <div className='flex flex-col'>
// //                         <p>General Enquiry</p>
// //                         <p>+91 480 2733 111</p>
// //                     </div>
// //                 </div>
// //                 <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
// //                     <img src={Sales} alt="" />
// //                     <div className='flex flex-col'>
// //                         <p>General Enquiry</p>
// //                         <p>+91 480 2733 111</p>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Locations

// //     <div className='grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-4 justify-center items-center space-x-3'>
// //                           <div className='w-[210px] h-[80px] md:w-[280px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center gap-4  md:gap-8 border border-gray-600'>
// //                               <img src={Mggs} alt="" className="w-[28px] md:w-[40px]"/>
// //                               <div className='flex flex-col'>
// //                                   <p className="text-[14px] md:text-[16px]">General Enquiry</p>
// //                                   <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
// //                               </div>
// //                           </div>
// //                           <div className='w-[210px] h-[80px] md:w-[280px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-4  md:gap-8 border border-gray-600'>
// //                               <img src={Sales} alt="" className="w-[28px] md:w-[40px]"/>
// //                               <div className='flex flex-col'>
// //                                   <p className="text-[14px] md:text-[16px]">General Enquiry</p>
// //                                   <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
// //                               </div>
// //                           </div>
// //                           <div className='w-[210px] h-[80px] md:w-[280px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-4  md:gap-8 border border-gray-600'>
// //                               <img src={Email} alt="" className="w-[28px] md:w-[40px]"/>
// //                               <div className='flex flex-col'>
// //                                   <p className="text-[14px] md:text-[16px]">General Enquiry</p>
// //                                   <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
// //                               </div>
// //                           </div>
// //                           <div className='w-[210px] h-[80px] md:w-[280px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-4  md:gap-8 border border-gray-600'>
// //                               <img src={Hrenq} alt="" className="w-[28px] md:w-[40px]"/>
// //                               <div className='flex flex-col'>
// //                                   <p className="text-[14px] md:text-[16px]">General Enquiry</p>
// //                                   <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
// //                               </div>
// //                           </div>
// //                       </div>

// // import React, { useRef, useState } from 'react'

// // const Test = () => {
// //     const [position, setPosition] = useState({x: 0, y: 0})
// //     const [visible, setVisible] = useState(false)

// //     const divRef = useRef(null)
// //     const handleMouseMove = (e)=> {
// //         const bounds = divRef.current.getBoundingClientRect()
// //         setPosition({x:e.clientX - bounds.left, x: e.clientY - bounds.top})
// //     }
// //   return (
// //     // <div className='w-full h-[300px] flex items-center justify-center mx-auto' onMouseEnter={()=>setVisible(true)} onMouseLeave={()=> setVisible(false)}>
// //     <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 shadow-2xl shadow-gray-100' onMouseEnter={()=>setVisible(true)} onMouseLeave={()=> setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>
// //         <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500
// //          via-indigo-500 to-purple-600 w-[300px] absolute z-0 transition-opacity duration-500
// //           mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{top: position.y - 150, left: position.x - 150}}/>
// //         <div className='max-w-md flex flex-row bg-gray-400 rounded-sm py-3 px-3'>
// //             mouse Hover test
// //         </div>
// //     </div>
// //   )
// // }

// // export default Test

// import React, { useRef, useState } from 'react';

// const Test = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [visible, setVisible] = useState(false);
//   const divRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (!divRef.current) return;
//     const bounds = divRef.current.getBoundingClientRect();
//     setPosition({
//       x: e.clientX - bounds.left,
//       y: e.clientY - bounds.top,
//     });
//   };

//   return (
//     <div
//       ref={divRef}
//       onMouseEnter={() => setVisible(true)}
//       onMouseLeave={() => setVisible(false)}
//       onMouseMove={handleMouseMove}
//       className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 shadow-2xl
//                  hover:border-blue-500 hover:shadow-lg transition-colors duration-300"
//     >
//       {/* glow circle — note: both width AND height are set, and we use filter + blur */}
//       <div
//         aria-hidden
//         className={`pointer-events-none absolute w-[300px] h-[300px] rounded-full
//                     bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600
//                     mix-blend-lighten filter blur-2xl transition-opacity duration-300
//                     ${visible ? 'opacity-70' : 'opacity-0'}`}
//         style={{
//           transform: `translate3d(${position.x - 150}px, ${position.y - 150}px, 0)`,
//           zIndex: 1,
//         }}
//       />

//       {/* content — keep it above the glow */}
//       <div className="relative z-10 p-4 bg-white">
//         mouse Hover test
//       </div>
//     </div>
//   );
// };

// export default Test;

// src/App.jsx
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
        <Route
          path="/services"
          element={
            <>
              <Servicesectioxxx />
              <Solutions />
              <Waccommerce />
            </>
          }
        />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
      <div className="bg-black">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
