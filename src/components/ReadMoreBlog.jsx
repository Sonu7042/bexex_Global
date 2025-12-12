import React from "react";
import "../Css/blogsGrid.css";

// Replace these imports with your actual image paths
import emergency from "../assets/images/blog_imgs/emergency.png";
import clearingAndAir from "../assets/images/blog_imgs/clearingAndAir.png";
import navigating_Environment from "../assets/images/blog_imgs/navigating_Environment.png";

// import img3 from "./images/tablet.jpg";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    img:emergency,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Emergency Preparedness and ISO 45001: A Holistic Approach to Safety",
    summary:
      "Insights on how ISO 45001 contributes to effective emergency preparedness and response in the workplace.",
    tags: ["ISO Systems", "Safty Managment"],
  },
  {
    img: clearingAndAir,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Clearing the Air: GHG Verification with ISO 14064",
    summary:
      "Explore the verification process for greenhouse gas emissions as per ISO 14064:2019_Part 03.",
    tags: ["Environment Management", "ISO Systems"],
  },
  {
    img: navigating_Environment,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 14001: Navigating ISO 14001 for Environmental Management",
    summary:
      "Understand the principles and benefits of ISO 14001 in environmental management.",
    tags: ["Environment Management", "ISO Systems"],
  },
];

export default function ReadMoreBlog() {

  return (
    <>
    <section className="page_indenation readMoreSection">
    <p className="readMoreBlogHeading">Read <span className="itly">more</span>  blogs</p>
    <div className="blog-grid-section">
      <div className="blog-grid-container">
        {blogPosts.map((post, idx) => (
          <Link to={'/innerBlogPage'} className="blog-grid-card" key={idx}>
            <div className="blog-grid-img-wrap">
              <img src={post.img} alt={post.title} className="blog-grid-img" />
            </div>
            {/* <div className="blog-grid-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div> */}
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
    </div>
    </section>
    </>
  );
}
