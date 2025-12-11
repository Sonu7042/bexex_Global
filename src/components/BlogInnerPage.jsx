import React from "react";
import "../Css/blogInnerPage.css";
import iso from "../assets/images/blog_imgs/iso.png"; // Adjust path as needed
import { Link } from "react-router-dom";
import miniLogo from '../assets/images/miniLogo.png'
import NewsLetter from "./NewsLetter";
import LetsConnect from "./LetsConnect";
import Footer from "./Footer";
import {LearnMoreButton} from './Buttons'


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
      {/* <a href="/blogs" className="blog-back-link">
        All blogs 
        <span className="blog-arrow">&#8594;</span>
        <Link to={"/resources/blog"} className="blogInnerBtn">→</Link>
      </a> */}

      {/* Learn */}
      <LearnMoreButton  text="All blogs" link="/resources/blog"  marginTop="0"/>

    </div>

    <div className="blog-inner-content">
      <div className="blog-image-wrapper">
        <img src={iso} alt="Blog visual" className="blog-main-image" />
      </div>
    </div>
      <div className="blog-text">
        <h1>
         What is ISO : A &nbsp;<span className="blog-amp">&amp;</span>&nbsp;
          <span className="blog-highlight">Comprehensive</span> <br /> Overview
        </h1>
        <p className="blog-description">
          Understanding the International Organization for Standardization.
        </p>



        {/* <a href="#" className="blog-discover-link">
          Discover more 
          <span className="blog-arrow">&#8594;</span>
        <span  className="blogInnerBtn">→</span>
        </a> */}

      <LearnMoreButton  text="Discover more " link="/"  marginTop="0"/>




      </div>
    {/* <div className="blog-brand-bg">
        <img src={miniLogo} alt="miniLogo" />
    </div> */}
  </section>

    
    <p className="blog-intro page_indenation" style={{ textAlign: "right" }}>
       ISO is derived from the Greek word "isos," which means "EQUAL''. The word ISO is often used as a prefix in scientific terminology to create new words. Such as: isosceles, isotope. The word ISO is used as an acronym by the International Organization for Standardization which is an independent, non-governmental international organization that develops and publishes standards for a wide range of industries and sectors. It was founded in 1947 and is headquartered in Geneva, Switzerland.
      </p>


   <section className="blog-content-outer relative">
    <div className="blog-content-inner">
      

      <p className="innertopText">
           "ISO is derived from the Greek word 'isos' which means 'equal'. The word ISO is often used as a prefix in scientific terminology to create new words. Such as: isosceles, isotope, etc."
      </p>


      <p className="blog-body">
          This international organization (ISO) develops and publishes international standards that provide guidance and best practices for various industries and sectors, with the goal of improving quality, safety, efficiency, and environmental sustainability.
      </p>


      
      <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2>
      <p className="blog-body">
       As of 2024, there are 165 members of ISO, consisting of national standardization bodies from different countries. Each member country typically has its own national standardization body, which is responsible for developing and maintaining national standards and representing the country's interests in ISO..
      </p>


        <ul className="disk">
        <li>Bureau of Indian Standards (BIS) - India</li>
        <li>American National Standards Institute (ANSI) - USA</li>
        <li>British Standards Institution (BSI) - UK</li>
        <li>Deutsches Institut für Normung (DIN) - Germany</li>
        <li>Standards Australia (SA) - Australia</li>
        <li>Standards Council of Canada (SCC) - Canada</li>
        <li>Japanese Industrial Standards Committee (JISC) - Japan</li>
        <li>Association française de normalisation (AFNOR) - France</li>
        <li>Instituto Argentino de Normalización y Certificación (IRAM) - Argentina</li>
        <li>Instituto Nacional de Normalización (INN) - Chile</li>
      </ul>


       <p className="nationalTextPara">
          Each national standardization body is responsible for developing and maintaining national standards and representing the country's interests in ISO. These national standardization body share their inputs in development of ISO standards which is a consensus-based process. These standards are regularly reviewed and updated to ensure they remain relevant and effective.
      </p>




      <h2 id="key-areas">
        Various ISO Standards : 
        {/* <span className="italic">Focus</span> */}
      </h2>

      <h3>1. Management system standards</h3>
      <p className="blog-body">
        These standards provide a framework for organizations to establish, implement, maintain, and improve their management systems. Such as:
      </p>
      <ul className="disk">
        <li>ISO 9001:215 (Quality Management System)</li>
        <li>ISO 14001:2015 (Environmental Management System)</li>
        <li>ISO 45001:2018 (Occupational Health and Safety Management System)</li>
        <li>ISO 50001:2018 (Energy Management System)</li>
      </ul>







      <h3>2. Service standards</h3>
      <p className="blog-body">
       These standards provide guidance for service providers to ensure quality, safety, and customer satisfaction. Such as,
      </p>
      <ul className="disk">
        <li>ISO 10002 (customer satisfaction - guidelines for complaints handling)</li>
        <li>ISO 20000 (IT service management)</li>
        <li>ISO 22000 (food safety management)</li>
      </ul>




      <h3>3. Process standards </h3>
      <p className="blog-body">
       These standards specify requirements for specific processes, such as testing, calibration, and auditing. Such as,
      </p>
       <ul className="disk">
        <li>ISO/IEC 17025 (testing and calibration laboratories)</li>
        <li>ISO 19011 (guidelines for auditing management systems)</li>
        <li>ISO/IEC 27001 (information security management)</li>
      </ul>



      <h3>4. Industry standards </h3>
      <p className="blog-body">
       These standards are developed by ISO in collaboration with industry associations and other stakeholders to promote best practices, safety, and efficiency in specific sectors. Such as,
      </p>
       <ul className="disk">
        <li>ISO 26262 (road vehicles - functional safety)</li>
        <li>ISO 50001 (energy management)</li>
        <li>ISO 15189 (medical laboratories - quality management)</li>
      </ul>


<div>

      
       <p className="nationalTextPara">
          ISO also develops standards for measurement, terminology, symbols, and codes, among other areas. These ISO's standards are voluntary and not legally binding, but they are widely adopted by governments, businesses, and other organizations around the world. They provide a framework for organizations to meet customer and regulatory requirements, enhance their competitiveness, and demonstrate their commitment to quality, safety, and sustainability.
      </p>
       <p className="nationalTextPara">
         ISO's mission is to provide a platform for consensus-based decision-making among experts from around the world, with the goal of creating standards that reflect the best practices and expertise of various industries and sectors
      </p>

       <p className="nationalTextPara">
       Overall, ISO plays an important role in promoting international trade and cooperation, and improving the quality of products and services worldwide.
      </p>

      {/* <h2 id="key-areas">
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
      </ul> */}
</div>


      {/* <h2 id="key-areas">
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
      </p> */}
      
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

   <div className="blogContainerOfIso">
     <div className="blogTextOfIso">
     "ISO's Mission Is To Provide A Platform for Consensus-Based Decision-Making Among Experts From <span style={{color:"e5e5e5", textDecoration:"underline"}}>Around the World</span>  ,With The Goal Of <span style={{color:"e5e5e5", textDecoration:"underline"}}> Creating Standards</span> That Reflect The Best Practices And Expertise Of Various Industries And Sectors. "
    </div>
   </div>

     <NewsLetter/>
     <LetsConnect />
     <Footer/>
    
     

  </>


    



);

export default BlogInnerPage;
