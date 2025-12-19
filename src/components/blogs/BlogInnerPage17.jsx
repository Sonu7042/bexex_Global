import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/third-party-inspection.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "CAPA Management Toolkit (Excel)",
    description:
      "Comprehensive templates including CAPA log, 5 Whys analysis worksheet, Fishbone diagram template, action plan format, and effectiveness verification checklist.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Root Cause Analysis Techniques Explained",
    description:
      "Step-by-step video demonstrating 5 Whys, Fishbone analysis, and FMEA application with real manufacturing case studies from Indian industries.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Transforming problems into systematic",
    anchor: "Transforming-problems-into-systematic",
  },
  {
    label: "Understanding CAPA in ISO Standards",
    anchor: "Understanding-CAPA-in-ISO-Standards",
  },
  {
    label: "Common CAPA Implementation Failures",
    anchor: "Common-CAPA-Implementation-Failures",
  },
  {
    label: "Implementing Corrective Actions Effectively",
    anchor: "Implementing-Corrective-Actions-Effectively",
  },
  {
    label: "Developing Preventive Actions",
    anchor: "Developing-Preventive-Actions",
  },
  {
    label: "CAPA Documentation and Verification",
    anchor: "CAPA-Documentation-and-Verification",
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
      question: "What differentiates correction from corrective action?",
      answer:
        "Correction addresses immediate symptoms—replacing defective materials or repairing equipment. Corrective action eliminates root causes preventing recurrence. Both are necessary, but only corrective action prevents repeat problems.",
    },
    {
      question: "How long should CAPA investigations take?",
      answer:
        "Duration depends on problem complexity. Simple issues may resolve within days. Complex systemic problems requiring process redesign might need months. Set timelines based on investigation needs and solution complexity, not arbitrary deadlines.",
    },
    {
      question: "When should preventive action be implemented?",
      answer:
        "Implement preventive actions when risk assessments identify significant potential problems, trend analysis reveals emerging issues, or opportunities exist to strengthen system effectiveness before failures occur. Don't wait for problems to manifest.",
    },
    {
      question: "How do we verify CAPA effectiveness?",
      answer:
        "Verification methods match problem types. Use process monitoring data, customer feedback, audit results, or performance metrics. Verify after sufficient time for results to manifest—immediately checking effectiveness risks premature closure.",
    },
    {
      question: "Can CAPA be closed if problems recur?",
      answer:
        "No. Recurring problems indicate inadequate root cause analysis or ineffective corrective actions. Reopen CAPA records, conduct deeper investigation, and implement more comprehensive solutions. Recurring issues signal system weakness requiring management attention.",
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
              src={construction_worker_img}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            CAPA process <span className="blog-highlight itly">ISO</span>{" "}
            standards
          </h1>
          <p className="blog-description">
            corrective action preventive action, root cause analysis, ISO 9001
            CAPA, nonconformity management, continuous improvement
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
            Corrective and Preventive Actions (CAPA): A Practical Approach
          </p>

          <p
            className="innertopTextSubHeading"
            id="Transforming-problems-into-systematic"
          >
            Transforming problems into systematic improvement opportunities
          </p>

          <p className="blog-body blog-body-highlightColor">
            Organizations implementing ISO management systems often struggle
            with recurring nonconformities despite repeated corrective actions.
            A manufacturing facility might fix the same quality defect three
            times in six months. An EHS manager discovers identical safety
            violations across multiple shifts. These patterns reveal a
            fundamental problem—addressing symptoms rather than root causes.
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
            The Corrective and Preventive Action (CAPA) process provides
            systematic methodology for eliminating nonconformities permanently
            while preventing potential problems before they occur. When
            implemented effectively, CAPA transforms reactive firefighting into
            proactive improvement, reducing recurring issues by 60-70% within
            the first year.
          </p>
          <p className="blog-body blog-body-highlightColorBlue">
            Organizations that master CAPA don't just solve today's
            problems—they prevent tomorrow's failures while continuously
            strengthening their management systems.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-CAPA-in-ISO-Standards"
          >
            Understanding CAPA in ISO Standards
          </p>

          <p className="blog-body">
            CAPA requirements appear across ISO 9001, ISO 14001, ISO 45001, and
            other management system standards, forming the foundation for
            continuous improvement. Corrective actions address existing
            nonconformities by identifying and eliminating root causes.
            Preventive actions identify potential problems before they occur,
            implementing controls to prevent their emergence.
          </p>

          <p className="blog-body">
            The distinction matters operationally. Corrective actions respond to
            identified problems—customer complaints, audit findings, or process
            failures. Preventive actions emerge from risk assessments, trend
            analysis, or proactive system reviews. Both require systematic
            approaches: analyzing causes, planning actions, implementing
            solutions, and verifying effectiveness.
          </p>

          <p className="blog-body">
            Indian industries commonly confuse correction with corrective
            action. Correction addresses immediate symptoms—replacing a
            defective part or cleaning a spill. Corrective action eliminates why
            defects or spills occur, preventing recurrence. Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              internal audit processes
            </span>{" "}
            helps identify nonconformities requiring corrective action.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Common-CAPA-Implementation-Failures"
          >
            Common CAPA Implementation Failures
          </p>

          <p className="blog-body">
            Many organizations implement CAPA procedures that look good on paper
            but fail operationally. The most common failure involves treating
            CAPA as documentation exercise rather than improvement tool. Forms
            get completed. Files accumulate. Yet the same problems recur because
            investigations never identify true root causes.
          </p>

          <p className="blog-body">
            Another frequent mistake: assigning unrealistic completion
            timelines. Complex process issues can't be resolved in two weeks,
            yet many organizations set arbitrary deadlines unrelated to problem
            complexity. This pressure drives superficial solutions that fail
            effectiveness verification.
          </p>
          <p className="blog-body">
            Inadequate follow-through undermines many CAPA systems. Actions get
            implemented but never verified for effectiveness. Organizations
            close CAPA records based on completion of planned activities rather
            than elimination of root causes. When problems resurface three
            months later, the cycle begins again.
          </p>
          <p className="blog-body">
            Manufacturing facilities preparing for ISO 9001 certification often
            discover these gaps during certification audits. Auditors reviewing
            CAPA records immediately recognize patterns indicating superficial
            implementation—identical root causes across multiple findings,
            unrealistic implementation timelines, or missing effectiveness
            verification.
          </p>

          {/* start from here  */}
          <p
            className="innertopTextSubHeading"
            id="Implementing-Corrective-Actions-Effectively"
          >
            Implementing Corrective Actions Effectively
          </p>
          <p className="blog-body">
            Effective corrective actions follow structured progression
            addressing immediate containment, root cause elimination, and system
            improvement.
          </p>
          <p className="blog-body">
            First, contain the problem preventing further impact. Quarantine
            defective products. Halt affected processes. Implement temporary
            controls. This immediate response prevents escalation while
            investigation proceeds. A quality manager discovering
            out-of-specification products must first prevent their shipment
            before analyzing why specifications weren't met.
          </p>
          <p className="blog-body">
            Conduct thorough root cause analysis using appropriate
            methodologies. Document findings clearly, identifying all
            contributing factors. Don't stop at obvious causes—mechanical
            failure may stem from inadequate training, unclear procedures, or
            insufficient resources.
          </p>
          <p className="blog-body">
            Develop comprehensive action plans addressing each identified root
            cause. Assign clear responsibilities. Set realistic deadlines based
            on problem complexity, not arbitrary timelines. Define measurable
            success criteria enabling effectiveness verification.
          </p>
          <p className="blog-body">
            Implementation requires coordination across functions. Process
            changes may require updating{" "}
            <span className="blog-body blog-body-highlightColor">
              documentation systems
            </span>{" "}
            , training personnel, modifying equipment, or adjusting inspection
            methods. Track progress systematically, addressing obstacles
            promptly.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Developing-Preventive-Actions"
          >
            Developing Preventive Actions
          </p>
          <p className="blog-body">
            Preventive actions anticipate problems through systematic risk
            assessment and trend analysis. Organizations with mature CAPA
            systems spend more effort preventing problems than correcting them.
          </p>
          <p className="blog-body">
            Regular data analysis reveals emerging trends before they become
            major issues. Gradually increasing customer complaints about
            specific features signal developing problems. Rising material
            rejection rates indicate supplier quality degradation. These
            patterns enable preventive intervention.
          </p>
          <p className="blog-body">
            Internal audits provide rich sources for preventive actions.
            Auditors identifying minor compliance gaps or improvement
            opportunities enable proactive correction before they escalate to
            significant nonconformities. Similarly,{" "}
            <span className="blog-body-highlightColorBlue">
              {" "}
              management review meetings
            </span>{" "}
            should analyze system performance trends, identifying areas
            requiring preventive strengthening.
          </p>
          <p className="blog-body">
            Risk assessments conducted for ISO 9001:2015 requirements identify
            potential nonconformities before they occur. Address high-priority
            risks through preventive actions, implementing controls reducing
            likelihood or impact of potential problems.
          </p>

          <p
            className="innertopTextSubHeading"
            id="CAPA-Documentation-and-Verification"
          >
            CAPA Documentation and Verification
          </p>
          <p className="blog-body">
            ISO standards require maintaining documented information on CAPA
            activities. Minimum requirements include nonconformity descriptions,
            root cause analysis results, planned actions with responsibilities
            and timelines, implementation evidence, and effectiveness
            verification.
          </p>
          <p className="blog-body">
            Digital CAPA management systems simplify documentation while
            enabling trend analysis and overdue action tracking. Cloud-based
            platforms provide real-time visibility for management oversight and
            facilitate communication among responsible parties.
          </p>
          <p className="blog-body">
            Effectiveness verification remains the most critical yet most
            commonly neglected CAPA requirement. Actions must remain open until
            objective evidence confirms root cause elimination.
          </p>
          <p className="blog-body">
            Verification methods depend on problem characteristics—statistical
            process control data for manufacturing issues, customer feedback for
            service problems, or audit results for system gaps.
          </p>
          <p className="blog-body">
            Verification timing matters. Checking effectiveness immediately
            after action implementation risks premature closure before
            underlying causes resurface. Schedule verification at appropriate
            intervals—some issues require weeks, others months before sufficient
            evidence accumulates.
          </p>
          <p className="blog-body">
            Organizations maintaining{" "}
            <span className="blog-body-highlightColorBlue">
              document control systems
            </span>{" "}
            integrate CAPA records ensuring controlled access, version
            management, and retention compliance.
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
          Effective CAPA systems require more than procedures—they demand
          management commitment, adequate resources, and organizational culture
          valuing continuous improvement over blame assignment.
        </p>

        <p className="innertopTextSubHeading_Points">
          Start by auditing your current CAPA process. Review recent corrective
          actions assessing root cause analysis depth, action plan
          comprehensiveness, and effectiveness verification quality. This
          assessment reveals gaps between documented procedures and actual
          practice.
        </p>
        <p className="blog-body">
          Download our CAPA Management Toolkit providing templates for root
          cause analysis, action planning, and effectiveness verification. These
          standardized tools ensure consistent CAPA execution across your
          organization.
        </p>

        <p className="blog-body">
          Need expert guidance strengthening your CAPA system? Bexex consultants
          have helped over 150 Indian manufacturers transform reactive
          problem-solving into proactive continuous improvement.{" "}
          <span className="blog-body-highlightColorBlue">
            Explore our ISO consulting services{" "}
          </span>{" "}
          or contact us for a complimentary CAPA system assessment.
        </p>

        <p className="blog-body">
          <span className="innerBlogTextBold">Expert Tip :</span> Schedule
          quarterly CAPA effectiveness audits reviewing closed actions from
          previous six months. Sample verification evidence, interview process
          owners, and confirm sustained improvements. This practice identifies
          prematurely closed actions and reinforces accountability for genuine
          problem resolution.
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
