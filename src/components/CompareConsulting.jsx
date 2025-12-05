import React from "react";
import "../Css/compareConsulting.css";
import logo from "../assets/images/miniLogo.png"; 
import checkIcon from "../assets/images/thumbUp.png"; // Replace with your icon path
import singleIcon from "../assets/images/thumbDown.png"
import { HeadingComponent } from "./Buttons";

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
      {/* <header className="compare-header">
        <img src={logo} alt="Compare Logo" className="compare-logo" />
        <span className=" applyfont brand-name-update">Compare</span>
      </header> */}

      <HeadingComponent text="Compare" paddingBottom="0"  justifyContent="center" />

      <h2 className="compare-headline applyfont"   data-aos="fade-up" data-aos-duration="700">
        Evolving from reports to results&nbsp;
        <span className="itly">how modern consulting delivers real&nbsp;</span>
         measurable impact.
      </h2>
      <div className="compare-subtext applyfont"   data-aos="fade-up" data-aos-duration="900">
        Today's consulting is more than advice it's collaboration, innovation, and execution.<br />
        We combine data, agility, and practical insights to create lasting business transformation.
      </div>
      <div className="compare-table">
        <div className="compare-column" >
          <div className="compare-col-title applyfont">Traditional Consulting Firm</div>
          {data.map((row, i) => (
            <div data-aos="zoom-in-up" data-aos-duration="500" className="compare-row darker" key={i}>
              <span>{row.traditional}</span>
              <div className="campareImgwrapper">
              <img src={singleIcon} alt="Check Mark" className="compare-check" />
              </div>
            </div>
          ))}
        </div>
        <div className="compare-column" >
          <div  className="compare-col-title applyfont">Modern Consulting Firm</div>
          {data.map((row, i) => (
            <div data-aos="zoom-in-up" data-aos-duration="800" className="compare-row lighter" key={i}>
              <span>{row.modern}</span>
              <div className="dardImgWraper">
              <img src={checkIcon} alt="Check Mark" className="compare-check" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
