  import React from "react";
  import "../Css/blogsGrid.css";

  // Replace these imports with your actual image paths
  import emergency from "../assets/images/blog_imgs/emergency.png";
  import clearingAndAir from "../assets/images/blog_imgs/clearingAndAir.png";
  import navigating_Environment from "../assets/images/blog_imgs/navigating_Environment.png";
  import { useLocation } from "react-router-dom";

  // import img3 from "./images/tablet.jpg";
  import { Link } from "react-router-dom";

  const blogPosts = [
    {
      img: emergency,
      date: "22 July 2024",
      readTime: "4 min",
      title: "Air Quality Testing Guide",
      summary:
        "Complete guide to industrial air quality testing in India. Learn monitoring requirements, parameters, compliance, and best practices for industries.",
      tags: ["Environment Management", "ISO Systems"],
      url: "/blog/industrial-air-quality-testing",
    },
    {
      img: clearingAndAir,
      date: "22 July 2024",
      readTime: "4 min",
      title: "ISO 14001 for Indian Manufacturing: Step-by-Step Guide",
      summary:
        "Complete guide to ISO 14001 implementation for Indian manufacturers. Learn environmental management system requirements, benefits, and certification.",
      tags: ["Environment Management", "ISO Systems"],
      url: "/blog/iso-14001-implementation-india",
    },
    {
      img: navigating_Environment,
      date: "22 July 2024",
      readTime: "4 min",
      title: "Common Mistakes in ISO Documentation (And How to Fix Them)",
      summary:
        "Learn the most common ISO documentation mistakes Indian manufacturers make and practical solutions to create effective, audit-ready documentation.",
      tags: ["Environment Management", "ISO Systems"],
      url: "/blog/iso-documentation-mistakes",
    },
  ];

  export default function ReadMoreBlog() {
    const location = useLocation();
    console.log(location.pathname, "location")

    const suggestedBlogs = blogPosts.filter(
      (item) => console.log(item.url, "url")
    );
    // const suggestedBlogs = blogPosts.filter(
    //   (item) => item.url !== location.pathname
    // );

    // console.log(suggestedBlogs, "suggestedBlogs")

    // console.log(suggestedBlogs, "filterBlogs");

    return (
      <>
        <section className="page_indenation readMoreSection">
          <p className="readMoreBlogHeading">
            Read <span className="itly">more</span> blogs
          </p>
          <div className="blog-grid-section">
            <div className="blog-grid-container">
              {suggestedBlogs.map((post, idx) => (
                <Link to={post.url} className="blog-grid-card" key={idx}>
                  <div className="blog-grid-img-wrap">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="blog-grid-img"
                    />
                  </div>

                  <h3 className="blog-grid-title">{post.title}</h3>
                  <p className="blog-grid-summary">{post.summary}</p>

                  <div className="blog-grid-tags">
                    {post.tags.map((tag, i) => (
                      <span className="blog-grid-tag" key={i}>
                        {tag}
                      </span>
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
