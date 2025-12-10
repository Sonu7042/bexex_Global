import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Css/journeyTimeline.css";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2025",
    content:
      "Rebranded as BEXEX  Global Pvt. Ltd., reflecting  our evolution into a  multi-domain firm focusing  on business excellence,  sustainability, and growth.",
  },
  {
    year: "2024",
    content:
      "Launched our online  training platform and  digital tools to support  remote learning  and enhance client experience.",
  },
  {
    year: "2023",
    content:
      "Registered as eGrowth  Training & Consultancy  Services under GST,  reaching 300+ projects and 100+ clients.",
  },
  {
    year: "2021",
    content:
      "Achieved 5,000+ training hours and completed 200+ consulting projects.",
  },
  {
    year: "2019",
    content:
      "Set up a dedicated office and expanded the consulting and training team.",
  },
  {
    year: "2017",
    content:
      "Established as eGrowth India, delivering early consulting assignments.",
  }
];

const JourneyTimeline = () => {
  const wrapperRef = useRef(null);
  const rightPanelRef = useRef(null);
  const blockRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // RETURN faded top and bottom years
  const getYears = (i) => {
    return {
      prev: i - 1 >= 0 ? timelineData[i - 1].year : "",
      next: i + 1 < timelineData.length ? timelineData[i + 1].year : "",
    };
  };

  // Check screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % timelineData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Desktop GSAP animation
  useEffect(() => {
    if (isMobile) return;

    blockRefs.current = blockRefs.current.slice(0, timelineData.length);
    const innerHeight = rightPanelRef.current.scrollHeight;
    const viewport = window.innerHeight;
    const scrollLength = innerHeight - viewport;

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: `+=${scrollLength}`,
      pin: true,
      scrub: true,
    });

    gsap.to(rightPanelRef.current, {
      y: -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${scrollLength}`,
        scrub: true,
      },
    });

    blockRefs.current.forEach((block, i) => {
      let start = "top center";
      let end = "bottom center";
      if (i === 0) start = "top 60%";
      if (i === blockRefs.current.length - 1) end = "bottom 40%";

      gsap.fromTo(
        block.querySelector("p"),
        { opacity: 0.1, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: block,
            start,
            end,
            scrub: true,
          },
        }
      );

      ScrollTrigger.create({
        trigger: block,
        start,
        end,
        scrub: true,
        onEnter: () => setCurrentIndex(i),
        onEnterBack: () => setCurrentIndex(i),
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [isMobile]);

  // Mobile UI
  if (isMobile) {
    return (
      <>

       <div class="journey-header">
        <h2 class="journey-heading">
            OUR JOURNEY OF&nbsp;
            <span class="journey-heading-accent itly">GROWTH</span><br/>
            AND EXCELLENCE
          </h2>
      </div>

      <div className="mobileTimelineWrapper">
        <div className="mobileTimelineBlock">
          <div className="mobileYear">{timelineData[currentIndex].year}</div>
          <div className="mobileContent">
            {timelineData[currentIndex].content}
          </div>
        </div>
      </div>
      </>
    );
  }

  const faded = getYears(currentIndex);

  // Desktop
  return (
    <>

      <div class="journey-header">
        <h2 class="journey-heading">OUR JOURNEY OF  
       
          <span class="journey-heading-accent itly">GROWTH&nbsp;</span> 
             <br/>
          AND EXCELLENCE
          </h2>
      </div>



    <section className="timelineWrapper" ref={wrapperRef}>
      <div className="leftPanel">
        <div className="fadedYear">{faded.prev}</div>
        <div className="currentYear">{timelineData[currentIndex].year}</div>
        <div className="fadedYear">{faded.next}</div>
      </div>

      <div className="rightContent" ref={rightPanelRef}>
        {timelineData.map((item, i) => (
          <div
            key={i}
            className="contentBlock"
            ref={(el) => (blockRefs.current[i] = el)}
          >
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
    </>



  );
};

export default JourneyTimeline;
