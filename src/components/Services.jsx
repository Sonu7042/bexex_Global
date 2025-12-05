import React, { useState } from "react";
import "../Css/services.css";
import pushpender from "../assets/images/pushpender.jpg";
// import minilogo from "../assets/images/miniLogo.png";
import { HeadingComponent } from "./Buttons";

export default function Services() {
  const cardData = [
    {
      title: "Auditing",
      desc: "Independent verification that identifies gaps, ensures compliance, and drives measurable improvement.",
    },
    {
      title: "Consulting",
      desc: "Strategic guidance that transforms compliance requirements into competitive advantages and growth catalysts.",
    },
    {
      title: "Training",
      desc: "Industry-focused programs that build competence, drive behavior change, and strengthen safety culture.",
    },
    {
      title: "Software Solutions",
      desc: "Custom digital platforms that automate workflows, provide real-time insights, and enable data-driven decisions.",
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="services-section">
      <HeadingComponent text="Our Expertise" paddingBottom="0" />

      <div className="service-inner-hero">
        <div className="services-right applyfont"  data-aos="fade-up" data-aos-duration="1000">
          Comprehensive Solutions Across Six{" "}
          <span className="itly">Integrated</span> Domains
        </div>
        <p className="services-description" data-aos="fade-up" data-aos-duration="2000">
          From environment and health safety to digital transformation—we
          deliver end-to-end expertise that drives compliance and sustainable
          excellence.
        </p>
      </div>

      {/* Image and Cards Section */}
      <div className="services-grid">
        <div className="services-image">
          <img src={pushpender} alt="pushpender" />
        </div>

        <div className="service-cards-grid">
          {[0, 2].map((start, rowIndex) => (
            <div className="service-row" key={rowIndex}>
              {cardData.slice(start, start + 2).map((card, i) => {
                const index = start + i;
                return (
                  <div
                    key={card.title}
                    className={`service-card ${
                      hovered === index
                        ? "expanded"
                        : hovered !== null
                        ? "shrunk"
                        : ""
                    }`}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="service-card-header">
                      <span className="service-card-title">{card.title}</span>
                      <span className="service-card-plus">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                        </svg>
                      </span>
                    </div>
                    <p className="service-card-desc">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <HeadingComponent text="Our Services" marginTop="80" paddingBottom="0" />

      {/* <div className="services-hero"></div> */}
    </section>
  );
}
