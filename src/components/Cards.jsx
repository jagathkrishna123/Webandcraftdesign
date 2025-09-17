import React from 'react'
import Image1 from "../assets/img1.jpg"
import Image2 from "../assets/img2.jpg"
import Image3 from "../assets/img3.jpg"
import Image4 from "../assets/img4.jpg"
import Image5 from "../assets/img5.jpg"
import Image6 from "../assets/img6.jpg"
import { FaArrowRightLong } from "react-icons/fa6";



const cases = [
    {
        img: Image1,
        title:"Food",
        subtitle: "Caribou Helping a reputed coffee chain go digital with a powerful app in their Kuwait chapter"
    },
    {
        img: Image2,
        title:"Retail",
        subtitle: "LuLu Hypermarket Building a one-click path for a search-intensive, high volume big brand store"
    },
    {
        img: Image3,
        title:"Education",
        subtitle: "Middlesex University: Revamping the digital face of a world-class university for better visual impact"
    },
    {
        img: Image4,
        title:"Retail",
        subtitle: "Yallatoys Elevating Qatar's No.1 toy brand with our digital prowess in web, app, and digital marketing"
    },
    {
        img: Image5,
        title:"Retail/Manufacturing",
        subtitle: "Dtale Reshaping the entire digital landscape for India’s foremost design-led, interior fit-out brand"
    },
    {
        img: Image6,
        title:"Retail/Food",
        subtitle: "IKEA Foods Delectably designed branded E-commerce store to launch a new sales channel"
    },
]
const Cards = () => {
  return (
    <div className='max-w-7xl flex flex-col items-center text-gray-800  gap-4 font-mont mb-4 mx-auto'>
        <h1 className='w-full text-[30px] md:text-[53px] font-medium'>Case Studies</h1>
        {/* border apply here vv */}
            <div className='w-full grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 gap-y-[60px] px-3 py-3 sm:px-0 items-center justify-center max-w-7xl'> 
                {cases.map((item,index)=> (
                    <div key={index} className='w-full rounded-md overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 mx-auto'>
                        <img src={item.img} alt="" className='rounded-md' />
                        <div className='flex flex-col gap-3 mt-4'>
                            <p className='text-[13px] md:text-[16px] text-gray-900 font-mont font-semibold'>{item.title}</p>
                            <p className='text-[16px] md:text-[20px] font-mont text-[#141414]'>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className='border border-black bg-white font-mont text-black font-semibold mt-4 px-4 py-3 flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>View all works <FaArrowRightLong /></button>
</div>
  )
}

export default Cards