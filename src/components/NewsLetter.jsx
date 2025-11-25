import React, { useState } from 'react'
import miniLogo from '../assets/images/miniLogo.png'
import '../Css/newsLetter.css'


const NewsLetter = () => {

      const [email, setEmail] = useState("");
      const handleSubmit = (e) => {
        e.preventDefault();
        // handle subscribe logic here
        alert("Subscribed with " + email);
      };
  return (
    <>
     <section className="newsletter-bg">
          <div className="newsletter-flex">
            {/* Left Side Title */}
            <div className="newsletter-left">
              <div className="newsletter-bar">
                <div className="brand-logo">
                    <img alt="miniLogo" src={miniLogo}/>
                </div>
                {/* <span className="newsletter-icon">✕</span> */}
                <span>
                  <strong>Subscribe</strong> to our{" "}
                  <span className="newsletter-italic">newsletter</span>
                </span>
              </div>
              <h1 className="newsletter-title">
                Get Expert Tips Straight to <br />
                <span className="newsletter-title-em">Your Inbox</span>
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
                    placeholder="your@email.com"
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    required
                  />
                  <button className="newsletter-submit-btn" type="submit" aria-label="Subscribe">
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
              <div className="newsletter-agree-text">
                By clicking ‘Subscribe’ you’re confirming that you agree with our Terms and Conditions.
              </div>
            </form>
          </div>
        </section>
      
    </>
  )
}

export default NewsLetter
