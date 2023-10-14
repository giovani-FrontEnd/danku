import React from 'react'
// import images 
import Support from '../assets/support-icon.svg';
import QuickPayment from '../assets/quick-payment-icon.svg'
import Water from '../assets/water-icon.svg';
// import motion 
import {motion} from 'framer-motion';

function Payment() {
  return (
    <div className='py-20 sm:px-[20px] md:px-[120px] flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center'>
      {/* box */}
      <motion.div
        initial={{opacity: 0, y: '50%'}}
        whileInView={{opacity: 1, y: '0%'}}
        transition={{delay: 0.3, duration: 0.9}}
        viewport={{ once: true }}
        className=" flex items-center mb-6 md:mb-0 w-full md:w-[32%] justify-center">
        <img src={Support} className='sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] me-5' />
        <div>
          <h2 className='sm:text-2xl text-[20px] mb-2 font-bold'>Free Shipping</h2>
          <p className='text-fontGray'>No charge for free delivery</p>
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: '50%'}}
        whileInView={{opacity: 1, y: '0%'}}
        transition={{delay: 0.5, duration: 0.9}}
        viewport={{ once: true }}
        className=" flex items-center mb-6 md:mb-0 w-full md:w-[32%] justify-center">
        <img src={QuickPayment} className='sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] me-5' />
        <div>
          <h2 className='sm:text-2xl text-[20px] mb-2 font-bold'>Quick Payment</h2>
          <p className='text-fontGray'>No charge for free delivery</p>
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: '50%'}}
        whileInView={{opacity: 1, y: '0%'}}
        transition={{delay: 0.7, duration: 0.9}}
        viewport={{ once: true }}
        className=" flex items-center w-full md:w-[32%] justify-center">
        <img src={Water} className='sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] me-5' />
        <div>
          <h2 className='sm:text-2xl text-[20px] mb-2 font-bold'>24/7 Support</h2>
          <p className='text-fontGray'>No charge for free delivery</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Payment
