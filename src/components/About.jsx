import React, { useEffect, useRef, useState } from "react";
import "../Css/about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamGrid from "./TeamGrid";
import { LearnMoreButton, HeadingComponent } from "./Buttons";
import MakeUsDifferent from "./MakeUsDifferent.jsx";
import pushpender from "../assets/images/pushpender.jpg";
import WhoWeWorkWith from "./WhoWeWorkWith.jsx";
import JourneyTimeline from "./JourneyTimeline.jsx";
import aboutVideo from "../assets/video/aboutVideo.mp4";
import AboutScrollReveal from "./AboutScrollReveal.jsx";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
// import LetsConnect from './LetsConnect.jsx'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      // ❌ Mobile (GSAP OFF)
      "(max-width: 768px)": function () {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        gsap.killTweensOf(".hero-img-wrap");
      },

      // ✅ Desktop & Tablet (GSAP ON)
      "(min-width: 770px)": function () {
        gsap.to(".hero-img-wrap", {
          scale: 2,
          y: 600,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-root",
            start: "top top",
            end: "40% top",
            scrub: true,
            markers: false,
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);


   const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !muted;
    setMuted(!muted);
    video.play();
  };

  return (
    <>
      <section className="hero-root">
        {/* </nav>  */}
        <HeadingComponent text="About Us" paddingBottom="0" />

        <div className="hero-content">
          <h1>
            A Trusted Partner in Compliance & Excellence&nbsp;
            <span className="hero-since itly">
              Since 2017
              {/* <i className=""></i> */}
            </span>
          </h1>
          <div className="hero-img-wrap">
            <video
              ref={videoRef}
              src={aboutVideo}
              autoPlay
              muted={muted}
              loop
              playsInline
              className="hero-video"
            />

            <button className="video-sound-btn" onClick={toggleSound}>
              {muted ? <GoUnmute /> : <GoMute />}
            </button>
          </div>
          <p className="hero-desc">
            Bexex Global Pvt. Ltd. delivers practical, cost-effective solutions
            that strengthen safety, quality, and sustainability.
          </p>

          <LearnMoreButton text="Discover Services" link="/" marginTop="20" />
        </div>
      </section>

      {/* --------------------- */}

      <MakeUsDifferent />
      {/* ----------------------- */}

      {/* --------------------------------------------------------------------- */}
      <div className="about-bg">
        {/* <div className="about-intro applyfont">
          Bexex Global Pvt. Ltd. is a premier consulting firm delivering
          affordable and integrated solutions in Environment, Health & Safety
          (EHS), Quality, Sustainability, and Business Excellence. <br />
          We support organizations in building safer, compliant, and
          high-performing operations through practical and scalable services.
        </div> */}

        <AboutScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          Bexex Global Pvt. Ltd. is a premier consulting firm delivering
          affordable and integrated solutions in Environment, Health & Safety
          (EHS), Quality, Sustainability, and Business Excellence. We support
          organizations in building safer, compliant, and high-performing
          operations through practical and scalable services.
        </AboutScrollReveal>

        <div className="about-section-card">
          <div className="about-left">
            <div>
              <h2>Pushpender Sharma</h2>
              <div className="about-title applyfont ">
                Founder &amp; Director, Bexex Global Pvt. Ltd.
              </div>
            </div>

            <p>
              At Bexex Global, we believe every organization deserves practical,
              affordable solutions that simplify compliance and promote
              excellence. By turning complexity into clarity, we help build
              safer workplaces, improve quality, and foster sustainable
              growth—empowering businesses to navigate challenges confidently
              and create lasting value.
            </p>
          </div>
          <div className="C">
            {/* Update the src path as needed */}
            <img src={pushpender} alt="Director" className="about-img" />
          </div>
        </div>
      </div>

      {/* ------------------ */}
      <WhoWeWorkWith />
      {/* ----------------------- */}

      <JourneyTimeline />

      <TeamGrid />

      
    </>
  );
};

export default About;
