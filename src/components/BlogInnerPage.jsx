import React from "react";
import "../Css/blogInnerPage.css";
import blogImage from "../assets/images/nature.jpg"; // Adjust path as needed
import { Link } from "react-router-dom";

const BlogInnerPage = () => (
  <section className="blog-inner page_indenation">
    <div className="blog-inner-header">
      <a href="/blogs" className="blog-back-link">
        All blogs 
        {/* <span className="blog-arrow">&#8594;</span> */}
        <Link to={"/resources/blog"} class="blogInnerBtn">→</Link>
      </a>
    </div>
    <div className="blog-inner-content">
      <div className="blog-image-wrapper">
        <img src={blogImage} alt="Blog visual" className="blog-main-image" />
      </div>
    </div>
      <div className="blog-text">
        <h1>
          Environment &nbsp;<span className="blog-amp">&amp;</span>&nbsp;
          <span className="blog-highlight">Sustainability</span>
        </h1>
        <p className="blog-description">
          Empowering organizations to build cleaner, greener, and future-ready operations through responsible environmental practices and sustainable strategies.
        </p>
        <a href="#" className="blog-discover-link">
          Discover more 
          {/* <span className="blog-arrow">&#8594;</span> */}
        <span  class="blogInnerBtn">→</span>

        </a>
      </div>
    <div className="blog-brand-bg"></div>
  </section>
);

export default BlogInnerPage;
