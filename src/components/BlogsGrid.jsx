import React from "react";
import "../Css/blogsGrid.css";

// Replace these imports with your actual image paths
import img1 from "../assets/images/nature.jpg";
import img2 from "../assets/images/nature.jpg";
import img3 from "../assets/images/nature.jpg";
// import img3 from "./images/tablet.jpg";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";

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

  return (
    <>
    <section className="blog-grid-section">
      <div className="blog-grid-container">
        {blogPosts.map((post, idx) => (
          <Link to={'/innerBlogPage'} className="blog-grid-card" key={idx}>
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
          </Link>
        ))}
      </div>
    </section>



{/* --------------------------------------------section--------------------------------------------- */}
     <NewsLetter />
    </>
  );
}
