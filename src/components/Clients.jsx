import React from "react";
import "../Css/clients.css";
import BgX from "../assets/images/miniLogo.png"; 
import logo1 from '../assets/Links/15526000011419483.png'
// import logo2 from '../assets/Links/1pJO7czY_400x400.psd'
import logo3 from '../assets/Links/aaxis-nano-LOGO-1-1.png'
import logo4 from '../assets/Links/AFCONS_logo.svg.png'
import logo5 from '../assets/Links/Ahluwalia+Logo-03.webp'
import logo6 from '../assets/Links/Bureau_of_Indian_Standards_Logo.svg.png'
import logo7 from '../assets/Links/Dixon_Technologies_Logo.svg.png'
import logo8 from '../assets/Links/Haier_logo.svg.png'
import logo9 from '../assets/Links/Havells_Logo.svg.png'
import logo10 from '../assets/Links/Hero_MotoCorp_Logo.svg.png'
import logo11 from '../assets/Links/itc.png'
import logo12 from '../assets/Links/Jio-bp_logo.svg.png'
import logo13 from '../assets/Links/JLL_logo.svg.webp'
import logo14 from '../assets/Links/Larsen-and-turbo-LT-logo.png'
import logo15 from '../assets/Links/LG-Logo.png'
import logo16 from '../assets/Links/logo-ieispl.png'
import logo17 from '../assets/Links/LUMAXIND.NS_BIG-80633668.png'
import logo18 from '../assets/Links/pngimg.com - samsung_logo_PNG9.png'
import logo19 from '../assets/Links/tata-consumer-products-logo-freelogovectors.net_.png'
import logo20 from '../assets/Links/Tata_logo.svg.png'
import logo21 from '../assets/Links/ultratech-cement-logo.png'
import {HeadingComponent} from "./Buttons";

const clientImgs = [
 logo1,
//  logo2,
 logo3,
 logo4,
 logo5,
 logo6,
 logo7,
 logo8,
 logo9,
 logo10,
 logo11,
 logo12,
 logo13,
 logo14,
 logo15,
 logo16,
 logo17,
 logo18,
 logo19,
 logo20,
 logo21,
//  logo22,
];

const Clients = () => (
  <div className="clients-section">
    {/* Decorative Images */}
    <img src={BgX} alt="" className="bg-x bg-x--top-right" aria-hidden="true" />
    <img src={BgX} alt="" className="bg-x bg-x--bottom-left" aria-hidden="true" />

    {/* <div className="section-header">
     <img className=" brand-logo" src={BgX} alt="" />
      <span className=" brand-name-update applyfont">Our Clients</span>
    </div> */}


   <HeadingComponent text="Our Clients"  paddingBottom="3" />


    <div className="clients-box">
      <div className="clients-grid">
        {clientImgs.map((src, idx) => (
          <div className="client-item" key={idx}>
            <img src={src} alt={`Client ${idx + 1}`} />
          </div>
        ))}
      </div>
      {/* <div className="clients-discover-btn applyfont">
        Discovery more 
        <span className="arrow">→</span>
      </div> */}
      {/* <LearnMoreButton  text="Discover more" link="/" marginTop="15"  /> */}
    </div>
  </div>
);

export default Clients;
