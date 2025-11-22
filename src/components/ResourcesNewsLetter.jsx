import React from 'react'
import "../Css/resourceNewsLetter.css"
import LetsConnect from './LetsConnect'
import Footer from './Footer'

const ResourcesNewsLetter = () => {
  return (
    <>
    <section className="page_indenation">
        <div className="newsletter-label applyfont">
          {/* <span className="newsletter-icon">✉️</span> */}
          <div class="brand-logo">
            <img alt="miniLogo" src="/src/assets/images/miniLogo.png"/>
          </div>
           Newsletter
        </div>


      <div className='newsletter-wrapper'>
      <div className="newsletter-left">
        <h1>
          <span>Subscribe for weekly</span><br />
          <span className="italics">EHS and Quality</span><br />
          <span>updates.</span>
        </h1>
        <h2 className="newsletter-value">Explain the value in short, attractive lines:</h2>
        <ul className="newsletter-list">
          <li >Get insights that help you work smarter, not harder.</li>
          <li>Stay ahead with expert guidance in minutes.</li>
          <li>Learn trends that impact safety, quality, and sustainability.</li>
          <li>Turn complex industry changes into simple actions.</li>
          <li>Improve compliance and performance with every issue.</li>
          <li>Save time—get curated insights that actually matter.</li>
          <li>Make better decisions backed by real expertise.</li>
          <li>Grow your knowledge with quick, practical tips.</li>
        </ul>
        <div className="newsletter-trusted">
          {/* <span></span><br /> */}
          <span className="bold">Your trusted source for <br /> EHS, Sustainability, and Compliance intelligence.<br />Delivered straight to your inbox.</span>
        </div>
      </div>
      <div className="newsletter-right">
        <div className="newsletter-card">
          <h2>
            <span className="italics">Subscribe for:</span><br />
            <span className="bold">Safety, Quality & Sustainability—Simplified</span>
          </h2>
          <form className="newsletter-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="bexex@100gmail.com" defaultValue="bexex@100gmail.com" />
            <small className='applyfont'>
              By clicking 'Subscribe' you're confirming that you agree with our Terms and Conditions.
            </small>
            <button type="submit" className="newsletter-submit">
              <span>&rarr;</span>
            </button>
          </form>
        </div>
      </div>
      </div>

    </section>

    <LetsConnect />
    <Footer />
    </>

     
  )
}

export default ResourcesNewsLetter
