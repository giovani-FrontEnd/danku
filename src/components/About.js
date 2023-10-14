import React from 'react'
// import images 
import sun from '../assets/sun-icon.svg';
import water from '../assets/water-icon.svg';
import plant from '../assets/plant-icon.svg';
import temperature from '../assets/temperature-icon.svg';
import image from '../assets/image-four.svg'
// import motion 
import {motion} from 'framer-motion'

function About() {
  return (
    <div id='About' className='flex lg:flex-row flex-col items-center justify-between py-20  px-[30px] sm:px-[120px]'>
    <div className="w-full lg:w-1/2 lg:me-10">
      <h1 className='text-4xl sm:text-5xl mb-4'>How to care <br /> for plants</h1>
      <p className='text-fontGray text-1xl'>Take care of plants with your heart</p>    

      <ul
        className='mt-12'
        >
        <li className='flex items-center mb-10'>
          <img src={sun} className='me-5 w-[80px] h-[80px]' />
          <div>
            <h2 className='mb-2 text-2xl font-bold'>Adjust Lighting</h2>
             <p className='text-fontGray'>When caring for indoor plants, make sure the room temperature is neither too cold nor too hot</p>
          </div>
        </li>
        <li className='flex items-center mb-10'>
          <img src={water} className='me-5 w-[80px] h-[80px]' />
          <div>
            <h2 className='mb-2 text-2xl font-bold'>Don't water too often</h2>
             <p className='text-fontGray'>Watering ornamental plants indoors does not have to be done every day.</p>
          </div>
        </li>
        <li className='flex items-center mb-10'>
          <img src={plant} className='me-5 w-[80px] h-[80px]' />
          <div>
            <h2 className='mb-2 text-2xl font-bold'>Don't water too often</h2>
             <p className='text-fontGray'>Watering ornamental plants indoors does not have to be done every day.</p>
          </div>
        </li>
        <li className='flex items-center mb-10'>
          <img src={temperature} className='me-5 w-[80px] h-[80px]' />
          <div>
            <h2 className='mb-2 text-2xl font-bold'>Fertilize regularly</h2>
             <p className="text-fontGray">The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength</p>
          </div>
        </li>
      </ul>
    </div>
    <motion.div
      initial={{opacity: 0, x: '100%'}}
      whileInView={{opacity: 1, x: '0'}}
      viewport={{ once: true }}
      transition={{delay: 0.3, duration: 0.8}}
      className="w-full flex justify-end lg:w-[550px]">
      <img src={image} />
    </motion.div>
    </div>
  )
}

export default About
