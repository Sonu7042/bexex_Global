import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/third-party-inspection.png";
import documentControlSystem from "../../assets/images/blog_imgs/document-control-system.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "Document Control Procedure Template (Word)",
    description:
      "Complete procedure covering approval processes, version control, distribution, and retention with customizable forms.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Digital Document Management Demo",
    description:
      "Video walkthrough of cloud-based document control system showing approval workflows, version tracking, and user access.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Building document management",
    anchor: "Building-document-management",
  },
  {
    label: "Understanding Document Control Requirements",
    anchor: "Understanding-Document-Control-Requirements",
  },
 
  {
    label: "Implementing Document Control Systems",
    anchor: "Implementing-Document-Control-Systems",
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
    question: "Do all documents need version numbers?",
    answer:
      "Yes. Version or revision identification distinguishes current from previous versions. Even simple documents benefit from version tracking—often sources of confusion involve which version applies.",
  },
  {
    question: "How long should obsolete documents be retained?",
    answer:
      "Retention depends on organizational needs and regulatory requirements. Many organizations retain obsolete procedures for reference showing historical practices, particularly for investigating old quality issues. Define retention periods clearly",
  },
  {
    question: "Can we use cloud storage for document control?",
    answer:
      "Yes, provided cloud systems offer necessary controls—access restrictions, version tracking, audit trails. Many cloud document management systems specifically support ISO compliance. Ensure service agreement addresses data security and availability.",
  },
  {
    question: "What about documents employees create themselves?",
    answer:
      "Personal documents (notes, drafts, working copies) don't require control if not used for quality-critical activities. However, once a document becomes official procedure or work instruction affecting quality, it enters control system.",
  },
  {
    question: "How do we control documents for suppliers or customers?",
    answer:
      "You can't control external documents but can control their use in your organization. Maintain list of current versions, verify currency before use, and establish process for obtaining updates when revisions occur.",
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
              src={documentControlSystem}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
           Document control {" "}
            <span className="blog-highlight itly">system</span> ISO
          </h1>
          <p className="blog-description">
           ISO document control, document management system, quality documentation, document control procedures, digital document management
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
            Document Control System: From Paper to Digital
          </p>

          <p className="innertopTextSubHeading">
            Building document management that supports operations instead of hindering them
          </p>

          <p className="blog-body blog-body-highlightColor">
           Document control failures rank among the most common findings during ISO certification audits. Workers using outdated procedures. Multiple versions circulating simultaneously. Obsolete forms still in use. Nobody knowing which document is current. These problems create operational chaos, quality defects, and audit non-conformities.
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
      Yet document control needn't be complicated. The fundamental requirement is simple—ensure people have access to current, approved documents and don't use obsolete versions. Whether achieved through paper-based systems or sophisticated software, effective document control supports operations by making correct information readily available.
      </p>
      <p className="blog-body blog-body-highlightColorBlue">
      Organizations with robust document control systems experience 50% fewer documentation-related audit findings and report significantly better consistency in process execution compared to those with weak controls.
      </p>

       <p
  className="innertopTextSubHeading"
  id="Understanding-Document-Control-Requirements"
>
  Understanding Document Control Requirements
</p>

<p className="blog-body">
  All ISO management system standards require documented information to
  be controlled. This ensures that documents are available where needed,
  adequately protected, and controlled for distribution, access,
  retrieval, use, storage, preservation, version control, retention, and
  disposition.
</p>

<p
  className="innertopTextSubHeading_Points"
  id="Core-Control-Requirements"
>
  Core Control Requirements:
</p>

<p className="blog-body">
  Documents must be approved before use. Approval authority should be
  clear who can authorize new documents, who approves revisions, and what
  approval process applies. Without defined approval, chaos ensues.
</p>

<p className="blog-body">
  Documents must be uniquely identified. Numbering systems, revision
  levels, and effective dates enable distinguishing current from obsolete
  versions. Unique identification is foundation for all other controls.
</p>

<p className="blog-body">
  Documents must be reviewed and updated as necessary. Static documents
  become obsolete as processes evolve. Regular reviews ensure
  documentation remains current and useful.
</p>

<p className="blog-body">
  Changes must be controlled. Revision history should be traceable. Users
  must understand what changed between versions and why.
</p>

<p className="blog-body">
  Obsolete documents must be removed from use. This simple requirement
  prevents most document control problems. If obsolete versions remain
  accessible, workers will use them.
</p>

<p className="blog-body">
  Organizations implementing{" "}
  <span className="blog-body-highlightColorBlue">ISO 9001</span>,{" "}
  <span className="blog-body-highlightColorBlue">ISO 14001</span>, or{" "}
  <span className="blog-body-highlightColorBlue">ISO 45001</span> must
  establish systematic document control addressing these requirements.
</p>
<p
  className="innertopTextSubHeading_Points"
  id="Core-Control-Requirements"
>
 Document Hierarchy and Types
</p>

<p className="blog-body">
 Organizing documents by hierarchy simplifies control and enables appropriate approval processes for different document levels.
</p>
 {/* table1  */}
  <DynamicTable config={tableConfig} data={tableData} />


 <p className="blog-body blog-body-highlightColor">
          Different levels require different review and approval rigor. Changing company policy demands top management involvement. Updating a work instruction for routine task requires only supervisor approval. Matching approval authority to document level enables agile updates without bureaucratic burden.
          </p>

 <p className="blog-body blog-body-highlightColor">
          Understanding <span className="blog-body-highlightColorBlue">common ISO documentation mistakes</span> helps avoid pitfalls when establishing document hierarchies.
          </p>


<p
  className="innertopTextSubHeading_Points"
  id="Paper-Based-Document-Control"
>
  Paper-Based Document Control
</p>

<p className="blog-body">
  Despite digital transformation trends, many organizations still rely on
  paper documents, particularly for shop floor use where workers lack
  computer access. Paper systems can work if disciplined controls are
  maintained.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Master Document Control:</span>{" "}
  Designate a single location (typically the quality department) as master
  document repository. All approved documents stored here with clear
  identification of current versions. Master copies clearly marked to
  prevent confusion.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Controlled Copy Distribution:</span>{" "}
  Assign unique copy numbers to distributed documents. Maintain distribution
  list showing who has which copies. When documents are revised, retrieve
  obsolete copies before distributing new versions. This retrieval step is
  critical but frequently neglected.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Stamps and Markings:</span>{" "}
  Use stamps indicating document status.{" "}
  <span className="innerBlogTextBold">
    “CONTROLLED COPY”, “OBSOLETE”, “FOR REFERENCE ONLY”
  </span>{" "}
  stamps provide visual cues preventing misuse. Stamp obsolete documents
  prominently before filing for retention.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Periodic Verification:</span>{" "}
  Conduct spot checks verifying that work areas contain only current
  document versions. Include document control verification in{" "}
  <span className="blog-body-highlightColorBlue">internal audits</span>.
</p>

<p className="blog-body">
  Paper systems require discipline. The moment discipline lapses someone
  photocopies a controlled procedure, obsolete forms remain in cabinets,
  distribution lists aren’t updated control breaks down.
</p>

<p
  className="innertopTextSubHeading_Points"
  id="Digital-Document-Control"
>
  Digital Document Control
</p>

<p className="blog-body">
  Digital systems offer advantages over paper including easier access,
  automated version control, integrated approval workflows, comprehensive
  audit trails, and elimination of obsolete copy distribution problems.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">
    Essential Digital System Features:
  </span>
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Access Control:</span>{" "}
  User permissions determine who can view, edit, approve, or delete
  documents. Role-based access ensures appropriate controls while enabling
  necessary access.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Version Control:</span>{" "}
  System automatically maintains version history. Previous versions remain
  accessible for reference but clearly marked as superseded. Users always
  default to current version.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Approval Workflows:</span>{" "}
  Electronic routing sends documents to appropriate approvers based on
  document type. Approvals tracked with date and digital signature.
  Workflow ensures proper authorization before release.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Change Notifications:</span>{" "}
  Users notified when documents they use are revised. Automated
  notifications ensure awareness of updates without manual distribution.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Audit Trail:</span>{" "}
  System logs all document actions creation, revision, approval, viewing,
  printing. Comprehensive audit trails support compliance verification and
  incident investigation.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Search Functionality:</span>{" "}
  Full text search enables finding relevant documents quickly. Metadata
  tags improve discoverability. Good search reduces time wasted hunting
  for information.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Integration:</span>{" "}
  Systems should integrate with other business software. Links between
  quality management systems, training records, and{" "}
  <span className="blog-body-highlightColorBlue">CAPA tracking</span>{" "}
  create seamless information flow.
</p>

<p
  className="innertopTextSubHeading_Points"
  id="Implementing-Document-Control-Systems"
>
  Implementing Document Control Systems
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">
    Step 1: Define Document Categories and Numbering
  </span>
</p>

<p className="blog-body">
  Establish a logical numbering system indicating document type and
  department. For example:
</p>

<ul className="disk">
  <li>QP-01 through QP-99: Quality Procedures</li>
  <li>WI-MFG-01: Work Instructions for Manufacturing</li>
  <li>FORM-HR-01: Human Resources Forms</li>
</ul>

<p className="blog-body">
  Consistent numbering enables intuitive document identification and
  organization.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">
    Step 2: Create Document Templates
  </span>
</p>

<p className="blog-body">
  Standardize headers, footers, and formatting. Standard templates should
  include:
</p>

<ul className="disk">
  <li>Document number and title</li>
  <li>Revision level and date</li>
  <li>Approval signatures</li>
  <li>Page numbering</li>
  <li>Distribution list (for paper systems)</li>
</ul>

<p className="blog-body">
  Templates ensure all required information appears consistently.
</p>


<p className="blog-body">
  <span className="innerBlogTextBold">
    Step 3: Establish Approval Process
  </span>
</p>

<p className="blog-body">
  Define who approves what. Create approval matrix showing:
</p>

<ul className="disk">
  <li>
    Document type → Required approvers → Approval sequence
  </li>
  <li>
    For example: Work Instructions → Supervisor review → Department Head
    approval
  </li>
</ul>

<p className="blog-body">
  Document the approval process so everyone understands requirements.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">
    Step 4: Train Document Users
  </span>
</p>

<p className="blog-body">
  Training should cover:
</p>

<ul className="disk">
  <li>How to access current documents</li>
  <li>How to request document changes</li>
  <li>How approval process works</li>
  <li>What to do with obsolete documents</li>
  <li>Why document control matters</li>
</ul>

<p className="blog-body">
  Without user training, even good systems fail through misuse.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">
    Step 5: Maintain and Monitor
  </span>
</p>

<p className="blog-body">
  Conduct periodic document reviews ensuring content remains current.
  Schedule annual reviews minimum for all procedures. Use{" "}
  <span className="blog-body-highlightColorBlue">
    management review meetings
  </span>{" "}
  to evaluate document control system effectiveness.
</p>

<p
  className="innertopTextSubHeading_Points"
  id="Common-Document-Control-Problems"
>
  Common Document Control Problems
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Orphan Documents:</span>{" "}
  Documents created outside the control system circulating informally.
  Enforce rule that uncontrolled documents cannot be used for
  quality-critical activities.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Uncontrolled Changes:</span>{" "}
  Someone makes handwritten changes to controlled documents. These informal
  revisions create confusion and compliance risks. Prohibit marking up
  controlled documents except through formal change process.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Obsolete Documents in Use:</span>{" "}
  Most common problem. Rigorous removal of obsolete versions is essential.
  For paper systems, physically retrieve old versions. For digital systems,
  remove old files from shared drives.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Poor Change Communication:</span>{" "}
  Documents updated but users unaware. Implement notification processes
  ensuring affected personnel know about changes.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Over-Documentation:</span>{" "}
  Creating procedures for every trivial activity. Focus documentation on
  processes affecting quality, safety, environment, or compliance. Avoid{" "}
  <span className="blog-body-highlightColorBlue">
    documentation mistakes
  </span>{" "}
  by documenting what adds value.
</p>


<p
  className="innertopTextSubHeading_Points"
  id="External-Document-Control"
>
  External Document Control
</p>

<p className="blog-body">
  Organizations must also control external documents including regulatory
  standards, customer specifications, technical drawings, and supplier
  quality manuals. These require controlled access while recognizing you
  can’t control their creation or revision.
</p>

<p className="blog-body">
  Maintain registry of external documents showing title, version, source,
  and where located. Review periodically ensuring currency regulations and
  standards change. Designate responsible person for monitoring updates to
  critical external documents.
</p>

<p className="blog-body">
  Subscribe to alert services notifying when relevant regulations or
  standards are revised. Proactive monitoring prevents operating under
  outdated requirements.
</p>


<p
  className="innertopTextSubHeading_Points"
  id="Records-Management"
>
  Records Management
</p>

<p className="blog-body">
  While procedures and work instructions require version control and
  obsolescence management, records require different controls. Records
  provide evidence of activities performed, results achieved, and
  compliance demonstrated.
</p>

<p className="blog-body">
  Records must be legible, identifiable, retrievable, and protected.
  Define retention periods based on regulatory requirements, contractual
  obligations, and organizational needs. Systematic disposition after
  retention periods prevents unnecessary accumulation.
</p>

<p className="blog-body">
  For electronic records, backup and recovery processes ensure records
  remain accessible throughout retention periods despite technology
  failures.
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
          Effective document control supports operational excellence by ensuring people access correct, current information. Whether implementing paper systems or digital solutions, systematic controls prevent confusion and compliance problems.
          </p>

        <p className="innertopTextSubHeading_Points">
          Download our Document Control Procedure Template to establish systematic controls.
        </p>

        <p className="blog-body">


          Bexex helps organizations implement document control systems matching their operational complexity and technology capabilities. We provide templates, train document controllers, and integrate controls with broader management systems. <span className="blog-body-highlightColorBlue">Explore our ISO implementation services</span>  or contact us for document control support.


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
