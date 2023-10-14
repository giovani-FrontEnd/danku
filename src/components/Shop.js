import React from 'react'
import Arrow from '../assets/arrow-icon.svg';
import product1 from '../assets/product-one.svg'
import product2 from '../assets/produc-two.svg'
import product3 from '../assets/product-three.svg'
import stars from '../assets/stars-icon.svg';
import plusIcon from '../assets/plus-icon.svg';
// import motion 
import {motion, whileInView} from 'framer-motion';

function Shop() {
  return (
    <div id='Shop' className='lg:flex-row flex-col flex items-center py-20  px-[30px] sm:px-[120px]'>
      <motion.div
        initial={{opacity: 0, x: '-100%'}}
        whileInView={{opacity: 1, x: '0'}}
        transition={{delay: 0.3, duration: 0.8}}
        viewport={{ once: true }}
        className="lg:w-1/3 w-full mx-auto block text-center mb-5 me-0 sm:me-4">
        <h1 className='text-3xl sm:text-5xl'>Best Seller Product</h1>
        <div className='flex items-center justify-center mt-3'>
          <p className='me-0 sm:me-5 text-fontGray'>See all colection</p>
          <img src={Arrow} className='w-[40px] h-[40px] cursor-pointer' />
        </div>
      </motion.div>
      <div className="w-3/3 flex-col lg:flex-row flex gap-5">
        {/* card  */}
        <motion.div
          initial={{opacity: 0, x: '100%'}}
          whileInView={{opacity: 1, x: '0%'}}
          transition={{delay: 0.3, duration: 1}}
          viewport={{ once: true }}
          className="bg-[#c1d0e4] w-[250px] rounded-[30px] text-white card">
          <img src={product1} className='w-[200px] mb-5 h-[200px] mx-auto block' />
          <div className="info bg-white text-black px-5 py-3 rounded-[35px]">
            <h2 className='text-2xl mb-2'>Cammile</h2>
            <img src={stars} alt="" />

            <div className='flex justify-between items-center mt-10'>
              <h1 className='text-2xl'>$65.00</h1>
              <img src={plusIcon} className='w-[35px] h-[35px]' />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: '100%'}}
          whileInView={{opacity: 1, x: '0%'}}
          transition={{delay: 0.5, duration: 1}}
          viewport={{ once: true }}
          className="bg-[#c1d0e4] w-[250px] rounded-[30px] text-white card">
          <img src={product2} className='w-[200px] mb-5 h-[200px] mx-auto block' />
          <div className="info bg-white text-black px-5 py-3 rounded-[35px]">
            <h2 className='text-2xl mb-2'>Cammile</h2>
            <img src={stars} alt="" />

            <div className='flex justify-between items-center mt-10'>
              <h1 className='text-2xl'>$65.00</h1>
              <img src={plusIcon} className='w-[35px] h-[35px]' />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: '100%'}}
          whileInView={{opacity: 1, x: '0%'}}
          transition={{delay: 0.7, duration: 1}}
          viewport={{ once: true }}
          className="bg-[#c1d0e4] w-[250px] rounded-[30px] text-white card">
          <img src={product3} className='w-[200px] mb-5 h-[200px] mx-auto block' />
          <div className="info bg-white text-black px-5 py-3 rounded-[35px]">
            <h2 className='text-2xl mb-2'>Cammile</h2>
            <img src={stars} alt="" />

            <div className='flex justify-between items-center mt-10'>
              <h1 className='text-2xl'>$65.00</h1>
              <img src={plusIcon} className='w-[35px] h-[35px]' />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Shop
