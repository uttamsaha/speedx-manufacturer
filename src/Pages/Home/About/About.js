import React from 'react';
import img from '../../../Images/home-banner2.webp';

const About = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={img} class=" lg:max-w-xl sm:max-w-sm rounded-lg shadow-2xl xs:max-w-xs h-80" alt=''/>
    <div>
      <h1 class="lg:text-5xl sm:text-3xl xs:text-2xl font-bold">Welcome To,</h1>
      <h1 className='lg:text-5xl sm:text-3xl xs:text-2xl text-primary'>SpeedX Manufacturer</h1>
      <p class="py-6">Hey There, You are welcome to SpeedX Manufacturer. We Manufacture each electronics parts and products. We Sell products on customer demand. We also export products to other countries. If you are interested to buy. Feel free to contact us. Thank you.</p>
      <button class="btn btn-primary text-white">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default About;