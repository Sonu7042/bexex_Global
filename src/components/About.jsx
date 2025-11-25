import React, { useEffect } from "react";
import "../Css/about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import video1 from '../assets/video1.mp4'
import  miniLogo from '../assets/images/miniLogo.png'
import journeyImg from '../assets/images/journeyImg.png'
import TeamGrid from "./TeamGrid";
import nature from '../assets/images/nature.jpg'
import { LearnMoreButton } from "./Buttons";



gsap.registerPlugin(ScrollTrigger);

const About = () => {
   
useEffect(() => {
  ScrollTrigger.matchMedia({

    // ❌ Mobile (GSAP OFF)
    "(max-width: 768px)": function() {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf(".hero-img-wrap");
    },

    // ✅ Desktop & Tablet (GSAP ON)
    "(min-width: 770px)": function() {
      gsap.to(".hero-img-wrap", { 
        scale: 2,
        y: 550,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-root",
          start: "top top",
          end: "40% top",
          scrub: true,
          markers: false,
        },
      });
    }

  });

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);


  return (
    <>
      <section className="hero-root">
        <nav className="hero-nav">
          <div className="hero-nav-logo">
            <svg height="20" width="20" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="9" fill="#1e90ff" />
            </svg>
            <span>About us</span>
          </div>
        </nav>

        <div className="hero-content">
          <h1>
            A Trusted Partner in Compliance & Excellence
            <span className="hero-since">
              <i className="applyfont">Since 2017</i>
            </span>
          </h1>

          <div className="hero-img-wrap">
            {/* <video
              src={}
              autoPlay
              muted
              loop
              className="hero-video"
            ></video> */}
            <img src={nature} alt="imge" />
          </div>

          <p className="hero-desc">
            Bexex Global Pvt. Ltd. delivers practical, cost-effective solutions
            that strengthen safety, quality, and sustainability.
          </p>

          {/* <a href="#" className="hero-btn">
            Discover more
           
            <span className="arrow">→</span>
          </a> */}


          <LearnMoreButton text="Discover more" link="/" marginTop="20"  />



        </div>
      </section>


{/* --------------------------------------------------------------------- */}
      <div className="about-bg">
        <div className="about-intro applyfont">
          Bexex Global Pvt. Ltd. is a premier consulting firm delivering
          affordable and integrated solutions in Environment, Health & Safety
          (EHS), Quality, Sustainability, and Business Excellence. <br />
          We support organizations in building safer, compliant, and
          high-performing operations through practical and scalable services.
        </div>
        <div className="about-section-card">
          <div className="about-left">
            <h2>Pushpender Sharma</h2>
            <div className="about-title applyfont ">
              Founder &amp; Director, Bexex Global Pvt. Ltd.
            </div>
            <p>
              <strong className="applyfont">
                At Bexex Global, we believe every organization deserves
                practical, affordable solutions that simplify compliance and
                promote excellence.
              </strong>
              <br />
              By turning complexity into clarity, we help build safer
              workplaces, improve quality, and foster sustainable
              growth—empowering businesses to navigate challenges confidently
              and create lasting value.
            </p>
          </div>
          <div className="about-right">
            {/* Update the src path as needed */}
            <img src="./image.jpg" alt="Director" className="about-img" />
          </div>
        </div>
      </div>




{/* ---------------------------------------------- */}
       <div className="glance-bg">
      <nav className="glance-nav">
       <img className="brand-logo" src={miniLogo} alt="miniLogo" />
        <span className="nav-text">About Us – At a Glance</span>
      </nav>
      <div className="glance-center">
        <p className="glance-headline">
          Founded through strategic collaborations with experienced industry professionals, Bexex Global offers tailored solutions for risk management, regulatory compliance, and operational excellence. Our approach is designed to simplify complex systems while ensuring measurable impact and sustainable growth for our clients.
        </p>
      </div>

        {/* <div className="discover-row">
          <span className="discover-text">Discover more</span>
          <span className="discover-arrow">→</span>
        </div> */}

        <LearnMoreButton text="Discover more" link="/" marginTop="0" />

    </div>


    {/* <--------------------------------img-section-----------------------> */}
    <div className="journeySection">
      <div className="glance-footer">
        <span>
          <span className="journey-bold">OUR JOURNEY OF </span>
          <span className="journey-italic">GROWTH</span>
        </span>
        <br />
        <span className="journey-bold">AND EXCELLENCE</span>
      </div>
      <div>

      <img src={journeyImg} className="journeyImg" alt="journey" />
      </div>
    </div>

    <TeamGrid />
    </>
  );
};

export default About;
