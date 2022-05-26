import React from "react";
import "./Contact.css";
import image from '../../../Images/contact.jpg';
import {HiArrowRight} from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="sm:text-2xl lg:text-3xl font-bold uppercase text-primary">Contact us</h1>
      <div  data-aos="fade-up" className="contact-us">
      <div>
        <h5 className="contact-title font-bold">ANY QUESTIONS OR SUGGESTIONS?</h5>
        <h1 className="contact-subtitle text-primary uppercase">Write us</h1>
        <div className="contact-us-container">
          <div className="divider"></div>
          <div className="contact-info">
              <p>If you have any question you can send us your message by fill up the forms.  We will be very happy to hear from you.</p>

              <form>
                  <input className="name" type="text"  placeholder="Enter name" required/> <br />
                  <input className="email" type="email" placeholder="Enter email" required/> <br />
                  <textarea className="msg" name="" id="" cols="22" rows="4" placeholder="Enter your message"></textarea> <br />
                  <button className="flex text-primary items-center justify-evenly">Submit <HiArrowRight></HiArrowRight></button>
              </form>
          </div>
          <div className="contact-image">
              <img className="rounded" src={image} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
