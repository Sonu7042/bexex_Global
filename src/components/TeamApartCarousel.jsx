// TeamApartCarousel.jsx
import React, { useRef } from "react";
import "../Css/teamApartCarousel.css";

const cards = [
  { id: 1, title: "Practical, Not Just Theoretical" },
  { id: 2, title: "Proven Track Record" },
  { id: 3, title: "Cross-Functional Collaboration" },
  { id: 4, title: "Industry-Specific Expertise" },
];

const TeamApartCarousel = () => {
  const rowRef = useRef(null);

  const scrollCards = (offset) => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="apart-section">
      <div className="apart-header">
        <h2 className="apart-title">
          What Sets Our <span>Team</span> Apart
        </h2>

        {/* desktop-only buttons */}
        <div className="apart-nav desktop-only">
          <button
            className="nav-btn nav-btn-prev"
            onClick={() => scrollCards(-320)}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="nav-btn nav-btn-next"
            onClick={() => scrollCards(320)}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* horizontal cards row */}
      <div className="apart-row-wrapper">
        <div className="apart-row" ref={rowRef}>
          {cards.map((card) => (
            <article className="apart-card" key={card.id}>
              <div className="apart-card-line" />
              <h3 className="apart-card-title">{card.title}</h3>
              <button className="apart-card-arrow" aria-label="Open">
                →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamApartCarousel;
