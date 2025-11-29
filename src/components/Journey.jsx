import React from "react";
import "../Css/journey.css";
import car from "../assets/images/journeys/car.png";
import animation_background from '../assets/images/journeys/aniamtion--background.png'

const Journey = () => {
  return (
    <section className="journey">
      <div className="journey-inner">
        {/* Top heading + arrows */}
        <header className="journey-header">
          <div className="journey-title">
            <h2>OUR JOURNEY OF</h2>
            <h2>
              <span className="italic">GROWTH</span> AND EXCELLENCE
            </h2>
          </div>
          <div className="journey-arrows">
            <button className="nav-btn">←</button>
            <button className="nav-btn">→</button>
          </div>
        </header>

          <div>
            <img src={animation_background} className="animationImg" alt="Animation Image" />
          </div>
      

      </div>
    </section>
  );
};

export default Journey;
