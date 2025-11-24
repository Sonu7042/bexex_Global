import React from "react";
import "../Css/contact.css";
import Buttons from "./Buttons";
import Footer from "./Footer";


export default function EnquiryForm() {
  return (
    <>
    <div className="enquiry-bg px-4 md:px-16 lg:px-12">
          <div className="enquiry-nav-row">
            <span className="enquiry-nav">Contact</span>
            {/* <span className="enquiry-nav-hr"></span> */}
          </div>
      <div className="enquiry-container">
        
        {/* Left */}
        <div className="enquiry-left">
          <h1 className="enquiry-title">
            Enquiry <span className="enquiry-title-italic">form</span>
          </h1>
          <p className="enquiry-desc">
            Questions? Queries? Contact our team and we’ll get back to you as soon as possible.
          </p>
          <div className="enquiry-left-email applyfont">bexex@official.com</div>
          <div className="enquiry-email-hr applyfont"></div>
        </div>
        {/* Right */}
        <div className="enquiry-right">
          <form className="enquiry-form">
            <label className="applyfont">
              NAME *
              <input type="text" required />
            </label>
            <label className="applyfont">
              PHONE *
              <input type="tel" required />
            </label>
            <label className="applyfont">
              EMAIL *
              <input type="email" required />
            </label>
            <label className="applyfont">
              MASSEGE *
              <textarea />
            </label>
            <div className="enquiry-form-note applyfont  ">
              By clicking 'Send Message' you're confirming that you agree with our Terms and Conditions.
            </div>
            {/* <button type="submit" className="enquiry-send-btn" aria-label="Send Message">
              <span className="enquiry-send-arrow">&#8594;</span>
            </button> */}
            <div className="enquiry-send-btn">

            <Buttons />
            </div>
          </form>
        </div>
      </div>
    </div>




     <section className="contactmap-bg px-4 md:px-16 lg:px-12 ">
      <div className="contactmap-container">
        {/* Left: Map Image */}
        <div className="contactmap-left">
          {/* <img src={"delhiMap"} alt="Delhi Map" className="contactmap-img" /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.238646920445!2d77.04526175394953!3d28.6579322104105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0452bb38a1a9%3A0xdf70d09a8928c98c!2sSihvram%20Park%2C%20Nilothi%2C%20Delhi%2C%20110041!5e0!3m2!1sen!2sin!4v1763972063123!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* Right: Dark Card */}
        <div className="contactmap-right">
          <div className="contactmap-center">
            <span className="contactmap-pin">
              {/* Unicode Location Pin or replace with SVG */}
              &#128205;
            </span>
            <h2 className="contactmap-title">
              o-100 random place <br />
              New Delhi - 110084
            </h2>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contactmap-link">
              Google map
            </a>
            <div className="contactmap-hr"></div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
}
