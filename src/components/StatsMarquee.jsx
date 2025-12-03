// StatsSection.jsx
import React from "react";
import CountUp from "react-countup";
import "../Css/statsMarquee.css";

const statsData = [
  {
    title: "Client Success",
    items: [
      { label: "Happy Clients", end: 200, suffix: "+" },
      { label: "Projects Done", end: 500, suffix: "+" },
    ],
  },
  {
    title: "Service Depth",
    items: [
      { label: "Active Services", end: 100, suffix: "+" },
      { label: "Days Team Exp.", end: 10, suffix: "k+" },
    ],
  },
  {
    title: "Training Excellence",
    items: [
      { label: "Training Hours", end: 100, suffix: "k+" },
      { label: "Training Courses", end: 150, suffix: "+" },
    ],
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((block) => (
          <div className="stats-card" key={block.title}>
            <h3 className="stats-card-title itly">{block.title}</h3>

            <div className="stats-card-grid">
              {block.items.map((item) => (
                <div className="stats-item" key={item.label}>
                  <div className="stats-number applyfont">
                    <CountUp
                      start={0}
                      end={item.end}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                      suffix={item.suffix}
                    />
                  </div>
                  <p className="stats-label applyfont">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
