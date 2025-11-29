import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "../Css/animationScrolling.css";
import {LearnMoreButton} from "../components/Buttons";


const contents = [
  {
    number: "1",
    title: "ENVIRONMENT, HEALTH &  SAFETY SOLUTIONS",
    description:
      "Build resilient safety cultures that protect people, assets, and reputation. We transform EHS performance from reactive compliance into proactive competitive advantage. Our approach integrates deep technical expertise with on-the-ground implementation, managing risk effectively across all operations—from design through decommissioning.",
    items: [
      "FIRE SAFETY",
      "ELECTRICAL SAFETY",
      "CONSTRUCTION SAFETY",
      "LOGISTICS and WAREHOUSE SAFETY",
      "BEHAVIOR-BASED SAFETY (BBS)",
    ],
  },
  {
    number: "2",
    title: "QUALITY & BUSINESS  EXCELLENCE",
    description:
      "Transform operations into engines of efficiency and value through world-class methodologies that streamline processes, eliminate waste, and build high-performance cultures. We help you exceed quality standards and set new benchmarks for operational excellence across your industry.",
    items: [
      "SIX  SIGMA",
      "5-S WORKPLACE  ORGANIZATION",
      "SUPPLIER QUALITY  MANAGEMENT",
      "LEAN MANAGEMENT",
      "TOTAL PRODUCTIVE  MAINTENANCE (TPM)",
    ],
  },
  {
    number: "3",
    title: "MANAGEMENT SYSTEMS  AND COMPLIANCE",
    description:
      "Architect robust management systems that provide frameworks for sustainable growth and governance. From achieving international ISO certifications to ensuring continuous legal compliance, we create solid foundations for operational integrity, market leadership, and business continuity.",
    items: [
      "ISO SYSTEM  CONSULTING",
      "Automotive  & aerospace  standards",
      "Miscellaneous SERVICES",
      "LEGAL COMPLIANCE  management",
    ],
  },
  {
    number: "4",
    title: "ESG AND SUSTAINABILITY  SERVICES",
    description:
      "Navigate corporate responsibility complexities while creating sustainable business value. We develop strategies that mitigate environmental impact, ensure long-term resilience, meet stakeholder expectations, and deliver measurable benefits for your business and community.",
    items: [
      "ESG STRATEGY &  REPORTING",
      "ENERGY MANAGEMENT",
      "ENVIRONMENTAL  COMPLIANCE",
      "WATER & WASTE MANAGEMENT",
      "Social & Welfare",
    ],
  },
  {
    number: "5",
    title: "SOFTWARE & DIGITAL  SOLUTIONS",
    description:
      "Cutting-edge digital solutions that automate, track, and manage your EHS and Quality processes. We build custom software and implement powerful platforms that provide real-time insights, improve efficiency, and empower teams with data for better, faster decisions.",
    items: [
      "CUSTOM EHS   SOFTWARE",
      "DIGITAL LMS   PLATFORMS",
      "PERFORMANCE  DASHBOARDS",
      "DIGITAL RESOURCES  & TOOLKITS",
    ],
  },
  {
    number: "6",
    title: "TRAINING & COMPETENCY  DEVELOPMENT",
    description:
      "Build critical competencies that drive sustained excellence across all organizational levels. Our training programs—delivered through industry-leading platforms—range from foundational safety awareness to advanced leadership development, empowering your team to own and drive your EHSQ culture.",
    items: [
      " MANAGEMENT  SYSTEMS TRAINING",
      " LEADERSHIP & SOFT SKILL",
      "TECHNICAL  TRAINING",
      "QUALITY TOOLS TRAINING",
      "COMPETENCY  MANAGEMENT",
    ],
  },
];

const AnimatedScrollSection = () => {
  const numbersRef = useRef([]);
  const contentsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set mobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

 useEffect(() => {
  if (isMobile) {
    // Show first card content and number on mobile - no animation
    if (numbersRef.current[0]) {
      gsap.set(numbersRef.current[0], { y: "0%" });
    }
    if (contentsRef.current[0]) {
      gsap.set(contentsRef.current[0], { x: "0%", opacity: 1, pointerEvents: "auto" });
    }
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ smooth: true, lerp: 0.08 });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".asc-section",
      start: "top top",
      end: "+=5000",
      scrub: true,
      pin: true,
    },
  });

  contents.forEach((_, i) => {
    const num = numbersRef.current[i];
    const content = contentsRef.current[i];

    if (i === 0) {
      // Initially visible first number and content
      tl.set(num, { y: "0%" }, 0);
      tl.set(content, { x: "0%", opacity: 1, pointerEvents: "auto" }, 0);
    } else {
      tl.to(numbersRef.current[i - 1], { y: "-100%", duration: 1 }, i);
      tl.fromTo(num, { y: "100%" }, { y: "0%", duration: 1 }, i);
      tl.to(contentsRef.current[i - 1], { x: "-100%", opacity: 0, pointerEvents: "none", duration: 1 }, i);
      tl.fromTo(
        content,
        { x: "100%", opacity: 0, pointerEvents: "none" },
        { x: "0%", opacity: 1, pointerEvents: "auto", duration: 1 },
        i
      );
    }
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    tl.kill();
  };
}, [isMobile]);

  return (
    <section className="asc-section">
      <div className="asc-container">
        {!isMobile && (
          <div className="asc-numbers">
            {contents.map((content, i) => (
              <div
                className="asc-num"
                key={i}
                ref={(el) => (numbersRef.current[i] = el)}
              >
                <span className="asc-numspan">{content.number}</span>
              </div>
            ))}
          </div>
        )}
        <div className="asc-contents">
          {contents.map((content, i) => (
            <div
              className="asc-contentbox"
              key={i}
              ref={(el) => (contentsRef.current[i] = el)}
            >
              <h2 className="asc-title">{content.title}</h2>
              <p className="asc-desc">{content.description}</p>
              <ul className="asc-list">
                {content.items.map((item, idx) => (
                  <li className="asc-listitem" key={idx}>
                    <span className="asc-circle"></span>
                    {item}
                  </li>
                ))}
              </ul>
              {/* <div className="asc-action">
                <span className="asc-discover">Discovery more</span>
                <button className="asc-nextbtn">&#8594;</button>
              </div> */}
              <LearnMoreButton  text="Discover more" link="/" marginTop="7"  />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedScrollSection;
