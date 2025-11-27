import React from "react";
import "../Css/blog.css";
import isoImg from "../assets/images/blog_imgs/iso.png"; 
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
            <img src={isoImg} alt="Post" className="blog-image" />
          </div>
          <article className="blog-card">
            {/* <div className="blog-card-header">
              <span>20 October 2025</span>
              <span>•</span>
              <span>4 min</span>
            </div> */}
            <h3 className="blog-card-title">What is ISO: A Comprehensive Overview</h3>
            <p className="blog-card-summary">
             ISO is derived from the Greek word "isos," which means "EQUAL''. The word ISO is often used as a prefix in scientific terminology to create new words. Such as: isosceles, isotope. The word ISO is used as an acronym by the International Organization for Standardization which is an independent, non-governmental international organization that develops and publishes standards for a wide range of industries and sectors. It was founded in 1947 and is headquartered in Geneva, Switzerland.
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
