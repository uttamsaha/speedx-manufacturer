import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner mb-20'>
        <div className='banner-items'>
        <h1 className='title-text1 text-white  lg:text-4xl mb-7 mt-9'>SpeedX Manufacturer</h1>
        <h1 className='title-text2 text-white lg:text-7xl font-bold mb-5'>The <span>Good Staff</span> Place!</h1>
        <button className='banner-btn'>Read More</button>
        </div>
    </div>
  )
}

export default Banner;