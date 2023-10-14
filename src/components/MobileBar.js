import React from 'react'
// import motion
import {motion} from 'framer-motion';

function MobileBar() {
  return (
    <motion.div
    initial={{opacity: 0, y: '-40%'}}
    animate={{opacity: 1, y: '0%'}}
    transition={{delay: 0.3, duration: 0.5}}
    viewport={{ once: true }}
     className={`flex md:hidden absolute top-20 right-10 max-w-[300px] sm:w-[300px] w-[200px] p-5 bg-white z-10`}>
      <ul className='text-black'>
          <li className='my-3 text-[18px]'>
            <a href="home" className='hover:text-green duration-30'>Home</a>
          </li>
          <li className='my-3 text-[18px]'>
            <a href="#About" className='hover:text-green duration-300'>About Us</a>
          </li>
          <li className='my-3 text-[18px]'>
            <a href="#Shop" className='hover:text-green duration-300'>Shop</a>
          </li>
          <li className='my-3 text-[18px]'>
            <a href="#Contact" className='hover:text-green duration-300'>Contact</a>
          </li>
        </ul>
    </motion.div>
  )
}

export default MobileBar
