import React from 'react'
// import images 
import SearchIcon from '../assets/search-icon.svg'

function Contact() {
  return (
    <div id='Contact' className='bg-[#525e6c] text-white py-20 px-[30px] sm:px-[120px] '>
      <div className="flex md:flex-row flex-col justify-center  md:justify-between gap-5 flex-wrap">
      <div>
        <h1 className='text-4xl mb-5'>Newslatter</h1>
        <form className='w-[80%] sm:w-[350px] mt-3 justify-between text-white border-2 rounded-full flex bg-fontGray'>
          <input type="search" className='text-[15px] placeholder:text-white w-[80%] px-3 bg-transparent outline-none' placeholder='enter your email' />
          <button type='submit' className=''>
            <img src={SearchIcon} alt="" />
          </button>
        </form>
      </div>

      <div>
        <h1 className='text-2xl font-bold mb-8'>Support</h1>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      <div>
        <h1 className='text-2xl font-bold mb-8'>Useful Links</h1>
        <ul>
          <li>
            <a href="#">Payment & Tax</a>
          </li>
          <li>
            <a href="#">Terms of services</a>
          </li>
          <li>
            <a href="#">Privacy Policy </a>
          </li>
        </ul>
      </div>

      <div>
        <h1 className='text-2xl font-bold mb-8'>Our Menu</h1>
        <ul>
          <li>
            <a href="#">Best Product</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
        </ul>
      </div>

      <div>
        <h1 className='text-2xl font-bold mb-8'>Support</h1>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      </div>
      <hr className='w-full bg-white h-[2px] my-10' />
      <h1 className='text-1xl text-center my-5'>&copy; 2022 Danku - All rights reserved.</h1>
    </div>
  )
}

export default Contact
