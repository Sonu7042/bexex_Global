import React, { useState } from "react"; // ✅ ADDED useState
import "../Css/blogsGrid.css";

// Replace these imports with your actual image paths
import emergency from "../assets/images/blog_imgs/ISO-45001.png";
import ecofriendly from "../assets/images/blog_imgs/eco-friendly.png";
import clearingAndAir from "../assets/images/blog_imgs/clearingAndAir.png";
import energizing from "../assets/images/blog_imgs/energizing.png";
import navigating_Environment from "../assets/images/blog_imgs/ISO-90012015.png";
import navigating_iso from "../assets/images/blog_imgs/navigating_iso.png";
import oms from "../assets/images/blog_imgs/internal-audit-process.png";
import safetyFirst from "../assets/images/blog_imgs/third-party-inspection.png";
import unralleving from "../assets/images/blog_imgs/unralleving.png";

import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";

/* ---------- YOUR EXISTING DATA (UNCHANGED) ---------- */
const blogPosts = [
  {
    img: emergency,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 45001 Implementation Guide for Indian Industries",
    summary:
      "ISO 45001 certification, occupational health and safety management, workplace safety India, ISO 45001 guide",
    tags: ["ISO Systems", "Safty Managment"],
    url: "/blog/iso-45001-implementation-guide",
  },
  {
    img: clearingAndAir,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Clearing the Air: GHG Verification with ISO 14064",
    summary:
      "Explore the verification process for greenhouse gas emissions as per ISO 14064:2019_Part 03.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/ehs-legal-register-compliance",
  },
  {
    img: navigating_Environment,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 9001:2015 Risk-Based Thinking Implementation Guide",
    summary:
      "risk-based thinking ISO 9001, quality management risk assessment, ISO 9001:2015 requirements, risk opportunities QMS",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/iso-9001-risk-based-thinking",
  },
  {
    img: oms,
    date: "22 July 2024",
    readTime: "4 min",
    title: "How to Conduct an Internal Audit: A Practical Guide",
    summary:
      "ISO internal audit, audit planning, audit techniques, internal audit checklist, quality audit India",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/internal-audit-process-guide",
  },
  {
    img: safetyFirst,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Third-Party Inspection: What Manufacturers Need to Know",
    summary:
      "TPI services India, quality inspection services, pre-shipment inspection, manufacturing quality control, independent inspection",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/third-party-inspection-manufacturing",
  },
  {
    img: energizing,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Air Quality Testing Guide",
    summary:
      "Complete guide to industrial air quality testing in India. Learn monitoring requirements, parameters, compliance, and best practices for industries.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/industrial-air-quality-testing",
  },
   { img: energizing,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 14001 for Indian Manufacturing: Step-by-Step Guide",
    summary:
      "Complete guide to ISO 14001 implementation for Indian manufacturers. Learn environmental management system requirements, benefits, and certification.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/iso-14001-implementation-india",
  },
  {
    img: safetyFirst,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Common Mistakes in ISO Documentation (And How to Fix Them)",
    summary:
      "Learn the most common ISO documentation mistakes Indian manufacturers make and practical solutions to create effective, audit-ready documentation.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/iso-documentation-mistakes",
  },
  {
    img: energizing,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Hazard Identification and Risk Assessment (HIRA) Guide",
    summary:
      "Complete guide to HIRA for Indian industries. Learn hazard identification techniques, risk assessment methods, and control measures for workplace safety.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/hira-hazard-risk-assessment",
  },
  {
    img: oms,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Management Review Meeting: Making It Meaningful",
    summary:
      "Learn how to conduct effective ISO management review meetings that drive strategic decisions, not just compliance checkboxes for Indian industries.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/management-review-meeting-iso",
  },
  {
    img: energizing,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Water Quality Testing: Parameters and Compliance",
    summary:
      "Complete guide to water quality testing for Indian industries. Learn parameters, compliance requirements, and best practices for monitoring programs.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/water-quality-testing-india",
  },
  {
    img: oms,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Document Control System: From Paper to Digital",
    summary:
      "Learn how to build effective document control systems for ISO compliance. Covers paper and digital approaches, best practices, and common mistakes.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/document-control-system-iso",
  },
  {
    img: energizing,
    date: "22 July 2024",
    readTime: "4 min",
    title: "CAPA Process Guide: ISO Corrective Actions",
    summary:
      "Complete guide to implementing effective CAPA processes in ISO systems. Learn root cause analysis, corrective actions, and prevention strategies.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/capa-process-iso-standards",
  },
  {
    img: energizing,
    date: "22 July 2024",
    readTime: "4 min",
    title: "ISO 27001: Information Security for Indian Businesses",
    summary:
      "Complete guide to ISO 27001 implementation for Indian businesses. Learn information security management, data protection, and certification benefits.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/iso-27001-information-security",
  },
  {
    img: unralleving,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Noise Monitoring in Industrial Environments: Compliance",
    summary:
      "Complete guide to industrial noise monitoring in India. Learn compliance requirements, measurement techniques, and control measures for workplaces.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/industrial-noise-monitoring-compliance",
  },
  {
    img: safetyFirst,
    date: "22 July 2024",
    readTime: "4 min",
    title: "Safety Committee Formation: Legal Requirements and Best Practices",
    summary:
      "Complete guide to forming safety committees in Indian industries. Learn legal requirements, structure, responsibilities, and effective operations.",
    tags: ["Environment Management", "ISO Systems"],
    url: "/blog/safety-committee-requirements-india",
  },
];

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
