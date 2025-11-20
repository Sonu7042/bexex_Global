import React from "react";
import "../Css/home.css"
import cardImg from "../assets/images/homeImg.png";
import miniLogo from '../assets/images/miniLogo.png'


export default function Home() {
  return (
    <>
      <div className="home-container">
        <main className="home-main">
          {/* Left hero area */}
          <section className="hero-section">
            {/* Logo and brand */}
            <div className="brand">
              <div className="brand-logo">
               <img src={miniLogo} alt="miniLogo" />
              </div>
              <span className="brand-name">Consulting firm</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Your Partner in Building Safer,
              Compliant, and{" "}
              <span className="highlight">High-Performing</span>
              <br />
              Operations
            </h1>

            {/* Subtext */}
            <p className="hero-subtext">
              Integrated EHS, Quality, and Sustainability solutions designed for
              lasting business excellence.
            </p>

            {/* Discover more button */}
            <button className="discover-btn applyFont">
              Discover more
              <span className="discover-icon">
                <svg width="17" height="17" fill="none" stroke="#fff" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 4l6 4.5-6 4.5" />
                </svg>
              </span>
            </button>
          </section>

          {/* Right floating card */}
          <aside className="hero-card">
            <div className="card">
              <div className="card-content">
                <div>
                  <div className="card-label applyFont">Consulting firm</div>
                  <div className="card-title_home applyFont">
                    Your Partner in Building Safer, Compliant, and Operations
                  </div>
                </div>
                <div className="card-subtext applyFont">
                  Integrated EHS, Quality, and Sustainability solutions designed for lasting business excellence.
                </div>
                <button className="card-btn">
                  <span >Discover more</span>
                  <span className="card-icon">
                    <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 3l4 3-4 3" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="card-image">
                <img src={cardImg} alt="Card artwork" />
              </div>
            </div>
          </aside>
        </main>

        {/* Mobile card */}
        <div className="mobile-card">
          <div className="card">
            <div className="card-content">
              <div>
                <div className="card-label applyFont">Consulting firm</div>
                <div className="card-title_home applyFont">
                  Your Partner in Building
                  <b>
                    Safer, Compliant, and
                    <i className="highlight applyFont">High-Performing</i>
                  </b>
                  Operations
                </div>
              </div>
              <div className="card-subtext applyFont">
                Integrated EHS, Quality, and Sustainability solutions designed for lasting business excellence.
              </div>
              <button className="card-btn">
                <span>Discover more</span>
                <span className="card-icon">
                  <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 3l4 3-4 3" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="card-image">
              <img src={cardImg} alt="Card artwork" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
