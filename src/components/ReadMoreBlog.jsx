  import React from "react";
  import "../Css/blogsGrid.css";

  // Replace these imports with your actual image paths
  import emergency from "../assets/images/blog_imgs/emergency.png";
  import clearingAndAir from "../assets/images/blog_imgs/clearingAndAir.png";
  import navigating_Environment from "../assets/images/blog_imgs/navigating_Environment.png";
  import { useLocation } from "react-router-dom";

  // import img3 from "./images/tablet.jpg";
  import { Link } from "react-router-dom";
  import blogPosts from '../components/blogs/BlogsData'

  

  export default function ReadMoreBlog() {
    const location = useLocation();

    const suggestedBlogs = blogPosts.filter(
      (item) => item.url !== location.pathname).sort(() => 0.5 - Math.random()).slice(0, 3);

    // console.log(suggestedBlogs, "suggestedBlogs")


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
