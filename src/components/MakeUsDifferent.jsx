// WhyUsSection.jsx
import React, { useEffect, useRef, useState } from "react";
import "../Css/makeUsDifferent.css";
import {HeadingComponent} from "./Buttons"

const cards = [
  {
    title: "We’ve Been There",
    text: "Our team brings 100,000+ man-hours of real-world experience from shop floors, construction sites, and factories across India. We’ve dealt with the same headaches you’re facing. We know what works—and what’s just consultant theatre.",
  },
  {
    title: "We Don’t Just Advise—We Implement",
    text: "We don’t drop a report and disappear. We roll up our sleeves—Gap analysis. System design. Documentation. Training. Internal audits. We stay until it’s embedded in your operations.",
  },
  {
    title: "One Team, One Plan",
    text: "Most firms specialize in fragments. We work end‑to‑end so your professionals cover strategy, operations, compliance, business excellence, and vendor coordination without silos.",
  },
  {
    title: "We’ve Been There",
    text: "Our team brings 100,000+ man-hours of real-world experience from shop floors, construction sites, and factories across India. We’ve dealt with the same headaches you’re facing. We know what works—and what’s just consultant theatre.",
  },
  {
    title: "We Don’t Just Advise—We Implement",
    text: "We don’t drop a report and disappear. We roll up our sleeves—Gap analysis. System design. Documentation. Training. Internal audits. We stay until it’s embedded in your operations.",
  },
  {
    title: "One Team, One Plan",
    text: "Most firms specialize in fragments. We work end‑to‑end so your professionals cover strategy, operations, compliance, business excellence, and vendor coordination without silos.",
  },
  // add more cards if needed
];

const MakeUsDifferent = () => {
  const listRef = useRef(null);
  const [index, setIndex] = useState(0);

  const isDesktop = () => window.innerWidth >= 1025;

  // auto scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 4000); // 4s
    return () => clearInterval(interval);
  }, []);

  // scroll when index changes
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const card = el.querySelector(".whyus-card");
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width + 32; // 32px gap
    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  }, [index]);

  const handlePrev = () => {
    if (!isDesktop()) return;
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    if (!isDesktop()) return;
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <section className="whyus-wrapper">
      
      <HeadingComponent text="Why Us" />

      <div className="whyus-header">
       
        <div className="whyus-heading-box">
          <h2 className="whyus-heading">
            What Makes Us <br />
            <span className="whyus-heading-accent itly">Different</span>
          </h2>
        </div>

        <div className="whyus-arrow-group">
          <button
            className="whyus-arrow-btn"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="whyus-arrow-btn"
            onClick={handleNext}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div className="whyus-carousel" ref={listRef}>
        {cards.map((card) => (
          <article className="whyus-card" key={card.title}>
            <h3 className="whyus-card-title">{card.title}</h3>
            <p className="whyus-card-text">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MakeUsDifferent;
