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
    title: "ISO 27001 Gap Analysis (Excel)",
    description:
      "Comprehensive assessment tool evaluating your organization against ISO 27001 requirements with implementation guidance.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Why Your Company Needs ISO 27001",
    description:
      "Video explaining information security challenges facing Indian businesses and how ISO 27001 addresses them.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "ISO 27001",
    anchor: "ISO-27001",
  },
  {
    label: "Understanding ISO 27001",
    anchor: "Understanding-ISO-27001",
  },
  {
    label: "Why Indian Businesses Need ISO 27001",
    anchor: "Why-Indian-Businesses-Need-ISO-27001",
  },
  {
    label: "Key Implementation Steps",
    anchor: "Key-Implementation-Steps",
  },
  {
    label: "Common Security Controls for Indian Businesses",
    anchor: "Common-Security-Controls-for-Indian-Businesses",
  },
  // {
  //   label: "Conducting Effective Management Reviews",
  //   anchor: "Conducting-Effective-Management-Reviews",
  // },
  {
    label: "Integration with Other Standards",
    anchor: "Integration-with-Other-Standards",
  },
  {
    label: "Certification Process",
    anchor: "Certification-Process",
  },
  {
    label: "Business Benefits",
    anchor: "Business-Benefits",
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
      question: "Is ISO 27001 mandatory in India?",
      answer:
        "Not legally mandatory except for specific regulated sectors. However, increasingly required by clients, particularly in IT services, BPO, financial services, and healthcare where data security is critical.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Small organizations can implement within 4-6 months. Medium businesses typically need 8-12 months. Large or complex organizations may require 12-18 months depending on existing security maturity.",
    },
    {
      question: "What are typical costs?",
      answer:
        "Total investment ranges from ₹5-15 lakhs including consultancy, technical controls, training, and certification fees. Costs vary significantly based on organization size, existing security infrastructure, and scope.",
    },
    {
      question: "Can small businesses implement ISO 27001?",
      answer:
        "Yes. The standard scales to organizational size and complexity. Small businesses implement proportionate controls appropriate to their risks without requiring enterprise-grade security infrastructure.",
    },
    {
      question:
        "How does ISO 27001 relate to GDPR or Indian data protection laws?",
      answer:
        "ISO 27001 provides framework for information security management. Compliance with data protection laws requires additional measures beyond ISO 27001. However, ISMS provides strong foundation for meeting privacy requirements.",
    },
  ];

  const tableConfig = {
    // heading: "User Management",
    theme: "dark", // "dark" | "light"
    columns: [
      { key: "name", label: "Control Category" },
      { key: "email", label: "Examples" },
      { key: "role", label: "Purpose" },
      // { key: "status", label: "Status" },
    ],
  };

  const tableData = [
    {
      name: "Access Control",
      email: "User authentication, privilege management, password policies",
      role: "Ensure only authorized access to information",
      // status: "Active",
    },
    {
      name: "Cryptography",
      email: "Encryption of data at rest and in transit",
      role: "Protect confidentiality and integrity",
      // status: "Inactive",
    },
    {
      name: "Physical Security",
      email: "Secure areas, equipment protection, clear desk policy",
      role: "Prevent unauthorized physical access",
      // status: "Active",
    },
    {
      name: "Operations Security",
      email: "Malware protection, backup, logging and monitoring",
      role: "Maintain secure operations",
      // status: "Active",
    },
    {
      name: "Network Security",
      email: "Firewalls, network segmentation, secure configuration",
      role: "Protect network infrastructure",
      // status: "Active",
    },
    {
      name: "Incident Management",
      email: "Detection, response procedures, evidence preservation",
      role: "Handle security incidents effectively",
      // status: "Active",
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
            ISO <span className="blog-highlight itly">27001</span> India
          </h1>
          <p className="blog-description">
            ISO 27001 certification, information security management system,
            ISMS implementation, data security India, cyber security compliance
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
          <p className="innertopText" id="ISO-27001">
            ISO 27001: Information Security for Indian Businesses
          </p>

          <p className="innertopTextSubHeading">
            Protecting data assets in an increasingly connected world
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Data breaches dominate headlines with increasing frequency. Customer
            information stolen, intellectual property compromised, ransomware
            crippling operations. For Indian businesses handling sensitive
            information—whether customer data, proprietary designs, financial
            records, or employee details—information security has evolved from
            IT concern to strategic imperative.
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
            ISO 27001, the international standard for Information Security
            Management Systems (ISMS), provides systematic framework for
            protecting information assets. Organizations implementing ISO 27001
            don't just achieve compliance—they build resilient security
            cultures, reduce breach risks, and demonstrate trustworthiness to
            customers and partners.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Indian IT and business services companies with ISO 27001
            certification report 70% fewer security incidents and significantly
            improved client confidence compared to non-certified competitors.
          </p>

          <p className="innertopTextSubHeading" id="Understanding-ISO-27001">
            Understanding ISO 27001
          </p>
          <p className="blog-body blog-body-highlightColor">
            ISO 27001 specifies requirements for establishing, implementing,
            maintaining, and continually improving an information security
            management system. The standard follows the High-Level Structure
            common to ISO management standards, making integration
            straightforward for organizations already implementing{" "}
            <span className="blog-body-highlightColorBlue">ISO 9001</span> or
            other management systems.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Information security under ISO 27001 addresses three core
            principles—confidentiality (information accessible only to
            authorized individuals), integrity (information accurate and
            complete), and availability (authorized users can access information
            when needed). Together these form the CIA triad guiding all security
            decisions.
          </p>
          <p className="blog-body blog-body-highlightColor">
            The standard takes risk-based approach. Organizations identify
            information assets, assess security risks, and implement controls
            proportionate to those risks. This flexibility allows small
            businesses to implement practical security without enterprise-grade
            infrastructure, while enabling large organizations to build
            sophisticated security architectures.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Why-Indian-Businesses-Need-ISO-27001"
          >
            Why Indian Businesses Need ISO 27001
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Regulatory Compliance :</span>{" "}
            India's Digital Personal Data Protection Act 2023 creates stringent
            data protection obligations. While ISO 27001 certification doesn't
            guarantee legal compliance, it demonstrates systematic approach to
            data security that regulators recognize favorably.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">Client Requirements :</span>{" "}
            Multinational corporations increasingly require ISO 27001
            certification from vendors handling their data. IT service
            providers, BPO companies, and software developers find certification
            essential for accessing global markets.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">Competitive Advantage :</span>{" "}
            In sectors where data security concerns clients financial services,
            healthcare, legal services certification differentiates businesses
            as trustworthy partners. The certification signals investment in
            protecting client information.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Breach Prevention :</span>{" "}
            Systematic security management prevents incidents that damage
            reputation, trigger regulatory penalties, and cause customer loss.
            Prevention costs substantially less than breach remediation.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Operational Resilience :</span>{" "}
            ISMS requirements for business continuity and disaster recovery
            strengthen overall organizational resilience beyond just security
            benefits.
          </p>

          <p className="innertopTextSubHeading" id="Key-Implementation-Steps">
            Key Implementation Steps
          </p>
          <p className="innertopTextSubHeading_Points">
            Step 1: Scope Definition and Asset Identification
          </p>
          <p className="blog-body">
            Define ISMS scope covering facilities, systems, and processes to be
            included. Scope can cover entire organization or specific divisions
            depending on business needs and risk exposure.
          </p>
          <p className="blog-body">
            Identify information assets within scope including databases,
            applications, documents, hardware, and intellectual property. For
            each asset, determine classification (public, internal,
            confidential, restricted) based on sensitivity and impact if
            compromised.
          </p>
          <p className="blog-body">
            Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              context of the organization
            </span>{" "}
            helps identify external parties and compliance obligations affecting
            ISMS design.
          </p>

          <p className="innertopTextSubHeading_Points">
            Step 2: Risk Assessment
          </p>
          <p className="blog-body">
            Conduct systematic risk assessment identifying threats to
            information assets (cyber attacks, human error, natural disasters,
            system failures), vulnerabilities that threats could exploit
            (unpatched software, weak passwords, lack of backups), and potential
            impacts if risks materialize.
          </p>
          <p className="blog-body">
            Evaluate likelihood and consequence for each risk scenario.
            High-risk scenarios demand immediate attention and robust controls.
            Lower risks may accept with monitoring or address through basic
            controls.
          </p>
          <p className="blog-body">
            This process mirrors{" "}
            <span className="blog-body-highlightColorBlue">
              HIRA methodology
            </span>{" "}
            familiar to organizations implementing safety management systems.
          </p>

          <p className="innertopTextSubHeading_Points">
            Step 3: Control Selection and Implementation
          </p>
          <p className="blog-body">
            ISO 27001 Annex A provides 93 security controls across 14
            categories. Organizations select applicable controls based on risk
            assessment results, legal requirements, and business needs. Not all
            controls suit every organization—tailor selection to your specific
            risks and context.
          </p>

          {/* table  */}
          <DynamicTable config={tableConfig} data={tableData} />

          <p className="blog-body">
            Implementation requires both technical controls (firewalls,
            encryption, access controls) and organizational controls (policies,
            procedures, training). Technology alone doesn't create
            security—people and processes matter equally.
          </p>

          <p className="innertopTextSubHeading_Points">
            Step 4: Competence and Awareness
          </p>
          <p className="blog-body">
            Build information security competence across the organization. IT
            teams need technical security skills. All employees need security
            awareness understanding their role in protecting information.
            Training should cover password management, phishing recognition,
            data handling procedures, and incident reporting.
          </p>
          <p className="blog-body">
            Regular{" "}
            <span className="blog-body-highlightColorBlue">
              security awareness training
            </span>{" "}
            transforms culture from viewing security as IT's problem to
            recognizing it as everyone's responsibility.
          </p>

          <p className="innertopTextSubHeading_Points">
            Step 5: Monitoring and Review
          </p>
          <p className="blog-body">
            Establish monitoring to detect security incidents, track control
            effectiveness, and identify emerging threats. Log analysis,
            vulnerability scanning, and penetration testing provide ongoing
            security assurance.
          </p>
          <p className="blog-body">
            Conduct{" "}
            <span className="blog-body-highlightColorBlue">
              internal audits
            </span>{" "}
            verifying ISMS implementation and effectiveness. Address findings
            through systematic{" "}
            <span className="blog-body-highlightColorBlue">
              corrective actions.
            </span>
          </p>
          <p className="blog-body">
            Hold{" "}
            <span className="blog-body-highlightColorBlue">
              management reviews
            </span>{" "}
            evaluating whether ISMS remains suitable, adequate, and effective
            given changing threat landscape and business context.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Common-Security-Controls-for-Indian-Businesses"
          >
            Common Security Controls for Indian Businesses
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Access Control :</span>{" "}
            Implement strong authentication (multi-factor where feasible),
            enforce principle of least privilege, regularly review access
            rights, and immediately revoke access when employees leave.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Data Protection :</span> Encrypt
            sensitive data both stored and transmitted. Use secure protocols
            (HTTPS, SFTP) for data transfer. Implement data loss prevention
            tools monitoring sensitive information movement.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Backup and Recovery :</span>{" "}
            Maintain regular backups of critical data. Store backups securely
            off-site or in cloud. Test restoration procedures periodically to
            verify backup integrity.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Patch Management :</span> Keep
            all systems and applications current with security patches.
            Establish systematic update processes addressing critical
            vulnerabilities within defined timeframes.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Mobile Device Security :</span>{" "}
            With remote work increasing, secure laptops and mobile devices
            accessing company data. Implement mobile device management,
            encryption, and remote wipe capabilities.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Vendor Management :</span>{" "}
            Assess security practices of third-party vendors accessing your
            data. Include security requirements in contracts. Conduct periodic
            reviews ensuring vendors maintain adequate security.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Integration-with-Other-Standards"
          >
            Integration with Other Standards
          </p>
          <p className="blog-body">
            Organizations implementing multiple management systems benefit from{" "}
            <span className="blog-body-highlightColorBlue">
              integrated approaches
            </span>{" "}
            combining ISO 27001 with ISO 9001 for quality and ISO 45001 for
            safety. Common elements like document control, internal audits, and
            management review consolidate across standards.
          </p>
          <p className="blog-body">
            ISO 27001 particularly complements ISO 9001 for software development
            companies and IT service providers. Security requirements integrate
            naturally with quality management for technology organizations.
          </p>

          <p className="innertopTextSubHeading" id="Certification-Process">
            Certification Process
          </p>
          <p className="blog-body">
            After implementing ISMS for 3-6 months generating documented
            evidence, engage accredited certification body for two-stage audit.
            Stage one reviews documentation adequacy. Stage two assesses
            implementation effectiveness through evidence examination,
            interviews, and technical verification.
          </p>
          <p className="blog-body">
            Certification demonstrates to clients, regulators, and stakeholders
            that information security receives systematic management attention
            rather than ad-hoc IT efforts.
          </p>

          <p className="innertopTextSubHeading" id="Business-Benefits">
            Business Benefits
          </p>
          {/* <p className="innertopTextSubHeading_Points">Infrequent Reviews</p> */}
          <p className="blog-body">
            Beyond compliance, ISO 27001 delivers tangible business value.
            Client trust increases when certification demonstrates security
            commitment. Insurance premiums often decrease recognizing reduced
            risk. Employee confidence improves knowing personal data is
            protected. Operational efficiency gains emerge as security controls
            often reveal process improvements.
          </p>
          <p className="blog-body">
            Market access expands as certification becomes prerequisite for
            government contracts and enterprise customers. Competitive
            differentiation strengthens in crowded markets where security
            concerns influence buying decisions.
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
          ISO 27001 transforms information security from reactive incident
          response to proactive risk management. Organizations that implement
          systematic security management protect valuable information assets
          while demonstrating trustworthiness.
        </p>

        <p className="innertopTextSubHeading_Points">
          Download our ISO 27001 Gap Analysis to assess your current information
          security posture.
        </p>

        <p className="blog-body">
          Bexex helps Indian businesses implement ISO 27001 tailored to their
          specific risks and compliance requirements. Our consultants combine
          technical security expertise with management system knowledge. <span className="blog-body-highlightColorBlue">Explore
          our ISO 27001 services</span> or contact us to discuss your information
          security needs.
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
