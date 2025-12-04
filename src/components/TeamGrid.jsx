import React from "react";
import "../Css/TeamGrid.css";
import { HeadingComponent } from "./Buttons";
import pushpender from '../assets/images/pushpender.jpg'

// import miniLogo from '../assets/images/miniLogo.png'
// Replace these with actual image paths or require(...) for assets





const teamMembers = [
  {
    name: "Pushpender Sharma",
    title: "Director",
    img: pushpender,
  },
  {
    name: "Praveen Sharma",
    title: "VP Sales & Marketing",
    img: "./team2.jpg",
  },
  {
    name: "Sanjay Gupta",
    title: "Taining Director",
    img: "./team1.jpg",
  },
];

const TeamGrid = () => (
  <div className="team-bg">
    {/* <nav className="team-nav">
    <img className="brand-logo" src={miniLogo} alt="miniLogo" />
      <span className="team-nav-title">Teams</span>
    </nav> */}

      <HeadingComponent  text="Teams" paddingBottom="0"   justifyContent="center"  />


    

    <div className="team-heading applyfont">
      Leaders in Consulting, <span className="itly"> Auditing & Training </span> Working Together to Build Better Organizations
    </div>

    <div className="team-grid">
      {teamMembers.map((member, idx) => (
        <div className="team-card" key={`${member.name}${idx}`}>
          <div className="team-img-wrap">
            <img src={member.img} alt={member.name} className="team-img" />
          </div>
          <div className="team-name">{member.name}</div>
          <div className="team-title">{member.title}</div>
        </div>
      ))}
    </div>
    {/* <div className="team-footer">
      <span>Explore Careers</span>
      <span className="team-footer-arrow">→</span>
    </div> */}
  </div>
);

export default TeamGrid;
