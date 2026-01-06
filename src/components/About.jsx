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
import { OurJourney } from "./OurJourney";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.matchMedia({
      // ❌ Mobile + Tablet
      "(max-width: 1024px)": () => {},

      // ✅ Desktop only
      "(min-width: 1025px)": () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-content",
            start: "top top",
            endTrigger: ".spacer-section",
            end: "center center", // 👈 PERFECT AUTO END
            scrub: true,
            pin: ".hero-img-wrap",
            pinSpacing: false,
            invalidateOnRefresh: true,
            markers: false,
          },
        })
        .to(".hero-img-wrap", {
          scale: 2,
          ease: "none",
        });
      },
    });
  });

  return () => ctx.revert();
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

  const timelineData = [
    {
      title: "2017",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          Established as eGrowth India, delivering early consulting assignments
          and 200+ training hours—laying the foundation for client trust and
          expertise.
        </p>
      ),
    },
    {
      title: "2019",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          Set up a dedicated office and expanded the consulting and training
          team to serve more sectors with structured project management
        </p>
      ),
    },
    {
      title: "2021",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          Achieved 5,000+ training hours and completed 200+ consulting projects,
          strengthening our footprint across industries.
        </p>
      ),
    },
    {
      title: "2023",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          Registered as eGrowth Training & Consultancy Services under GST,
          reaching 300+ projects and 100+ clients, and building a strong brand
          reputation
        </p>
      ),
    },
    {
      title: "2024",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          Launched our online training platform and digital tools to support
          remote learning and enhance client experience.
        </p>
      ),
    },
    {
      title: "2025",
      content: (
        <p className="text-neutral-700 dark:text-neutral-300">
          Rebranded as BEXEX Global Pvt. Ltd., reflecting our evolution into a
          multi-domain firm focusing on business excellence, sustainability, and
          growth.
        </p>
      ),
    },
  ];

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
              {muted ? <GoMute /> : <GoUnmute />}
            </button>
          </div>
          <p className="hero-desc">
            Bexex Global Pvt. Ltd. delivers practical, cost-effective solutions
            that strengthen safety, quality, and sustainability.
          </p>

          <LearnMoreButton text="Discover Services" link="/" marginTop="20" />
        </div>
      </section>

      {/* ----------------- */}

      <section class="spacer-section"></section>

      {/* ------------------------- */}

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

      {/* <JourneyTimeline /> */}
      <OurJourney data={timelineData} />

      <TeamGrid />
    </>
  );
};

export default About;
