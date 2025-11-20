// CardScrollCenter.jsx
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Css/resources.css";

gsap.registerPlugin(ScrollTrigger);

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
  { number: "2",
     title: "QUALITY & BUSINESS  EXCELLENCE",
      description: " Powered by our eGrowth India brand, our Quality & Business Excellence services are designed to transform your operations  into engines of efficiency and value. We implement world-class methodologies that streamline processes, eliminate waste,  and build a culture of high performance. We partner with you to not only meet quality standards but to set new benchmarks  for excellence in your industry.", 
      items: ["SIX  SIGMA", "5-S WORKPLACE  ORGANIZATION", "SUPPLIER QUALITY  MANAGEMENT", "LEAN MANAGEMENT", "TOTAL PRODUCTIVE  MAINTENANCE (TPM)"] },

  { number: "3",
     title: "MANAGEMENT SYSTEMS  AND COMPLIANCE", 
     description: "We specialize in architecting and implementing robust management systems that provide the framework for sustainable  growth and governance. From achieving international certifications like ISO to ensuring continuous adherence to legal  statutes, our services create a solid foundation for operational integrity, market leadership, and business continuity.",
      items: ["ISO SYSTEM  CONSULTING", "Automotive  & aerospace  standards", "Miscellaneous SERVICES", "LEGAL COMPLIANCE  management"] },

  { number: "4",
     title: "ESG AND SUSTAINABILITY  SERVICES",
      description: "Our Sustainability & ESG services help you navigate the complexities of corporate responsibility, resource efficiency, and  stakeholder expectations. We partner with you to develop strategies that mitigate environmental impact, ensure long-term  resilience, and create sustainable value for your business and the community.", 
      items: ["ESG STRATEGY &  REPORTING", "ENERGY MANAGEMENT", "ENVIRONMENTAL  COMPLIANCE", "WATER & WASTE MANAGEMENT", "Social & Welfare"] },

  { number: "5",
     title: "SOFTWARE & DIGITAL  SOLUTIONS",
      description: "Through our eGrowth India brand, we provide cutting-edge digital solutions to automate, track, and manage your EHS and  Quality processes. We build custom software and implement powerful platforms that provide real-time insights, improve  efficiency, and empower your team with the data they need to make better decisions.",
       items: ["CUSTOM EHS   SOFTWARE", "DIGITAL LMS   PLATFORMS", "PERFORMANCE  DASHBOARDS", "DIGITAL RESOURCES  & TOOLKITS"] },

  { number: "6",
     title: "TRAINING & COMPETENCY  DEVELOPMENT",
      description: "We believe a knowledgeable and skilled workforce is the key to sustained excellence. Our training programs, offered  through the Chola MS Safety Academy and eGrowth India, are designed to build critical competencies across all levels of  your organization. From foundational safety awareness to advanced leadership skills, we empower your team to own and  drive your EHSQ culture.",
       items: [" MANAGEMENT  SYSTEMS TRAINING", " LeADeRshIP & sOFT SKILL", "TECHNICAL  TRAINING", "QUALITY TOOLS TRAINING", "COMPETENCY  MANAGEMENT"] }
];



// ...imports and contents array remain unchanged
// ...imports and contents array remain unchanged



export default function CardScrollCenter() {
  const sectionRef = useRef();
  const cardRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);




  useEffect(() => {
    let ctx = gsap.context(() => {
      const section = sectionRef.current;
      const steps = contents.length;
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${steps * window.innerHeight}`,
        pin: true,
        scrub: true,
        anticipatePin: 1, 
        onUpdate: (self) => {
          const idx = Math.min(steps - 1,  Math.floor(self.progress * steps));
          setCurrentIndex(idx);
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);


  



  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power4.out" }
    );
  }, [currentIndex]);





  const { number, title, description, items } = contents[currentIndex];
  return (
    <section ref={sectionRef} className="center-scroll-section">
      <div className="center-content">
        <div className="number-big">{number}</div>
        <div ref={cardRef} className="card rowWise">
          <h2 className="card-heading">{title}</h2>
          <p><strong>{description}</strong></p>
          <ul>
            {items.map((item, idx) => (
              <li key={idx}><span className="circle" /> <strong className="applyfont">{item}</strong></li>
            ))}
          </ul>
          <div className="discovery">
            <span>Discovery more</span>
            <button className="arrow-btn  card-icon">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

