import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/constructionWorkerImg.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";

const resources = [
  {
    title: "EHS Legal Register Template (Excel)",
    description:
      "Comprehensive template with requirement categories, compliance tracking fields, and reminder system for Indian EHS regulations.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Coming Soon: Building Your EHS Legal Register",
    description:
      "Video guide walking through legal register development, update processes, and integration with compliance systems.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];





const navItems = [
  {
    label: "Why Legal Registers Matter",
    anchor: "Registers-Matter",
  },
  { label: "Understanding India's EHS Regulatory Framework", anchor: "Regulatory-Framework" },
  { label: "Building Your Legal Register: Step-by-Step", anchor: "Your-Legal-Register" },
  { label: "Maintaining and Updating Your Legal Register", anchor: "Maintaining-and-Updating" },
  { label: "Common Legal Register Pitfalls", anchor: "Legal-Register-Pitfalls" },
  { label: "Integrating Legal Registers with Management Systems", anchor: "with-Management-Systems" },
  { label: "Technology Solutions for Legal Register Management", anchor: "for-Legal-Register-Management" },
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
      question: "How long does ISO 45001 implementation typically take?",
      answer:
        "Small organizations can complete implementation in 4 to 6 months. Medium-sized manufacturers typically require 8 to 12 months for thorough implementation. Focus on building a robust system rather than meeting arbitrary deadlines.",
    },
    {
      question: "Can we implement ISO 45001 without hiring consultants?",
      answer:
        "Yes, many organizations successfully implement ISO 45001 using internal resources. Success factors include having personnel with time to dedicate to the project and access to competent internal auditor training. Consultants accelerate implementation but aren't mandatory., it is possible to implement ISO 45001 internally if your team has sufficient knowledge and capacity.",
    },
    {
      question: "How much does ISO 45001 certification cost?",
      answer:
        "Total investment for a medium-sized manufacturer typically falls between ₹5 lakhs and ₹15 lakhs, including consultant fees, training, and certification body audit fees. Insurance savings and reduced incident costs often recover this investment within two years.",
    },
    {
      question: "What’s the difference between ISO 45001 and OHSAS 18001?",
      answer:
        "ISO 45001 replaced OHSAS 18001 in March 2018. Key differences include stronger emphasis on organizational context, enhanced worker participation requirements, explicit leadership accountability provisions, and integration with ISO's High-Level Structure.",
    },
    {
      question: "How does ISO 45001 relate to India’s OSH Code 2020?",
      answer:
        "The OSH Code 2020 consolidates 13 previous labor laws. ISO 45001 complements rather than replaces these legal requirements. Organizations certified to ISO 45001 demonstrate systematic approaches to meeting regulatory obligations, though certification doesn't exempt anyone from legal compliance.",
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
            EHS <span className="blog-amp">&amp;</span>&nbsp;
            <span className="blog-highlight itly">legal</span> register <br />
          </h1>
          <p className="blog-description">
            Learn how to build and maintain an EHS legal register for Indian
            industries. Covers compliance requirements, updates, and best
            practices.
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
            Building an Effective Legal Register for EHS
          </p>

          <p className="blog-body">
            Transforming regulatory complexity into manageable compliance
            systems
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Environmental, health, and safety regulations in India have evolved
            dramatically over the past decade. The Occupational Safety, Health
            and Working Conditions Code 2020 consolidated 13 central labor laws.
            Environmental regulations continue expanding to address air quality,
            water conservation, and waste management. For EHS professionals,
            keeping track of applicable legal requirements has become
            increasingly challenging.
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
            A legal register serves as the foundation of any effective EHS
            compliance program. It identifies all applicable statutory and
            regulatory requirements, tracks updates, and ensures nothing falls
            through the cracks. Yet many organizations maintain incomplete legal
            registers that miss critical requirements, creating compliance gaps
            and regulatory exposure.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Research from the Quality Council of India indicates that 60% of
            non-compliances during regulatory inspections stem from
            organizations simply not knowing which requirements apply to them—a
            problem that effective legal registers eliminate.
          </p>

          <p className="innertopTextSubHeading" id="Registers-Matter">
            Why Legal Registers Matter
          </p>

          <p className="blog-body blog-body-highlightColor">
            Legal registers aren't bureaucratic exercises. They serve essential
            functions that protect organizations from regulatory penalties,
            operational disruptions, and reputational damage. Understanding
            these functions helps organizations approach legal register
            development seriously rather than treating it as paperwork.
          </p>

          <p className="blog-body blog-body-highlightColor">
            First, legal registers identify applicable requirements. Indian
            industries face regulations at central, state, and local levels.
            Environmental clearances, factory licenses, pollution control board
            permits, labor department registrations, fire safety approvals, and
            various other requirements apply depending on location, industry
            sector, and operational activities. Without systematic
            identification, organizations inevitably miss requirements.
          </p>

          <p className="blog-body blog-body-highlightColor">
            Second, legal registers demonstrate due diligence. When regulatory
            authorities conduct inspections, they evaluate whether organizations
            understand their obligations. A well-maintained legal register
            provides immediate evidence that the organization has systematically
            identified and tracked requirements. This demonstration of good
            faith often influences enforcement decisions.
          </p>

          <p className="blog-body blog-body-highlightColor">
            Third, legal registers enable compliance monitoring. Organizations
            can't monitor compliance with requirements they haven't identified.
            The legal register becomes the baseline for{" "}
            <span className="blog-body-highlightColorBlue">
              environmental compliance audits
            </span>{" "}
            and management reviews. It answers the fundamental question: Are we
            meeting all our legal obligations?
          </p>

          <p className="blog-body blog-body-highlightColor">
            Fourth, legal registers support{" "}
            <span className="blog-body-highlightColorBlue">ISO 14001</span> and{" "}
            <span className="blog-body-highlightColorBlue">ISO 45001</span>{" "}
            compliance. Both standards require organizations to determine and
            have access to applicable legal requirements related to
            environmental aspects and occupational health and safety hazards.
            The legal register fulfills this mandatory requirement.
          </p>

          <p className="innertopTextSubHeading" id="Regulatory-Framework">
            Understanding India's EHS Regulatory Framework
          </p>

          <p className="blog-body">
            Building an effective legal register starts with understanding
            India's regulatory structure. EHS regulations exist at multiple
            levels, each with different authorities and enforcement mechanisms.
          </p>

          <p className="blog-body">
            Central legislation establishes nationwide requirements. The
            Environment Protection Act 1986 provides the legal framework for
            environmental regulation. The Occupational Safety, Health and
            Working Conditions Code 2020 governs workplace safety. The Water
            (Prevention and Control of Pollution) Act 1974 and Air (Prevention
            and Control of Pollution) Act 1981 address specific environmental
            media. The Hazardous and Other Wastes Management Rules 2016 regulate
            waste handling and disposal.
          </p>

          <p className="blog-body">
            State governments implement central legislation and may impose
            additional requirements. State Pollution Control Boards issue
            consents to operate, set emission and effluent standards, and
            conduct inspections. State labor departments enforce occupational
            safety requirements. Understanding which state authorities have
            jurisdiction over your facilities is essential.
          </p>

          <p className="blog-body">
            Local authorities add another regulatory layer. Municipal
            corporations regulate water supply and sewage discharge. Fire
            departments enforce fire safety requirements. Local development
            authorities impose zoning and land-use restrictions. These local
            requirements often get overlooked but carry significant compliance
            obligations.
          </p>

          <p className="blog-body">
            Industry-specific regulations apply to particular sectors.
            Pharmaceutical manufacturing, chemical processing, petroleum
            refining, and hazardous industries face specialized requirements
            beyond general EHS regulations. Understanding which sector-specific
            rules apply to your operations prevents compliance gaps.
          </p>

          <p className="blog-body">
            For organizations implementing{" "}
            <span className="blog-body-highlightColorBlue">ISO 45001,</span>{" "}
            understanding how these regulations interact with the standard's
            requirements ensures comprehensive safety management. The legal
            register serves as the bridge between regulatory compliance and
            management system implementation.
          </p>

          <p className="innertopTextSubHeading" id="Your-Legal-Register">
            Building Your Legal Register: Step-by-Step
          </p>

          <p className="blog-body">
            Creating a comprehensive legal register requires systematic effort.
            The following methodology ensures thorough coverage while remaining
            manageable.
          </p>

          <p className="innertopTextSubHeading_Points">
            Identify Applicable Regulations
          </p>
          <p className="blog-body">
            Start by listing all EHS activities your organization performs.
            Manufacturing processes, storage of hazardous materials, wastewater
            discharge, air emissions, waste generation, employment of workers,
            operation of machinery, and construction activities all trigger
            regulatory requirements. Creating this activity inventory provides
            the foundation for identifying applicable regulations.
          </p>
          <p className="blog-body">
            Research regulations associated with each activity. Central
            government websites, state pollution control board portals, and
            labor department resources provide access to current regulations.
            Industry associations often publish compliance guides for their
            sectors. Professional EHS networks share regulatory updates and
            interpretations.
          </p>
          <p className="blog-body">
            Consider engaging legal or EHS consultants for initial legal
            register development, particularly if your organization operates in
            multiple states or handles complex processes. Consultants bring
            knowledge of regulatory nuances that organizations may miss.
            Understanding the{" "}
            <span className="blog-body-highlightColorBlue">
              context of your organization
            </span>{" "}
            helps identify stakeholder expectations that may impose additional
            obligations beyond bare legal minimums.
          </p>

          <p className="innertopTextSubHeading_Points">
            Structure Your Legal Register
          </p>
          <p className="blog-body">
            Effective legal registers balance comprehensiveness with usability.
            Include these essential elements for each identified requirement:
          </p>
          <ul className="disk">
            <li>
              Legal reference (act, rule, notification number, and section)
            </li>
            <li>Requirement description in plain language</li>
            <li>
              Applicability to your organization (which facilities, processes,
              or activities)
            </li>
            <li>Compliance obligations (what must be done)</li>
            <li>Frequency of compliance (one-time, periodic, continuous)</li>
            <li>Responsible person or department</li>
            <li>
              Compliance status (compliant, non-compliant, not applicable)
            </li>
            <li>
              Supporting evidence (licenses, consents, test reports, training
              records)
            </li>
            <li>Review date</li>
          </ul>
          <p className="blog-body">
            This structure enables quick reference while providing sufficient
            detail for compliance verification. Digital formats using
            spreadsheets or specialized software facilitate sorting, filtering,
            and updating.
          </p>

          <p className="innertopTextSubHeading_Points">
            Assign Compliance Responsibilities
          </p>
          <p className="blog-body">
            Legal compliance requires clear accountability. Assign each
            requirement to a specific individual or department responsible for
            ensuring compliance. Environmental requirements typically fall to
            environment managers. Safety requirements go to safety officers.
            Operational requirements may belong to production or maintenance
            departments.
          </p>
          <p className="blog-body">
            Document these assignments in the legal register and communicate
            them clearly. Responsible individuals need sufficient authority and
            resources to fulfill their obligations. Without clear ownership,
            requirements fall into gaps between departments. Establishing a
            <span className="blog-body-highlightColorBlue">
              safety committee structure
            </span>{" "}
            helps coordinate compliance efforts across departments.
          </p>

          <p className="innertopTextSubHeading_Points">
            Establish Monitoring Mechanisms
          </p>
          <p className="blog-body">
            The legal register should connect to compliance monitoring systems.
            For requirements with reporting obligations, establish calendars
            that trigger preparation before deadlines. For requirements with
            testing or inspection frequencies, schedule activities to ensure
            timely completion.
          </p>
          <p className="blog-body">
            Link the legal register to your{" "}
            <span className="blog-body-highlightColorBlue">
              document control system
            </span>{" "}
            so that relevant procedures, work instructions, and forms reference
            applicable legal requirements. This integration ensures operational
            activities incorporate compliance considerations rather than
            treating compliance as separate from operations.
          </p>

          <p className="innertopTextSubHeading" id="Maintaining-and-Updating">
            Maintaining and Updating Your Legal Register
          </p>
          <p className="blog-body">
            Legal registers become outdated quickly without systematic
            maintenance. Indian EHS regulations change frequently through new
            legislation, amendments to existing rules, and court decisions.
            Maintaining currency requires ongoing effort.
          </p>
          <p className="blog-body">
            Establish update schedules. Review the legal register quarterly at
            minimum, with monthly reviews preferable for organizations in highly
            regulated sectors. Assign responsibility for tracking regulatory
            changes to a specific individual, typically the EHS manager or legal
            compliance officer.
          </p>
          <p className="blog-body">
            Subscribe to regulatory update services. Many professional
            organizations, law firms, and EHS consultancies provide regulatory
            tracking services that alert subscribers to new or amended
            regulations. State pollution control boards and labor departments
            issue notifications about regulatory changes. Setting up Google
            alerts for key regulatory terms helps catch developments.
          </p>
          <p className="blog-body">
            Verify compliance status regularly. The legal register should
            reflect current compliance status, not static information. During{" "}
            <span className="blog-body-highlightColorBlue">
              internal audits
            </span>{" "}
            and management reviews, verify that identified requirements remain
            current and compliance status remains accurate.
          </p>
          <p className="blog-body">
            Document changes to requirements or compliance status. When
            regulations change, note the effective date, previous requirement,
            and new requirement. This historical record demonstrates due
            diligence and helps explain compliance status to auditors or
            inspectors.
          </p>

          <p className="innertopTextSubHeading" id="Legal-Register-Pitfalls">
            Common Legal Register Pitfalls
          </p>
          <p className="blog-body">
            Organizations frequently encounter predictable challenges when
            developing and maintaining legal registers. Awareness of these
            pitfalls helps avoid them.
          </p>
          <p className="blog-body">
            Incomplete identification represents the most common failure.
            Organizations identify major regulations but miss secondary
            requirements. Local municipal requirements, specific notifications
            applicable to their industry sector, or requirements buried in
            lengthy regulations get overlooked. Periodic third-party reviews
            help identify gaps.
          </p>
          <p className="blog-body">
            Vague requirement descriptions make compliance verification
            difficult. Entries like "comply with Air Act requirements" don't
            specify what compliance means. Better entries state "Maintain PM10
            emissions below 50 mg/Nm³ as per consent to operate conditions" with
            clear, verifiable standards.
          </p>
          <p className="blog-body">
            Missing linkages between requirements and operational procedures
            create implementation gaps. The legal register identifies
            requirements, but no corresponding procedures exist to ensure
            compliance. Effective systems connect each legal requirement to
            specific procedures, work instructions, or controls.
          </p>
          <p className="blog-body">
            Static legal registers that aren't regularly updated become outdated
            quickly. Organizations should treat legal register maintenance as
            ongoing EHS management activity, not one-time project. Integration
            with{" "}
            <span className="blog-body-highlightColorBlue">
              management review meetings
            </span>{" "}
            ensures senior leadership remains aware of compliance status and
            emerging requirements.
          </p>
          <p className="blog-body">
            Lack of verification mechanisms means organizations claim compliance
            without evidence. Effective legal registers link each requirement to
            supporting documentation—licenses, permits, test reports, training
            records, or inspection results. This evidence provides confidence
            that compliance claims withstand scrutiny.
          </p>

          <p className="innertopTextSubHeading" id="with-Management-Systems">
            Integrating Legal Registers with Management Systems
          </p>
          <p className="blog-body">
            Legal registers shouldn't exist in isolation. They integrate with
            broader EHS management systems to drive compliance systematically.
          </p>
          <p className="blog-body">
            For organizations implementing{" "}
            <span className="blog-body-highlightColorBlue">ISO 14001,</span> the
            legal register addresses clause 6.1.3 requirements to determine
            applicable compliance obligations. The register becomes input to{" "}
            <span className="blog-body-highlightColorBlue">
              environmental compliance audits
            </span>{" "}
            that verify conformance.
          </p>
          <p className="blog-body">
            ISO 45001 requires similar identification of legal requirements
            related to occupational health and safety. Organizations
            implementing{" "}
            <span className="blog-body-highlightColorBlue">
              integrated management systems
            </span>{" "}
            can maintain unified legal registers covering quality,
            environmental, and safety requirements, reducing duplication while
            ensuring comprehensive coverage.
          </p>
          <p className="blog-body">
            The legal register informs{" "}
            <span className="blog-body-highlightColorBlue">
              risk assessment processes.
            </span>{" "}
            Regulatory non-compliance represents significant risk. Risk
            assessments should consider compliance status when evaluating
            overall risk exposure.
          </p>
          <p className="blog-body">
            Performance monitoring programs should track compliance with legal
            requirements alongside other EHS metrics. Management reviews should
            examine compliance trends, identify systemic compliance challenges,
            and allocate resources to address gaps. This integration ensures
            compliance receives appropriate management attention.
          </p>

          <div>
            <p className="innertopTextSubHeading" id="for-Legal-Register-Management">
              Technology Solutions for Legal Register Management
            </p>

            <p className="blog-body">
              Spreadsheet-based legal registers work adequately for small
              organizations with limited regulatory exposure. Larger
              organizations or those operating multiple facilities benefit from
              dedicated compliance management software.
            </p>
            <p className="blog-body">
              These solutions offer several advantages. Automated update
              notifications alert users when regulations change. Compliance
              calendars trigger reminders for periodic reporting, license
              renewals, or inspection requirements. Workflow management routes
              compliance tasks to responsible individuals and tracks completion.
              Document management links supporting evidence to specific
              requirements. Reporting capabilities provide compliance status
              dashboards for management review.
            </p>
            <p className="blog-body">
              When evaluating software solutions, consider integration with
              existing systems. Can the legal register software connect to your{" "}
              <span className="blog-body-highlightColorBlue">
                document management system,
              </span>{" "}
              training management system, or incident reporting system?
              Integration reduces data entry burden and ensures consistency
              across EHS systems.
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
          An effective legal register transforms regulatory complexity into
          manageable compliance systems. Organizations that invest in
          comprehensive legal register development and maintenance position
          themselves for sustainable compliance, reduced regulatory risk, and
          smoother certification audits.
        </p>

        <p className="innertopTextSubHeading_Points">
          Ready to build your EHS legal register? Download our Legal Register
          Template to structure your compliance tracking system.
        </p>

        <p className="blog-body">
          Bexex's EHS compliance specialists help Indian industries identify
          applicable requirements, develop comprehensive legal registers, and
          establish monitoring systems that ensure ongoing compliance. Our
          consultants bring deep knowledge of central and state regulations
          across multiple industry sectors.{" "}
          <span className="blog-body-highlightColorBlue">
            Explore our EHS compliance services
          </span>
          or contact us to discuss your legal register development needs.
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
      <FrequentQuestion  data={faqData}/>
      <NewsLetter />
      <ReadMoreBlog />
      <LetsConnect />
      <Footer />
    </>
  );
};

export default BlogInnerPage;
