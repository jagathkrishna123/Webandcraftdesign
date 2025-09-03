// import React from "react";
// import { OUR_CLIENTS } from "../constants";

// const Clients = () => {
//   return (
//     <section className="bg-black text-white py-16 px-6 md:px-20">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold">Clients</h2>
//         <p className="text-lg md:w-1/2 mt-4 md:mt-0">
//           Our clients are everything to us; so are we to them.
//         </p>
//       </div>

//       {/* Client Logos */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
//         {OUR_CLIENTS.map((item, index) => (
//           <img
//             key={index}
//             src={item.img}
//             alt=""
//             className="h-12 object-contain grayscale hover:grayscale-0 transition"
//           />
//         ))}
//       </div>

//       {/* Button */}
//       <div className="flex justify-center mt-12">
//         <button className="border border-gray-500 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-white hover:text-black transition">
//           View all clients →
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Clients;


import React from 'react'
import Mggs from "../assets/message.svg"
import Sales from "../assets/sales.svg"
import Email from "../assets/email.svg"
import Hrenq from "../assets/hrenq.svg"
import Flag from "../assets/flag.webp"
import Gate from "../assets/gate.webp"
const Locations = () => {
  return (
    <div className='flex flex-col max-w-7xl mx-auto mt-16 text-white'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-[50px]'>Our Locations</p>
            <p className='text-[18px]'>We work in all corners of the world. Find a WAC location near you.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-8'>
            <div className='grid grid-cols-1 gap-4 '>
                <img src={Gate} alt="" className='w-[450px]' />
                <p className='flex flex-row items-center gap-8'><img src={Flag} alt="" className='w-[50px]' />INDIA</p>
                <p>Webandcrafts Technology Solutions Pvt. Ltd. Special Economic Zone (SEZ) Infopark Thrissur, Koratty P.O, Thrissur - 680308, Kerala, India.</p>
                <p className='font-bold mb-6'>Google Map</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-3'>
                <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center  gap-8 border border-gray-600'>
                    <img src={Mggs} alt="" />
                    <div className='flex flex-col'>
                        <p>General Enquiry</p>
                        <p>+91 480 2733 111</p>
                    </div>
                </div>
                <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
                    <img src={Sales} alt="" />
                    <div className='flex flex-col'>
                        <p>General Enquiry</p>
                        <p>+91 480 2733 111</p>
                    </div>
                </div>
                <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
                    <img src={Email} alt="" />
                    <div className='flex flex-col'>
                        <p>General Enquiry</p>
                        <p>+91 480 2733 111</p>
                    </div>
                </div>
                <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
                    <img src={Hrenq} alt="" />
                    <div className='flex flex-col'>
                        <p>General Enquiry</p>
                        <p>+91 480 2733 111</p>
                    </div>
                </div>
            </div>
        </div>
        <hr className='border-gray-900' />
        {/* ......................................................................................................................... */}
        <div className='mt-10 flex flex-row'>
            <div className='flex flex-col gap-8'>
                <img src={Gate} alt="" className='w-[450px]' />
                <p className='flex flex-row gap-8 items-center'><img src={Flag} alt="" className='w-[50px]' />USA</p>
                <p>Webandcrafts LLC, 20 F Street Northwest, 7th floor, Washington, District of Columbia 20001.</p>
                <p className='font-bold underline'>Google map</p>
            </div>

            <div className=' flex flex-row gap-6'>
                <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
                    <img src={Sales} alt="" />
                    <div className='flex flex-col'>
                        <p>General Enquiry</p>
                        <p>+91 480 2733 111</p>
                    </div>
                </div>
                <div className='w-[250px] h-[80px] md:w-[300px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-8 border border-gray-600'>
                    <img src={Sales} alt="" />
                    <div className='flex flex-col'>
                        <p>General Enquiry</p>
                        <p>+91 480 2733 111</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations


    <div className='grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-4 justify-center items-center space-x-3'>
                          <div className='w-[210px] h-[80px] md:w-[280px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center gap-4  md:gap-8 border border-gray-600'>
                              <img src={Mggs} alt="" className="w-[28px] md:w-[40px]"/>
                              <div className='flex flex-col'>
                                  <p className="text-[14px] md:text-[16px]">General Enquiry</p>
                                  <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
                              </div>
                          </div>
                          <div className='w-[210px] h-[80px] md:w-[280px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-4  md:gap-8 border border-gray-600'>
                              <img src={Sales} alt="" className="w-[28px] md:w-[40px]"/>
                              <div className='flex flex-col'>
                                  <p className="text-[14px] md:text-[16px]">General Enquiry</p>
                                  <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
                              </div>
                          </div>
                          <div className='w-[210px] h-[80px] md:w-[280px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-4  md:gap-8 border border-gray-600'>
                              <img src={Email} alt="" className="w-[28px] md:w-[40px]"/>
                              <div className='flex flex-col'>
                                  <p className="text-[14px] md:text-[16px]">General Enquiry</p>
                                  <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
                              </div>
                          </div>
                          <div className='w-[210px] h-[80px] md:w-[280px] md:h-[90px] flex flex-row  rounded-sm items-center justify-center p-2 gap-4  md:gap-8 border border-gray-600'>
                              <img src={Hrenq} alt="" className="w-[28px] md:w-[40px]"/>
                              <div className='flex flex-col'>
                                  <p className="text-[14px] md:text-[16px]">General Enquiry</p>
                                  <p className="text-[14px] md:text-[16px]">+91 480 2733 111</p>
                              </div>
                          </div>
                      </div>