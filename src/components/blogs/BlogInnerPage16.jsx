import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/third-party-inspection.png";
import energyManagement from "../../assets/images/blog_imgs/energy-management.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "Energy Audit Checklist (Excel)",
    description:
      "Comprehensive template for conducting facility energy audits with calculation tools and opportunity assessment frameworks.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "ISO 50001 — Reducing Energy Costs",
    description:
      "Video case study showing Indian manufacturer's journey to ISO 50001 certification with results achieved and lessons learned.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "ISO-50001",
    anchor: "ISO-50001",
  },
  {
    label: "Understanding ISO 50001",
    anchor: "Understanding-ISO-50001",
  },
  
  {
    label: "Why Indian Industries Need ISO 50001",
    anchor: "Why-Indian-Industries-Need-ISO-50001",
  },
  
  {
    label: "Key Implementation Steps",
    anchor: "Key-Implementation-Steps",
  },
  {
    label: "Integration with Other Management Systems",
    anchor: "Integration-with-Other-Management-Systems",
  },
  {
    label: "Measuring and Reporting Performance",
    anchor: "Measuring-and-Reporting-Performance",
  },
  {
    label: "Certification Process",
    anchor: "Certification-Process",
  },

// wait

];

const BlogInnerPage = () => {
  const [active, setActive] = useState(navItems[0].anchor);

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.anchor);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top < 150 && top > -400) {
            setActive(item.anchor);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqData = [
    {
      question: "Is ISO 50001 mandatory in India?",
      answer:
        "Not universally mandatory. However, large energy consumers under PAT scheme must meet energy consumption norms. ISO 50001 provides systematic approach supporting compliance. Some state incentive programs favor ISO 50001 certified facilities.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Small facilities can implement within 4-6 months. Medium manufacturers typically need 8-12 months. Large, complex operations may require 12-18 months depending on existing energy management maturity and data availability.",
    },
    {
      question: "What investment is required?",
      answer:
        "Implementation costs range from ₹3-10 lakhs including energy audits, metering equipment, consultancy, training, and certification fees. However, energy savings typically recover these costs within first year, making EnMS highly cost-effective.",
    },
    {
      question: "Can small industries implement ISO 50001?",
      answer:
        "Yes. The standard scales to organizational size. Small businesses implement proportionate approaches suitable to their operations without requiring sophisticated systems. Even small energy savings justify implementation effort.",
    },
    {
      question: "How does ISO 50001 relate to energy audits?",
      answer:
        "Energy audits are point-in-time assessments identifying opportunities. ISO 50001 creates continuous management system ensuring ongoing improvement. Audits typically form part of initial energy review when implementing EnMS.",
    },
  ];






  const tableConfig = {
    heading: "Energy Efficiency Technologies",
    theme: "light",
    columns: [
      { key: "level", label: "Technology Area" },
      { key: "documentType", label: "Common Opportunities" },
      { key: "changeFrequency", label: "Typical Savings" },
      // { key: "approvalAuthority", label: "Approval Authority" },
    ],
  };


  const tableData = [
    {
      level: "Motors & Drives",
      documentType: "Motors & Drives	Variable frequency drives, high-efficiency motors, right-sizing	20-40% on motor energy",
      changeFrequency: "20-40% on motor energy",
      // approvalAuthority: "20-40% on motor energy",
    },
    {
      level: "Compressed Air",
      documentType: "Leak repair, pressure optimization, heat recovery",
      changeFrequency: "Compressed Air	Leak repair, pressure optimization, heat recovery	15-30% system savings",
      // approvalAuthority: "Compressed Air	Leak repair, pressure optimization, heat recovery	15-30% system savings",
    },
    {
      level: "Lighting",
      documentType: "LED retrofit, occupancy sensors, daylight harvesting",
      changeFrequency: "50-75% lighting energy",
      // approvalAuthority: "",
    },
    {
      level: "HVAC",
      documentType: "Variable air volume, economizers, building automation",
      changeFrequency: "HVAC	Variable air volume, economizers, building automation	20-40% HVAC energy",
      // approvalAuthority: "HVAC	Variable air volume, economizers, building automation	20-40% HVAC energy",
    },
      {
      level: "Process Heat",
      documentType: "Waste heat recovery, insulation, combustion optimization",
      changeFrequency: "10-30% thermal energy",
      // approvalAuthority: "HVAC	Variable air volume, economizers, building automation	20-40% HVAC energy",
    },
       {
      level: "Renewable ",
      documentType: "Solar PV, solar thermal, biomass",
      changeFrequency: "Varies by application",
      // approvalAuthority: "HVAC	Variable air volume, economizers, building automation	20-40% HVAC energy",
    },
    
  ];



  return (
    <>
      <section className="blog-inner page_indenation">
        <div className="blog-inner-header">
          {/* Learn */}
          <LearnMoreButton
            text="All blogs"
            link="/resources/blog"
            marginTop="0"
          />
        </div>

        <div className="blog-inner-content">
          <div className="blog-image-wrapper">
            <img
              src={energyManagement}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1><span className="blog-highlight itly">ISO 50001 </span> energy management
          </h1>
          <p className="blog-description">
            ISO 50001 certification India, energy management system, energy efficiency industries, EnMS implementation, energy cost reduction
          </p>

          <LearnMoreButton text="Discover more " link="/" marginTop="10" />
        </div>
        {/* <div className="blog-brand-bg">
        <img src={miniLogo} alt="miniLogo" />
    </div> */}
      </section>

      {/*     
    <p className="blog-intro page_indenation" style={{ textAlign: "right" }}>
       ISO is derived from the Greek word "isos," which means "EQUAL''. The word ISO is often used as a prefix in scientific terminology to create new words. Such as: isosceles, isotope. The word ISO is used as an acronym by the International Organization for Standardization which is an independent, non-governmental international organization that develops and publishes standards for a wide range of industries and sectors. It was founded in 1947 and is headquartered in Geneva, Switzerland.
      </p> */}

      <section className="blog-content-outer ">
        <div className="blog-content-inner">
          <p className="innertopText" id="ISO-50001">
            ISO 50001: Energy Management Systems for Indian Industries
          </p>

          <p className="innertopTextSubHeading">
            Reducing costs and environmental impact through systematic energy management
          </p>

          <p className="blog-body blog-body-highlightColor">
            Energy costs represent significant operational expenses for Indian manufacturers. Rising electricity tariffs, fuel price volatility, and regulatory pressures create compelling business case for energy efficiency. Yet many organizations approach energy management reactively—addressing crises but missing systematic improvement opportunities.
          </p>

          {/* <ul className="disk">
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
      </ul> */}
          <p className="blog-body blog-body-highlightColor">
           ISO 50001, the international standard for Energy Management Systems (EnMS), provides structured framework for managing energy performance. Organizations implementing ISO 50001 don't just reduce energy bills—they build capabilities for continuous improvement, demonstrate environmental leadership, and strengthen competitive positioning through lower operational costs.
          </p>
          <p className="blog-body blog-body-highlightColorBlue">
            Indian manufacturers implementing ISO 50001 report average energy cost reductions of 10-25% within first two years, with payback periods for implementation investments typically under 18 months.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-ISO-50001"
          >
            Understanding ISO 50001
          </p>
          <p className="blog-body">
            ISO 50001 specifies requirements for establishing, implementing, maintaining, and improving energy management systems. The standard follows the High-Level Structure common to ISO management standards, making integration straightforward for organizations already implementing <span className="blog-body-highlightColorBlue">ISO 9001, ISO 14001,</span> or <span className="blog-body-highlightColorBlue">ISO 45001</span>.</p>

          <span className="innerBlogTextBold">
            Core Requirements:
          </span>

          <p className="blog-body">
             <span className="innerBlogTextBold">Energy Policy: </span>Top management commits to supporting energy performance improvement and ensuring information and resources needed to achieve energy objectives.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Energy Planning: </span>Organizations conduct energy reviews identifying significant energy uses, establish baselines, and set energy performance indicators and objectives.
          </p>
          
             <p className="blog-body">
            <span className="innerBlogTextBold">Energy Performance Improvement: </span>Systematic implementation of action plans addressing significant energy uses with continuous monitoring and measurement.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Energy Review:</span>Comprehensive analysis of energy use and consumption identifying where energy is used, how much is consumed, and opportunities for improvement.
            </p>

            <p className="bolg-body">The standard applies to any organization regardless of size, sector, or energy consumption levels. Small workshops and massive manufacturing complexes both benefit from systematic energy management.</p>
  
          <p
            className="innertopTextSubHeading"
            id="Why-Indian-Industries-Need-ISO-50001"
          >
           Why Indian Industries Need ISO 50001
          </p>
           <p className="blog-body">
            <span className="innerBlogTextBold">Cost Reduction : </span> Energy typically represents 10-30% of manufacturing costs. Even modest efficiency improvements generate substantial savings. For energy-intensive industries like cement, steel, or chemicals, percentages are higher making energy management critically important.
            </p>


          <p className="blog-body">
            <span className="innerBlogTextBold">Regulatory Compliance:</span> The Energy Conservation Act 2001 and amendments require designated consumers large energy users to comply with energy consumption norms, conduct energy audits, and submit reports. ISO 50001 provides framework meeting these obligations systematically.
          </p>
          <p className="blog-body">
          <span className="innerBlogTextBold">PAT Scheme Compliance:</span> Industries covered under Perform, Achieve and Trade PAT scheme benefit from ISO 50001 implementation supporting systematic energy consumption reduction required by the scheme.
          </p>
          <p className="blog-body">
           <span className="innerBlogTextBold"> Competitive Advantage</span>Lower energy costs improve margins. In competitive markets, cost leadership through efficiency creates sustainable advantage. Customers increasingly favor suppliers demonstrating environmental responsibility. 
          </p>
           <p className="blog-body">
           <span className="innerBlogTextBold">Access to Green Finance: </span> : Banks and financial institutions offer preferential terms for energy efficiency projects. ISO 50001 certification demonstrates credible commitment facilitating access to green financing.
          </p>

           <p
            className="innertopTextSubHeading"
            id="Key-Implementation-Steps"
          >
            Key Implementation Steps
          </p>

           <p
            className="innertopTextSubHeading_Points">
            Step 1: Leadership Commitment and Energy Team
          </p>
          <p className="blog-body">
           Secure visible top management commitment. Energy management requires sustained investment in time, resources, and sometimes capital for equipment upgrades. Leadership must champion the program and allocate necessary resources. 
          </p>
          <p className="blog-body">
           Establish energy management team representing relevant functions—production, maintenance, utilities, finance, and facilities. Appoint energy manager with authority and access to top management. The energy manager coordinates EnMS activities and reports performance.
          </p>
          <p className="blog-body">
           Understanding <span className="blog-body-highlightColorBlue">context of the organization</span> helps identify external factors like energy tariff structures and internal factors like production constraints affecting energy management. 
          </p>



         <p
            className="innertopTextSubHeading_Points">
           Step 2: Energy Review and Baseline
          </p>
        <p className="blog-body">
           Conduct comprehensive energy review analyzing:
          </p>
          
               <ul className="disk">
        <li>Energy sources and consumption patterns</li>
        <li>Significant energy uses SEUs consuming most energy or offering improvement potential</li>
        <li>Variables affecting SEUs production volume, weather, operating schedules</li>
        <li>Past and current energy performance</li>
      </ul>
          <p className="blog-body">Establish energy baseline representing reference period for comparison. Baselines typically use one year of data adjusted for relevant variables. This baseline enables measuring improvement over time despite production changes.</p>



        

          <p className="blog-body">
            Identify energy performance indicators (EnPIs) for monitoring. EnPIs might include:
          </p>

                   <ul className="disk">
        <li>	Specific energy consumption kWh per unit produced</li>
        <li>	Energy cost as percentage of production cost</li>
        <li>	Equipment efficiency metrics</li>
        <li>	Building energy intensity kWh per square meter</li>
      </ul>

          <p
            className="innertopTextSubHeading_Points"
            id="Core-Control-Requirements"
          >
          Step 3: Energy Objectives and Action Plans
          </p>

          <p className="blog-body">
          Set measurable energy objectives aligned with energy policy. Examples include:
          </p>

       <ul className="disk">
        <li>Reduce specific energy consumption by 15% within 24 months</li>
        <li>Achieve 20% renewable energy use by year-end</li>
        <li>Eliminate energy waste from compressed air leaks</li>
        <li>Improve boiler efficiency from 75% to 85%</li>
      </ul>
      
          {/* table1  */}
          {/* <DynamicTable config={tableConfig} data={tableData} /> */}
        
        <p className="blog-body">Develop action plans specifying:</p>

         <ul className="disk">
        <li>Responsibilities for achieving objectives</li>
        <li>Resources required financial, human, technical</li>
        <li>Timelines with milestones</li>
        <li>Methods for verifying results</li>
      </ul>

      <p className="blog-body">Prioritize actions based on cost-benefit analysis. Quick wins requiring minimal investment should be implemented first, building momentum and funding subsequent improvements through savings achieved.</p>


          <p
            className="innertopTextSubHeading_Points"
            id="Core-Control-Requirements"
          >
        Step 4: Operational Controls and Monitoring
          </p>

           <p className="blog-body">
            Implement operational controls for significant energy uses:
           </p>

          <p className="blog-body blog-body-highlight">
            <span className="blog-body-highlight">Equipment Optimization:</span> 
          </p>
          <ul className="disk">
        <li>Operate equipment at optimal efficiency points</li>
        <li>Implement preventive maintenance programs</li>
        <li>Replace inefficient equipment at end-of-life</li>
      </ul>
      <p className="blog-body blog-body-highlight">
            <span className="blog-body-highlight">Process Controls:</span> 
          </p>
   <ul className="disk">
        <li>Optimize production schedules reducing energy peaks</li>
        <li>Implement automatic controls maintaining optimal parameters</li>
        <li>Eliminate unnecessary equipment operation</li>
      </ul>

       <p className="blog-body blog-body-highlight">
            <span className="blog-body-highlight">Utility Systems:</span> 
          </p>
             <ul className="disk">
        <li>Repair compressed air leaks systematically</li>
        <li>Optimize HVAC systems based on occupancy and weather</li>
        <li>Implement lighting controls and LED retrofits</li>
        <li>Manage power factor maintaining above 0.95</li>
      </ul>

       <p className="blog-body blog-body-highlight">
            <span className="blog-body-highlight">Behavioral Changes:</span> 
          </p>

           <ul className="disk">
        <li>Train operators on energy-efficient practices</li>
        <li>Create awareness through campaigns and performance displays</li>
        <li>Recognize departments achieving energy targets</li>
      </ul>

          <p className="blog-body">
            Establish monitoring systems tracking energy consumption against baselines and targets. Real-time monitoring enables quick response to deviations. Many industries benefit from energy management software integrating data from multiple sources.
          </p>
           <p className="blog-body">
          Organizations implementing <span className="blog-body-highlightColorBlue">calibration management systems</span>ensure energy measurement accuracy through systematic meter calibration.
          </p>

 {/* <p
            className="innertopTextSubHeading_Points"
            id="Core-Control-Requirements"
          >
       Energy Efficiency Technologies
          </p> */}

              {/* table1  */}
          <DynamicTable config={tableConfig} data={tableData} />
        
         <p className="blog-body">Technology selection depends on energy audit findings, available capital, and payback requirements. Many improvements require minimal investment with payback under one year.</p>

         <p
            className="innertopTextSubHeading"
            id="Integration-with-Other-Management-Systems"
          >
        Integration with Other Management Systems
          </p>

          <p className="blog-body">Organizations certified to multiple standards benefit from <span className="blog-body-highlightColorBlue">integrated management systems</span>combining ISO 50001 with ISO 14001 and ISO 9001. </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">Environmental Synergies : </span>{" "}
           Energy efficiency reduces greenhouse gas emissions, supporting ISO 14001 environmental objectives. Many organizations integrate energy and environmental management under single coordinator.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Quality Connections: </span>{" "}
            Energy stability improves process consistency supporting quality objectives. Energy-intensive processes benefit from tight energy parameter control maintaining product specifications.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Common Elements : </span>{" "}
            Document control, internal audits, management reviews, and competence requirements consolidate across standards reducing administrative burden.
          </p>
          <p className="blog-body">
           Conduct unified <span className="blog-body-highlightColorBlue">management reviews</span> covering energy, quality, environmental, and safety performance providing holistic organizational perspective.
          </p>
        

        <p
            className="innertopTextSubHeading"
            id="Measuring-and-Reporting-Performance"
          >
       Measuring and Reporting Performance
          </p>
           
           <p className="blog-body">
            Track energy performance continuously:
           </p>

         <p className="blog-body">
            <span className="innerBlogTextBold">Leading Indicators: </span>
           </p>

                <ul className="disk">
        <li>Number of energy efficiency projects implemented</li>
        <li>Percentage of SEUs with monitoring</li>
        <li>Energy awareness training completion rates</li>
        <li>Identified but not yet implemented opportunities</li>
      </ul>

      <p className="blog-body">
            <span className="innerBlogTextBold">Lagging Indicators: </span>
           </p>
                   <ul className="disk">
        <li>Absolute energy consumption trends</li>
        <li>Specific energy consumption (normalized for production)</li>
        <li>Energy cost reductions achieved</li>
        <li>Renewable energy percentage</li>
      </ul>


          

          <p className="blog-body">
            Report performance regularly to management and communicate achievements to workforce. Visibility drives engagement and sustains momentum. Display energy performance dashboards in prominent locations.
          </p>

          <p className="blog-body">
            Use<span className="blog-body-highlightColorBlue"> internal audit processes</span> to verify EnMS implementation and identify improvement opportunities. When performance falls short, implemen <span className="blog-body-highlightColorBlue"> corrective actions </span>addressing root causes.
          </p>

          <p
            className="innertopTextSubHeading_Points"
            id="Certification-Process"
          >
          Certification Process
          </p>

          <p className="blog-body">
           After operating EnMS for 3-6 months with documented performance improvements, engage accredited certification body for two-stage audit. Stage one reviews documentation adequacy including energy policy, objectives, energy review, and procedures. Stage two assesses implementation effectiveness through energy data analysis, interviews, and site inspection.
          </p>

          <p className="blog-body">
              Certification demonstrates credible energy management commitment to stakeholders, regulators, and customers. Three-year certificates require annual surveillance audits verifying continued improvement.
          </p>

        </div>

        {/* Vertical Nav (Progress) */}
        {/* Sticky Navigation */}
        <nav className="blog-side-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.anchor}>
                <a
                  href={`#${item.anchor}`}
                  className={active === item.anchor ? "active" : ""}
                >
                  {item.label}
                  <span className="nav-dot ml-4 sticky"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <div className="nextSteps page_indenation ">
        <p className="innertopText">
          Your <span className="blog-body-highlightColorBlue itly">Next</span>{" "}
          Steps
        </p>

        <p className="blog-body">
          ISO 50001 transforms energy management from cost control firefighting to strategic performance improvement. Organizations implementing systematic energy management reduce costs, minimize environmental impact, and build sustainable competitive advantage.
        </p>

        <p className="innertopTextSubHeading_Points">
          Download our ISO 50001 Implementation Guide to begin your energy management journey.
        </p>

        <p className="blog-body">


          Bexex helps Indian industries implement ISO 50001 achieving measurable energy performance improvements. Our energy consultants conduct audits, identify opportunities, and guide implementation through certification. <span className="blog-body-highlightColorBlue itly">Explore our ISO 50001 services</span> or contact us to reduce your energy costs.


        </p>

        <div className="res-wrapper">
          <div className="res-main-row">
            <div className="res-cards">
              {resources.map((item, i) => (
                <article key={i} className="res-card">
                  <h3 className="res-card-title">{item.title}</h3>
                  <p className="res-card-desc">{item.description}</p>

                  <div className="res-card-footer">
                    <button
                      className={
                        item.type === "primary"
                          ? "res-btn res-btn-primary"
                          : "res-btn res-btn-ghost"
                      }
                    >
                      {item.buttonLabel}
                    </button>

                    {/* {item.type === "primary" && (
                    <span className="res-download-icon">{item.badge}</span>
                  )} */}
                  </div>
                </article>
              ))}
            </div>

            <div className="res-share">
              <p className="res-share-label">Share it :</p>
              <div className="res-share-icons">
                <button className="res-icon-circle">
                  {" "}
                  <CiLinkedin />{" "}
                </button>
                <button className="res-icon-circle">
                  <CiFacebook />
                </button>
                <button className="res-icon-circle">
                  <PiInstagramLogoLight />
                </button>
              </div>
            </div>
          </div>

          <div className="res-tags-row">
            {tags.map((tag) => (
              <button key={tag} className="res-tag">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="blogContainerOfIso">
      <div className="blogTextOfIso">
        "ISO's Mission Is To Provide A Platform for Consensus-Based
        Decision-Making Among Experts From{" "}
        <span style={{ color: "e5e5e5", textDecoration: "underline" }}>
          Around the World
        </span>{" "}
        ,With The Goal Of{" "}
        <span style={{ color: "e5e5e5", textDecoration: "underline" }}>
          {" "}
          Creating Standards
        </span>{" "}
        That Reflect The Best Practices And Expertise Of Various Industries And
        Sectors. "
      </div>
    </div> */}

      <FrequentQuestion data={faqData} />
      <NewsLetter />
      <ReadMoreBlog />
      <LetsConnect />
      <Footer />
    </>
  );
};

export default BlogInnerPage;
