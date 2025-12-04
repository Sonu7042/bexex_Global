import React, { useEffect, useRef, useState } from "react";
import "../Css/makeUsDifferent.css";
import { HeadingComponent } from "./Buttons";
const cards = [
  {
    id: 1,
    title: "We’ve Been There",
    text: "Our team brings 100,000+ man-hours of real-world experience from shop floors, construction sites, and factories across India. We've dealt with the same headaches you're facing. We know what works—and what's just consultant theatre.",
  },

  {
    id: 2,
    title: "We Don't Just Advise—We Implement",
    text: "We don't drop a report and disappear. We roll up our sleeves—Gap analysis. System design. Documentation. Training. Internal audits. We stay until it's embedded in your operations",
  },

  {
    id: 3,
    title: "One Team, Full Spectrum",
    text: "Most firms specialize in one thing. We bring 15+ certified professionals covering EHS, ISO systems, energy audits, sustainability, business excellence, and legal compliance—all under one roof. No vendor coordination headaches.",
  },

  {
    id: 4,
    title: "Affordable Excellence",
    text: "World-class consulting shouldn't cost like you're hiring McKinsey. We deliver high-impact solutions at prices that make sense for Indian MSMEs and mid-sized enterprises.",
  },

  {
    id: 5,
    title: "Digital-First Approach",
    text: "Through our eGrowth India brand, we offer LMS-based training, digital toolkits, and software solutions—so your systems don't depend on binders and PDFs.",
  },
];

export default function MakeUsDifferent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);
  const autoTimerRef = useRef(null);

  const scrollToIndex = (index) => {
    const list = listRef.current;
    if (!list) return;
    const card = list.children[index];
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // keep scroll position in sync when activeIndex changes (buttons + auto)
  // sync scroll when activeIndex changes
  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  // auto slide
  useEffect(() => {
    autoTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(autoTimerRef.current);
  }, []);

  // detect centered card when user scrolls manually
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let userScrolling = false;

    // when user scrolls → stop autoplay
    const onScroll = () => {
      userScrolling = true;
      clearInterval(autoTimerRef.current);

      // resume after 4s
      clearTimeout(list._resumeTimer);
      list._resumeTimer = setTimeout(() => {
        userScrolling = false;
        autoTimerRef.current = setInterval(() => {
          setActiveIndex((prev) => (prev + 1) % cards.length);
        }, 4000);
      }, 4000);
    };

    list.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        if (userScrolling) return;

        let bestIndex = activeIndex;
        let bestRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestIndex = Number(entry.target.dataset.index);
          }
        });

        if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
      },
      {
        root: list,
        threshold: [0.5, 0.75, 0.9],
      }
    );

    Array.from(list.children).forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      list.removeEventListener("scroll", onScroll);
    };
  }, []); // ✔ RUN ONLY ONCE

  return (
    <section className="wm-section">
      <HeadingComponent text="Why Us" />
      <div className="wm-header">
        <div>
          <p className="wm-heading-main applyfont">
            What Makes Us <br /> <span className="itly">Different</span>
          </p>
        </div>

        {/* desktop only arrows */}
        <div className="wm-arrows">
          <button type="button" onClick={goPrev} aria-label="Previous">
            ←
          </button>
          <button type="button" onClick={goNext} aria-label="Next">
            →
          </button>
        </div>
      </div>

      <div className="wm-carousel-wrapper">
        <ul className="wm-carousel" ref={listRef}>
          {cards.map((card, index) => (
            <li
              key={card.id}
              data-index={index}
              className={
                "wm-card" +
                (index === activeIndex ? " wm-card--active" : " wm-card--faded")
              }
            >
              <h3 className="wm-card-title applyfont">{card.title}</h3>
              <p className="wm-card-text applyfont">{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
