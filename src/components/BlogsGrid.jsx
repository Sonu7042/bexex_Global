import React from "react";
import "../Css/blogsGrid.css";

// Replace these imports with your actual image paths
import emergency from "../assets/images/blog_imgs/emergency.png";
import ecofriendly from "../assets/images/blog_imgs/eco-friendly.png";
import clearingAndAir from "../assets/images/blog_imgs/clearingAndAir.png";
import energizing from "../assets/images/blog_imgs/energizing.png";
import navigating_Environment from "../assets/images/blog_imgs/navigating_Environment.png";
import navigating_iso from "../assets/images/blog_imgs/navigating_iso.png";
import oms from "../assets/images/blog_imgs/oms.png";
import safetyFirst from "../assets/images/blog_imgs/safetyFirst.png";
import unralleving from "../assets/images/blog_imgs/unralleving.png";

// import img3 from "./images/tablet.jpg";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";

const blogPosts = [
  {
    img:emergency,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Emergency Preparedness and ISO 45001: A Holistic Approach to Safety",
    summary:
      "Insights on how ISO 45001 contributes to effective emergency preparedness and response in the workplace.",
    tags: ["ISO Systems", "Safty Managment"],
    url: "/blog/iso-45001-implementation-guide"
  },
  {
    img: clearingAndAir,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Clearing the Air: GHG Verification with ISO 14064",
    summary:
      "Explore the verification process for greenhouse gas emissions as per ISO 14064:2019_Part 03.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/ehs-legal-register-compliance"

  },
  {
    img: navigating_Environment,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 14001: Navigating ISO 14001 for Environmental Management",
    summary:
      "Understand the principles and benefits of ISO 14001 in environmental management.",
    tags: ["Environment Management", "ISO Systems"],
    url:"/blog/iso-9001-risk-based-thinking"
  },
  {
    img: oms,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 9001:2015 Introduction to QMS",
    summary:
      "Provide an overview of ISO 9001:2015, its principles, and the significance of Quality Management Systems.",
     tags: ["Environment Management", "ISO Systems"],
    url:"/blog/internal-audit-process-guide"

  },
  {
    img: safetyFirst,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Safety First: ISO 45001 Implementation Guide",
    summary:
      "A comprehensive guide to implementing ISO 45001 for occupational health and safety.",
    tags: ["Environment Management", "ISO Systems"],
    url:"/blog/third-party-inspection-manufacturing"

  },
  {
    img: energizing,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Energizing Efficiency: ISO 50001 Implementation",
    summary:
      "A deep dive into the principles and steps involved in implementing ISO 50001.",
    tags: ["Environment Management", "ISO Systems"],
    url:"#"

  },
  // {
  //   img: ecofriendly,
  //   date: "22 July 2024",
  //   readTime: "4 min",
  //   title: "Eco-Friendly Excellence: A Guide to ISO 14001",
  //   summary:
  //     "Explore the principles of ISO 14001 and their application for eco-friendly practices.",
  //   tags: ["Environment Management", "ISO Systems"],
  //   url:"#"

  // },
  // {
  //   img: navigating_iso,
  //   date: "22 July 2024",
  //   readTime: "4 min",
  //   title: "Navigating ISO 9001: A Step-by-Step Guide",
  //   summary:
  //     "Explore each stage of ISO 9001 implementation with practical tips and insights.",
  //   tags: ["Environment Management", "ISO Systems"],
  //   url:"#"

  // },
  // {
  //   img: unralleving,
  //   date: "22 July 2024",
  //   readTime: "4 min",
  //   title: "Unraveling the Core Foundation of QMS",
  //   summary:
  //     "Explore the key features and benefits of ISO 9001:2015.",
  //   tags: ["Environment Management", "ISO Systems"],
  //   url:"#"

  // },
];

export default function BlogsGrid() {

  return (
    <>
    <section className="blog-grid-section">
      <div className="blog-grid-container">
        {blogPosts.map((post, idx) => (
          <Link to={post.url} className="blog-grid-card" key={idx}>
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
    </section>



{/* --------------------------------------------section--------------------------------------------- */}
     <NewsLetter />
    </>
  );
}
