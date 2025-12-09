import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Css/journeyTimeline.css";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  // { year: "2025", content: "" },
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
      "Registered as eGrowth  Training & Consultancy  Services under GST,  reaching 300+ projects and  100+ clients, and building a",
  },
  {
    year: "2021",
    content:
      "Achieved 5,000+ training hours  and completed 200+ consulting  projects, strengthening our footprint across industries.",
  },
  {
    year: "2019",
    content:
      " Set up a dedicated office and  expanded the consulting and  training team to serve more sectors with structured project management",
  },
  {
    year: "2017",
    content:
      "Established as eGrowth India, delivering  early consulting assignments and 200+  training hours—laying the foundation for  client trust and expertise.",
  }
  // { year: "2010", content: "" },
];

const JourneyTimeline = () => {
  const wrapperRef = useRef(null);
  const rightPanelRef = useRef(null);
  const blockRefs = useRef([]);
  const [activeYear, setActiveYear] = useState(timelineData[0].year);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    if (isMobile) return; // skip GSAP on mobile

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
        onEnter: () => setActiveYear(timelineData[i].year),
        onEnterBack: () => setActiveYear(timelineData[i].year),
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [isMobile]);

  // Mobile carousel render
  if (isMobile) {
    return (
      <div className="mobileTimelineWrapper">
        <div className="mobileTimelineBlock">
          <div className="mobileYear">{timelineData[currentIndex].year}</div>
          <div className="mobileContent">
            {timelineData[currentIndex].content}
          </div>
        </div>
        {/* <div className="mobileDots">
          {timelineDataMobile.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div> */}
      </div>
    );
  }

  // Desktop render
  return (
    <section className="timelineWrapper" ref={wrapperRef}>
      <div></div>
      <div className="leftPanel">
        <div className="fadedYear">{activeYear}</div>
        <div className="currentYear">{activeYear}</div>
        <div className="fadedYear">{activeYear}</div>
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
  );
};

export default JourneyTimeline;
