import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/eco-friendly.png";
import medicalDeviceQuality from "../../assets/images/blog_imgs/medical-device-quality.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: " ISO 13485 Implementation Toolkit (Excel)",
    description:
      "Comprehensive templates including design control procedures, risk management forms, validation protocols, traceability matrices, and complaint handling logs.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Design Controls for Medical Devices",
    description:
      "Practical video demonstrating design input development, verification testing, and validation planning with real medical device examples.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Medical Device Quality Management",
    anchor: "Medical-Device-Quality-Management",
  },
  {
    label: "Understanding ISO 13485 Requirements",
    anchor: "Understanding-ISO-13485-Requirements",
  },
  {
    label: "Regulatory Context & Compliance",
    anchor: "Regulatory-Context-and-Compliance",
  },
  {
    label: "Design and Development Controls",
    anchor: "Design-and-Development-Controls",
  },
  {
    label: "Production and Process Controls",
    anchor: "Production-and-Process-Controls",
  },
  {
    label: "Supplier and Purchasing Controls",
    anchor: "Supplier-and-Purchasing-Controls",
  },
  {
    label: "Post-Market Surveillance & Complaints",
    anchor: "Post-Market-Surveillance-and-Complaints",
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
      question: "What's the difference between ISO 13485 and ISO 9001?",
      answer:
        "ISO 13485 specifically addresses medical device requirements emphasizing regulatory compliance, risk management, and traceability. ISO 9001 focuses broadly on customer satisfaction and continual improvement. Medical device manufacturers need ISO 13485 for regulatory compliance.",
    },
    {
      question: "How long does ISO 13485 certification take?",
      answer:
        "Implementation typically requires 12-18 months for organizations without existing quality systems. Companies with ISO 9001 certification may achieve ISO 13485 in 8-12 months by enhancing existing systems with medical device-specific requirements.",
    },
    {
      question: "Is ISO 13485 mandatory in India?",
      answer:
        "ISO 13485 certification isn't legally mandatory but demonstrates compliance with Medical Device Rules quality system requirements. Many regulators, customers, and international markets expect certification as evidence of adequate quality management.",
    },
    {
      question: "What are typical certification costs?",
      answer:
        "Costs vary with organization size and device complexity. Expect ₹3-6 lakhs for small manufacturers, ₹6-12 lakhs for medium operations, and higher for large multi-site organizations. Costs include consulting, documentation, training, validation, and certification body fees.",
    },
    {
      question: "Can software qualify as medical device?",
      answer:
        "Yes. Software performing medical functions—diagnosis, treatment, monitoring—qualifies as medical device under most regulations including India's Medical Device Rules. Software as Medical Device (SaMD) requires full ISO 13485 compliance including software validation.",
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
              src={medicalDeviceQuality}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            ISO 13485 <span className="blog-highlight itly">medical</span>{" "}
            device quality
          </h1>
          <p className="blog-description">
            ISO 13485 certification India, medical device QMS, regulatory
            compliance medical devices, ISO 13485 requirements, medical device
            manufacturing
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
          <p className="innertopText" id="Medical-Device-Quality-Management">
            ISO 13485: Medical Device Quality Management
          </p>

          <p className="innertopTextSubHeading">
            Ensuring safety and regulatory compliance in medical device
            manufacturing
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Medical device failures carry profound consequences. A defective
            implant harms patients. Contaminated surgical instruments spread
            infections. Software errors in diagnostic equipment lead to
            misdiagnosis. Unlike conventional manufacturing where quality issues
            create customer dissatisfaction, medical device defects directly
            threaten human health and lives.
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
            Regulatory authorities worldwide demand rigorous quality management
            systems for medical device manufacturers. India's Medical Device
            Rules 2017 mandate quality system compliance. International markets
            require certifications demonstrating systematic quality controls.
            ISO 13485 provides the globally recognized framework specifically
            designed for medical device quality management.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Organizations implementing ISO 13485 don't just achieve regulatory
            compliance—they build systematic capabilities ensuring product
            safety, performance consistency, and regulatory acceptance across
            global markets while protecting patients and manufacturers from
            quality-related harm.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-ISO-13485-Requirements"
          >
            Understanding ISO 13485 Requirements
          </p>
          {/* <p className="innertopTextSubHeading_Points">
            Occupational Exposure Standards:
          </p> */}
          <p className="blog-body blog-body-highlightColor">
            ISO 13485 adapts ISO 9001 quality management principles to medical
            device industry's unique regulatory and safety requirements. While
            structurally similar to{" "}
            <Link to={"/blog/iso-9001-risk-based-thinking"} className="blog-body-highlightColorBlue">ISO 9001</Link>, ISO
            13485 emphasizes regulatory compliance, risk management, and
            traceability over customer satisfaction and continual improvement.
          </p>
          <p className="blog-body blog-body-highlightColor">
            The standard applies throughout product lifecycle—design,
            development, production, storage, distribution, installation,
            servicing, and final disposal. This comprehensive scope ensures
            quality controls extend beyond manufacturing to encompass all
            activities affecting device safety and performance.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Risk management forms ISO 13485's foundation, requiring systematic
            hazard identification, risk assessment, and mitigation throughout
            product development and production. Organizations must implement
            risk management processes aligned with ISO 14971, documenting risk
            analysis, evaluation, control measures, and post-market surveillance
            data.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Documentation requirements exceed typical manufacturing standards.
            Medical device regulations demand comprehensive records
            demonstrating design validation, production controls, testing
            results, and distribution tracking. Every device must be traceable
            to its manufacturing batch, components, processes, and eventual
            destination enabling rapid recalls if safety issues emerge.
          </p>

          {/* <p className="blog-body blog-body-highlightColor">
            Medical emergencies from workplace injuries, sudden illness, or
            exposure incidents demand immediate first aid and medical evacuation
            capabilities. Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              occupational health requirements
            </span>{" "}
            helps integrate medical emergency response with workplace safety
            management.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Security incidents including unauthorized access, sabotage, or
            threats require coordination with law enforcement while protecting
            personnel and assets. The threat landscape varies by location,
            industry, and facility profile.
          </p> */}

          <p
            className="innertopTextSubHeading"
            id="Regulatory-Context-and-Compliance"
          >
            Regulatory Context and Compliance
          </p>
          <p className="blog-body">
            ISO 13485 certification doesn't directly satisfy regulatory
            requirements but demonstrates systematic approach to meeting them.
            Understanding regulatory landscape shapes quality management system
            design.
          </p>

          <p className="blog-body">
            India's Medical Device Rules 2017 classify devices by risk
            level—low, moderate, high, and very high risk—with progressively
            stringent quality system requirements. Class C and D devices require
            comprehensive quality management systems closely aligned with ISO
            13485 principles. The Central Drugs Standard Control Organization
            (CDSCO) oversees medical device regulation, conducting facility
            inspections and reviewing quality system documentation.
          </p>
          <p className="blog-body">
            International markets impose additional requirements. The European
            Medical Device Regulation (MDR) requires conformity assessment
            including quality system evaluation. US FDA's Quality System
            Regulation (21 CFR Part 820) mandates design controls, production
            processes, and corrective action systems. ISO 13485 certification
            facilitates demonstrating compliance with these diverse regulatory
            frameworks.
          </p>
          <p className="blog-body">
            Organizations pursuing global market access must design quality
            systems satisfying multiple regulatory regimes simultaneously. ISO
            13485's regulatory-neutral approach enables building single quality
            system meeting varied requirements through documented procedures,
            validation evidence, and traceability systems. Maintaining{" "}
            <Link to={"/blog/ehs-legal-register-compliance"} className="blog-body-highlightColorBlue">
              legal compliance registers
            </Link>{" "}
            helps track evolving regulatory obligations across markets.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Design-and-Development-Controls"
          >
            Design and Development Controls
          </p>
          {/* table 
          <DynamicTable config={tableConfig} data={tableData} /> */}

          <p className="blog-body">
            Medical device design failures create safety hazards requiring
            extraordinarily rigorous design controls preventing defects before
            production begins.
          </p>
          <p className="blog-body">
            Design planning defines systematic development process including
            stages, verification activities, validation requirements, design
            review checkpoints, and documentation requirements. Planning
            considers device classification, intended use, regulatory
            requirements, and risk levels, scaling design controls
            appropriately.
          </p>
          <p className="blog-body">
            Design inputs specify device requirements based on intended use,
            user needs, regulatory standards, and risk management outputs.
            Clear, measurable input requirements enable objective verification
            that designs meet specifications. Incomplete or ambiguous inputs
            cause downstream validation failures.
          </p>
          <p className="blog-body">
            Design outputs include specifications, drawings, manufacturing
            procedures, labeling, and packaging requirements. Outputs must
            satisfy input requirements, include acceptance criteria, and
            reference relevant standards. Organizations document traceability
            between inputs and outputs demonstrating complete requirement
            coverage.
          </p>
          <p className="blog-body">
            Design verification confirms outputs meet input specifications
            through testing, analysis, or inspection. Biocompatibility testing,
            sterility validation, performance testing, and software verification
            provide objective evidence that designs work as intended under
            specified conditions.
          </p>
          <p className="blog-body">
            Design validation proves devices meet user needs and intended uses
            under actual or simulated use conditions. Clinical evaluation,
            usability testing, and performance assessment under realistic
            conditions confirm devices function safely and effectively when used
            by intended operators in target environments.
          </p>
          <p className="blog-body">
            Design changes require formal control preventing unintended
            consequences. Change requests, impact assessment, verification
            testing, regulatory notification, and updated documentation ensure
            modifications don't introduce new risks or compromise validated
            designs. Understanding{" "}
            <Link to={"/blog/capa-process-iso-standards"} className="blog-body-highlightColorBlue">CAPA processes</Link>{" "}
            strengthens design change management.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Production-and-Process-Controls"
          >
            Production and Process Controls
          </p>
          <p className="blog-body">
            Manufacturing controls ensure consistent device production meeting
            design specifications and regulatory requirements through every
            production run.
          </p>
          <p className="blog-body">
            Process validation demonstrates manufacturing processes reliably
            produce conforming devices. Installation qualification confirms
            equipment meets specifications. Operational qualification verifies
            equipment operates within parameters. Performance qualification
            proves processes consistently produce acceptable products.
            Revalidation occurs after significant process changes or when
            monitoring indicates process drift.
          </p>
          <p className="blog-body">
            Production environment controls maintain cleanliness appropriate to
            device classification and contamination risks. Sterile devices
            require cleanroom environments with validated sterilization
            processes. Implantable devices demand particulate control preventing
            foreign material inclusion. Environmental monitoring, personnel
            hygiene, and cleaning validation ensure production conditions don't
            compromise device safety.
          </p>
          <p className="blog-body">
            Equipment calibration and maintenance prevent measurement errors and
            production defects. Calibration schedules, verification against
            traceable standards, and maintenance programs maintain equipment
            accuracy and reliability. Organizations implementing{" "}
            <Link to={" "} className="blog-body-highlightColorBlue">
              calibration management systems
            </Link>{" "}
            systematically track instrument status and performance.
          </p>
          <p className="blog-body">
            Traceability systems track devices from raw materials through
            distribution to end users. Unique device identifiers, batch records,
            and distribution logs enable rapid identification of affected
            products during recalls or safety investigations. Component
            traceability extends to critical suppliers, tracking material lots
            through finished devices
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
            id="Supplier-and-Purchasing-Controls"
          >
            Supplier and Purchasing Controls
          </p>
          <p className="blog-body">
            Medical device quality depends heavily on purchased components and
            services requiring stringent supplier management beyond typical
            manufacturing practices.
          </p>
          <p className="blog-body">
            Supplier evaluation assesses quality capabilities before approval.
            Audits verify quality systems, process controls, and regulatory
            compliance. Performance history, certifications, and references
            inform approval decisions. Critical suppliers providing sterile
            components, implantable materials, or regulated services face
            particularly rigorous evaluation.
          </p>
          <p className="blog-body">
            Purchasing controls specify requirements clearly including technical
            specifications, quality standards, inspection requirements, and
            regulatory compliance obligations. Purchase orders reference
            applicable standards, inspection criteria, and certification
            requirements. Ambiguous purchasing documents create acceptance
            disputes and quality problems.
          </p>
          <p className="blog-body">
            Incoming inspection verifies received materials meet specifications
            before production use. Sampling plans, test methods, and acceptance
            criteria prevent defective materials entering manufacturing.
            Critical components may require 100% inspection while commodity
            items accept statistical sampling.
          </p>
          <p className="blog-body">
            Supplier performance monitoring tracks quality metrics, delivery
            performance, and nonconformance patterns. Regular reviews identify
            deteriorating performance requiring corrective action or supplier
            replacement. Understanding{" "}
            <Link to={"/blog/supplier-evaluation-approval-iso"} className="blog-body-highlightColorBlue">
              supplier evaluation processes
            </Link>{" "}
            enhances medical device supply chain quality.
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

          <p
            className="innertopTextSubHeading"
            id="Post-Market-Surveillance-and-Complaints"
          >
            Post-Market Surveillance and Complaints
          </p>
          <p className="blog-body">
            Quality management extends beyond manufacturing through systematic
            post-market surveillance detecting safety issues and performance
            problems after device release.
          </p>
          <p className="blog-body">
            Complaint handling systems collect, investigate, and resolve
            customer reports of device problems. Procedures define complaint
            receipt, investigation requirements, trending analysis, and
            regulatory reporting thresholds. Serious adverse events require
            immediate regulatory notification while minor issues support trend
            analysis.
          </p>
          <p className="blog-body">
            Post-market surveillance data includes complaint trends, return
            analysis, field failure reports, and clinical performance feedback.
            Systematic analysis identifies emerging problems requiring{" "}
            <Link to={"/blog/capa-process-iso-standards"} className="blog-body-highlightColorBlue">
              corrective and preventive actions 
            </Link>{" "}
            before widespread failures occur.
          </p>
          <p className="blog-body">
            Recall procedures enable rapid product retrieval when safety issues
            emerge. Traceability systems identify affected devices, distribution
            records locate customers, and communication plans notify users. Mock
            recalls verify system effectiveness before real events demand rapid
            action.
          </p>
          <p className="blog-body">
            Regulatory reporting obligations include adverse event
            notifications, field safety corrective actions, and periodic safety
            update reports. Timelines vary by event severity and jurisdiction,
            requiring systems tracking regulatory deadlines and ensuring timely
            submissions.
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
          ISO 13485 implementation requires deep understanding of medical device
          regulations, systematic quality processes, and organizational
          commitment to patient safety above commercial pressures.
        </p>
        <p className="innertopTextSubHeading_Points">
          Download our ISO 13485 Gap Analysis Checklist providing structured
          assessment framework comparing current practices against standard
          requirements and identifying priority improvement areas.
        </p>

        <p className="blog-body">
          Need expert guidance with ISO 13485 implementation for medical device
          manufacturing? Bexex quality consultants have supported medical device
          manufacturers across India achieving certification while building
          robust quality systems ensuring regulatory compliance and patient
          safety.{" "}
          <span className="blog-body-highlightColorBlue">
            Explore our ISO 13485 consulting services
          </span>{" "}
          or contact us for initial assessment.
        </p>
        <p className="blog-body">
          <span className="innerBlogTextBold">Expert Tip :</span> Integrate risk
          management into design and development from project initiation rather
          than treating it as separate activity. Early risk identification
          enables design modifications preventing hazards more effectively and
          economically than post-design risk mitigation attempts.
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
