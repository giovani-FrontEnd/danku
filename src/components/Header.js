import React, { useState } from 'react';
// import images 
import Logo from '../assets/logo.svg';
import HeroImg from '../assets/hero-image.svg';
import SearchIcon from '../assets/search-icon.svg';
// import icons 
import {FaShoppingBag} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
// import data 
import { heroTitle } from '../data';
import { heroSubtitle } from '../data';
import MobileBar from './MobileBar';
// import motion 
import { motion } from 'framer-motion';

function Header() {
  const [openMobileBar, setOpenMobileBar] = useState(false);

  return (
    <header className={`relative text-white w-full min-h-screen h-[100vh] md:h-[150vh] abs`}>
      {/* navbar  */}
      <nav className='px-[30px] sm:px-[100px] flex justify-between items-center py-[10px]'>
        <div className="logo flex items-center">
          <img src={Logo} className='w-[120px] h-[100px]' />
        </div>
        <ul className='hidden md:flex mt-1'>
          <li className='me-12'>
            <a href="home" className='hover:text-green duration-300 text-green'>Home</a>
          </li>
          <li className='me-12'>
            <a href="#About" className='hover:text-green duration-300'>About Us</a>
          </li>
          <li className='me-12'>
            <a href="#Shop" className='hover:text-green duration-300'>Shop</a>
          </li>
          <li className='me-12'>
            <a href="#Contact" className='hover:text-green duration-300'>Contact</a>
          </li>
        </ul>
        <div className='flex items-center'>
          <div className="shop-icon me-3 text-2xl cursor-pointer">
            <FaShoppingBag />
          </div>
          <div className="flex md:hidden text-2xl cursor-pointer" onClick={() => setOpenMobileBar(!openMobileBar)}>
            {openMobileBar ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>

      {/* hero  */}
      <motion.div 
        initial={{opacity: 0, y: '-100%'}} 
        animate={{opacity: 1, y: '0'}} 
        transition={{delay: 0.2, duration: 0.5}} 
        className="px-[70] w-full md:px-[100px] py-20 flex flex-col items-center justify-center"
        >
        <h1 className=' text-3xl sm:text-5xl md:text-6xl font-bold max-w-[90%] md:max-w-[70%] text-center'>{heroTitle}</h1>
        <p className='text-white text-[13px] sm:text-1xl py-4 w-[70%] md:max-w-[40%] text-center'>{heroSubtitle}</p>
        <form className='w-[80%] sm:w-[350px] mt-3 justify-between text-white border-2 rounded-full flex bg-fontGray'>
          <input type="search" className='text-[15px] placeholder:text-white w-[80%] px-3 bg-transparent outline-none' placeholder='search plant' />
          <button type='submit' className=''>
            <img src={SearchIcon} alt="" />
          </button>
        </form>
      </motion.div>

      {/* price  */}
      <div className="hidden lg:block price px-4 py-5 bg-fontGray border-2 absolute top-[47%] right-[3%] rounded-[20px] w-fit">
        <h1>$65.22</h1>
        <h4>Dracona Figure</h4>
      </div>

      {/* mobileBar  */}
      {openMobileBar && <MobileBar openMobileBar={openMobileBar} />}
    </header>
  )
}

export default Header
