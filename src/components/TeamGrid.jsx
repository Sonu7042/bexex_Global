import React, { useEffect } from "react";
import "../Css/TeamGrid.css";
import { HeadingComponent } from "./Buttons";

import pushpender from '../assets/images/pushpender.jpg';
import SanjayGupta from '../assets/images/sanjay_gupta.png';
// import Praveen_Sharma from '../assets/images/Praveen_Sharma.jpg';
import Praveen_Sharma from '../assets/images/Praveen_Sharma2.png';

const teamMembers = [
  {
    name: "Pushpender Sharma",
    title: "Director",
    img: pushpender,
  },
  {
    name: "Praveen Sharma",
    title: "VP Sales & Marketing",
    img: Praveen_Sharma,
  },
  {
    name: "Sanjay Gupta",
    title: "Training Director",
    img: SanjayGupta,
  },
];

const TeamGrid = () => {
  useEffect(() => {
    const container = document.querySelector(".team-grid");

    const handleScroll = () => {
      const cards = document.querySelectorAll(".team-card");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const screenCenter = window.innerWidth / 2;

        card.classList.remove("active");

        if (Math.abs(cardCenter - screenCenter) < 150) {
          card.classList.add("active");
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="team-bg">
      <HeadingComponent
        text="Teams"
        paddingBottom="0"
        justifyContent="center"
      />

      <div className="team-heading applyfont">
        Leaders in Consulting,
        <span className="itly"> Auditing & Training </span>
        Working Together to Build Better Organizations
      </div>

      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="team-img-wrap">
              <img src={member.img} alt={member.name} className="team-img" />
            </div>
            <div className="team-name">{member.name}</div>
            <div className="team-title">{member.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
