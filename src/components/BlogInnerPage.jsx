import React from "react";
import "../Css/blogInnerPage.css";
import blogImage from "../assets/images/nature.jpg"; // Adjust path as needed
import { Link } from "react-router-dom";
import miniLogo from '../assets/images/miniLogo.png'
import NewsLetter from "./NewsLetter";
import LetsConnect from "./LetsConnect";
import Footer from "./Footer";


const navItems = [
  { label: "Why Environment & Sustainability Matters", anchor: "why" },
  { label: "Key Areas of Focus", anchor: "key-areas" },
  { label: "Benefits to Organizations", anchor: "benefits" },
  { label: "How We Support Your Sustainability Journey", anchor: "support" },
  { label: "Conclusion", anchor: "conclusion" }
];

const BlogInnerPage = () => (
    <>
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
    <div className="blog-brand-bg">
        <img src={miniLogo} alt="miniLogo" />
    </div>
  </section>

    
    <p className="blog-intro page_indenation" style={{ textAlign: "right" }}>
        Environment & Sustainability focuses on protecting natural resources, reducing environmental impact, and ensuring organizations operate responsibly. As regulations, climate risks, and global expectations continue to evolve, businesses must adopt sustainable systems that strengthen compliance and long-term performance.
      </p>


   <section className="blog-content-outer relative">
    <div className="blog-content-inner">
      

      
      <h2 id="why">
        Why Environment &nbsp;<span className="italic">&amp; Sustainability Matters</span> ?
      </h2>
      <p className="blog-body">
        Sustainability is no longer optional—it is a core driver of business success. Companies that commit to green practices experience reduced operational costs, stronger brand value, and improved stakeholder trust. By managing environmental impacts wisely, organizations secure a safer and more resilient future.
      </p>

      <h2 id="key-areas">
        Key Areas of <span className="italic">Focus</span>
      </h2>
      <h3>Climate Action</h3>
      <p className="blog-body">
        Climate action involves reducing carbon emissions, improving energy efficiency, and adapting to climate-related risks. Organizations with strong climate strategies enhance resilience and regulatory compliance.
      </p>
      <h3>Resource Efficiency</h3>
      <p className="blog-body">
        Resource efficiency helps organizations get more output from fewer natural resources. Water saving, energy optimization, and material efficiency reduce operational expenses while supporting sustainability goals.
      </p>
      <h3>ESG (Environmental, Social & Governance) </h3>
      <p className="blog-body">
        ESG frameworks help businesses demonstrate responsibility and transparency. Strong ESG performance boosts investor confidence and promotes long-term growth.
      </p>

<div>

      <h2 id="key-areas">
        Benefits to  <span className="italic">Organizations</span>
      </h2>
      <p className="blog-body">
        Adopting Environment & Sustainability practices leads to:
      </p>
      <ul className="disk">
        <li>Lower operational costs through efficient resource management</li>
        <li>Improved compliance with environmental laws and standards</li>
        <li>Enhanced reputation and stakeholder trust</li>
        <li>Reduced risks related to pollution, climate impact, and waste</li>
        <li>Greater long-term resilience and market competitiveness</li>
      </ul>
</div>


<h2 id="key-areas">
        How We Support Your <span className="italic"> Sustainability Journey</span>
      </h2>
      <p className="blog-body">
        Our experts help organizations develop practical, scalable, and compliant environmental programs. From audits to sustainability strategy development, we provide end-to-end support to enhance environmental performance and reduce risks.
      </p>
<h2 id="key-areas">
        Conclusion<span className="italic"></span>
      </h2>
      <p className="blog-body">
        Sustainability is the foundation of a responsible, future-ready organization. By embracing environmental best practices today, companies build stronger resilience, compliance, and long-term success.
      </p>
      
      {/* Add more sections with proper IDs for each navigation anchor */}
    </div>

    {/* Vertical Nav (Progress) */}
    <nav className="blog-side-nav">
      <ul>
        {navItems.map((item, idx) => (
          <li key={item.anchor}>
            <a href={`#${item.anchor}`} className={idx === 0 ? "active" : ""}>
              {item.label} <span className="nav-dot ml-4 sticky "></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </section>

     <NewsLetter/>
     <LetsConnect />
     <Footer/>
    
     

  </>


    



);

export default BlogInnerPage;
