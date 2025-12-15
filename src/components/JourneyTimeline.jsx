// JourneyTimeline.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Css/journeyTimeline.css";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2025",
    content:
      "Rebranded as BEXEX Global Pvt. Ltd., reflecting our evolution into a multi-domain firm focusing on business excellence, sustainability, and growth.",
  },
  {
    year: "2024",
    content:
      "Launched our online training platform and digital tools to support remote learning and enhance client experience.",
  },
  {
    year: "2023",
    content:
      "Registered as eGrowth Training & Consultancy Services under GST, reaching 300+ projects and 100+ clients.",
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
  },
];

const JourneyTimeline = () => {
  const wrapperRef = useRef(null);
  const rightPanelRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const getYears = (i) => ({
    prev: i - 1 >= 0 ? timelineData[i - 1].year : "",
    next: i + 1 < timelineData.length ? timelineData[i + 1].year : "",
  });

  // Screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % timelineData.length),
      3000
    );
    return () => clearInterval(interval);
  }, [isMobile]);

  // Desktop GSAP scroll logic: one "step" per content block
  useEffect(() => {
    if (isMobile) return;
    if (!wrapperRef.current || !rightPanelRef.current) return;

    const sections = gsap.utils.toArray(".contentBlock");
    const total = sections.length;

    // move the blocks vertically by 100vh per step
    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.to(sections, {
      yPercent: -100 * (total - 1),
      duration: 1,
    });

    const st = ScrollTrigger.create({
      animation: tl,
      trigger: wrapperRef.current,
      start: "top top",
      end: `+=${100 * (total - 1)}%`, // one viewport height per item
      scrub: true,
      pin: true,
      snap: 1 / (total - 1), // snap each content block to center
      onUpdate: (self) => {
        const index = Math.round(self.progress * (total - 1));
        setCurrentIndex(index);
      },
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, [isMobile]);

  // Mobile UI
  if (isMobile) {
    return (
      <>
        <div className="journey-header">
          <h2 className="journey-heading">
            OUR JOURNEY OF&nbsp;
            <span className="journey-heading-accent itly">GROWTH</span>
            <br />
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

  return (
    <>
      <div className="journey-header">
        <h2 className="journey-heading">
          OUR JOURNEY OF
          <span className="journey-heading-accent itly"> GROWTH&nbsp;</span>
          <br />
          AND EXCELLENCE
        </h2>
      </div>

      <section className="timelineWrapper" ref={wrapperRef}>
        <div className="leftPanel">
          <div className="fadedYear">{faded.prev}</div>
          <div className="currentYear">
            {timelineData[currentIndex].year}
          </div>
          <div className="fadedYear">{faded.next}</div>
        </div>

        <div className="rightContent" ref={rightPanelRef}>
          {timelineData.map((item, i) => (
            <div
              key={i}
              className={`contentBlock  contentBlock${i}`}
              style={{
                opacity: i === currentIndex ? 1 : 0.2,
                transition: "opacity 0.3s",
              }}
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
