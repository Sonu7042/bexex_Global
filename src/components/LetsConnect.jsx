import React from "react";
import "../Css/letsConnect.css";
import backgroundImg from "../assets/images/bgImgOfConnect.png"; 
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
// import bexexDesign from '../assets/images/bexexDesign.png'

export default function LetsConnect() {
  return (
    <div
      className="connect-root"
      style={{
        backgroundImage: `url(${backgroundImg})`
      }}
    >
      <div className="connect-content">
        <div className="connect-top">
          <div className="connect-divider"></div>
          <span className="connect-title">Our Services</span>
          <div className="connect-divider"></div>
        </div>
        <h1 className="connect-header">Let’s Connect</h1>
        <div className="connect-desc">
          Feel free to contact me if having any questions. I'm available for new projects or just for chatting.
        </div>
        <Link to={"/contact"} className="connect-btn">
          <span className="connect-dot"></span> Contact Us
        </Link>
      </div>
      {/* <div className="connect-bottom">
        <img src={bexexDesign} className="connect-logo" alt="Brand logo" />
        <div className="connect-socials">
          <a href="#" aria-label="Instagram">
           <BsFacebook color="white" size={30} />

          </a>
          <a href="#" aria-label="Twitter">
            <FaSquareInstagram  color="white" size={30}/>
          </a>
          <a href="#" aria-label="YouTube">
            <IoLogoYoutube   color="white" size={30}/>
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter   color="white" size={30}/>
          </a>
        </div>
      </div> */}
    </div>
  );
}
