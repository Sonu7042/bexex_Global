import React, { useState } from "react";
// import miniLogo from '../assets/images/miniLogo.png'
import "../Css/newsLetter.css";
import { HeadingComponent } from "./Buttons";
import { LearnMoreButton } from "./Buttons";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle subscribe logic here
    alert("Subscribed with " + email);
  };
  return (
    <>
      <section className="newsletter-bg page_indenation">
        {/* <HeadingComponent text="Subscribe"  paddingBottom="5" /> */}
        <div className="newsletter-flex">
          {/* Left Side Title */}
          <div className="newsletter-left-news">
            {/* <div className="newsletter-bar">
                <div className="brand-logo">
                    <img alt="miniLogo" src={miniLogo}/>
                </div>
                <span>
                  <strong>Subscribe</strong> to our{" "}
                  <span className="newsletter-italic">newsletter</span>
                </span>
              </div> */}

            <h1 className="new-text-tital applyfont">
              Get Expert Tips Straight to <br />
              <span className="itly">Your Inbox</span>
            </h1>
          </div>

          {/* Right Side Form */}
          <form className="newsletter-right" onSubmit={handleSubmit}>
            <div className="newsletter-form-group">
              <label className="newsletter-form-label">
                Subscribe to the newsletter
              </label>
              <div className="newsletter-input-row">
                <input
                  className="newsletter-input"
                  value={email}
                  placeholder="info@bexexglobal.com"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
                {/* <button
                  className="newsletter-submit-btn"
                  type="submit"
                  aria-label="Subscribe"
                >
                  <span>&rarr;</span>
                </button> */}
              </div>
            </div>
            <div className="newsletter-agree-text">
              By clicking ‘Subscribe’ you’re confirming that you agree with our
              Terms and Conditions.
            </div>
            <div className="newsletter-submit-btn">
              <LearnMoreButton text={"Submit"} />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
