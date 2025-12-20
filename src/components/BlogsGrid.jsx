import React, { useState } from "react"; // ✅ ADDED useState
import "../Css/blogsGrid.css";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import blogPosts from '../components/blogs/BlogsData'



/* ---------- COMPONENT ---------- */
export default function BlogsGrid() {
  /* ✅ ADDED STATE (nothing removed) */
  const [visibleCount, setVisibleCount] = useState(6); // 2 rows (3 cards × 2)

  return (
    <>
      <section className="blog-grid-section">
        <div className="blog-grid-container">
          {blogPosts.slice(0, visibleCount).map((post, idx) => ( // ✅ only change
            <Link
              to={post.url}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="blog-grid-card"
              key={idx}
            >
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

        {/* ✅ ADDED SEE MORE (existing layout untouched) */}
        {visibleCount < blogPosts.length && (
          <div className="see-more-wrapper">
            <button
              className="see-more-btn"
              onClick={() => setVisibleCount(visibleCount + 6)}
            >
              See More
            </button>
          </div>
        )}
      </section>

      {/* --------------------------------------------section--------------------------------------------- */}
      <NewsLetter />
    </>
  );
}
