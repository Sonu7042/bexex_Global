import React from "react";
import "../Css/compareConsulting.css";
import logo from "../assets/images/miniLogo.png"; // Replace with your logo path
import checkIcon from "../assets/images/Vector.png"; // Replace with your icon path
import singleIcon from "../assets/images/singalVector.png"

const data = [
  {
    traditional: "Focused on static reports",
    modern: "Focused on actionable outcomes"
  },
  {
    traditional: "One-size-fits-all solutions",
    modern: "Tailored, scalable strategies"
  },
  {
    traditional: "Limited client collaboration",
    modern: "Continuous partnership and co-creation"
  },
  {
    traditional: "Reactive problem-solving",
    modern: "Proactive, data-driven approach"
  },
  {
    traditional: "Long, rigid project timelines",
    modern: "Agile, results-focused delivery"
  }
];

export default function CompareConsulting() {
  return (
    <div className="compare-root">
      <header className="compare-header">
        <img src={logo} alt="Compare Logo" className="compare-logo" />
        <span className="compare-title applyfont">Compare</span>
      </header>
      <h2 className="compare-headline applyfont">
        Evolving from reports to results — 
        <span className="italic applyfont">how modern consulting delivers real, measurable impact.</span>
      </h2>
      <div className="compare-subtext applyfont">
        Today's consulting is more than advice — it's collaboration, innovation, and execution.<br />
        We combine data, agility, and practical insights to create lasting business transformation.
      </div>
      <div className="compare-table">
        <div className="compare-column">
          <div className="compare-col-title applyfont">Traditional Consulting Firm</div>
          {data.map((row, i) => (
            <div className="compare-row darker" key={i}>
              <span>{row.traditional}</span>
              <img src={singleIcon} alt="Check Mark" className="compare-check" />
            </div>
          ))}
        </div>
        <div className="compare-column">
          <div className="compare-col-title applyfont">Modern Consulting Firm</div>
          {data.map((row, i) => (
            <div className="compare-row lighter" key={i}>
              <span>{row.modern}</span>
              <img src={checkIcon} alt="Check Mark" className="compare-check" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
