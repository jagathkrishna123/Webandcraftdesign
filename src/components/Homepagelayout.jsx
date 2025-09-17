import React from 'react'
import Homer from '../pages/Homer'
import Cards from './Cards'
import About from './About'
import Whatwedo from './Whatwedo'
import Genai from './Genai'
import Clients from './Clients'
// import Contact from './Contact'

const Homepagelayout = () => {
  return (
    <div>
        <Homer/>
        <Cards/>
        <About/>
        <Whatwedo/>
        <Genai/>
        <Clients/>
        {/* <Contact/> */}
    </div>
  )
}

export default Homepagelayout

// implement routes in app.jsx and also main.jsx