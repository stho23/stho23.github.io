import React from 'react'
import { HiOutlineArrowDown } from 'react-icons/hi'
import heroBackground from '../assets/images/PortfolioLandingImage.jpeg'
import { Link } from 'react-scroll'

export const Hero = () => {

  return (
    <section id='home' className="h-screen relative" style={{backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-white text-center h-auto max-h-3/4 overflow-hidden flex flex-col items-center justify-center">
          <div className="text-7xl max-phone:text-6xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-9xl 2xl:text-9xl font-bold mb-2">SIMEON THOMAS</div>
          <div className="flex-col items-center text-6xl max-phone:text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-7xl font-bold py-14">
            <span className="text-white">I'M A</span>
            <span className="text-teal">&#160;FULL STACK DEVELOPER</span>
          </div>
        </div>
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <Link to="work" smooth={true} duration={1000} offset={-100} spy={true} activeClass="active">
          <HiOutlineArrowDown size={32} className="text-teal"/>
        </Link>
        </div>    
      </div>
    </section>
  )
}

export default Hero;