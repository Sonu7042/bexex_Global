import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../Css/journeyTimeline.css";

gsap.registerPlugin(ScrollTrigger);



const timelineData = [
  {
    year: "2025",
    content:
      "Recognized as eGrowth Global, upscaling & leading our evolution into a multi-domain firm focusing on business excellence, sustainability, and growth.",
  },
  {
    year: "2017",
    content:
      "Established as eGrowth India, delivering early consulting assignments and 200+ training hours—laying the foundation for client trust and expertise.",
  },
  {
    year: "2019",
    content:
      "Set up a dedicated office and expanded the consulting and training team to serve more sectors with structured project management",
  },
  {
    year: "2021",
    content:
      "Achieved 5,000+ training hours and completed 200+ consulting projects, strengthening our footprint across industries.",
  },
  {
    year: "2023",
    content:
      "Registered as eGrowth Training & Consultancy Services under GST, reaching 300+ projects and 100+ clients, building a legacy of excellence.",
  },
];

function TimelineSection() {
  const yearsRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  // Detect screen size once + on resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize",  handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto carousel for mobile/tablet only (no GSAP)
  useEffect(() => {
    if (isDesktop) return;

    const contentEl = contentRef.current;
    if (!contentEl) return;

    const cardWidth = contentEl.clientWidth;
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % timelineData.length;
      setActiveIndex(index);
      contentEl.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isDesktop]);




  // Desktop: original wheel sync logic
  useGSAP(() => {
  if (!isDesktop) return;

  const yearsEl = yearsRef.current;
  const contentEl = contentRef.current;
  const section = sectionRef.current;

  if (!yearsEl || !contentEl || !section) return;

  // 1️⃣ Create scroll container (years + content move together)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () =>
        "+=" + (contentEl.scrollHeight - contentEl.clientHeight + 200),
      pin: true,
      scrub: 1,
    },
  });

  // 2️⃣ Sync scroll progress to both columns
  tl.to(yearsEl, {
    scrollTop: yearsEl.scrollHeight - yearsEl.clientHeight,
    ease: "none",
  });

  tl.to(
    contentEl,
    {
      scrollTop: contentEl.scrollHeight - contentEl.clientHeight,
      ease: "none",
    },
    "<" // both move together
  );

  // 3️⃣ Fade & scale when item hits vertical center
  gsap.utils.toArray(".content-item").forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: "center center",
      end: "center+=1 center",
      scrub: true,

      onEnter: () => setActiveIndex(index),
      onEnterBack: () => setActiveIndex(index),

      animation: gsap.fromTo(
        item,
        { opacity: 0.3, scale: 0.9 },
        { opacity: 1, scale: 1.05, duration: 0.3 }
      ),
    });
  });
});


  // GSAP pinning only on desktop
  useGSAP(
    () => {
      if (!isDesktop || !sectionRef.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 1.2}px`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
    },
    { scope: sectionRef, dependencies: [isDesktop] }
  );

  return (
    <section ref={sectionRef} className="timeline-section">
      <div className="timeline-container">
        <h1 className="timeline-title">
          OUR JOURNEY OF{" "}
          <span className="timeline-title-highlight">GROWTH</span>
          <br />
          AND EXCELLENCE
        </h1>

        <div ref={containerRef} className="timeline-content-wrapper">
          {/* YEARS - desktop only */}
          <div
            ref={yearsRef}
            className="timeline-years"
          >
            <div className="years-inner">
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  className={`year-item ${activeIndex === index ? 'active' : ''}`}
                >
                  {item.year}
                </div>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div
            ref={contentRef}
            className="timeline-content"
          >
            <div className="content-inner">
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  className={`content-item ${activeIndex === index ? 'active' : ''}`}
                >
                  {!isDesktop && (
                    <div className="year-badge">
                      {item.year}
                    </div>
                  )}
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
