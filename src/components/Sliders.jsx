import React, { useEffect, useState } from 'react'

const videoslides = [
        {
            video: "/videos/bgvideo1.mp4",
            title: "Welcome to WAC, Team Google",
            subtitle: "xxx",
        },
        {
            video: "/videos/bgvideo2.mp4",
            title: "Innovating The Future",
            subtitle: "xxx",
        },
        {
            video: "/videos/bgvideo3.mp4",
            title: "Helping You Take The Digital Leap",
            subtitle: "xxx",
        },
        {
            video: "/videos/bgvideo4.mp4",
            title: "A Journey To Capture Life",
            subtitle: "xxx",
        },
    ]
const Sliders = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=> {
            setCurrentIndex((prev)=> (prev + 1) % videoslides.length)
        }, 7000);

        return ()=> clearInterval(interval)
    },[])

    const {video, title, subtitle} = videoslides[currentIndex];
  return (
    <div className='relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 h-screen text-white overflow-hidden'>
            <video key={video} className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-opacity duration-1000"
            src={video}
            autoPlay
            loop
            muted
            playsInline/>

             <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10" />

             <h1 className='text-4xl md:text-6xl font-extralight font-mont animate-fadeIn'>{title}</h1>
             <p className='mt-4 text-lg md:text-xl max-w-lg font-mont animate-fadeIn'>{subtitle}</p>
    </div>
  )
}

export default Sliders