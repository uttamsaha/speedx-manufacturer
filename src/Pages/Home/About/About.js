import React from "react";
import img from "../../../Images/home-banner2.webp";
import "./About.css";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-100 lg:mt-[-290px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          className=" lg:max-w-xl sm:max-w-sm-sm xs:max-w-xs rounded-lg shadow-2xl lg:h-80"
          alt=""
        />
        <div>
          <h1 className=" welcome-text xs:text-3xl lg:text-5xl sm:text-3xl  font-bold">
            Welcome To,
          </h1>
          <h1 className="welcome-text lg:text-5xl sm:text-3xl xs:text-3xl text-primary">
            SpeedX Manufacturer
          </h1>
          <p className="py-6">
            Hey There, You are welcome to SpeedX Manufacturer. We Manufacture
            each electronics parts and products. We Sell products on customer
            demand. We also export products to other countries. If you are
            interested to buy. Feel free to contact us. Thank you.
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
