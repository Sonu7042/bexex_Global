import React from "react";
import "../Css/home.css";
import cardImg from "../assets/images/homeImg.png";
import { HeadingComponent, LearnMoreButton } from "./Buttons";

export default function Home() {
  return (
    <>
      <div className="home-container">
        {/* <main className="home-main"> */}
        <section className="hero-section">
          <div className="heading-portion">
            <HeadingComponent
              text="Strategic Partner"
              marginTop="0"
              paddingBottom="0"
            />
          </div>

          <div className="heroContainer">
            <h1
              // data-aos="fade-right"

              className="hero-title"
            >
              From Compliance Chaos to Operational{" "}
              <span className="itly"> Excellence</span>
            </h1>

            <div className="headingWithBox">
              <div className="gap-between">
                <p data-aos="fade-up" className="hero-subtext  ">
                  Integrated EHS, Quality, and Sustainability solutions that
                  simplify complexity and deliver measurable results.
                </p>
                <LearnMoreButton text="Discover more" link="/" marginTop="0" />
              </div>

              <aside className="hero-card" data-aos="fade-up">
                <div className="heroCard">
                  <div className="card-content">
                    <div>
                      <div className="card-label applyFont">
                        Consulting firm
                      </div>
                      <div className="card-title_home applyFont">
                        Your Partner in Building Safer, Compliant, and
                        Operations
                      </div>
                    </div>
                    {/* <div className="card-subtext applyFont">
                        Integrated EHS, Quality, and Sustainability solutions
                        designed for lasting business excellence.
                      </div> */}
                    <LearnMoreButton
                      text="Discover more"
                      link="/"
                      marginTop="15"
                    />
                  </div>
                  <div className="card-image">
                    <img src={cardImg} alt="Card artwork" />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        {/* </main> */}

        <div className="mobile-card">
          <div className="heroCard">
            <div className="card-content">
              <div>
                <div className="card-label applyFont">Consulting firm</div>
                <div className="card-title_home applyFont">
                  Your Partner in Building Safer, Compliant, and High-Performing
                  Operations
                </div>
              </div>
              <div
                className="card-subtext applyFont"
                data-aos="fade-up"
                data-aos-offset="7000"
              >
                Integrated EHS, Quality, and Sustainability solutions designed
                for lasting business excellence.
              </div>
              <LearnMoreButton text="Discover more" />
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
