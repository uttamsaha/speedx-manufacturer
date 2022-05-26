import React from 'react';
import {FaInstagram,FaLinkedinIn,FaFacebookF,FaTwitter,FaSkype,FaGooglePlusG,FaMapMarkerAlt} from 'react-icons/fa';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {MdPublic,MdOutlinePhone} from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Footer.css';
import img1 from '../../../Images/1.png';
import img2 from '../../../Images/2.png';
import img3 from '../../../Images/3.png';

const Footer = () => {
  return (
    <div className='outer-footer'>
        <div className='footer'>
            <div className='footer-items'>
                <h5>ABOUT US</h5>
                <div>
                <div className='social-icons'>
                    <FaInstagram className='icon'></FaInstagram>
                    <FaLinkedinIn className='icon'></FaLinkedinIn>
                    <FaFacebookF className='icon'></FaFacebookF>
                    <FaTwitter className='icon'></FaTwitter>
                    <FaSkype className='icon'></FaSkype>
                    <FaGooglePlusG className='icon'></FaGooglePlusG>
                </div>
                    <div className='hr'></div>
                </div>
                <p>50 Years of Experience in finance and consultant business! We helping a client achieve their goals than programming a workout and setting the pin in the weight stack</p>
                <button>READ MORE</button>
            </div>

            <div className="footer-items">
                <h5>QUICK LINKS</h5>
                <div className='links'>
                    <Link to="#">Home</Link>
                    <Link to="#">About</Link>
                    <Link to="#">Service</Link>
                    <Link to="#">Price</Link>
                    <Link to="#">Reviews</Link>
                    <Link to="#">Contact us</Link>
                </div>
            </div>

            <div className="footer-items">
                <h5>RECENT STORED</h5>
                <div>
                    <div className='recent-stored'>
                        <img src={img1} alt="" />
                        <div className='information'>
                            <h6>Inventer Generator</h6>
                            <p>April 30, 2022</p>
                            <p className='price'>$40</p>
                        </div>
                    </div>
                    <div className='recent-stored'>
                        <img src={img2} alt="" />
                        <div className='information'>
                            <h6>Compound Saw</h6>
                            <p>April 30, 2022</p>
                            <p className='price'>$38</p>
                        </div>
                    </div>
                    <div className='recent-stored'>
                        <img src={img3} alt="" />
                        <div className='information'>
                            <h6>Impact Drill Machine</h6>
                            <p>April 30, 2022</p>
                            <p className='price'>$36</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-items">
                <h5>CONTACT INFO</h5>
                <p className='flex'><FaMapMarkerAlt className='icn'></FaMapMarkerAlt>Zaltsburg, Inc. 1355 Market Street, San Francisco, CA 94103</p>
                <p className='flex'><MdOutlinePhone className='icn'></MdOutlinePhone>+ 1234567890 <br /> +1234567890</p>
                <p className='flex'><HiOutlineMailOpen className='icn'></HiOutlineMailOpen>info@exsythemes.com</p>
                <p className='flex'><MdPublic className='icn'></MdPublic>www.exsythemes.com</p>
            </div>
        </div>
        <div className='inner-footer'>
            <p>© 2022 SpeedX Manufacturer All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer;