import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/eco-friendly.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "IMS Implementation Toolkit (Word + Excel)",
    description:
      "Comprehensive toolkit including integration gap analysis, integrated manual template, unified procedure formats, and integrated audit checklist.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Building Effective Integrated Management Systems",
    description:
      "Video guide to IMS implementation with real examples of integrated documentation, combined audits, and unified management processes.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Combining ISO Standards",
    anchor: "Combining-ISO-Standards",
  },
  {
    label: "Understanding IMS Benefits",
    anchor: "Understanding-IMS-Benefits",
  },
  {
    label: "ISO High-Level Structure Advantage",
    anchor: "ISO-High-Level-Structure-Advantage",
  },
  {
    label: "Integration Approaches and Strategies",
    anchor: "Integration-Approaches-and-Strategies",
  },
  {
    label: "Implementing Integrated Processes",
    anchor: "Implementing-Integrated-Processes",
  },
  {
    label: "Documentation Structure for IMS",
    anchor: "Documentation-Structure-for-IMS",
  },
  {
    label: "Integrated Auditing and Certification",
    anchor: "Integrated-Auditing-and-Certification",
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
      question: "Can we integrate ISO 9001, 14001, and 45001 if we currently only have ISO 9001?",
      answer:
        "Yes. Add ISO 14001 and ISO 45001 requirements to your existing ISO 9001 system, integrating common processes while adding discipline-specific requirements. This approach minimizes disruption while achieving full integration.",
    },
    {
      question: "Does integration reduce certification costs?",
      answer:
        "Yes. Integrated audits reduce certification body time by 20-40% compared to separate audits. However, total audit time still exceeds single-standard audits. Savings accumulate through eliminated redundancy rather than reduced rigor.",
    },
    {
      question: "How long does IMS implementation take?",
      answer:
        "Organizations with existing ISO 9001 certification typically implement ISO 14001 and ISO 45001 integration within 8-12 months. Starting from zero, comprehensive IMS implementation requires 12-18 months depending on organizational complexity.",
    },
    {
      question: "Can we integrate other standards beyond ISO 9001, 14001, and 45001?",
      answer:
        "Yes. Organizations integrate sector-specific standards like ISO 22000, ISO 27001, or ISO 50001. However, standards not using Annex SL structure require more effort integrating due to structural differences.",
    },
    {
      question: "Do we need separate management representatives for each standard?",
      answer:
        "No. IMS typically appoints single integrated management representative responsible for all standards. Some organizations designate discipline coordinators supporting the integrated management representative for technical expertise.",
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
              src={construction_worker_img}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            <span className="blog-highlight itly">Integrated management</span> systems
          </h1>
          <p className="blog-description">
            ISO integration, combined management systems, ISO 9001 14001 45001 integration, IMS implementation, unified management system
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
          <p className="innertopText" id="Combining-ISO-Standards">
            Integrated Management Systems (IMS): Combining ISO Standards
          </p>

          <p className="innertopTextSubHeading">
            Maximizing efficiency through unified quality, environmental, and safety management
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Organizations implementing multiple ISO management systems face mounting administrative burdens. Separate <span className="blog-body-highlightColorBlue">ISO 9001 quality systems</span>, <span className="blog-body-highlightColorBlue">ISO 14001 environmental management</span>, and <span className="blog-body-highlightColorBlue">ISO 45001 occupational safety programs</span> create duplicate documentation, redundant audits, conflicting procedures, and confusion about which system governs specific activities.
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
            Integrated Management Systems combine multiple standards into unified frameworks eliminating duplication while maintaining distinct requirements. The harmonized structure of modern ISO standards—identical clauses for quality, environment, and safety—facilitates integration far more effectively than legacy standards with incompatible architectures.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Organizations implementing IMS don't just reduce documentation burden—they create synergistic management systems where quality, environmental, and safety objectives align, resources optimize, and organizational culture embraces holistic excellence rather than competing priorities.
          </p>


          <p
            className="innertopTextSubHeading"
            id="Understanding-IMS-Benefits"
          >
            Understanding IMS Benefits
          </p>
          {/* <p className="innertopTextSubHeading_Points">
            Occupational Exposure Standards:
          </p> */}
          <p className="blog-body blog-body-highlightColor">
            Integration delivers tangible benefits extending beyond administrative convenience to strategic organizational advantages.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Documentation reduction eliminates duplicate policies, procedures, and records. Single integrated manuals replace separate quality, environmental, and safety documentation. Common processes like <span className="blog-body-highlightColorBlue">document control</span>, <span className="blog-body-highlightColorBlue">internal auditing</span>, <span className="blog-body-highlightColorBlue">management review</span>, and <span className="blog-body-highlightColorBlue">corrective actions</span> require single procedures covering all systems. Organizations report 40-50% documentation reduction through effective integration.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Audit efficiency improves dramatically through combined audits examining quality, environmental, and safety compliance simultaneously. Single audit teams evaluate integrated processes rather than separate specialists auditing independently. Integrated audits reduce audit duration by 30-40% while providing comprehensive system assessment. Annual surveillance audits consolidate into single events rather than three separate certifications.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Resource optimization eliminates redundant roles and responsibilities. Organizations appoint integrated management representatives rather than separate coordinators for quality, environment, and safety. Training programs address multiple system requirements simultaneously. Meeting structures combine rather than schedule separate quality meetings, environmental reviews, and safety committees.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Strategic alignment ensures quality, environmental, and safety objectives support overall business strategy rather than competing for resources or management attention. Risk assessments consider quality, environmental, and safety impacts holistically. Improvement initiatives address multiple objectives simultaneously maximizing return on improvement investments.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Cultural transformation shifts organizational mindset from compartmentalized compliance toward integrated excellence. Employees understand connections between quality, environmental, and safety performance rather than viewing them as separate, unrelated obligations managed by different departments.
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

          <p className="innertopTextSubHeading" id="ISO-High-Level-Structure-Advantage">
            ISO High-Level Structure Advantage
          </p>
          <p className="blog-body">
            The Annex SL High-Level Structure revolutionized management system integration by establishing identical clause structures across all ISO standards. ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 share ten identical clauses with common terminology enabling seamless integration.
          </p>

          <p className="blog-body">
            Clause alignment means context analysis, leadership requirements, planning provisions, support resources, operational controls, performance evaluation, and improvement requirements follow identical structures across standards. Organizations develop single processes satisfying all standards simultaneously rather than parallel processes for each system.
          </p>
          <p className="blog-body">
            Common terminology eliminates confusion from inconsistent vocabulary. Terms like "documented information," "interested parties," and "competence" carry identical meanings across standards. Previous standards used different terminology for similar concepts complicating integration and creating ambiguity.
          </p>
          <p className="blog-body">
            Risk-based thinking permeates all modern standards providing unified approach to uncertainty management. Organizations identify risks and opportunities affecting quality, environmental, and safety objectives through integrated risk assessment rather than separate processes yielding conflicting priorities.
          </p>
          <p className="blog-body">
            However, integration doesn't eliminate discipline-specific requirements. Quality systems address customer requirements and product conformity. Environmental systems focus on environmental aspects and impacts. Safety systems emphasize hazards and occupational health risks. Integration combines common elements while preserving technical requirements unique to each discipline.
          </p>
          
          


          <p className="innertopTextSubHeading" id="Integration-Approaches-and-Strategies">
            Integration Approaches and Strategies
          </p>
          {/* table 
          <DynamicTable config={tableConfig} data={tableData} /> */}

          <p className="blog-body">
            Organizations adopt different integration depths based on maturity, complexity, and strategic objectives.
          </p>
          <p className="blog-body">
            Partial integration combines selected common elements while maintaining separate documentation for discipline-specific requirements. Organizations might integrate document control, internal audits, and management review while keeping separate quality procedures, environmental aspects registers, and safety hazard assessments. This approach provides initial integration benefits with minimal disruption to established systems.
          </p>
          <p className="blog-body">
            Full integration creates single unified management system with discipline-specific requirements embedded within integrated processes. Integrated procedures address quality, environmental, and safety considerations simultaneously. Risk assessments examine quality failures, environmental incidents, and safety hazards together. Documentation uses single numbering system, integrated forms, and unified terminology.
          </p>
          <p className="blog-body">
            Sequential integration implements standards progressively, integrating as additional systems are added. Organizations might achieve <span className="blog-body-highlightColorBlue">ISO 9001 certification</span> first, then implement ISO 14001 integrating environmental requirements into existing quality framework, finally adding ISO 45001 creating comprehensive IMS. This staged approach manages change incrementally while building integration competence.
          </p>
          <p className="blog-body">
            Greenfield integration designs unified systems from inception when implementing multiple standards simultaneously. Organizations without existing certifications avoid legacy system constraints, designing optimal integrated structures from the start. This approach achieves deepest integration but requires managing multiple standard requirements concurrently during initial implementation.
          </p>
          <p className="blog-body">
            Organizations might also integrate sector-specific standards like <span className="blog-body-highlightColorBlue">ISO 22000 for food safety</span> or <span className="blog-body-highlightColorBlue">ISO 13485 for medical devices</span> within IMS frameworks, though structural differences from Annex SL standards complicate integration.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Implementing-Integrated-Processes"
          >
            Implementing Integrated Processes
          </p>
          <p className="blog-body">
            Common management system processes provide greatest integration opportunities eliminating most duplication while satisfying all standard requirements.
          </p>
          <p className="blog-body">
            Context analysis examines internal and external issues, interested parties, and system scope collectively. Single context analysis process identifies stakeholders caring about quality, environmental, or safety performance. Integrated context understanding informs strategic planning addressing multiple objectives simultaneously.
          </p>
          <p className="blog-body">
            Leadership requirements integrate through unified policy statements addressing quality, environmental, and safety commitments. Top management demonstrates commitment across all disciplines through resource allocation, objective setting, and performance monitoring. Integrated leadership prevents conflicting priorities when senior management champions all disciplines equally.
          </p>
          <p className="blog-body">
            Risk assessment combines <span className="blog-body-highlightColorBlue">quality risk analysis</span>, environmental aspects evaluation, and <span className="blog-body-highlightColorBlue">hazard identification</span> into unified risk registers. Integrated risk assessment reveals interactions—quality failures causing environmental incidents, safety hazards affecting product quality, or environmental controls creating safety risks. Holistic risk understanding enables comprehensive risk treatment rather than isolated responses.
          </p>
          <p className="blog-body">
            Operational controls integrate quality procedures, environmental operating procedures, and safety work instructions into unified process documentation. Process descriptions address quality parameters, environmental controls, and safety precautions simultaneously rather than separate documents creating confusion about priorities during actual operations.
          </p>
          <p className="blog-body">
            Internal audits combine quality, environmental, and safety audits into integrated assessments examining all requirements during single facility visits. Integrated audit programs schedule comprehensive audits covering all processes rather than separate discipline-specific audits disrupting operations repeatedly. Auditor competence requirements expand covering multiple disciplines or deploying multi-disciplinary teams.
          </p>
          <p className="blog-body">
            Corrective action processes handle nonconformities regardless of origin—quality defects, environmental incidents, or safety violations—through single <span className="blog-body-highlightColorBlue">CAPA system</span>. Root cause analysis examines quality, environmental, and safety implications collectively. Corrective actions address multiple concerns simultaneously when investigations reveal common underlying causes.
          </p>
          <p className="blog-body">
            Management review consolidates quality, environmental, and safety performance review into single executive meetings. Integrated agendas examine performance across all disciplines, resource needs, improvement opportunities, and system changes comprehensively. Management reviews demonstrate leadership engagement across disciplines rather than separate meetings diluting executive attention.
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
            id="Documentation-Structure-for-IMS"
          >
            Documentation Structure for IMS
          </p>
          <p className="blog-body">
            Integrated documentation structures balance unification benefits against clarity for discipline-specific requirements.
          </p>
          <p className="blog-body">
            Integrated management system manuals replace separate quality, environmental, and safety manuals with single documents addressing all requirements. Manual structure follows Annex SL clauses, incorporating discipline-specific requirements within common framework. Section on operational planning addresses production control (quality), environmental operational controls, and safety controls simultaneously.
          </p>
          <p className="blog-body">
            Procedure integration combines common processes into single procedures while maintaining separate procedures for discipline-specific requirements. Single procedures govern document control, internal audits, nonconformity management, and management review. Separate procedures address quality-specific topics like design control, environmental topics like waste management, and safety topics like emergency response.
          </p>
          <p className="blog-body">
            Forms and records integration creates unified templates serving multiple purposes. Integrated risk assessment forms examine quality, environmental, and safety risks together. Audit checklists verify requirements across all standards. Corrective action requests handle any nonconformity type through single forms and approval processes.
          </p>
          <p className="blog-body">
            Process documentation integrates operational procedures, environmental controls, and safety instructions into unified work instructions. Operators receive single documents describing complete job requirements—quality specifications, environmental precautions, and safety measures—rather than consulting multiple sources creating confusion or conflicting guidance.
          </p>
          <p className="blog-body">
            Numbering systems integrate across disciplines using consistent document identification. Integrated numbering prevents duplicate identifiers while maintaining traceability. Some organizations use discipline codes (Q for quality, E for environmental, S for safety) within unified numbering structures facilitating retrieval while indicating primary focus.
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
            id="Integrated-Auditing-and-Certification"
          >
            Integrated Auditing and Certification
          </p>
          <p className="blog-body">
            Integrated certification audits examine combined management systems efficiently while maintaining standard-specific assessment rigor.
          </p>
          <p className="blog-body">
            Certification body selection requires verifying accreditation across all intended standards. Not all certification bodies offer integrated audits, and accreditation scope must cover ISO 9001, ISO 14001, and ISO 45001 simultaneously. Selecting bodies experienced in integrated assessment ensures auditors understand integration benefits and requirements.
          </p>
          <p className="blog-body">
            Integrated audit planning schedules combined audits examining all standards during single facility visits. Audit duration calculations aggregate individual standard requirements but typically provide efficiency savings compared to separate audits. Three-day integrated audits might replace five days of separate quality, environmental, and safety audits.
          </p>
          {/* <p className="blog-body">
            Post-market surveillance data includes complaint trends, return
            analysis, field failure reports, and clinical performance feedback.
            Systematic analysis identifies emerging problems requiring{" "}
            <span className="blog-body-highlightColorBlue">
              corrective and preventive
            </span>{" "}
            actions before widespread failures occur.
          </p> */}
          <p className="blog-body">
            Auditor competence requirements increase for integrated audits demanding understanding across multiple disciplines. Lead auditors need competence spanning quality, environment, and safety or certification bodies deploy multi-disciplinary teams combining specialists. Technical experts provide discipline-specific depth while lead auditors ensure comprehensive assessment.
          </p>
          <p className="blog-body">
            Audit reporting distinguishes findings by applicable standard while recognizing integrated implementation. Nonconformities cite specific standard clauses—ISO 9001:2015 Clause 8.5.1, ISO 14001:2015 Clause 8.1, or ISO 45001:2018 Clause 8.1—while acknowledging integrated operational controls. Integrated processes receive combined findings when deficiencies affect multiple standards simultaneously.
          </p>
          <p className="blog-body">
            Certification maintenance requires surveillance audits covering all integrated standards. Annual surveillance examines integrated system effectiveness, changes since previous audits, and continued compliance across quality, environmental, and safety requirements. Recertification audits occur at three-year intervals conducting comprehensive reassessment of entire integrated system.
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
          Effective IMS implementation requires strategic planning, stakeholder engagement, and systematic integration balancing efficiency gains against discipline-specific requirement preservation.
        </p>
        <p className="innertopTextSubHeading_Points">
          Download our IMS Integration Roadmap providing step-by-step implementation framework transitioning from separate management systems to fully integrated approach.
        </p>

        <p className="blog-body">
          Need expert guidance implementing Integrated Management Systems? Bexex consultants have supported organizations across India integrating ISO 9001, ISO 14001, and ISO 45001 into efficient unified systems achieving multiple certifications while reducing administrative burden. <span className="blog-body-highlightColorBlue">Explore our integrated management system consulting services</span> or contact us for IMS feasibility assessment.
        </p>

        
        <p className="blog-body">
          <span className="innerBlogTextBold">Expert Tip :</span> Begin integration with common processes document control, internal audit, CAPA before addressing discipline specific requirements. Early wins from simplified common processes build momentum and stakeholder support for deeper integration addressing operational controls and technical requirements.
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
