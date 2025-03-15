import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Content from '../Components/Content'
import Gallery from '../Components/Gallery'
import Items from '../Components/items'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <div id="home">
        <Hero/>
        </div>
        <div id="about-us">
        <Content/>
        </div>
        <Items/>
        <div id="services">
        <Gallery/>
        </div>
        <div id="contact">
        <Contact />
      </div>
        <Footer/>
    </div>
  )
}

export default LandingPage