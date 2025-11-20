import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "../Css/animationScrolling.css";

// Use contents array only (numbers are inside)
const contents = [
 {
   number: "1",
   title: "ENVIRONMENT, HEALTH & SAFETY SOLUTIONS",
   description: "We provide EHS solutions that go beyond compliance to build a resilient safety culture. We partner with you to protect your people and assets, transforming your EHS performance into a competitive advantage. Our approach integrates deep technical expertise with practical, on-the-ground implementation to manage risk effectively across all operations, from initial design to decommissioning.",
   items: [
     "FIRE SAFETY",
     "ELECTRICAL SAFETY",
     "CONSTRUCTION SAFETY",
     "LOGISTICS and WAREHOUSE SAFETY",
     "BEHAVIOR-BASED SAFETY (BBS)"
   ]
 },
 // ... other content blocks remain the same
 {
   number: "2",
   title: "QUALITY & BUSINESS  EXCELLENCE",
   description: "Powered by our eGrowth India brand, our Quality & Business Excellence services are designed to transform your operations  into engines of efficiency and value. We implement world-class methodologies that streamline processes, eliminate waste,  and build a culture of high performance. We partner with you to not only meet quality standards but to set new benchmarks  for excellence in your industry.",
   items: ["SIX  SIGMA", "5-S WORKPLACE  ORGANIZATION", "SUPPLIER QUALITY  MANAGEMENT", "LEAN MANAGEMENT", "TOTAL PRODUCTIVE  MAINTENANCE (TPM)"]
 },
 {
   number: "3",
   title: "MANAGEMENT SYSTEMS  AND COMPLIANCE",
   description: "We specialize in architecting and implementing robust management systems that provide the framework for sustainable  growth and governance. From achieving international certifications like ISO to ensuring continuous adherence to legal  statutes, our services create a solid foundation for operational integrity, market leadership, and business continuity.",
   items: ["ISO SYSTEM  CONSULTING", "Automotive  & aerospace  standards", "Miscellaneous SERVICES", "LEGAL COMPLIANCE  management"]
 },
 {
   number: "4",
   title: "ESG AND SUSTAINABILITY  SERVICES",
   description: "Our Sustainability & ESG services help you navigate the complexities of corporate responsibility, resource efficiency, and  stakeholder expectations. We partner with you to develop strategies that mitigate environmental impact, ensure long-term  resilience, and create sustainable value for your business and the community.",
   items: ["ESG STRATEGY &  REPORTING", "ENERGY MANAGEMENT", "ENVIRONMENTAL  COMPLIANCE", "WATER & WASTE MANAGEMENT", "Social & Welfare"]
 },
 {
   number: "5",
   title: "SOFTWARE & DIGITAL  SOLUTIONS",
   description: "Through our eGrowth India brand, we provide cutting-edge digital solutions to automate, track, and manage your EHS and  Quality processes. We build custom software and implement powerful platforms that provide real-time insights, improve  efficiency, and empower your team with the data they need to make better decisions.",
   items: ["CUSTOM EHS   SOFTWARE", "DIGITAL LMS   PLATFORMS", "PERFORMANCE  DASHBOARDS", "DIGITAL RESOURCES  & TOOLKITS"]
 },
 {
   number: "6",
   title: "TRAINING & COMPETENCY  DEVELOPMENT",
   description: "We believe a knowledgeable and skilled workforce is the key to sustained excellence. Our training programs, offered  through the Chola MS Safety Academy and eGrowth India, are designed to build critical competencies across all levels of  your organization. From foundational safety awareness to advanced leadership skills, we empower your team to own and  drive your EHSQ culture.",
   items: [" MANAGEMENT  SYSTEMS TRAINING", " LeADeRshIP & sOFT SKILL", "TECHNICAL  TRAINING", "QUALITY TOOLS TRAINING", "COMPETENCY  MANAGEMENT"]
 }
];

const AnimatedScrollSection = () => {
  const numbersRef = useRef([]);
  const contentsRef = useRef([]);

  useEffect(() => {
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

    // Use contents.length for count
    contents.forEach((_, i) => {
      const num = numbersRef.current[i];
      const content = contentsRef.current[i];
      if (i === 0) {
        tl.to(num, { y: "0%", duration: 1 }, i);
        tl.to(content, { x: "0%", opacity: 1, pointerEvents: "auto", duration: 1 }, i);
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section className="asc-section">
      <div className="asc-container">
        <div className="asc-numbers">
          {contents.map((content, i) => (
            <div
              className="asc-num"
              key={i}
              ref={el => (numbersRef.current[i] = el)}
            >
              <span className="asc-numspan">{content.number}</span>
            </div>
          ))}
        </div>
        <div className="asc-contents">
          {contents.map((content, i) => (
            <div
              className="asc-contentbox"
              key={i}
              ref={el => (contentsRef.current[i] = el)}
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
              <div className="asc-action">
                <span className="asc-discover">Discovery more</span>
                <button className="asc-nextbtn">&#8594;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedScrollSection;
