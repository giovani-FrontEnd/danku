import React from 'react'
import Image1 from '../assets/image-one.svg'
import Image2 from '../assets/image-two.svg'
import Image3 from '../assets/image-three.svg'
// import motion 
import {motion} from 'framer-motion';

function ImageSection() {
  return (
    <div className='py-20'>
      <motion.h1
        initial={{opacity: 0, y: '100%'}}
        whileInView={{opacity: 1, y: '0'}}
        transition={{delay: 0.3, duration: 0.7}}
        viewport={{ once: true }}
        className='text-3xl mb-4 text-center'
        >
          Interior Plant Reference
        </motion.h1>
      <motion.p
        initial={{opacity: 0, y: '100%'}}
        whileInView={{opacity: 1, y: '0'}}
        transition={{delay: 0.3, duration: 0.7}}
        viewport={{ once: true }}
        className='px-2 sm:px-0 text-center text-fontGray'
        >
          make your home so comfortable with refreshing plants
        </motion.p>
      <div className='px-[30px] sm:px-[120px] md:flex-row flex-col my-5 flex items-center gap-5'>
        <div>
          <motion.img
            initial={{opacity:0, x: '-100%'}}
            whileInView={{opacity:1, x: '0'}}
            transition={{delay: 0.3, duration: 1}}
            viewport={{ once: true }}
           src={Image1} className='rounded-md w-[600px]' />
          <motion.img
            initial={{opacity:0, x: '-100%'}}
            whileInView={{opacity:1, x: '0'}}
            transition={{delay: 0.3, duration: 1}}
            viewport={{ once: true }}
           src={Image2} className='rounded-md mt-5 w-[600px]' />
        </div>
        <div>
          <motion.img
            initial={{opacity:0, x: '100%'}}
            whileInView={{opacity:1, x: '0'}}
            transition={{delay: 0.3, duration: 1}}
            viewport={{ once: true }}
           src={Image3} className='rounded-md w-[600px]' />
        </div>
      </div>
    </div>
  )
}

export default ImageSection
