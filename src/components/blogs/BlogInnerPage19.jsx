import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/third-party-inspection.png";
import foodSafety from "../../assets/images/blog_imgs/food-safety.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
// import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "ISO 22000 Implementation Toolkit (Excel)",
    description:
      "Comprehensive templates including hazard analysis worksheets, CCP determination flowchart, monitoring forms, and prerequisite program checklists.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "HACCP Principles Explained for Food Industry",
    description:
      "Practical video demonstrating hazard analysis and CCP determination with real examples from Indian food processing facilities.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Building consumer trust through",
    anchor: "Building-consumer-trust-through",
  },
  {
    label: "Understanding ISO 22000 Requirements",
    anchor: "Understanding-ISO-22000-Requirements",
  },
  {
    label: "Conducting Hazard Analysis",
    anchor: "Conducting-Hazard-Analysis",
  },
  {
    label: "Establishing Critical Control Points",
    anchor: "Establishing-Critical-Control-Points",
  },
  {
    label: "Implementing Prerequisite Programs",
    anchor: "Implementing-Prerequisite-Programs",
  },
  {
    label: "Verification and Validation",
    anchor: "Verification-and-Validation",
  },
  {
    label: "Certification Process",
    anchor: "Certification-Process",
  },
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
      question: "What's the difference between ISO 22000 and HACCP?",
      answer:
        "ISO 22000 incorporates HACCP principles within broader management system framework. HACCP focuses on hazard analysis and critical control points, while ISO 22000 adds management system requirements, prerequisite programs, and integration with business processes.",
    },
    {
      question: "How long does ISO 22000 certification take?",
      answer:
        "Implementation typically requires 6-12 months depending on organization size and existing food safety practices. Small operations with basic systems might achieve certification faster, while complex multi-site operations require longer preparation.",
    },
    {
      question: "Is ISO 22000 mandatory for food businesses?",
      answer:
        "ISO 22000 certification is voluntary in India. However, some retailers, exporters, and large customers require supplier certification. FSSAI licensing remains mandatory, while ISO 22000 demonstrates additional food safety commitment.",
    },
    {
      question: "Can ISO 22000 integrate with other certifications?",
      answer:
        "Yes. ISO 22000's structure enables integration with ISO 9001, ISO 14001, and other management systems. Shared procedures, combined audits, and unified documentation reduce administrative burden.",
    },
    {
      question: "What are typical certification costs?",
      answer:
        "Costs vary with organization size and complexity. Expect ₹1-3 lakhs for small operations, ₹3-8 lakhs for medium facilities, and higher for large multi-site organizations. Costs include consulting, documentation, training, and certification body fees.",
    },
  ];

  const tableConfig = {
    heading: "Document Control Hierarchy",
    theme: "light",
    columns: [
      { key: "level", label: "Level" },
      { key: "documentType", label: "Document Type" },
      { key: "changeFrequency", label: "Change Frequency" },
      { key: "approvalAuthority", label: "Approval Authority" },
    ],
  };

  const tableData = [
    {
      level: "Level 1",
      documentType: "Quality Policy, Environmental Policy, Safety Policy",
      changeFrequency: "Rarely (every 2–3 years)",
      approvalAuthority: "Top Management",
    },
    {
      level: "Level 2",
      documentType: "Procedures (cross-functional processes)",
      changeFrequency: "Occasionally (annually)",
      approvalAuthority: "Process Owners",
    },
    {
      level: "Level 3",
      documentType: "Work Instructions (specific tasks)",
      changeFrequency: "Frequently (as needed)",
      approvalAuthority: "Supervisors",
    },
    {
      level: "Level 4",
      documentType: "Forms, Templates, Records",
      changeFrequency: "As required",
      approvalAuthority: "Department Heads",
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
              src={foodSafety}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            ISO 22000 food <span className="blog-highlight itly">safety</span>{" "}
            management
          </h1>
          <p className="blog-description">
           ISO 22000 certification India, HACCP food safety, food safety management system, FSMS implementation, food industry compliance
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
          <p className="innertopText" id="Building-document-management">
           ISO 22000: Food Safety Management System
          </p>

          <p
            className="innertopTextSubHeading"
            id="Building-consumer-trust-through"
          >
            Building consumer trust through systematic food safety controls
          </p>

          <p className="blog-body blog-body-highlightColor">
           Food safety incidents can destroy brands overnight. A single contamination event triggers product recalls, regulatory sanctions, legal liabilities, and irreparable reputation damage. Indian food businesses face mounting pressure from retailers, exporters, and consumers demanding verified food safety management beyond basic licensing compliance.
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
          ISO 22000 provides internationally recognized framework for food safety management systems, applicable across the entire food chain from farm to fork. The standard integrates HACCP principles with management system requirements, enabling systematic hazard control while demonstrating commitment to food safety excellence.
          </p>
          <p className="blog-body blog-body-highlightColorBlue">
            Organizations implementing ISO 22000 don't just prevent contamination—they build systematic capabilities ensuring consistent product safety while meeting regulatory requirements and customer expectations across global markets.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-ISO-22000-Requirements"
          >
            Understanding ISO 22000 Requirements
          </p>

          <p className="blog-body">
            ISO 22000 combines interactive communication, system management, and HACCP principles into comprehensive food safety framework. The standard applies to all organizations in the food chain regardless of size—farmers, processors, manufacturers, distributors, retailers, and food service providers.
          </p>

          <p className="blog-body">
            The standard requires establishing prerequisite programs controlling basic operational conditions. These include facility maintenance, sanitation procedures, personnel hygiene, pest control, and supplier management. Prerequisite programs create the foundation preventing contamination before specific hazard controls address remaining risks.
          </p>

          <p className="blog-body">
            HACCP integration forms ISO 22000's core, requiring systematic hazard analysis identifying biological, chemical, and physical hazards. Organizations determine critical control points where hazards must be controlled, establish critical limits, implement monitoring procedures, and define corrective actions when limits are exceeded. Understanding
            <span className="blog-body blog-body-highlightColorBlue">CAPA processes</span>strengthens corrective action effectiveness.
            helps identify nonconformities requiring corrective action.
          </p>
          <p className="blog-body">
            Management system requirements align ISO 22000 with other ISO standards, facilitating integration with <span className="blog-body-highlightColorBlue"> ISO 9001 quality management or ISO 14001 environmental systems</span>. Top management commitment, documented procedures, internal audits, and continual improvement create sustainable food safety performance.
          </p>











          <p
            className="innertopTextSubHeading"
            id="Conducting-Hazard-Analysis"
          >
            Conducting Hazard Analysis
          </p>

          <p className="blog-body">
            Effective hazard analysis identifies all reasonably foreseeable food safety hazards requiring control. This systematic assessment examines raw materials, processing steps, storage conditions, distribution, and intended use.
          </p>

          <p className="blog-body">
            Biological hazards include pathogenic bacteria, viruses, parasites, and toxins. Salmonella in poultry, E. coli in produce, and Listeria in ready-to-eat foods represent common biological risks requiring specific controls. Temperature control, time management, and prevention of cross-contamination become critical for biological hazard management.
          </p>
          <p className="blog-body">
            Chemical hazards encompass allergens, pesticide residues, cleaning chemicals, food additives, and environmental contaminants. Undeclared allergens cause severe reactions in sensitive consumers, making allergen management essential. Chemical contamination from improper cleaning or storage requires strict segregation and handling procedures.
          </p>
         Hazard analysis considers likelihood and severity, determining which hazards require control through prerequisite programs versus critical control points. <span className="blog-body-highlightColorBlue">Risk assessment methodologies</span>  adapted to food safety contexts support systematic hazard evaluation.

          {/* start from here  */}
          <p
            className="innertopTextSubHeading"
            id="Establishing-Critical-Control-Points"
          >
            Establishing Critical Control Points
          </p>
          <p className="blog-body">
            Critical Control Points (CCPs) represent process steps where control measures can be applied to prevent, eliminate, or reduce food safety hazards to acceptable levels. Identifying CCPs requires systematic decision-making distinguishing critical controls from prerequisite programs.
          </p>
          <p className="blog-body">
            Cooking processes often represent CCPs for biological hazards. Achieving specific time-temperature combinations ensures pathogen destruction. Metal detection becomes a CCP preventing physical hazards from reaching consumers. Pasteurization, sterilization, and antimicrobial treatments typically qualify as CCPs due to their direct hazard reduction impact.
          </p>
          <p className="blog-body">
            Each CCP requires defined critical limits—measurable criteria separating acceptable from unacceptable conditions. Cooking temperatures, metal detector sensitivity, pH levels, or water activity thresholds serve as critical limits. These parameters must be scientifically validated ensuring they actually control identified hazards.
          </p>
          <p className="blog-body">
            Monitoring procedures verify CCP operation remains within critical limits. Continuous monitoring through automated sensors provides real-time control for critical parameters like cooking temperature. Intermittent checks suffice for stable processes. Monitoring frequency balances assurance needs against operational practicality.
          </p>
          <p className="blog-body">
           Corrective actions address deviations from critical limits. Procedures define immediate actions controlling nonconforming product, investigating deviation causes, and preventing recurrence. Documentation requirements ensure traceability and regulatory compliance.
          </p>



          <p
            className="innertopTextSubHeading"
            id="Implementing-Prerequisite-Programs"
          >
            Implementing Prerequisite Programs
          </p>
          <p className="blog-body">
           Prerequisite programs establish basic conditions necessary for food safety, addressing environmental and operational conditions rather than specific hazards in products.
          </p>
          <p className="blog-body">
           Facility design and maintenance prevent contamination through proper layout, construction materials, and upkeep. Food-grade surfaces, adequate drainage, pest-proof construction, and separation between raw and ready-to-eat areas reduce contamination risks. Regular maintenance prevents equipment deterioration that could introduce hazards.
          </p>
          <p className="blog-body">
           Cleaning and sanitation programs remove food residues and reduce microbial contamination. Documented procedures specify cleaning agents, methods, frequencies, and verification. Effective sanitation requires understanding chemical compatibility with surfaces, contact times, and rinsing requirements. Organizations maintaining <span className="blog-body-highlightColorBlue">document control systems</span>  ensure sanitation procedures remain current and accessible.
          </p>
          <p className="blog-body">
            Personnel hygiene controls prevent human contamination sources. Health screening, hand washing facilities, protective clothing, and behavior rules reduce contamination risks. Training ensures workers understand hygiene importance and follow established procedures consistently.
          </p>
          <p className="blog-body">
            Pest management programs prevent rodent and insect contamination through exclusion, monitoring, and elimination. Integrated pest management balances preventive measures with targeted treatments, minimizing chemical pesticide use near food processing areas.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Verification-and-Validation"
          >
            Verification and Validation
          </p>
          <p className="blog-body">
            Validation confirms that food safety measures actually control identified hazards before implementation. Scientific evidence, challenge studies, or expert consultation demonstrates control measure effectiveness. Cooking time-temperature combinations should be validated through microbial testing confirming pathogen destruction.
          </p>
          <p className="blog-body">
        Verification ensures implemented food safety system operates as planned. <span className="blog-body-highlightColorBlue"> Internal audits </span>evaluate system compliance with documented procedures. Calibration programs verify monitoring equipment accuracy. Product testing confirms control effectiveness. Environmental monitoring detects potential contamination in processing areas.
          </p>
          <p className="blog-body">
            Trend analysis identifies patterns suggesting system weaknesses before failures occur. Rising microbial counts, increasing customer complaints, or more frequent corrective actions signal need for system improvements. <span>
              Management review meetings</span>  analyze verification data, directing resources toward system enhancements.
          </p>



           <p
            className="innertopTextSubHeading"
            id="Certification-Process"
          >
            Certification Process
          </p>
          <p className="blog-body">
            ISO 22000 certification demonstrates third-party verification of food safety system effectiveness. The process begins with gap analysis comparing current practices against standard requirements, identifying improvement needs.
          </p>
          <p className="blog-body">
       Documentation development creates required procedures, HACCP plans, prerequisite programs, and records. Implementation follows, training personnel and establishing monitoring systems. Internal audits verify system effectiveness before engaging certification bodies.
          </p>
          <p className="blog-body">
            Certification audit occurs in two stages. Stage one reviews documentation adequacy and system readiness. Stage two evaluates implementation through site inspection, personnel interviews, and record review. Successful completion yields three-year certification with annual surveillance audits maintaining certification status.
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
         
         ISO 22000 implementation requires technical knowledge, systematic approach, and organizational commitment to food safety culture beyond mere compliance.
        </p>

        <p className="innertopTextSubHeading_Points">
         Download our HACCP Implementation Guide providing step-by-step framework for hazard analysis and critical control point determination specific to food processing operations.
        </p>
        <p className="blog-body">
         Need expert guidance with ISO 22000 implementation? Bexex consultants have supported food manufacturers, processors, and distributors across India achieving certification while building robust food safety capabilities. <span className="blog-body-highlightColorBlue">Explore our ISO 22000 consulting services</span>  or contact us for initial assessment..
        </p>

        
        <p className="blog-body">

        


          <span className="innerBlogTextBold">Expert Tip :</span> Involve shop-floor personnel in HACCP team formation and hazard analysis. Workers with hands-on process knowledge identify practical hazards and control challenges that management might overlook, creating 
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
