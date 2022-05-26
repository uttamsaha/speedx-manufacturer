import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-items'>
        <h1 className='text-white text-4xl mb-7'>SpeedX Manufacturer</h1>
        <h1 className='text-white text-7xl font-bold mb-5'>The <span>Good Staff</span> Place!</h1>
        <button className='banner-btn'>Read More</button>
        </div>
    </div>
  )
}

export default Banner;