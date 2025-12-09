import React, { useEffect, useRef, useState } from "react";
import "../Css/makeUsDifferent.css";
import { HeadingComponent } from "./Buttons";



const originalCards = [
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
];

// Duplicate cards to make infinite loop
const cards = [...originalCards, ...originalCards, ...originalCards];

const MakeUsDifferent = () => {
  const listRef = useRef(null);
  const [index, setIndex] = useState(originalCards.length); // Start centered in middle copy

  const isDesktop = () => window.innerWidth >= 1025;

  // AUTO SCROLL (infinite → only forward)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Infinite LOOP LOGIC – reset silently
  useEffect(() => {
    if (index >= cards.length - originalCards.length) {
      setIndex(originalCards.length); // jump back to middle copy
    }
  }, [index]);

  // CENTER active card
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const cardsEl = el.querySelectorAll(".whyus-card");
    const activeCard = cardsEl[index];
    if (!activeCard) return;

    const containerWidth = el.offsetWidth;
    const cardWidth = activeCard.offsetWidth;

    const scrollLeft = activeCard.offsetLeft - (containerWidth - cardWidth) / 2;

    el.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [index]);

  const handlePrev = () => {
    if (!isDesktop()) return;
    setIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isDesktop()) return;
    setIndex((prev) => prev + 1);
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
          <button className="whyus-arrow-btn" onClick={handlePrev}>
            ←
          </button>
          <button className="whyus-arrow-btn" onClick={handleNext}>
            →
          </button>
        </div>
      </div>

      <div className="whyus-carousel" ref={listRef}>
        {cards.map((card, i) => (
          <article
            key={i}
            className={`whyus-card ${i === index ? "active" : ""}`}
          >
            <h3 className="whyus-card-title">{card.title}</h3>
            <p className="whyus-card-text">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MakeUsDifferent;
