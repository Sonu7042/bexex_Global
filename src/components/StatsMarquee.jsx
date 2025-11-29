// StatsMarquee.jsx
import React, { useEffect, useRef, useState } from "react";
import "../Css/statsMarquee.css";
import { useCountUp } from "./UseCountUp";

const STATS = [
  { value: 100000, suffix: "+", label: "Training Hours Delivered" },
  { value: 100, suffix: "+", label: "Comprehensive Services" },
  { value: 15, suffix: "+", label: "Certified Professionals" },
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 150, suffix: "+", label: "Training Courses" },
];

const StatsMarquee = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-marquee">
        <div className="stats-track">
          {STATS.map((item) => {
            const count = useCountUp(item.value, 1500, inView);
            const display =
              item.value >= 1000
                ? Math.round(count / 1000) + "K"
                : count.toString();

            return (
              <div className="stat-item" key={item.label}>
                <div className="stat-value">
                  {display}
                  {item.suffix}
                </div>
                <div className="stat-label">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsMarquee;
