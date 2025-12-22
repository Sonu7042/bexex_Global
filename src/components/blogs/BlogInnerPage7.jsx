import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/third-party-inspection.png";
import isoOneforth from "../../assets/images/blog_imgs/ISO-14001.jpg";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "ISO 14001 Documentation Kit (Word)",
    description:
      "Complete template set including environmental policy, aspects register, objectives template, and audit checklists.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "ISO 14001 Certification Journey — Case Study",
    description:
      "Video following an Indian manufacturer through implementation with lessons learned and results achieved.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "ISO 14001 for Indian Manufacturing",
    anchor: "ISO-14001-for-Indian-Manufacturing",
  },
  {
    label: "Understanding ISO 14001:2015",
    anchor: "Understandingp-ISO-14001:2015",
  },
  {
    label: "Core Principles",
    anchor: "Core-Principles",
  },
  {
    label: "Step-by-Step Implementation Roadmap",
    anchor: "Step-by-Step-Implementation-Roadmap",
  },
  {
    label: "Internal Audits and Management Review",
    anchor: "Internal-Audits-and-Management-Review",
  },
  {
    label: "Certification and Beyond",
    anchor: "Certification-and-Beyond",
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
      question: "How long does ISO 14001 implementation take?",
      answer:
        "Small organizations can complete implementation in 4-6 months. Medium manufacturers typically require 8-12 months. Large multi-site operations may need 12-18 months.",
    },
    {
      question: "What are typical certification costs?",
      answer:
        "Total investment ranges from ₹4-12 lakhs including consultancy, training, monitoring equipment, and certification fees. Savings from reduced waste and energy often recover costs within 18-24 months.",
    },
    {
      question: "Can we integrate ISO 14001 with existing management systems?",
      answer:
        "Yes. The High-Level Structure facilitates integration with ISO 9001 and ISO 45001. Combined audits and documentation reduce administrative burden significantly.",
    },
    {
      question: "Is ISO 14001 mandatory for manufacturing in India?",
      answer:
        "Not legally mandatory, but increasingly required by customers, export markets, and supply chain partners. Many government tenders prefer or require certified suppliers.",
    },
    {
      question:
        "How does ISO 14001 relate to Pollution Control Board requirements?",
      answer:
        "ISO 14001 complements but doesn't replace regulatory requirements. Certification demonstrates systematic approach to compliance but doesn't exempt organizations from legal obligations. ",
    },
  ];

  // table one data 1
  const tableConfig = {
    heading: "",
    theme: "dark", // "dark" | "light"
    columns: [
      { key: "routine", label: "Routine Operations" },
      { key: "nonRoutine", label: "Non-Routine Activities" },
    ],
  };

  const tableData = [
    {
      routine: "Air emissions from combustion and processes",
      nonRoutine: "Maintenance operations",
    },
    {
      routine: "Wastewater discharge",
      nonRoutine: "Startup and shutdown conditions",
    },
    {
      routine: "Solid and hazardous waste generation",
      nonRoutine: "Emergency situations (spills, fires)",
    },
    {
      routine: "Raw material and energy consumption",
      nonRoutine: "Equipment failures",
    },
    {
      routine: "Land use and biodiversity impacts",
      nonRoutine: "Construction and modification work",
    },
  ];

  // table 2 data

  const tableConfig1 = {
    heading: "",
    theme: "dark", // "dark" | "light"
    columns: [
      { key: "allocate", label: "Allocate Resources" },
      { key: "competence", label: "Build Competence" },
      { key: "awareness", label: "Create Awareness" },
    ],
  };

  const tableData1 = [
    {
      allocate: "Personnel for EMS implementation",
      competence: "Train personnel affecting environmental performance",
      awareness: "Communicate environmental policy to all workers",
    },
    {
      allocate: "Infrastructure for pollution control",
      competence: "Provide specialized training for environmental managers",
      awareness: "Explain individual contributions to EMS effectiveness",
    },
    {
      allocate: "Monitoring equipment",
      competence: (
        <>
          Develop{" "}
          <Link to={"/blog/iso-9001-internal-auditor-training"} className="blog-body-highlightColorBlue">
            internal auditor capabilities
          </Link>
        </>
      ),
      awareness: "Describe implications of non-conformity",
    },
    {
      allocate: "Training budgets",
      competence: "Industry-specific technical training",
      awareness: "Share environmental performance results",
    },
    {
      allocate: "Pollution control technology",
      competence: (
        <Link to={" "} className="blog-body-highlightColorBlue">
          "Environmental awareness programs"
        </Link>
      ),
      awareness: "Encourage environmental suggestions",
    },
  ];

  // data of table 3
  const tableConfig2 = {
    heading: "Monitoring, Compliance & Performance",
    theme: "dark", // "dark" | "light"
    columns: [
      { key: "controls", label: "Operational Controls" },
      { key: "compliance", label: "Compliance Verification" },
      { key: "performance", label: "Performance Indicators" },
    ],
  };

  const tableData2 = [
    {
      controls: (
        <>
          <Link to={"/blog/ambient-air-quality-monitoring"} className="blog-body-highlightColorBlue">
            Ambient air quality
          </Link>{" "}
          at facility boundaries
        </>
      ),
      compliance: "Regular compliance evaluations against legal requirements",
      performance: "Track KPIs aligned with environmental objectives",
    },
    {
      controls: (
        <>
          <span className="blog-body-highlightColorBlue">
            Effluent parameters
          </span>{" "}
          before discharge
        </>
      ),
      compliance: (
        <>
          <span className="blog-body-highlightColorBlue">
            Environmental compliance audits
          </span>{" "}
          by qualified personnel
        </>
      ),
      performance: "Analyze trends identifying improvement opportunities",
    },
    {
      controls: "Waste generation quantities and disposal methods",
      compliance: "Tracking of consent conditions and permit requirements",
      performance: "Report performance to management",
    },
    {
      controls: "Energy and water consumption trends",
      compliance: (
        <>
          Third-party verification through{" "}
          <span className="blog-body-highlightColorBlue">ISO 17025 labs</span>
        </>
      ),
      performance: "Benchmark against industry standards",
    },
  ];

  // table 3 data
  const tableConfig3 = {
    heading: "Business Benefits Beyond Compliance",
    theme: "dark", // "dark" | "light"
    columns: [
      { key: "category", label: "Benefit Category" },
      { key: "advantages", label: "Specific Advantages" },
      { key: "results", label: "Typical Results" },
    ],
  };

  const tableData3 = [
    {
      category: "Cost Reduction",
      advantages: "Lower energy bills through efficiency improvements",
      results: "15–25% reduction in energy costs",
    },
    {
      category: "",
      advantages: "Reduced waste disposal costs",
      results: "30–40% decrease in disposal expenses",
    },
    {
      category: "",
      advantages: "Decreased raw material consumption",
      results: "10–20% material savings",
    },
    {
      category: "",
      advantages: "Insurance premium reductions",
      results: "5–15% premium decreases",
    },
    {
      category: "Market Access",
      advantages: "Customer requirements for certified suppliers",
      results: "Access to tier-1 supply chains",
    },
    {
      category: "",
      advantages: "Export opportunities requiring environmental certification",
      results: "Entry to EU and US markets",
    },
    {
      category: "",
      advantages: "Government procurement preferences",
      results: "Enhanced tender competitiveness",
    },
    {
      category: "",
      advantages: "Enhanced competitive positioning",
      results: "Differentiation from uncertified competitors",
    },

    // -------- Risk Management --------
    {
      category: "Risk Management",
      advantages: "Fewer environmental incidents and emergencies",
      results: "40–60% reduction in incidents",
    },
    {
      category: "",
      advantages: "Reduced regulatory penalties",
      results: "70% fewer enforcement actions",
    },
    {
      category: "",
      advantages: "Lower liability exposure",
      results: "Improved stakeholder confidence",
    },
    {
      category: "",
      advantages: "Better community relations",
      results: "Reduced complaints and conflicts",
    },

    // -------- Operational Excellence --------
    {
      category: "Operational Excellence",
      advantages: "Process optimization through systematic monitoring",
      results: "Improved process stability",
    },
    {
      category: "",
      advantages: "Resource efficiency improvements",
      results: "Lean manufacturing integration",
    },
    {
      category: "",
      advantages: "Employee engagement in environmental initiatives",
      results: "Enhanced organizational culture",
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
              src={isoOneforth}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            <span className="blog-highlight itly">ISO 14001</span>{" "}
            implementation India
          </h1>
          <p className="blog-description">
            ISO 14001 certification, environmental management system, EMS
            implementation, ISO 14001 benefits, environmental compliance India.
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
          <p className="innertopText" id="ISO-14001-for-Indian-Manufacturing">
            ISO 14001 for Indian Manufacturing: A Step-by-Step Approach
          </p>

          <p className="innertopTextSubHeading">
            Building environmental management systems that deliver business
            value
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Environmental regulations in India have tightened significantly over
            the past decade. The Central Pollution Control Board enforces strict
            emission standards. State Pollution Control Boards conduct regular
            inspections. Communities demand environmental accountability. For
            manufacturers, environmental compliance has evolved from optional
            good practice to business necessity.
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
            ISO 14001, the international standard for environmental management
            systems, provides a structured framework for managing environmental
            responsibilities while improving operational efficiency.
            Organizations implementing ISO 14001 don't just achieve
            compliance—they reduce waste, lower energy consumption, and
            strengthen stakeholder relationships.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Indian manufacturers with ISO 14001 certification report 25%
            reduction in waste generation, 15% decrease in energy costs, and 40%
            fewer environmental non-compliances compared to pre-certification
            performance.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understandingp-ISO-14001:2015"
          >
            Understanding ISO 14001:2015
          </p>

          <p className="blog-body blog-body-highlightColor">
            ISO 14001 specifies requirements for an environmental management
            system enabling organizations to enhance environmental performance
            through efficient use of resources and reduction of waste. The 2015
            revision follows the High-Level Structure common to all ISO
          </p>

          <p className="blog-body blog-body-highlightColor">
            management standards, making integration straightforward for
            organizations already implementing{" "}
            <Link to={"/blog/iso-9001-risk-based-thinking"} className="blog-body-highlightColorBlue">ISO 9001</Link> or{" "}
            <Link to={"/blog/iso-45001-implementation-guide"} className="blog-body-highlightColorBlue">ISO 45001</Link>.
          </p>

          <p className="innertopTextSubHeading" id="Core-Principles">
            Core Principles
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold"> Environmental Policy:</span>{" "}
            Top management establishes commitments to environmental protection,
            pollution prevention, and continual improvement.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold"> Risk-Based Thinking:</span>{" "}
            Organizations identify environmental risks and opportunities,
            implementing controls before problems occur.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Life Cycle Perspective:</span>{" "}
            Consider environmental impacts from raw material extraction through
            product disposal.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Legal Compliance:</span>{" "}
            Systematically identify and meet applicable environmental
            obligations through effective{" "}
            <Link to={"/blog/ehs-legal-register-compliance"} className="blog-body-highlightColorBlue">
              legal register management
            </Link>
            .
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Continual Improvement:</span>{" "}
            Ongoing enhancement of environmental performance through systematic
            measurement and analysis.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Step-by-Step-Implementation-Roadmap"
          >
            Step-by-Step Implementation Roadmap
          </p>

          <p className="innertopTextSubHeading_Points">
            Step 1: Leadership Commitment and Context Analysis
          </p>

          <p className="blog-body">
            Secure visible top management commitment. Leadership must allocate
            resources, establish policy, and hold themselves accountable for
            environmental performance. Determine organizational context by
            identifying:
          </p>

          <p className="blog-body">
            Determine organizational context by identifying:
          </p>

          <ul className="disk">
            <li>
              <span className="innerBlogTextBold">External issues: </span>
              Regulatory changes, community expectations, climate conditions,
              competitive pressures
            </li>

            <li>
              <span className="innerBlogTextBold">Internal issues: </span>
              Resource constraints, technical capabilities, organizational
              culture
            </li>

            <li>
              <span className="innerBlogTextBold">Interested parties: </span>
              Regulators, communities, customers, employees, investors
            </li>
          </ul>

          <p className="blog-body">
            Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              context of the organization
            </span>{" "}
            shapes all subsequent EMS design decisions.
          </p>

          <p className="innertopTextSubHeading_Points">
            Step 2: Environmental Aspects and Impacts
          </p>
          <p className="blog-body">
            Identify environmental aspects—elements of activities, products, or
            services that interact with the environment.
          </p>

          <DynamicTable config={tableConfig} data={tableData} />

          <p className="blog-body">
            For each aspect, determine associated environmental impacts (air
            quality degradation, water pollution, soil contamination, resource
            depletion, climate change contribution). Evaluate significance based
            on severity, frequency, duration, and stakeholder concern.
          </p>

          <p className="innertopTextSubHeading_Points" id="What-to-Expect">
            Step 3: Legal and Compliance Obligations
          </p>
          <p className="blog-body">
            Identify all applicable environmental legal requirements:
          </p>

          <ul className="disk">
            <li>Environment Protection Act 1986</li>
            <li>Air and Water Pollution Acts</li>
            <li>Hazardous Waste Management Rules</li>
            <li>State Pollution Control Board consents</li>
            <li>Municipal regulations</li>
          </ul>

          <p className="blog-body">
            Maintain a comprehensive{" "}
            <Link to={"/blog/ehs-legal-register-compliance"} span className="blog-body-highlightColorBlue">
              EHS legal register
            </Link>{" "}
            documenting requirements, compliance status, and responsibilities.
          </p>

          <p className="innertopTextSubHeading_Points" id="What-to-Expect">
            Step 4: Environmental Objectives and Planning
          </p>

          <p className="blog-body">
            Establish measurable environmental objectives:
          </p>

          <ul className="disk">
            <li>Reduce water consumption by 20% within 12 months</li>
            <li>Achieve zero hazardous waste to landfill by year-end</li>
            <li>Decrease energy intensity by 15% per unit production</li>
            <li>Maintain 100% compliance with emission limits</li>
          </ul>
          <p className="blog-body">
            Develop action plans specifying resources, responsibilities,
            timelines, and success measures.
          </p>

          <p className="innertopTextSubHeading_Points" id="What-to-Expect">
            Step 5: Resources, Competence, and Awareness
          </p>

          <DynamicTable config={tableConfig1} data={tableData1} />

          <p className="innertopTextSubHeading_Points" id="What-to-Expect">
            Step 6: Operational Controls
          </p>

          <p className="blog-body">
            Establish operational controls for significant environmental
            aspects:
          </p>
          <p className="innertopTextSubHeading_Points">
            Pollution Prevention Controls:
          </p>
          <ul className="disk">
            <li>
              Emission control equipment (scrubbers, filters, treatment systems)
            </li>
            <li>Waste segregation and recycling programs</li>
            <li>Spill prevention and response procedures</li>
            <li>
              <Link to={"/blog/stack-emission-monitoring-compliance"} className="blog-body-highlightColorBlue">
                Stack emission monitoring{" "}
              </Link  >{" "}
              systems
            </li>
          </ul>

          <p className="innertopTextSubHeading_Points">
            Resource Efficiency Controls:
          </p>
          <ul className="disk">
            <li>
              Energy management through <Link to={"/blog/iso-50001-energy-management"}  className="blog-body-highlightColorBlue">ISO 50001</Link> integration
            </li>
            <li>Water conservation programs</li>
            <li>Material usage optimization</li>
            <li>
              <span className="blog-body-highlightColorBlue">
                Calibration management
              </span>{" "}
              for measurement accuracy
            </li>
          </ul>

          <p className="innertopTextSubHeading_Points">
            Emergency Preparedness:
          </p>
          <ul className="disk">
            <li>
              Identify potential emergency situations (chemical spills, fires,
              equipment failures) integration
            </li>
            <li>Develop response procedures</li>
            <li>Conduct regular drills</li>
            <li>Review and update after incidents</li>
          </ul>

          <p className="innertopTextSubHeading_Points" id="What-to-Expect">
            Step 7: Monitoring and Measurement
          </p>
          <DynamicTable config={tableConfig2} data={tableData2} />

          <p
            className="innertopTextSubHeading"
            id="Internal-Audits-and-Management-Review"
          >
            Internal Audits and Management Review
          </p>
          <p className="blog-body">
            Conduct{" "}
            <Link to={"/blog/internal-audit-process-guide"} className="blog-body-highlightColorBlue">
              {" "}
              internal audits{" "}
            </Link>
            at planned intervals verifying EMS conforms to ISO 14001
            requirements, environmental objectives are being achieved, and legal
            compliance is maintained. Address audit findings through systematic{" "}
            <Link to={"/blog/capa-process-iso-standards"} className="blog-body-highlightColorBlue">
              {" "}
              corrective actions
            </Link>{" "}
            addressing root causes. Hold{" "}
            <Link to={"/blog/management-review-meeting-iso"} className="blog-body-highlightColorBlue">
              management reviews
            </Link>{" "}
            at least annually evaluating environmental performance, compliance
            status, stakeholder communications, resource adequacy, and
            improvement opportunities.
          </p>

          <p className="innertopTextSubHeading" id="Certification-and-Beyond">
            Certification and Beyond
          </p>
          <p className="blog-body">
            After operating your EMS for 3-6 months with documented performance
            data, engage an accredited certification body for audit. The
            two-stage audit process verifies documentation addresses ISO 14001
            requirements, implementation is effective, and environmental
            performance shows improvement.
          </p>
          <p className="blog-body">
            Organizations pursuing multiple certifications benefit from{" "}
            <Link to={"/blog/integrated-management-systems-ims"} className="blog-body-highlightColorBlue">
              {" "}
              integrated management systems
            </Link>{" "}
            combining quality, environmental, and safety standards.
          </p>

          <DynamicTable config={tableConfig3} data={tableData3} />
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
          ISO 14001 implementation transforms environmental management from
          reactive compliance to proactive performance improvement.
          Organizations that approach it systematically achieve both
          environmental and business benefits.
        </p>

        <p className="innertopTextSubHeading_Points">
          Download our ISO 14001 Documentation Kit to accelerate your
          implementation.
        </p>

        <p className="blog-body">
          Bexex has guided over 150 Indian manufacturers through ISO 14001
          certification while improving environmental performance and reducing
          operational costs.{" "}
          <span className="blog-body-highlightColorBlue">
            {" "}
            Explore our ISO 14001 services
          </span>{" "}
          or contact us for consultation.
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
