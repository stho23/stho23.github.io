import React, {useState, useEffect } from 'react'
import logo from '../assets/images/PortfolioLogo.png'
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6'

export const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false)
    const[isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    } 
    
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)'); 
    
        const handleMediaQueryChange = (event) => {
          if (!event.matches && isMenuOpen) {
            toggleMenu();
          }
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);
    
        return () => {
          mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
      }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200)
            {
                setIsSticky(true);
            }
            else
            {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    })
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Work", path: "work"},
        {link: "Contact", path: "contact"}
    ]

    return (
    <header className={`w-full md:bg-transparent fixed top- left-0 right-0 z-[50] ${isMenuOpen ? "bg-[#0D0D0D]" : "bg-transparent"}`}>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-white bg-[#0D0D0D] duration-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>  
                <a href="" className="text-2xl font-semibold flex items-center space-x-3"><img src={logo} alt="" className='w-16 inline-block py-2 pl-2 items-center'/></a>
                <ul className='md:flex space-x-12 hidden cursor-pointer'>
                    {
                        navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-teal first-font-medium'>{link}</Link>)
                    }
                </ul>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-gray-700 focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6 text-white'/>) : (<FaBars className='h-6 w-6 text-white'/>)
                        }
                    </button>
                </div>
            </div>
            <div className={`${isMenuOpen ? "space-y-4 px-8 mt-16 py-7 bg-[#0D0D0D] block fixed top-8 right-0 left-0 h-screen w-full" : "hidden"}`}>   
                {
                     navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} onClick={toggleMenu} className='block text-base duration-300 text-white py-1 hover:text-teal first-font-medium cursor-pointer'>{link}</Link>)
                }
            </div>
        </nav>

    </header>
  )
}

export default Navbar;