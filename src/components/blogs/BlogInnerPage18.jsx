import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/eco-friendly.png";
import soilTesting from "../../assets/images/blog_imgs/soil-testing.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "Soil Contamination Assessment Toolkit (Excel)",
    description:
      "Comprehensive toolkit including sampling plan template, chain of custody forms, results interpretation guide, and remediation option comparison matrix.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Soil Sampling Techniques and Best Practices",
    description:
      "Practical video demonstrating proper soil sampling procedures, field quality control, and common mistakes to avoid during contamination assessment.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Soil Testing and Contamination Assessment",
    anchor: "Soil-Testing-and-Contamination-Assessment",
  },
  {
    label: "Understanding Soil Contamination Sources",
    anchor: "Understanding-Soil-Contamination-Sources",
  },
  {
    label: "Regulatory Framework",
    anchor: "Regulatory-Framework",
  },
  {
    label: "Soil Testing Parameters & Methods",
    anchor: "Soil-Testing-Parameters-&-Methods",
  },
  {
    label: "Developing Effective Sampling Plans",
    anchor: "Developing-Effective-Sampling-Plans",
  },
  {
    label: "Interpreting Results & Risk Assessment",
    anchor: "Interpreting-Results-and-Risk-Assessment",
  },
  {
    label: "Remediation Approaches & Planning",
    anchor: "Remediation-Approaches-and-Planning",
  },
  // WAIT
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
      question: "When is soil testing mandatory for industries?",
      answer:
        "Soil testing becomes mandatory during environmental clearances, facility closures, land transfers, hazardous waste facility licensing, and when suspected contamination is reported. State Pollution Control Boards may also require periodic testing for specific industrial categories.",
    },
    {
      question: "How deep should soil samples be collected?",
      answer:
        "Sampling depth depends on assessment objectives. Surface samples (0-15cm) detect recent contamination. Subsurface sampling (up to 3-5 meters) investigates migration and historical contamination. Depth to groundwater guides maximum sampling depth when assessing groundwater contamination risk.",
    },
    {
      question: "What are typical soil testing costs?",
      answer:
        "Costs vary with parameters tested and sample numbers. Basic testing might cost ₹2,000-5,000 per sample. Comprehensive contamination assessment including multiple parameters and locations could range from ₹50,000 to several lakhs depending on site size and complexity.",
    },
    {
      question: "How long does contamination assessment take?",
      answer:
        "Initial assessments typically require 2-4 weeks including sampling, laboratory analysis, and reporting. Detailed investigations for complex contamination may extend to 2-3 months. Remediation verification testing continues throughout cleanup, potentially lasting months or years for extensive contamination.",
    },
    {
      question: "Can contaminated sites be used while remediating?",
      answer:
        "Continued use depends on contamination type, exposure risks, and remediation approach. Industrial operations may continue with appropriate controls while remediation proceeds. Residential or agricultural use typically requires completing remediation before reoccupation. Risk assessment and regulatory consultation determine acceptable interim uses.",
    },
  ];

  const tableConfig = {
    // heading: "User Management",
    theme: "dark", // "dark" | "light"
    columns: [
      { key: "name", label: "Monitoring Type" },
      { key: "email", label: "Purpose" },
      { key: "role", label: "Measurement Method" },
      { key: "status", label: "Typical Frequency" },
    ],
  };

  const tableData = [
    {
      name: "Personal Exposure Monitoring",
      email: "Assess individual worker exposure",
      role: "Dosimeters worn by workers throughout shift",
      status: "Annual or when processes change",
    },
    {
      name: "Area Monitoring",
      email: "Identify high-noise work areas",
      role: "Sound level meters at fixed locations",
      status: "Semi-annual or as needed",
    },
    {
      name: "Boundary Monitoring",
      email: "Verify environmental compliance",
      role: "Measurements at facility boundaries",
      status: "Quarterly or per consent conditions",
    },
    {
      name: "Source Monitoring",
      email: "Evaluate specific equipment noise",
      role: "Near-field measurements at noise sources",
      status: "During commissioning or troubleshooting",
    },
    // {
    //   name: "Network Security",
    //   email: "Firewalls, network segmentation, secure configuration",
    //   role: "Protect network infrastructure",
    //   // status: "Active",
    // },
    // {
    //   name: "Incident Management",
    //   email: "Detection, response procedures, evidence preservation",
    //   role: "Handle security incidents effectively",
    //   // status: "Active",
    // },
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
              src={soilTesting}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            Soil <span className="blog-highlight itly">testing</span>{" "}
            contamination assessment
          </h1>
          <p className="blog-description">
            soil quality testing India, contaminated land assessment,
            environmental site assessment, soil pollution testing, remediation
            planning
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
          <p
            className="innertopText"
            id="Soil-Testing-and-Contamination-Assessment"
          >
            Soil Testing and Contamination Assessment
          </p>

          <p className="innertopTextSubHeading">
            Identifying and managing land contamination before it becomes
            liability
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Industrial operations across India face increasing scrutiny
            regarding land contamination. Manufacturing facilities, chemical
            plants, fuel storage sites, and waste treatment operations all risk
            soil contamination through spills, leaks, improper disposal, or
            historical practices. What began as minor operational incidents can
            evolve into significant environmental liabilities affecting property
            values, regulatory compliance, and community health.
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
            State Pollution Control Boards now mandate soil testing for facility
            closures, land transfers, and environmental clearances. Industries
            expanding operations or acquiring land must assess contamination
            status before development. Yet many organizations approach soil
            testing reactively—only when regulators demand it or contamination
            becomes obvious through discolored soil or vegetation damage.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Proactive soil contamination assessment prevents costly remediation
            surprises, protects against legal liabilities, and demonstrates
            environmental stewardship that strengthens community relations and
            regulatory standing.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-Soil-Contamination-Sources"
          >
            Understanding Soil Contamination Sources
          </p>
          {/* <p className="innertopTextSubHeading_Points">
            Occupational Exposure Standards:
          </p> */}
          <p className="blog-body blog-body-highlightColor">
            Industrial soil contamination originates from diverse sources
            requiring different assessment approaches. Understanding
            contamination pathways helps target testing effectively.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Point source contamination results from specific incidents—chemical
            spills, tank leaks, or waste disposal at identifiable locations.
            These create contamination hotspots with high concentrations near
            the source, gradually decreasing with distance. Underground storage
            tanks pose particular risks, with leaks potentially going undetected
            for years while contamination spreads through soil and groundwater.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Diffuse contamination occurs across broader areas through
            atmospheric deposition, surface runoff, or repeated small releases.
            Manufacturing facilities with outdoor material handling may
            experience widespread low-level contamination from years of
            accumulated dust, minor spills, or stormwater carrying pollutants
            across sites.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Historical contamination presents assessment challenges,
            particularly at sites with long industrial history or changing
            ownership. Previous operators may have followed practices considered
            acceptable decades ago but creating contamination by current
            standards. Organizations implementing{" "}
            <Link to={"/blog/iso-14001-implementation-india"} className="blog-body-highlightColorBlue">
              ISO 14001 environmental management
            </Link>{" "}
            often discover historical contamination during initial environmental
            reviews.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Subsurface contamination migration complicates assessment.
            Contaminants don't remain where originally deposited. Water movement
            through soil carries dissolved contaminants horizontally and
            vertically. Understanding local geology and groundwater flow
            patterns becomes essential for comprehensive assessment.
          </p>

          <p className="innertopTextSubHeading" id="Regulatory-Framework">
            Regulatory Framework for Soil Testing
          </p>
          <p className="blog-body">
            Multiple regulatory frameworks govern soil contamination assessment
            in India, creating overlapping compliance obligations that
            industries must navigate systematically.
          </p>

          <p className="blog-body">
            The Environment Protection Act 1986 provides overarching authority
            for pollution control, including soil contamination. State Pollution
            Control Boards enforce regulations under this framework, setting
            investigation requirements and remediation standards for
            contaminated sites.
          </p>
          <p className="blog-body">
            The Hazardous and Other Wastes Management Rules 2016 mandate soil
            testing at facilities handling hazardous waste. Industries must
            demonstrate that waste management activities haven't caused soil
            contamination. Facility closure requires comprehensive contamination
            assessment confirming that operations didn't leave persistent
            pollution.
          </p>
          <p className="blog-body">
            Land acquisition or transfer increasingly requires contamination
            assessment. Buyers demand clean site certifications. Financial
            institutions require environmental due diligence before approving
            loans for property development. These commercial drivers supplement
            regulatory requirements, making soil testing standard practice for
            real estate transactions involving industrial properties.
          </p>
          <p className="blog-body">
            Local authorities may impose additional testing requirements through
            environmental clearance conditions or development permissions.
            Understanding the complete regulatory landscape prevents compliance
            gaps. Organizations developing{" "}
            <Link to={"/blog/ehs-legal-register-compliance"} className="blog-body-highlightColorBlue">
              environmental compliance programs
            </Link>{" "}
            integrate soil testing into broader environmental management
            systems.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Soil-Testing-Parameters-&-Methods"
          >
            Soil Testing Parameters and Methods
          </p>
          {/* table 
          <DynamicTable config={tableConfig} data={tableData} /> */}

          <p className="blog-body">
            Comprehensive soil contamination assessment examines physical,
            chemical, and sometimes biological parameters depending on suspected
            contamination types and site history.
          </p>
          <p className="blog-body">
            Heavy metal testing identifies contamination from industrial
            processes, waste disposal, or atmospheric deposition. Priority
            metals include lead, mercury, cadmium, chromium, arsenic, and
            nickel. Metal concentrations are compared against background levels
            and regulatory standards. Different metals pose distinct risks some
            threaten groundwater through leaching, others present direct contact
            hazards.
          </p>
          <p className="blog-body">
            Petroleum hydrocarbon testing addresses contamination from fuel
            storage, vehicle operations, or industrial processes using petroleum
            products. Testing distinguishes between volatile compounds requiring
            different sampling and analytical methods versus semi-volatile and
            non-volatile fractions. Total petroleum hydrocarbons provide overall
            contamination indicators, while specific compound analysis
            identifies particular fuel types or chemicals.
          </p>
          <p className="blog-body">
            Persistent organic pollutants including pesticides, PCBs, and
            industrial chemicals require specialized testing when site history
            suggests potential presence. These compounds resist degradation,
            accumulating in soil over years. Even low concentrations may exceed
            regulatory limits due to toxicity and environmental persistence.
          </p>
          <p className="blog-body">
            pH and electrical conductivity measurements provide baseline soil
            characteristics affecting contaminant behavior. Soil texture
            analysis determines how contaminants move through soil—sandy soils
            allow rapid migration while clay soils retain contaminants longer.
            Understanding these physical properties informs both risk assessment
            and remediation planning.
          </p>
          <p className="blog-body">
            Facilities conducting{" "}
            <Link to={"/blog/water-quality-testing-india"} className="blog-body-highlightColorBlue">
              water quality testing
            </Link>{" "}
            should coordinate soil assessment, as contamination often affects
            both media. Integrated testing reveals complete environmental
            impact.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Developing-Effective-Sampling-Plans"
          >
            Developing Effective Sampling Plans
          </p>
          <p className="blog-body">
            Systematic grid sampling works well for large sites with unknown
            contamination patterns. The site is divided into grid squares with
            samples collected from each grid point. Grid spacing depends on site
            size and assessment objectives—preliminary investigations might use
            50-meter grids while detailed assessments require 10-20 meter
            spacing.
          </p>
          <p className="blog-body">
            Judgment-based sampling targets suspected contamination sources
            identified through site history review, visual inspection, or
            preliminary screening. Sample locations include areas near
            underground tanks, chemical storage areas, waste disposal zones,
            loading docks, or locations showing vegetation stress or soil
            discoloration.
          </p>
          <p className="blog-body">
            Depth profiling determines vertical contamination extent. Surface
            samples alone may miss subsurface contamination from leaking tanks
            or migration through soil. Standard practice involves sampling at
            multiple depths—surface (0-15cm), subsurface (15-50cm), and deeper
            intervals if groundwater contamination is suspected.
          </p>
          <p className="blog-body">
            Composite sampling reduces analytical costs for large areas with
            expected uniform contamination. Multiple samples from defined areas
            are combined for analysis. However, compositing can dilute hotspot
            contamination, potentially missing localized problems. Balance cost
            efficiency against detection sensitivity based on site-specific
            risks.
          </p>
          <p className="blog-body">
            Quality assurance requires field duplicates, equipment blanks, and
            proper chain of custody documentation. These quality control
            measures ensure data reliability supporting regulatory decisions or
            remediation planning.
          </p>
          {/* 
          <p className="blog-body">
            Regular{" "}
            <span className="blog-body-highlightColorBlue">
              security awareness training
            </span>{" "}
            transforms culture from viewing security as IT's problem to
            recognizing it as everyone's responsibility.
          </p> */}

          <p
            className="innertopTextSubHeading"
            id="Interpreting-Results-and-Risk-Assessment"
          >
            Interpreting Results and Risk Assessment
          </p>
          <p className="blog-body">
            Soil testing generates data requiring careful interpretation
            considering regulatory standards, background concentrations, and
            site-specific exposure pathways.
          </p>
          <p className="blog-body">
            Compare results against applicable standards—Central Pollution
            Control Board guidelines, state-specific regulations, or
            internationally recognized criteria when Indian standards don't
            exist. Different land uses have different acceptable contamination
            levels. Industrial sites tolerate higher concentrations than
            residential or agricultural land due to limited exposure pathways.
          </p>
          <p className="blog-body">
            Background concentration comparison distinguishes anthropogenic
            contamination from naturally elevated levels. Some soils naturally
            contain elevated metals or other compounds. Testing uncontaminated
            reference locations establishes baseline concentrations for
            comparison with potentially contaminated areas.
          </p>
          {/* <ul className="disk">
            <li>Install acoustic enclosures around noisy equipment</li>
            <li>Use sound-absorbing materials on walls and ceilings</li>
            <li>Create barriers between noise sources and workers</li>
            <li>
              Increase distance between sources and receptors where feasible
            </li>
            <li>
              Implement vibration isolation preventing structure-borne noise
              transmission
            </li>
          </ul> */}
          <p className="blog-body">
            Risk assessment evaluates whether detected contamination poses
            actual threats to human health or environment. Consider exposure
            pathways—direct contact, dust inhalation, groundwater contamination,
            or uptake by plants. Industrial sites with paved surfaces and
            limited public access present lower exposure risks than residential
            areas with children playing in soil.
          </p>
          <p className="blog-body">
            Spatial analysis maps contamination extent, identifying source areas
            and migration patterns. This understanding supports targeted
            remediation rather than treating entire sites uniformly. Geographic
            information systems facilitate visualization of contamination
            distribution, assisting remediation planning and regulatory
            communication.
          </p>
          <p className="blog-body">
            Organizations implementing{" "}
            <Link to={"/blog/iso-9001-risk-based-thinking"} className="blog-body-highlightColorBlue">
              risk management frameworks
            </Link>{" "}
            apply similar systematic approaches to environmental contamination
            assessment, evaluating likelihood and consequences of various
            exposure scenarios.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Remediation-Approaches-and-Planning"
          >
            Remediation Approaches and Planning
          </p>
          <p className="blog-body">
            Contamination assessment leads naturally to remediation planning
            when results exceed acceptable levels or risk assessments identify
            unacceptable exposure pathways.
          </p>
          <p className="blog-body">
            Excavation and disposal removes contaminated soil for off-site
            treatment or disposal at authorized hazardous waste facilities. This
            approach provides definitive contamination removal but generates
            high costs for transportation and disposal. Regulatory requirements
            for hazardous waste manifest and facility authorization add
            complexity. Excavation works best for localized contamination with
            clearly defined boundaries.
          </p>
          <p className="blog-body">
            In-situ treatment addresses contamination without excavation through
            various technologies. Chemical oxidation breaks down organic
            contaminants. Soil vapor extraction removes volatile compounds.
            Bioremediation uses microorganisms to degrade petroleum hydrocarbons
            and some organic chemicals. Technology selection depends on
            contaminant types, soil conditions, and site constraints.
          </p>
          <p className="blog-body">
            Containment strategies prevent contamination migration rather than
            removing it. Capping covers contaminated areas preventing exposure
            and infiltration. Barriers block groundwater flow through
            contaminated zones. Containment suits situations where removal is
            impractical due to extensive contamination or technical limitations,
            though long-term monitoring requirements persist.
          </p>
          <p className="blog-body">
            Containment strategies prevent contamination migration rather than
            removing it. Capping covers contaminated areas preventing exposure
            and infiltration. Barriers block groundwater flow through
            contaminated zones. Containment suits situations where removal is
            impractical due to extensive contamination or technical limitations,
            though long-term monitoring requirements persist.
          </p>
          <p className="blog-body">
            Remediation planning requires cost-benefit analysis, regulatory
            consultation, and stakeholder communication. Organizations
            addressing soil contamination should integrate efforts with broader{" "}
            <Link to={"/blog/iso-14001-implementation-india"} className="blog-body-highlightColorBlue">
              environmental management systems
            </Link>{" "}
            ensuring systematic contamination prevention going forward.
          </p>

          {/* <ul className="disk">
            <li>Does this procedure still reflect current practice?</li>
            <li>Have regulatory requirements changed?</li>
            <li>Has equipment or technology changed?</li>
            <li>Have incidents revealed procedure inadequacies?</li>
            <li>Do performance metrics suggest process improvement needs?</li>
          </ul> */}
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
          Soil contamination assessment requires technical expertise, regulatory
          knowledge, and systematic approach ensuring accurate characterization
          while meeting compliance obligations.
        </p>

        <p className="blog-body">
          <span className="innerBlogTextBold">
            Begin with desktop study reviewing site history, operations, and
            potential contamination sources
          </span>
          . This preliminary assessment identifies investigation priorities and
          informs sampling strategy development.
        </p>
        <p className="innertopTextSubHeading_Points">
          Download our Soil Sampling Plan Template providing structured approach
          to developing site-specific sampling strategies aligned with
          regulatory requirements and investigation objectives..
        </p>

        <p className="blog-body">
          Need expert guidance with soil contamination assessment or remediation
          planning? Bexex environmental specialists have supported over 100
          industrial facilities across India with contamination investigations,
          regulatory compliance, and remediation implementation. <span className="blog-body-highlightColorBlue itly">Explore our
          environmental monitoring services</span> or contact us for site-specific
          contamination assessment consultation.
        </p>
        <p className="blog-body">
          <span className="innerBlogTextBold">Expert Tip :</span> Document your site's operational history thoroughly before contamination assessment. Historical records, aerial photographs, former employee interviews, and previous environmental reports help identify likely contamination sources, optimizing sampling plans and reducing investigation costs while improving contamination detection.
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
