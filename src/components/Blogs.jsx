import React from "react";
import "../Css/blog.css";
import blogImg from "../assets/images/nature.jpg"; 
// import miniLogo from "../assets/images/miniLogo.png"
import {HeadingComponent} from './Buttons'

export default function Blogs() {
  return (
    <section className="blog-section  " >
      <header className="blog-header">
        {/* <div className="blog-logo-row">
          <div className="brand-logo">
          <img alt="miniLogo" src={miniLogo}></img>
          </div>
          <span className="blog-brand">Blog</span>
        </div> */}

        <HeadingComponent  text="Blog" paddingBottom="4"  />
        

      
        <h1 className="blog-title">
          Insights That <span className="blog-title-em">Drive Safety</span>,<br />
          Quality & Excellence  
        </h1>
        <p className="blog-desc-link">
          Discover expert articles, guides, and industry updates on EHS, Sustainability, Quality Management,
          and Business Excellence—curated to help your organization grow smarter and safer.
        </p>
        {/* <div className="blog-tabs">
          <button className="tab active">All</button>
          <button className="tab">Latest</button>
          <button className="tab">Popular</button>
        </div> */}
      </header>
      <div className="blog-content">
        <h2 className="recent-post-text">Recent Post (08)</h2>
        <div className="blog-card-row">
          <div className="blog-image-wrap">
            <img src={blogImg} alt="Post" className="blog-image" />
          </div>
          <article className="blog-card">
            <div className="blog-card-header">
              <span>20 October 2025</span>
              <span>•</span>
              <span>4 min</span>
            </div>
            <h3 className="blog-card-title">Environment & Sustainability</h3>
            <p className="blog-card-summary">
              Climate action begins with responsible choices that reduce emissions and protect natural resources.
              Effective waste management helps organizations minimize landfill impact and adopt more sustainable routines.
              Pollution control measures ensure cleaner air, water, and soil for healthier communities.
              By improving resource efficiency, businesses can lower costs while maximizing performance.
            </p>
            {/* <div className="blog-card-tags">
              <span className="tag">Design</span>
              <span className="tag">Product</span>
              <span className="tag">Frameworks</span>
            </div> */}
          </article>
        </div>
      </div>
    </section>
  );
}
