// TeamMultidisciplinary.jsx
import React, { useEffect, useState } from "react";
import "../Css/teamlist.css";
// import miniLogo from "../assets/images/miniLogo.png";
import { HeadingComponent } from "./Buttons";

const TOP_CARDS = [
  "ISO Lead Auditors & Consultants",
  "Experienced & Certified Trainers",
  "Business Excellence Consultants",
  "Lawyers & Compliance Experts",
];

const MID_CARDS = [
  "Risk Management Specialists",
  "Sustainability & ESG Professionals",
  "Certified Energy Auditors (BEE)",
  "Digital Solution Experts",
];

// slides for the big bottom card
const BOTTOM_SLIDES = [
  {
    title: "Practical, Not Just Theoretical",
    text: "Our experts have implemented standards across hundreds of projects, solving real-world challenges in complex operational environments—not just teaching theory.",
  },
  {
    title: "Cross-Functional Collaboration",
    text: "Specialists from multiple domains work together to deliver integrated EHS, Quality, and Sustainability solutions tailored to your business.",
  },
  {
    title: "End-to-End Support",
    text: "From discovery to certification and continuous improvement, our team supports you across every stage of the journey.",
  },
];

const Card = ({ title }) => (
  <div className="tmulti-card">
    <span className="tmulti-card-line" />
    <p className="tmulti-card-title">{title}</p>
    {/* <button className="tmulti-card-arrow" aria-label="Open">
      <span className="tmulti-card-arrow-icon">➜</span>
    </button> */}
  </div>
);

const TeamList = () => {
  const slides = [
   {
    title: "Practical, Not Just Theoretical",
    text: "Our experts have implemented standards across hundreds of projects, solving real-world challenges in complex operational environments—not just teaching theory.",
  },
  {
    title: "Cross-Functional Collaboration",
    text: "Specialists from multiple domains work together to deliver integrated EHS, Quality, and Sustainability solutions tailored to your business.",
  },
  {
    title: "End-to-End Support",
    text: "From discovery to certification and continuous improvement, our team supports you across every stage of the journey.",
  },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  return (
    <>
      <section className="ht-section">
        <HeadingComponent text="Our Teams" paddingBottom="0" />
        <div className="ht-inner">
          {/* main heading + subtext */}
          <div className="ht-content">
            <h1 className="ht-title">
              Certified Professionals <span className="itly">Delivering</span>
              <br />
              Measurable Excellence
            </h1>

            <p className="ht-sub">
              15+ specialists with 25 years of combined experience in EHS,
              Quality, Risk Management, and Business Strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="tmulti-section">
        <div className="tmulti-inner">
          {/* <h2 className="tmulti-heading">
          Our multidisciplinary team brings together:
        </h2> */}

          <div className="tmulti-grid">
            {TOP_CARDS.map((t) => (
              <Card key={t} title={t} />
            ))}
            {MID_CARDS.map((t) => (
              <Card key={t} title={t} />
            ))}
          </div>

          <div className="tmulti-bottom">
            <div className="tmulti-bottom-left">
              <p className="tmulti-bottom-label">What Sets</p>
              <p className="tmulti-bottom-label">
                Our <span className="tmulti-accent itly">Team</span>
              </p>
              <p className="tmulti-bottom-label">Apart:</p>
            </div>

            {/* <div className="tmulti-bottom-right">
            <div className="tmulti-carousel-container">
              <div
                className="tmulti-carousel-track"
                style={{
                  transform: `translateX(-${activeSlide * 100}%)`,
                }}
              >
                {BOTTOM_SLIDES.map((slide) => (
                  <div className="tmulti-carousel-card" key={slide.title}>
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                  </div>
                ))}
              </div>
           </div> */}
            {/* </div> */}

           <div className="tmulti-bottom-right">
            <div className="tmulti-carousel-container">
              <div
                className="tmulti-carousel-track"
                style={{
                  transform: `translateX(-${index * 100}%)`
                }}
              >
                {slides.map((slide, i) => (
                  <div className="tmulti-carousel-card" key={i}>
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TeamList;
