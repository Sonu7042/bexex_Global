import React, { useState } from "react";
import "../Css/blogsGrid.css";

// Replace these imports with your actual image paths
import img1 from "../assets/images/nature.jpg";
import img2 from "../assets/images/nature.jpg";
import img3 from "../assets/images/nature.jpg";
// import img3 from "./images/tablet.jpg";
import miniLogo from '../assets/images/miniLogo.png'

const blogPosts = [
  {
    img: img1,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Health & Safety (EHS)",
    summary:
      "Health & Safety (EHS) ensures risk control and compliance to protect people and operations, creating a safer and more reliable workplace.",
    tags: ["Design", "Product"],
  },
  {
    img: img2,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Quality Management",
    summary:
      "Quality Management focuses on improving processes, reducing errors, and maintaining consistent standards so organizations can deliver high-quality results with efficiency and trust.",
    tags: ["Design", "Product"],
  },
  {
    img: img3,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Business Excellence",
    summary:
      "Business Excellence helps organizations improve performance, optimize processes, and achieve consistent, high-quality results.",
    tags: ["Design", "Product"],
  },
  {
    img: img3,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Business Excellence",
    summary:
      "Business Excellence helps organizations improve performance, optimize processes, and achieve consistent, high-quality results.",
    tags: ["Design", "Product"],
  },
  {
    img: img3,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Business Excellence",
    summary:
      "Business Excellence helps organizations improve performance, optimize processes, and achieve consistent, high-quality results.",
    tags: ["Design", "Product"],
  },
  {
    img: img3,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Business Excellence",
    summary:
      "Business Excellence helps organizations improve performance, optimize processes, and achieve consistent, high-quality results.",
    tags: ["Design", "Product"],
  },
  {
    img: img3,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Business Excellence",
    summary:
      "Business Excellence helps organizations improve performance, optimize processes, and achieve consistent, high-quality results.",
    tags: ["Design", "Product"],
  },
  {
    img: img3,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Business Excellence",
    summary:
      "Business Excellence helps organizations improve performance, optimize processes, and achieve consistent, high-quality results.",
    tags: ["Design", "Product"],
  },
  {
    img: img3,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Business Excellence",
    summary:
      "Business Excellence helps organizations improve performance, optimize processes, and achieve consistent, high-quality results.",
    tags: ["Design", "Product"],
  },
];

export default function BlogsGrid() {

    const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle subscribe logic here
    alert("Subscribed with " + email);
  };



  return (
    <>
    <section className="blog-grid-section">
      <div className="blog-grid-container">
        {blogPosts.map((post, idx) => (
          <article className="blog-grid-card" key={idx}>
            <div className="blog-grid-img-wrap">
              <img src={post.img} alt={post.title} className="blog-grid-img" />
            </div>
            <div className="blog-grid-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="blog-grid-title">{post.title}</h3>
            <p className="blog-grid-summary">{post.summary}</p>
            <div className="blog-grid-tags">
              {post.tags.map((tag, i) => (
                <span className="blog-grid-tag" key={i}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>



{/* --------------------------------------------section--------------------------------------------- */}
  <section className="newsletter-bg">
      <div className="newsletter-flex">
        {/* Left Side Title */}
        <div className="newsletter-left">
          <div className="newsletter-bar">
            <div class="brand-logo">
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
  );
}
