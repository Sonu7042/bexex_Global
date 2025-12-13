import React from "react";
import "../Css/blog.css";
import isoImg from "../assets/images/blog_imgs/construction-work.jpg";
// import miniLogo from "../assets/images/miniLogo.png"
import { HeadingComponent } from "./Buttons";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <section className="blog-section">
      <header className="blog-header">
        <HeadingComponent text="Blog" paddingBottom="0" />
        <h1 className="blog-title">
          Insights That <span className="itly">Drive Safety ,</span> <br />{" "}
          Quality & Excellence
        </h1>
        <p className="blog-desc-link">
          Discover expert articles, guides, and industry updates on EHS,
          Sustainability, Quality Management, and Business Excellence—curated to
          help your organization grow smarter and safer.
        </p>
        {/* <div className="blog-tabs">
          <button className="tab active">All</button>
          <button className="tab">Latest</button>
          <button className="tab">Popular</button>
        </div> */}
      </header>
      <div className="blog-content">
        <h2 className="recent-post-text">Recent Post (08)</h2>

        <Link
          to="/blog/ehs-legal-register-compliance"
          className="blog-card-row"
        >
          <div className="blog-image-wrap">
            <img src={isoImg} alt="Post" className="blog-image" />
          </div>
          <article className="blog-card">
            {/* <div className="blog-card-header">
              <span>20 October 2025</span>
              <span>•</span>
              <span>4 min</span>
            </div> */}
            <h3 className="blog-card-title">
              Building an Effective Legal Register for EHS India
            </h3>
            <p className="blog-card-summary">
              Environmental legal compliance requirements for businesses in
              India. Proper legal register maintenance to meet statutory and
              regulatory obligations. End-to-end HSE compliance aligned with
              Indian environmental laws. Compliance with OSH Code 2020 and
              applicable environmental laws in India.
            </p>
            {/* <div className="blog-card-tags">
              <span className="tag">Design</span>
              <span className="tag">Product</span>
              <span className="tag">Frameworks</span>
            </div> */}
          </article>
        </Link>
      </div>
    </section>
  );
}
