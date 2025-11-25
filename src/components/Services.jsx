  import React, { useState } from "react";
  import "../Css/services.css";
  import serviceImg from "../assets/images/serviceImg.png";
  import minilogo from "../assets/images/miniLogo.png";
  import Buttons from "./Buttons";

  export default function Services() {
    const cardData = [
      {
        title: "Auditing",
        desc: "Comprehensive auditing solutions to verify compliance and drive continual improvement.",
      },
      {
        title: "Consulting",
        desc: "Guiding organizations with expert consulting to achieve compliance, efficiency, and sustainable growth.",
      },
      {
        title: "Training",
        desc: "Building competence and confidence through practical, industry-focused training programs.",
      },
      {
        title: "Software Solutions",
        desc: "Delivering smart, customized software that streamlines operations and enhances performance.",
      },
    ];

    const [hovered, setHovered] = useState(null);

    return (
      <section className="services-section">
        {/* Hero section */}
        <div className="services-header">
              <img src={minilogo} alt="logo" className="brand-logo" />
              <span className="services-title brand-name-update applyfont">Our services</span>
            </div>
        <div className="services-hero">
          
          <div className="services-left">
          
            <p className="services-description">
              We help businesses strengthen systems, ensure compliance, and boost
              performance through expert consulting, management, audits, and
              training.
            </p>
            {/* <button className="learn-btn applyfont">
              Learn more
              <span className="learn-icon">
                <svg width="17" height="17" fill="none" stroke="#fff" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 4l6 4.5-6 4.5" />
                </svg>
              </span>
            </button> */}

            <div className="learn-btn">
              <span>Learn more</span>
              <Buttons />


            </div>
          </div>

          <div className="services-right applyfont">
            Empowering organizations through expert consulting, management
            support, audits, and training that drive compliance and performance.
          </div>
        </div>

        {/* Image and Cards Section */}
        <div className="services-grid">
          <div className="services-image">
            <img src={serviceImg} alt="Service" />
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
                          
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg>
                          
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
      </section>
    );
  }
