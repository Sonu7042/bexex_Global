import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/third-party-inspection.png";
import supplierEvaluationApproval from "../../assets/images/blog_imgs/supplier-evaluation-approval.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
// import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "Supplier Management Toolkit (Excel)",
    description:
      "Complete toolkit including supplier evaluation questionnaire, audit checklist templates, performance scorecard formats, and approved supplier list template.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Conducting Effective Supplier Audits",
    description:
      "Step-by-step video guide to supplier audit planning, execution, reporting, and follow-up with real supplier facility examples.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Building reliable supply chains",
    anchor: "Building-reliable-supply-chains",
  },
  {
    label: "Understanding ISO Supplier Requirements",
    anchor: "Understanding-ISO-Supplier-Requirements",
  },
  {
    label: "Developing Evaluation Criteria",
    anchor: "Developing-Evaluation-Criteria",
  },
  {
    label: "Supplier Assessment Methods",
    anchor: "Supplier-Assessment-Methods",
  },
  {
    label: "Approval and Classification",
    anchor: "Approval-and-Classification",
  },
  {
    label: "Performance Monitoring Systems",
    anchor: "Performance-Monitoring-Systems",
  },
  {
    label: "Re-evaluation and Development",
    anchor: "Re-evaluation-and-Development",
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
      question: "How often should suppliers be re-evaluated?",
      answer:
        "Re-evaluation frequency depends on supplier risk classification. Critical suppliers require annual assessments. Standard suppliers undergo review every 2-3 years. Performance-triggered re-evaluation occurs whenever significant issues arise regardless of scheduled frequency.",
    },
    {
      question: "What documentation is required for supplier approval?",
      answer:
        "Minimum documentation includes evaluation records supporting approval decision, approved supplier list entry, and defined scope of approval. Additional records might include audit reports, test results, capability studies, or corrective action tracking depending on supplier criticality.",
    },
    {
      question: "Can we purchase from non-approved suppliers in emergencies?",
      answer:
        "Emergency purchases may proceed with documented justification, enhanced receiving inspection, and time-limited authorization. Follow up with proper supplier evaluation before additional purchases. Document emergency rationale and actions taken to mitigate risks.",
    },
    {
      question: "What supplier information should we request?",
      answer:
        "Request quality certifications, business licenses, financial references, technical capabilities documentation, regulatory compliance evidence, and customer references. Supplier-specific needs might require additional documentation like environmental permits or safety certifications.",
    },
    {
      question: "How do we handle supplier mergers or ownership changes?",
      answer:
        "Treat ownership changes as triggering re-evaluation even for previously approved suppliers. New ownership may alter quality systems, technical capabilities, or business stability. Verify continued capability before resuming purchases after significant organizational changes.",
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
              src={supplierEvaluationApproval}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
           Supplier evaluation <span className="blog-highlight itly">approval</span>{" "}
            process
          </h1>
          <p className="blog-description">
             supplier assessment ISO, vendor evaluation criteria, supplier qualification, supplier audit process, supply chain quality management
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
          <p className="innertopText" id="Ambient-Air-Quality-Monitoring">
           Supplier Evaluation and Approval Process
          </p>

          <p
            className="innertopTextSubHeading"
            id="Building-reliable-supply-chains"
          >
            Building reliable supply chains through systematic supplier assessment
          </p>

          <p className="blog-body blog-body-highlightColor">
           Supply chain failures cascade through organizations, disrupting production, compromising product quality, and damaging customer relationships. A single unreliable supplier delivering defective materials, missing delivery commitments, or failing compliance requirements creates operational chaos extending far beyond the original supply relationship.
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
          ISO 9001, ISO 14001, ISO 45001, and sector-specific standards mandate systematic supplier evaluation ensuring purchased products and services meet requirements. Yet many organizations approach supplier management reactively—selecting based solely on price, conducting minimal due diligence, and discovering quality problems only after materials reach production.
          </p>
          <p className="blog-body blog-body-highlightColorBlue">
           Effective supplier evaluation transforms procurement from transactional purchasing into strategic partnerships where qualified suppliers consistently deliver conforming materials, support organizational objectives, and contribute to competitive advantage through reliability and quality.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-ISO-Supplier-Requirements"
          >
           Understanding ISO Supplier Requirements
          </p>

          <p className="blog-body">
           ISO management system standards require organizations to ensure externally provided products and services conform to requirements. This obligation extends beyond simple incoming inspection to comprehensive supplier evaluation, selection, monitoring, and development.
          </p>

          <p className="blog-body">
           Organizations must determine controls applied to external providers based on their potential impact on organizational ability to consistently deliver conforming products and services. Critical suppliers providing materials directly incorporated into products, performing outsourced processes, or delivering services affecting compliance require rigorous evaluation. Less critical suppliers providing consumables or support services may need minimal assessment.
          </p>

          <p className="blog-body">
           Risk-based thinking shapes supplier control intensity. Suppliers providing safety-critical components, regulated materials, or single-source items demand comprehensive evaluation. Alternative sources, commodity items, or low-impact purchases justify streamlined approaches. Understanding <Link to={"/blog/iso-9001-risk-based-thinking"} className="blog-body blog-body-highlightColorBlue"> risk-based thinking </Link> helps calibrate supplier management efforts appropriately.
          </p>
          <p className="blog-body">

          Documentation requirements include defining criteria for evaluation, selection, monitoring, and re-evaluation. Organizations maintain approved supplier lists, evaluation records, performance monitoring data, and actions taken based on evaluations. These records demonstrate systematic supplier management during <Link to={"/blog/internal-audit-process-guide"} className="blog-body-highlightColorBlue">internal audits</Link>  and certification assessments.

          </p>











          <p
            className="innertopTextSubHeading"
            id="Developing-Evaluation-Criteria"
          >
           Developing Evaluation Criteria
          </p>

          <p className="blog-body">
          Comprehensive supplier evaluation examines multiple dimensions affecting ability to meet requirements consistently over time.
          </p>

          <p className="blog-body">
          Quality capability assessment determines whether suppliers possess technical competence, quality systems, and process controls producing conforming products. Quality certifications like ISO 9001 provide baseline assurance. Sector-specific certifications <Link to={"/blog/iso-13485-medical-device-quality"} className="blog-body-highlightColorBlue"> ISO 13485 for medical devices </Link>, <Link to={"/blog/iso-22000-food-safety-management"} className="blog-body-highlightColorBlue">ISO 22000 for food safety</Link>, or IATF 16949 for automotive—indicate specialized capabilities.
          </p>
          <p className="blog-body">
            Technical capability evaluation assesses equipment, technology, and expertise delivering specified products or services. Manufacturing suppliers need appropriate machinery, inspection equipment, and technical personnel. Service providers require qualified personnel and necessary resources. Site visits verify claimed capabilities matching actual infrastructure.
          </p>
          <p className="blog-body">
            Financial stability analysis prevents supplier failures disrupting supply continuity. Financial statements, credit reports, and market reputation indicate business viability. Unstable suppliers pose risks regardless of technical capabilities—bankruptcies, ownership changes, or financial distress interrupt supply chains unpredictably.
          </p>
          <p className="blog-body">
          Regulatory compliance verification ensures suppliers meet legal obligations affecting purchased items. Environmental compliance matters when purchasing chemicals or hazardous materials. Labor law compliance affects suppliers using contract workers. Export/import compliance determines cross-border supplier suitability. Organizations maintaining  <Link to={"/blog/ehs-legal-register-compliance"} className="blog-body-highlightColorBlue"> legal registers </Link>verify suppliers satisfy applicable regulations.
          </p>
          <p className="blog-body">
           Delivery performance history examines on-time delivery rates, lead time consistency, and responsiveness. Late deliveries disrupt production schedules regardless of product quality. Reliable delivery performance distinguishes capable suppliers from problematic ones.   
          </p>
          

          

          {/* start from here  */}
          <p
            className="innertopTextSubHeading"
            id="Supplier-Assessment-Methods"
          >
            Supplier Assessment Methods
          </p>
          <p className="blog-body">
           Multiple assessment methods provide information supporting approval decisions, with method selection reflecting supplier criticality and relationship maturity.
          </p>
          <p className="blog-body">
            Self-assessment questionnaires collect basic information efficiently from large supplier populations. Questionnaires cover quality systems, certifications, technical capabilities, regulatory compliance, and business information. Standardized formats enable comparison across suppliers while reducing assessment resource requirements. However, self-reported information requires verification through other methods.
          </p>
          <p className="blog-body">
            Document review examines certifications, test reports, quality manuals, process flows, and capability studies. ISO certifications from accredited bodies provide reliable quality system evidence. Test reports demonstrate product conformance. Process documentation reveals manufacturing approaches and control methods. Document review identifies obvious gaps before expensive site visits.
          </p>
          <p className="blog-body">
             Supplier audits provide firsthand facility assessment verifying claimed capabilities and identifying unreported issues. Audit teams examine production processes, quality controls, equipment condition, housekeeping, and management systems. Structured checklists ensure consistent evaluation across suppliers. Organizations conducting  <Link to={"/blog/supplier-quality-audit-process"} className="blog-body-highlightColorBlue">supplier quality audits</Link>  develop standardized approaches balancing thoroughness with efficiency.
          </p>
          <p className="blog-body">
      Sample evaluation tests actual products against specifications before committing to large purchases. Laboratory analysis, performance testing, or trial production runs reveal quality issues not apparent from documentation or audits. Initial sample approval prevents discovering defects after receiving production quantities.
          </p>
          <p className="blog-body">
     References from other customers provide independent perspectives on supplier performance. Reference checks reveal delivery reliability, quality consistency, problem responsiveness, and business stability beyond supplier-provided information.
          </p>



          <p
            className="innertopTextSubHeading"
            id="Approval-and-Classification"
          >
           Approval and Classification
          </p>
          <p className="blog-body">
          Supplier approval formalizes the decision to purchase from evaluated suppliers, typically involving multiple stakeholders and documented justification.
          </p>
          <p className="blog-body">
            Approval criteria define minimum requirements for supplier qualification. Quality certification requirements, minimum scores across evaluation categories, or specific capability thresholds establish approval gates. Documented criteria ensure consistent decisions across commodity types and purchasing personnel.
          </p>
          <p className="blog-body">
          Approval authority levels prevent unauthorized supplier additions while enabling efficient processing. Low-risk suppliers might receive approval from purchasing managers while critical suppliers require quality director or executive approval. Clear authority matrices balance control with responsiveness.
          </p>
          <p className="blog-body">
            Approved supplier lists maintain current records of qualified suppliers, approved commodities, applicable restrictions, and approval dates. Regular list reviews remove inactive suppliers and update status changes. Distribution to purchasing personnel prevents inadvertent purchases from non-approved sources.
          </p>
          <p className="blog-body">
       Supplier classification segments suppliers by criticality, performance, or capability enabling differentiated management approaches. Critical suppliers providing safety components or single-source items receive intensive monitoring and development support. Preferred suppliers demonstrating excellence receive priority consideration and deeper partnerships. Conditional suppliers on probation face enhanced monitoring and improvement requirements.
          </p>
          <p className="blog-body">
      Conditional approval with restrictions enables limited purchasing while suppliers address identified gaps. Time-bound improvement plans, enhanced incoming inspection, or lot-by-lot approval mitigate risks during capability development. Clear conditions and monitoring prevent indefinite conditional status.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Performance-Monitoring-Systems"
          >
           Performance Monitoring Systems
          </p>
          <p className="blog-body">
             Ongoing monitoring validates initial approval decisions and identifies emerging issues requiring intervention before serious supply disruptions occur.
          </p>
          <p className="blog-body">
        Quality metrics track defect rates, rejection percentages, customer complaints, or returns attributable to supplier-provided items. Trending analysis distinguishes isolated incidents from systematic quality deterioration. Monthly or quarterly reviews enable timely corrective action requests.
          </p>
          <p className="blog-body">
             Delivery metrics measure on-time delivery rates, lead time consistency, and order fulfillment accuracy. Late deliveries or quantity discrepancies disrupt production requiring expediting costs or line shutdowns. Systematic tracking identifies chronic delivery problems.
          </p>
          <p className="blog-body">
          Responsiveness evaluation assesses supplier communication, problem resolution, and change management. Suppliers ignoring quality concerns, delaying corrective actions, or resisting improvement requests create ongoing issues regardless of baseline performance. Responsiveness metrics complement quality and delivery data.
          </p>
          <p className="blog-body">
         Scorecards consolidate multiple metrics into overall supplier ratings. Weighted scoring reflects relative importance of quality, delivery, cost, and service. Quarterly scorecards shared with suppliers establish performance expectations and improvement priorities. Understanding <Link to={"/blog/capa-process-iso-standards"} className="blog-body-highlightColorBlue">CAPA processes</Link>  helps develop supplier improvement requirements.
          </p>
          <p className="blog-body">
        Automated monitoring systems integrate procurement data, quality inspection results, and delivery records providing real-time supplier performance visibility. Dashboard displays, exception alerts, and trend reports enable proactive supplier management replacing reactive firefighting.
          </p>



           <p
            className="innertopTextSubHeading"
            id="Re-evaluation-and-Development"
          >
            Re-evaluation and Development
          </p>
          <p className="blog-body">
            Periodic re-evaluation ensures continued supplier suitability as business requirements, technologies, or regulatory environments evolve.
          </p>
          <p className="blog-body">
       Re-evaluation frequency reflects supplier risk levels and performance stability. Critical suppliers might undergo annual re-assessments while stable low-risk suppliers extend to triennial reviews. Performance-triggered re-evaluation responds to significant issues—major quality problems, delivery failures, or compliance violations—warranting immediate reassessment.
          </p>
          <p className="blog-body">
            Re-evaluation methods combine performance data review with periodic audits or capability assessments. Performance trending over review periods indicates improvement or deterioration. Updated financial reviews detect business stability changes. Regulatory compliance verification confirms continued legal compliance.
          </p>
          <p className="blog-body">
            Supplier development programs help capable suppliers overcome specific performance gaps rather than immediate disqualification. Technical assistance, process improvement collaboration, or quality system training build supplier capabilities benefiting both parties. Development investments make sense for limited-source suppliers, proprietary technology providers, or suppliers with strategic importance despite current limitations.
          </p>
          <p className="blog-body">
            Probationary status with improvement plans addresses serious but correctable issues. Time-bound corrective action plans, enhanced monitoring, and restricted purchasing maintain supply continuity while driving improvement. Clear graduation criteria or disqualification triggers prevent indefinite probation.
          </p>
          <p className="blog-body">
            Supplier disqualification procedures remove persistently problematic suppliers from approved lists. Documentation requirements, alternative sourcing plans, and communication protocols ensure orderly transitions preventing supply disruptions. Disqualification decisions typically require same authority levels as initial approvals.
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
         
         Effective supplier management requires systematic evaluation processes, clear criteria, and ongoing monitoring ensuring supply chain reliability supporting organizational quality objectives
        </p>

        <p className="innertopTextSubHeading_Points">
         Download our Supplier Evaluation Toolkit providing standardized questionnaires, audit checklists, and performance scorecard templates enabling consistent supplier assessment and monitoring.
        </p>
        <p className="blog-body">


       Need expert guidance developing comprehensive supplier quality management programs? Bexex quality consultants support organizations across India establishing supplier evaluation systems, conducting supplier audits, and implementing performance monitoring processes.  <span className="blog-body-highlightColorBlue">Explore our quality management consulting services</span>  or contact us for supplier management system assessment.
        </p>

        
        <p className="blog-body">

        


          <span className="innerBlogTextBold">Expert Tip : </span>Conduct unannounced supplier audits periodically alongside scheduled assessments. Announced audits show suppliers at their best with special preparation. Unannounced visits reveal normal operations, identifying issues hidden during planned assessments and providing more realistic capability pictures.
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
