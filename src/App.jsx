import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Program'  
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import VideoPlayer from './Component/VideoPlayer/VideoPlayer'
const App = () => {
  const [playstate, setPlaystate] =useState(false);
  return (
    <div>
      
      <Hero/>
      <div className='container'>
      <Navbar/>
        <Title subTitle="Our Program" title="What We Offer"/>
        <Programs/>
        
        <About setPlaystate={setPlaystate}/>
        <Title subTitle="Gallary" title="Campus photos"/>
        <Campus/>
        <Title subTitle="TESTIMONIALS" title="What student says"/>

        <Testimonials/>
        <Title subTitle="Contacts Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
        
      </div>
      <VideoPlayer playstate={playstate} setPlaystate={setPlaystate}/>
    </div>
  )
}

export default App
