import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sliders from './components/Sliders'
import Scrolltitles from './components/Scrolltitles'
import Cards from './components/Cards'
import About from './components/About'
import Whatwedo from './components/Whatwedo'
import Genai from './components/Genai'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <div className='min-h-[70vh]'>
        <Home/>
      </div>
      <Sliders/>
      {/* <Scrolltitles/> */}
      <Cards/>
      <About/>
      <Whatwedo/>
      <Genai/>
    </div>
  )
}

export default App