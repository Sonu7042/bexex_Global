import React, { useEffect, useRef, useState } from "react";

// Single-file React component that injects its CSS at runtime so you can copy-paste
// Default active year is 2025 (first item). The right side is a scrollable list of cards.
// Scrolling the right list highlights the matching year on the left. Clicking a year
// smoothly scrolls the right list. The left years list will also keep the active
// year centered.

const ITEMS = [
  {
    year: "2025",
    text:
      "Rebranded as BLZEX Global Pvt. Ltd., reflecting our evolution into a multi-domain firm focusing on business excellence, sustainability, and growth."
  },
  {
    year: "2017",
    text:
      "Established as eGrowth India, delivering early consulting assignments and 200+ training hours—laying the foundation for client trust and expertise."
  },
  {
    year: "2019",
    text:
      "Set up a dedicated office and expanded the consulting and training team to serve more sectors with structured project management."
  },
  {
    year: "2021",
    text:
      "Achieved 5,000+ training hours and completed 200+ consulting projects, strengthening our footprint across industries."
  },
  {
    year: "2023",
    text:
      "Registered as eGrowth Training & Consultancy Services under GST, reaching 300+ projects and 100+ clients."
  },
  {
    year: "2024",
    text: "Continued to build a strong brand reputation with new partnerships and initiatives."
  },
  {
    year: "2025",
    text:
      "Rebranded as BLZEX Global Pvt. Ltd., reflecting our evolution into a multi-domain firm focusing on business excellence, sustainability, and growth."
  },
  {
    year: "2017",
    text:
      "Established as eGrowth India, delivering early consulting assignments and 200+ training hours—laying the foundation for client trust and expertise."
  },
  {
    year: "2019",
    text:
      "Set up a dedicated office and expanded the consulting and training team to serve more sectors with structured project management."
  },
  {
    year: "2021",
    text:
      "Achieved 5,000+ training hours and completed 200+ consulting projects, strengthening our footprint across industries."
  },
  {
    year: "2023",
    text:
      "Registered as eGrowth Training & Consultancy Services under GST, reaching 300+ projects and 100+ clients."
  },
  {
    year: "2024",
    text: "Continued to build a strong brand reputation with new partnerships and initiatives."
  }
];

export default function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0); // default active = 2025
  const cardRefs = useRef([]);
  const yearRefs = useRef([]);
  const rightRef = useRef(null);
  const leftYearsRef = useRef(null);

  // inject CSS once
  useEffect(() => {
    const id = "journey-timeline-styles";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      :root{
        --bg: #3b3d41;
        --card-dark: #6e7075;
        --card-light: #f8f9fb;
        --year-muted: #9aa0a6;
        --white: #ffffff;
        --accent: #2f63d9;
      }

      .journey-outer{ background: var(--bg); min-height:200vh; margin:0; }
      .journey-sticky{ position:sticky; top:0; height:100vh; display:flex; align-items:center; }
      .journey-inner{ max-width:1200px; margin:0 auto; width:100%; padding:3rem 5vw; box-sizing:border-box; display:flex; gap:3.5rem; color:var(--white); font-family:system-ui, -apple-system, 'Segoe UI', sans-serif; }

      /* LEFT */
      .journey-left{ flex:0 0 32%; }
      .journey-heading{ margin:0 0 2.25rem; font-size:2.2rem; line-height:1.12; font-weight:800; }
      .journey-heading span{ color:var(--accent); font-style:italic; }
      .journey-years{ display:flex; flex-direction:column; gap:1.2rem; max-height:55vh; overflow-y:auto; padding-right:6px; }
      .journey-year{ font-size:1.8rem; font-weight:700; color:var(--year-muted); cursor:pointer; transition: color 240ms, transform 240ms; padding:4px 6px; border-radius:6px; }
      .journey-year:focus{ outline:2px solid rgba(47,99,217,0.18); }
      .journey-year--active{ color:var(--white); transform:translateX(8px); }

      /* RIGHT */
      .journey-right{ flex:1; max-height:70vh; overflow-y:auto; padding-right:0.5rem; }
      .journey-list{ display:flex; flex-direction:column; gap:1.2rem; padding:4rem 0; }
      .journey-card{ display:flex; align-items:stretch; background:rgba(180,181,185,0.15); border-radius:10px; min-height:120px; overflow:hidden; opacity:0.45; transform:scale(0.985); transition: all 300ms cubic-bezier(.2,.9,.2,1); }
      .journey-card--active{ background:var(--card-light); opacity:1; transform:scale(1); box-shadow: 0 10px 30px rgba(0,0,0,0.35); }
      .journey-card-year{ flex:0 0 140px; background:#b8bbc0; color:var(--white); display:flex; align-items:center; justify-content:center; font-size:2rem; font-weight:800; }
      .journey-card--active .journey-card-year{ background:#a0a3a8; }
      .journey-card-text{ flex:1; padding:1.4rem 1.6rem; font-size:0.98rem; line-height:1.6; color:#111318; }
      .journey-card:not(.journey-card--active) .journey-card-text{ color:rgba(255,255,255,0.85); }

      /* scrollbar */
      .journey-right::-webkit-scrollbar, .journey-years::-webkit-scrollbar{ width:8px; }
      .journey-right::-webkit-scrollbar-thumb, .journey-years::-webkit-scrollbar-thumb{ background: rgba(255,255,255,0.12); border-radius:6px; }

      /* responsive */
      @media (max-width:900px){
        .journey-inner{ flex-direction:column; padding-top:2rem; gap:1.5rem; }
        .journey-left{ width:100%; }
        .journey-right{ max-height:60vh; }
        .journey-card{ flex-direction:column; }
        .journey-card-year{ width:100%; justify-content:flex-start; padding-left:1rem; }
      }
      @media (max-width:600px){
        .journey-inner{ padding:2rem 1.25rem; }
        .journey-heading{ font-size:1.6rem; }
        .journey-year{ font-size:1.35rem; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // helper: scroll right list so item is vertically centered
  const scrollRightToIndex = (index, smooth = true) => {
    const container = rightRef.current;
    const el = cardRefs.current[index];
    if (!container || !el) return;
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    // compute target scrollTop
    const offset = el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2;
    container.scrollTo({ top: offset, behavior: smooth ? "smooth" : "auto" });
  };

  // helper: center active year in left years list
  const centerYearInView = (index, smooth = true) => {
    const container = leftYearsRef.current;
    const el = yearRefs.current[index];
    if (!container || !el) return;
    const offset = el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2;
    container.scrollTo({ top: offset, behavior: smooth ? "smooth" : "auto" });
  };

  // setup intersection observer on the right-side cards
  useEffect(() => {
    const container = rightRef.current;
    if (!container) return;

    const options = {
      root: container,
      rootMargin: "0px",
      threshold: [0.35, 0.6, 0.9]
    };

    let ticking = false;
    const observer = new IntersectionObserver((entries) => {
      // pick the entry with largest intersectionRatio
      let best = { ratio: 0, index: activeIndex };
      entries.forEach((entry) => {
        const idx = Number(entry.target.dataset.index);
        if (entry.intersectionRatio > best.ratio) {
          best = { ratio: entry.intersectionRatio, index: idx };
        }
      });
      if (best.index !== activeIndex) {
        // avoid rapid state flips
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            setActiveIndex(best.index);
            centerYearInView(best.index);
            ticking = false;
          });
        }
      }
    }, options);

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [activeIndex]);

  // on mount: ensure default active is centered on right and left
  useEffect(() => {
    // allow refs to populate
    setTimeout(() => {
      scrollRightToIndex(activeIndex, false);
      centerYearInView(activeIndex, false);
    }, 60);
  }, []);

  // when activeIndex changes (e.g., via click), ensure centering
  useEffect(() => {
    scrollRightToIndex(activeIndex, true);
    centerYearInView(activeIndex, true);
  }, [activeIndex]);

  // click handler when user clicks a year
  const handleYearClick = (idx) => {
    setActiveIndex(idx);
    // scrollRightToIndex will run from effect
  };

  return (
    <section className="journey-outer">
      <div className="journey-sticky">
        <div className="journey-inner">
          <div className="journey-left">
            <h1 className="journey-heading">
              OUR JOURNEY OF <span>GROWTH</span>
              <br /> AND EXCELLENCE
            </h1>

            <div className="journey-years" ref={leftYearsRef} aria-hidden={false}>
              {ITEMS.map((item, i) => (
                <div
                  key={item.year}
                  role="button"
                  tabIndex={0}
                  ref={(el) => (yearRefs.current[i] = el)}
                  className={"journey-year" + (i === activeIndex ? " journey-year--active" : "")}
                  onClick={() => handleYearClick(i)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleYearClick(i); } }}
                  aria-current={i === activeIndex}
                >
                  {item.year}
                </div>
              ))}
            </div>
          </div>

          <div className="journey-right" ref={rightRef}>
            <div className="journey-list">
              {ITEMS.map((item, i) => (
                <article
                  key={item.year}
                  data-index={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className={"journey-card" + (i === activeIndex ? " journey-card--active" : "")}
                >
                  <div className="journey-card-year">{item.year}</div>
                  <div className="journey-card-text">{item.text}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
