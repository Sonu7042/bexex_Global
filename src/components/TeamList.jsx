import React, { useState } from "react";
import "../Css/teamlist.css"
import minilogo from '../assets/images/miniLogo.png'
import Lenis from 'lenis'

const teamData = [
  {
    tags: ["Founder", "Managing Director"],
    name: "Pushpender Sharma",
    extra: "Pushpender Sharma has over 20 years of industry experience and is the driving force behind our vision and excellence."
  },
  {
    tags: ["Lead Auditor (ISO & Compliance)"],
    name: "Arjun Deshmukh",
    extra: "Arjun leads our compliance team and oversees audit implementation for key clients."
  },
  {
    tags: ["Training & Development Manager"],
    name: "Sneha Iyer",
    extra: "Sneha creates tailored development programs and ensures all staff have the latest skills."
  },
  {
    tags: ["Lead Auditor (ISO & Compliance)"],
    name: "Karan Patel",
    extra: "Karan is known for his detail-oriented, client-facing audits and certifications."
  },
  // Duplicate again for demo like your image
  {
    tags: ["Founder", "Managing Director"],
    name: "Pushpender Sharma",
    extra: "Pushpender Sharma has over 20 years of industry experience and is the driving force behind our vision and excellence."
  },
  {
    tags: ["Lead Auditor (ISO & Compliance)"],
    name: "Arjun Deshmukh",
    extra: "Arjun leads our compliance team and oversees audit implementation for key clients."
  },
  {
    tags: ["Training & Development Manager"],
    name: "Sneha Iyer",
    extra: "Sneha creates tailored development programs and ensures all staff have the latest skills."
  },
  {
    tags: ["Lead Auditor (ISO & Compliance)"],
    name: "Karan Patel",
    extra: "Karan is known for his detail-oriented, client-facing audits and certifications."
  }
];

export default function TeamList() {
  const [openIdx, setOpenIdx] = useState(null);



  

  return (
    <div className="teams-root ">
      <header>
        <div className="teams-brand">
          <img src={minilogo} className=" brand-logo"></img>
          <span className="teams-label">Our Teams</span>
        </div>
        <div className="teams-heading">
          <div className="teams-heading-inner">
            A group of dedicated <i>experts committed</i> 
            to <br />
            delivering excellence, innovation, and measurable results.
          </div>
        </div>
      </header>
      <ul className="teams-list">
        {teamData.map((row, idx) => (
          <li
            key={idx}
            className={`teams-item${openIdx === idx ? " open" : ""}`}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <div className="teams-info">
              <div className="teams-tags">
                {row.tags.map((tag, tidx) => (
                  <span className="teams-tag" key={tidx}>
                    <span className="teams-dot"></span>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="teams-name">{row.name}</div>
            </div>
            <div
              className="teams-expand"
              style={{
                maxHeight: openIdx === idx ? "120px" : "0",
                opacity: openIdx === idx ? 1 : 0
              }}
            >
              <p>{row.extra}</p>
            </div>
            <div className="teams-divider"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
