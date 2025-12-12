import React, { useEffect, useState } from "react";
import "../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import LetsConnect from "./LetsConnect";
import Footer from "./Footer";
import { LearnMoreButton } from "./Buttons";
import construction_worker_img from "../assets/images/blog_imgs/constructionWorkerImg.png";
import FrequentQuestion from "./FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "./ReadMoreBlog";

const resources = [
  {
    title: "ISO 45001 Gap Analysis Checklist (Excel) ",
    description:
      "Comprehensive assessment tool covering all ISO 45001 requirements with scoring methodology and implementation priority guidance.",
    buttonLabel: "Download now",
    // badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "ISO 45001 Implementation in 10 Steps (Watch on YT)",
    description:
      "Video walkthrough of the complete implementation process with real-world examples from Indian manufacturing environments.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  { label: "Complete Guide to ISO 45001 Implementation", anchor: "complete-guide" },
  { label: "Various ISO Standards", anchor: "iso-standards" },
  { label: "Understanding the ISO 45001 Framework", anchor: "iso-framework" },
  { label: "The Business Case Beyond Compliance", anchor: "business-case" },
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
            ISO 45001 &nbsp;<span className="blog-amp">&amp;</span>&nbsp;
            <span className="blog-highlight itly"> implementation </span> <br />
          </h1>
          <p className="blog-description">
            Complete guide to ISO 45001 implementation. Learn the 7-stage
            roadmap, certification process, and business benefits for Indian
            manufacturers.
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
          <p className="innertopText" id="complete-guide">
            Complete Guide to ISO 45001 Implementation
          </p>

          <p className="blog-body">
            Transforming workplace safety from compliance burden to business
            advantage
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Workplace safety remains one of the most critical challenges facing
            Indian industries today. Despite stringent regulations and growing
            awareness, occupational injuries continue to disrupt operations,
            inflate costs, and damage reputations. The Bureau of Indian
            Standards reports that organizations with robust occupational health
            and safety management systems experience 40% fewer workplace
            incidents compared to those relying solely on reactive measures.
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
            ISO 45001, the international standard for occupational health and
            safety management systems, offers a structured pathway to transform
            safety from a compliance checkbox into a strategic asset. With ISO
            9001:2026 and ISO 14001:2026 releases on the horizon, the
            integration of management systems becomes even more streamlined,
            making now the ideal time to establish your OH&S framework.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Organizations implementing ISO 45001 don't just reduce
            accidents—they build cultures where safety becomes everyone's
            responsibility, productivity improves, and employee morale
            strengthens.
          </p>

          <p className="innertopTextSubHeading" id="iso-standards">
            Various ISO Standards :
          </p>

          <p className="blog-body blog-body-highlightColor">
            The manufacturing sector employs over 60 million people across
            India, from automotive plants in Pune to textile mills in Surat.
            Each workplace carries unique hazards—chemical exposures, machinery
            risks, ergonomic strains, and psychosocial stressors. Traditional
            safety programs often focus narrowly on personal protective
            equipment and incident reporting, missing the systemic factors that
            drive workplace harm.
          </p>

          <p className="blog-body blog-body-highlightColor">
            ISO 45001 takes a different approach. It requires organizations to
            understand their operational context, identify hazards proactively,
            and engage workers in safety decisions. This shift from reactive
            firefighting to preventive planning aligns with India's evolving
            regulatory landscape, including the Occupational Safety, Health and
            Working Conditions Code 2020, which consolidates 13 labor laws and
            strengthens enforcement mechanisms.
          </p>

          <p className="blog-body blog-body-highlightColor">
            For businesses, the benefits extend beyond compliance. A certified
            ISO 45001 system signals to clients, investors, and regulatory
            bodies that workplace safety receives the attention it deserves.
            Supply chain partners increasingly demand proof of effective safety
            management, particularly in sectors like pharmaceuticals, chemicals,
            and construction where operational risks run high. Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              how to build an effective legal register for EHS compliance{" "}
            </span>{" "}
            becomes essential in this journey.
          </p>

          <p className="innertopTextSubHeading" id="iso-framework">
            Understanding the ISO 45001 Framework
          </p>

          <p className="blog-body">
            ISO 45001 follows the High-Level Structure common to all ISO
            management system standards, making integration straightforward for
            organizations already certified to{" "}
            <span className="blog-body-highlightColorBlue"> ISO 9001</span> or{" "}
            <span className="blog-body-highlightColorBlue">ISO 14001 </span> .
            With the 2026 revisions of these standards expected to further
            harmonize requirements, organizations implementing ISO 45001 now
            position themselves advantageously for smoother transitions.
          </p>
          <p className="blog-body">
            Leadership commitment stands at the foundation. Top management must
            demonstrate visible, active involvement—allocating resources,
            establishing policies, and holding themselves accountable for safety
            performance. Worker participation represents another fundamental
            shift. ISO 45001 requires meaningful consultation with employees at
            every stage. Establishing a proper{" "}
            <span className="blog-body-highlightColorBlue">
              safety committee structure
            </span>{" "}
            ensures this participation becomes systematic rather than sporadic.
          </p>
          <p className="blog-body">
            Risk-based thinking permeates the entire standard. Organizations
            must systematically identify hazards, assess risks, and implement
            controls before incidents occur.
          </p>

          <p className="innertopTextSubHeading_Points">
            Stage One: Leadership Commitment and Gap Analysis
          </p>
          <p className="blog-body">
            Implementation begins with securing genuine leadership buy-in.
            Schedule a management briefing that explores business
            benefits—reduced insurance premiums, lower absenteeism, improved
            productivity, and enhanced reputation. Leadership must understand
            they're signing up for cultural change, not just another
            certification.
          </p>

          <p className="blog-body">
            Conduct a comprehensive gap analysis comparing current practices
            against ISO 45001 requirements. This assessment reveals strengths to
            build upon and gaps to address. Examine existing safety policies,
            hazard identification processes, training programs, emergency
            procedures, and record-keeping systems.
          </p>

          <p className="innertopTextSubHeading_Points">
            Stage Two: Planning and Team Formation
          </p>
          <p className="blog-body">
            Establish a cross-functional implementation team with
            representatives from operations, maintenance, human resources, and
            safety departments. Appoint a management representative who reports
            directly to top management and has authority to drive changes.
          </p>
          <p className="blog-body">
            Define the scope of your occupational health and safety management
            system. Develop a detailed implementation timeline with milestones.
            Realistic timelines typically span 8 to 12 months for medium-sized
            organizations. Understanding the context of your organization helps
            identify internal and external factors that influence safety
            performance.
          </p>

          <p className="innertopTextSubHeading_Points">
            Stage Three: Policy, Objectives, and Documentation
          </p>
          <p className="blog-body">
            Develop an occupational health and safety policy that reflects your
            organization's commitment to eliminating hazards and reducing risks.
            The policy must align with organizational context and include
            commitments to worker consultation. Establish measurable safety
            objectives linked to specific targets and timelines. Examples
            include reducing lost-time injury frequency rates by 30% within 12
            months or achieving 100% hazard reporting compliance.
          </p>
          <p className="blog-body">
            Create documented procedures for hazard identification, risk
            assessment, incident investigation, emergency response, and
            contractor management. Learning how to avoid{" "}
            <span className="blog-body-highlightColorBlue">
              common mistakes in ISO documentation
            </span>{" "}
            can save significant time. Consider establishing a robust document
            control system from the start.
          </p>

          <p className="innertopTextSubHeading_Points">
            Stage Four: Hazard Identification and Risk Assessment
          </p>
          <p className="blog-body">
            The heart of ISO 45001 lies in systematically identifying hazards
            and assessing associated risks. Organize hazard identification by
            process, area, or activity, ensuring comprehensive coverage.
            Consider physical hazards like noise and vibration, chemical
            exposures, biological agents, ergonomic factors, and psychosocial
            stressors.
          </p>
          <p className="blog-body">
            Our detailed guide on{" "}
            <span className="blog-body-highlightColorBlue">
              hazard identification and risk assessment (HIRA)
            </span>
            provides step-by-step frameworks and templates for conducting
            thorough assessments.
          </p>
          <p className="blog-body">
            For each identified hazard, assess the risk using a consistent
            methodology. Apply the hierarchy of controls—elimination,
            substitution, engineering controls, administrative controls, and
            personal protective equipment. Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              proper PPE selection and usage
            </span>{" "}
            becomes critical when other controls prove insufficient.
          </p>
          <p className="blog-body">
            Document your risk assessment process and findings. Update
            assessments when processes change, incidents occur, or monitoring
            reveals new hazards.
          </p>

          <p className="innertopTextSubHeading_Points">
            Stage Five: Competence, Training, and Operational Controls
          </p>
          <p className="blog-body">
            ISO 45001 requires ensuring that workers are competent for tasks
            affecting safety performance. Define competence requirements for
            roles involving significant safety responsibilities—machine
            operators, maintenance technicians, safety committee members, and
            supervisors.
          </p>
          <p className="blog-body">
            Provide training to close competence gaps, covering job-specific
            hazards, control measures, emergency procedures, and worker rights.
            Organizations benefit from structured programs like{" "}
            <span className="blog-body-highlightColorBlue">
              workplace safety training{" "}
            </span>{" "}
            that build genuine safety cultures. Establish operational controls
            to manage identified risks. Develop safe work
          </p>
          <p className="blog-body">
            procedures, implement permit-to-work systems for high-risk
            activities, and maintain equipment according to specifications. For
            facilities handling hazardous materials, proper{" "}
            <span className="blog-body-highlightColorBlue">
              {" "}
              chemical safety and hazard communication
            </span>{" "}
            protocols are non-negotiable. Prepare for emergencies by identifying
            plausible scenarios—fires, chemical spills, medical emergencies. Our
            comprehensive guide on{" "}
            <span className="blog-body-highlightColorBlue">
              emergency preparedness and response planning
            </span>{" "}
            provides detailed frameworks.
          </p>

          <p className="innertopTextSubHeading_Points">
            Stage Six: Internal Audits and Management Review
          </p>
          <p className="blog-body">
            Implementation doesn't end with establishing procedures. ISO 45001
            requires ongoing monitoring to verify effectiveness. Establish key
            performance indicators aligned with safety objectives—both lagging
            indicators like injury rates and leading indicators like near-miss
            reporting rates.
          </p>
          <p className="blog-body">
            Conduct regular workplace inspections using standardized checklists.
            Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              {" "}
              how to conduct effective internal audits{" "}
            </span>
            ensures your audits go beyond checklist exercises. Investigate all
            incidents using root cause analysis, implementing{" "}
            <span className="blog-body-highlightColorBlue">
              corrective and preventive actions (CAPA)
            </span>{" "}
            systematically.
          </p>
          <p className="blog-body">
            Schedule internal audits at planned intervals to assess system
            conformity. Conduct{" "}
            <span className="blog-body-highlightColorBlue">
              {" "}
              management reviews
            </span>{" "}
            at least annually to evaluate safety performance and improvement
            opportunities.
          </p>

          <p className="innertopTextSubHeading_Points">
            Stage Seven: Certification and Beyond
          </p>
          <p className="blog-body">
            Once your system has operated for three to six months, engage an
            accredited certification body to conduct a certification audit. The
            audit occurs in two stages: documentation review followed by
            conformity assessment where auditors examine objective evidence to
            verify system effectiveness.
          </p>
          <p className="blog-body">
            Upon successful completion, the certification body issues an ISO
            45001 certificate valid for three years, subject to annual
            surveillance audits. Organizations pursuing excellence often
            integrate multiple standards. Our guide to sp{" "}
            <span className="blog-body-highlightColorBlue">
              integrated management systems (IMS)
            </span>{" "}
            explains how to combine ISO 45001 with ISO 9001 and ISO 14001 for
            maximum efficiency.
          </p>

          <div>
            <p className="innertopTextSubHeading" id="business-case">
              The Business Case Beyond Compliance
            </p>

            <p className="blog-body">
              ISO 45001 certification delivers value extending far beyond
              regulatory compliance. Supply chain access expands when
              certification demonstrates capability to manage occupational
              health and safety systematically. Insurance premiums often
              decrease by 10 to 20 percent when insurers recognize effective
              risk management.
            </p>
            <p className="blog-body">
              Employee retention improves when workers recognize their
              employer's genuine commitment to safety. Operational efficiency
              gains emerge as hazard identification improves process
              reliability. Organizations in specialized sectors benefit from
              additional certifications—{" "}
              <span className="blog-body-highlightColorBlue">
                AS9100 for aerospace , IATF 16949 for automotive
              </span>{" "}
              or{" "}
              <span className="blog-body-highlightColorBlue">
                ISO 13485 for medical devices
              </span>{" "}
              .
            </p>
          </div>
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
          ISO 45001 implementation represents a strategic investment in
          workforce protection and operational excellence. Organizations that
          approach it systematically transform workplace safety from compliance
          obligation into competitive advantage.
        </p>

        <p className="innertopTextSubHeading_Points">
          Ready to begin your ISO 45001 journey? Download our comprehensive Gap
          Analysis Checklist to assess your current readiness and identify
          priority areas for development.
        </p>

        <p className="blog-body">
          Need expert guidance? Bexex's experienced consultants have helped over
          200 Indian manufacturers achieve certification while building safety
          cultures that protect workers and strengthen business performance.{" "}
          <span className="blog-body-highlightColorBlue">
            {" "}
            Explore our ISO 45001 consulting services
          </span>{" "}
          or contact us for a complimentary consultation.
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
      <FrequentQuestion />
      <NewsLetter />
      <ReadMoreBlog />
      <LetsConnect />
      <Footer />
    </>
  );
};

export default BlogInnerPage;
