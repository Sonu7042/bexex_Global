import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/third-party-inspection.png";
import managementReview from "../../assets/images/blog_imgs/management-review-meeting.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "MRM Agenda Template (Word)",
    description:
      "Comprehensive template covering all ISO-required inputs and outputs with facilitation guidance and decision tracking.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "How to Run Effective Management Reviews",
    description:
      "Video guide to facilitating strategic management reviews that executives value and that drive organizational improvement.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Management Review Meeting",
    anchor: "Management-Review-Meeting",
  },
  {
    label: "Understanding Management Review",
    anchor: "Understanding-Management-Review",
  },
  {
    label: "Who Should Attend Management Reviews",
    anchor: "Who-Should-Attend-Management-Reviews",
  },
  {
    label: "Essential Management Review Inputs",
    anchor: "Essential-Management-Review-Inputs",
  },
  {
    label: "Required Management Review Outputs",
    anchor: "Required-Management-Review-Outputs",
  },
  {
    label: "Conducting Effective Management Reviews",
    anchor: "Conducting-Effective-Management-Reviews",
  },
  {
    label: "Common Management Review Mistakes",
    anchor: "Common-Management-Review-Mistakes",
  },
  {
    label: "Integrating Management Reviews",
    anchor: "Integrating-Management",
  },
  {
    label: "Making Management Review Valuable",
    anchor: "Making-Management-Review-Valuable",
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
      question: "How often should management reviews be conducted?",
      answer:
        "At minimum annually, though many organizations find semi-annual or quarterly reviews more effective for timely decision-making and performance monitoring. Small organizations with simple systems might conduct annual reviews adequately. Larger or more complex operations benefit from more frequent reviews.",
    },
    {
      question: "Can management reviews be conducted remotely?",
      answer:
        "Yes. Virtual meetings are acceptable provided all required participants attend and full agenda is covered. Document virtual meeting details in minutes. Ensure technology enables effective discussion rather than passive presentation watching.",
    },
    {
      question: "How long should management reviews take?",
      answer:
        "Duration depends on organizational complexity and number of management systems covered. Effective reviews typically run 2-4 hours. Longer meetings risk losing participant engagement. If agenda requires more time, consider splitting into multiple focused sessions.",
    },
    {
      question: "What if top management doesn't want to attend?",
      answer:
        "Management review is mandatory ISO requirement. Without genuine top management participation, certification is at risk. Frame the value proposition—reviews provide strategic performance insight supporting better business decisions. If management systems aren't important enough for executive attention, question whether certification serves business needs.",
    },
    {
      question:
        "Should management reviews be combined with regular business meetings?",
      answer:
        "While tempting for efficiency, dedicated management review meetings often work better. Business meetings focus on current operations while management reviews take strategic system perspective. If combining, ensure ISO-required agenda items receive adequate time and attention rather than being rushed through.",
    },
  ];

  const tableConfig = {
    // heading: "User Management",
    theme: "dark", // "dark" | "light"
    columns: [
      { key: "name", label: "Input Category" },
      { key: "email", label: "What to Review" },
      { key: "role", label: "Strategic Questions" },
      // { key: "status", label: "Status" },
    ],
  };

  const tableData = [
    {
      name: "Previous Review Actions",
      email: "Status of actions from last review",
      role: "Are commitments being fulfilled? What's blocking progress?",
      // status: "Active",
    },
    {
      name: "Changes in Context",
      email:
        "External/internal issues, interested parties, risks/opportunities",
      role: "How has our operating environment changed? Do these changes require system adaptation?",
      // status: "Inactive",
    },
    {
      name: "Performance & Objectives",
      email:
        "Achievement of quality/environmental/safety objectives, KPI trends",
      role: "Are we meeting targets? Where are we falling short and why?",
      // status: "Active",
    },
    {
      name: "Customer Feedback",
      email: "Complaints, satisfaction surveys, returns, warranty claims",
      role: "What are customers telling us? Are we addressing their concerns?",
      // status: "Active",
    },
    {
      name: "Process Performance",
      email:
        "Efficiency metrics, yield rates, cycle times, resource consumption",
      role: "Which processes underperform? Where can we improve?",
      // status: "Active",
    },
    {
      name: "Product/Service Conformity",
      email: "Defect rates, inspection results, NCR trends",
      role: "Are we consistently delivering conforming outputs?",
      // status: "Active",
    },
    {
      name: "Audit Results",
      email: (
        <>
          <span className="blog-body-highlightColorBlue">Internal audit </span>{" "}
          findings, external audit results
        </>
      ),
      role: "Which processes underperform? Where can we improve?",
      // status: "Active",
    },
    {
      name: "Supplier Performance",
      email: "Quality issues, delivery performance, cost trends",
      role: "Which suppliers create problems? Do we need alternative sources?",
      // status: "Active",
    },
    {
      name: "Adequacy of Resources",
      email: "Personnel, infrastructure, technology, budget",
      role: "Do we have resources needed for system effectiveness?",
      // status: "Active",
    },
    {
      name: "Effectiveness of Actions",
      email: (
        <>
          <span className="blog-body-highlightColorBlue">CAPA</span>{" "}
          effectiveness, improvement results{" "}
        </>
      ),
      role: "Are our improvement efforts working? What lessons have we learned?",
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
              src={managementReview}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            Management review{" "}
            <span className="blog-highlight itly">meeting</span> ISO
          </h1>
          <p className="blog-description">
            ISO management review, MRM agenda, top management review, ISO 9001
            management review, strategic quality review India
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
          <p className="innertopText" id="Management-Review-Meeting">
            Management Review Meeting: Making It Meaningful
          </p>

          <p className="innertopTextSubHeading">
            Transforming compliance meetings into strategic improvement sessions
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Management Review Meetings (MRM) represent one of ISO standards'
            most powerful requirements—and one of the most misunderstood. Many
            organizations treat MRM as bureaucratic obligation, scheduling
            annual meetings where quality managers present data to disinterested
            executives who approve minutes without discussion. Boxes get
            checked. Certification auditors are satisfied. Nothing changes.
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
            This approach wastes the strategic opportunity MRM provides. When
            conducted properly, management reviews transform into high-value
            strategic sessions where leadership evaluates system performance,
            addresses systemic issues, allocates resources for improvement, and
            ensures management systems remain aligned with business objectives.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Organizations conducting effective management reviews report 40%
            faster implementation of improvement initiatives and 35% better
            achievement of quality objectives compared to those performing
            perfunctory compliance reviews.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-Management-Review"
          >
            Understanding Management Review Requirements
          </p>
          <p className="blog-body blog-body-highlightColor">
            ISO standards require top management to review the organization's
            management system at planned intervals to ensure continuing
            suitability, adequacy, and effectiveness. This isn't optional—it's a
            mandatory requirement across{" "}
            <span className="blog-body-highlightColorBlue">ISO 9001</span>,{" "}
            <span className="blog-body-highlightColorBlue">ISO 14001</span>, and{" "}
            <span className="blog-body-highlightColorBlue">ISO 45001</span>.
          </p>

          <p className="innertopTextSubHeading_Points">
            Three Key Evaluation Criteria:
          </p>

          <p className="blog-body blog-body-highlightColor">
            <span className="innerBlogTextBold">Suitability :</span> Does the
            management system align with organizational context and strategic
            direction? Has the business changed in ways requiring system
            adaptation?
          </p>

          <p className="blog-body blog-body-highlightColor">
            <span className="innerBlogTextBold">Adequacy :</span> Are resources
            sufficient to maintain and improve the system? Do personnel,
            infrastructure, and budget match system needs?
          </p>

          <p className="blog-body blog-body-highlightColor">
            <span className="innerBlogTextBold">Effectiveness :</span> Is the
            system achieving intended results? Are objectives being met? Is
            performance improving?
          </p>
          <p className="blog-body blog-body-highlightColor">
            Management reviews must consider specific inputs defined by each
            standard and produce defined outputs including decisions about
            improvement opportunities, system changes, and resource needs. The
            review demonstrates that top management actively steers the
            management system rather than delegating responsibility downward.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Who-Should-Attend-Management-Reviews"
          >
            Who Should Attend Management Reviews
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Top management</span> must lead
            and chair the review. ISO standards define top management as person
            or group of people directing and controlling the organization at
            highest level. This typically means CEO, managing director, or site
            head—not middle managers. Their active participation signals that
            management systems receive executive attention.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Management representatives
            </span>{" "}
            or system coordinators present performance data and facilitate
            discussions. Quality managers for ISO 9001, environmental managers
            for ISO 14001, and safety managers for ISO 45001 typically fulfill
            this role.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Function heads</span> whose
            areas impact system performance should attend relevant portions.
            Production managers, HR heads, maintenance managers, and sales
            directors contribute perspectives on operational realities affecting
            system effectiveness.
          </p>
          <p className="blog-body">
            For organizations implementing{" "}
            <span className="blog-body-highlightColorBlue">
              integrated management systems
            </span>
            , conducting unified reviews covering quality, environment, and
            safety reduces meeting overhead while providing holistic performance
            perspective.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Essential-Management-Review-Inputs"
          >
            Essential Management Review Inputs
          </p>
          <p className="blog-body">
            ISO standards specify minimum inputs that management reviews must
            consider. Treating these as checklist items to rush through misses
            their strategic value. Each input provides insight into system
            performance and improvement opportunities.
          </p>
          {/* table  */}
          <DynamicTable config={tableConfig} data={tableData} />
          <p className="blog-body">
            For ISO 45001 specifically, add consultation and participation of
            workers, adequacy of resources for OH&S management, and incident
            investigation results.
          </p>
          <p className="blog-body">
            For ISO 14001, include environmental performance data, compliance
            status, and communications from interested parties.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Required-Management-Review-Outputs"
          >
            Required Management Review Outputs
          </p>
          <p className="blog-body">
            Management reviews must produce decisions and actions in specific
            areas. Vague commitments to "continue monitoring" don't fulfill
            requirements. Outputs must be documented and tracked.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Improvement Opportunities :
            </span>{" "}
            Identify specific areas where system or process improvements are
            needed. Assign responsibility and resources. Set timelines for
            implementation.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">System Changes :</span>{" "}
            Determine what modifications are needed in policies, objectives,
            processes, or resources. Document rationale for changes and
            implementation plans.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Resource Needs :</span> Allocate
            budget, personnel, equipment, or training needed to maintain or
            improve system effectiveness. Management review is where resource
            commitments happen
          </p>
          <p className="blog-body">
            Effective outputs are SMART—Specific, Measurable, Assignable,
            Realistic, and Time-bound. "Improve customer satisfaction" is vague.
            "Reduce customer complaints by 25% within six months through
            enhanced process controls in assembly department, led by Production
            Manager with ₹5 lakh budget" is actionable.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Conducting-Effective-Management-Reviews"
          >
            Conducting Effective Management Reviews
          </p>
          <p className="innertopTextSubHeading_Points">
            Preparation Makes the Difference
          </p>
          <p className="blog-body">
            Open with previous review action status. This accountability check
            demonstrates whether commitments are fulfilled and identifies
            obstacles requiring management intervention. Don't allow chronic
            delays without consequences—that undermines the entire review
            process.
          </p>
          <p className="blog-body">
            Present performance data organized by theme rather than reading
            through every metric. Highlight significant trends—both positive and
            concerning. Use visual presentations showing trends over time rather
            than tables of numbers. Executives make better decisions viewing
            graphical performance trends than scanning spreadsheets.
          </p>
          <p className="blog-body">
            Focus discussion on variances from targets and systemic issues
            requiring attention. Spend time understanding root causes of
            underperformance and developing corrective strategies. Successful
            areas require acknowledgment but minimal discussion—learn from
            successes and move on.
          </p>

          <p className="innertopTextSubHeading_Points">
            Drive Strategic Decisions
          </p>
          <p className="blog-body">
            The most valuable management review time addresses strategic
            questions: Should we pursue new certifications opening market
            access? Do emerging regulations require system expansion? Should we
            invest in automation improving both efficiency and environmental
            performance? Are current objectives appropriately ambitious?
          </p>
          <p className="blog-body">
            Connect management system performance to business objectives. Show
            how quality improvements enable revenue growth, how environmental
            initiatives reduce costs, how safety performance affects workforce
            stability. When executives see management systems as business tools
            rather than compliance overhead, engagement increases dramatically.
          </p>
          <p className="blog-body">
            Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              ISO 9001 risk-based thinking
            </span>{" "}
            helps frame discussions around strategic risks and opportunities
            rather than just operational compliance.
          </p>

          <p className="innertopTextSubHeading_Points">
            Document Decisions and Assign Accountability
          </p>
          <p className="blog-body">
            Capture decisions, action assignments, resource allocations, and
            timelines in meeting minutes. Distribute minutes promptly—within one
            week of the meeting. Assign each action item to specific individuals
            with clear deadlines. Vague assignments to departments without named
            individuals rarely get completed.
          </p>
          <p className="blog-body">
            Track action items in subsequent reviews. Public accountability for
            commitments encourages follow-through. When top management holds
            people accountable for completing assigned actions, respect for the
            management review process increases.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Common-Management-Review-Mistakes"
          >
            Common Management Review Mistakes
          </p>
          <p className="innertopTextSubHeading_Points">Infrequent Reviews</p>
          <p className="blog-body">
            Some organizations conduct reviews only when auditors arrive,
            leaving 18-24 months between reviews. This violates "planned
            intervals" requirement and prevents timely management response to
            emerging issues. Schedule reviews at least annually, with
            semi-annual or quarterly reviews providing even better performance
            oversight.
          </p>
          <p className="innertopTextSubHeading_Points">
            Perfunctory Compliance Exercises
          </p>
          <p className="blog-body">
            Rushing through agenda items without substantive discussion,
            accepting underperformance without investigation, and
            rubber-stamping prepared minutes wastes everyone's time. If
            management review feels like obligation rather than value-adding
            activity, you're doing it wrong.
          </p>
          <p className="innertopTextSubHeading_Points">
            Data Overload Without Analysis
          </p>
          <p className="blog-body">
            Presenting hundreds of metrics without highlighting what matters
            overwhelms participants. Focus on key performance indicators aligned
            with objectives. Provide analysis and interpretation, not just raw
            data. Explain what trends mean and why they matter.
          </p>
          <p className="innertopTextSubHeading_Points">
            No Follow-Through on Decisions
          </p>
          <p className="blog-body">
            Making decisions without implementation renders management review
            pointless. Track action items systematically. Report status in
            subsequent reviews. Hold people accountable. Organizations with weak
            follow-through find that management reviews lose credibility and
            engagement deteriorates.
          </p>
          <p className="innertopTextSubHeading_Points">Management Absence</p>
          <p className="blog-body">
            When top management delegates attendance to subordinates, the
            message is clear—management systems aren't strategically important.
            Real top management participation is non-negotiable for effective
            reviews.
          </p>
          <p className="blog-body">
            Organizations implementing effective CAPA processes find that
            management review decisions receive systematic implementation
            tracking.
          </p>

          <p className="innertopTextSubHeading" id="Integrating-Management">
            Integrating Management Reviews Across Standards
          </p>
          <p className="blog-body">
            Organizations certified to multiple ISO standards can conduct
            integrated reviews covering quality, environmental, and safety
            performance simultaneously. Unified reviews provide holistic
            performance perspective and reduce meeting overhead.
          </p>
          <p className="blog-body">
            Structure integrated reviews with common sections covering inputs
            applicable across standards, followed by standard-specific deep
            dives where needed. For example, legal compliance status might
            warrant detailed discussion for environmental and safety but less
            for quality unless product regulations are complex.
          </p>
          <p className="blog-body">
            Ensure each standard's required inputs and outputs receive adequate
            coverage. Auditors verify that management reviews address all
            mandatory elements. Integrated reviews must be comprehensive, not
            shortcuts omitting required content.
          </p>
          {/* <ul className="disk">
            <li>Does this procedure still reflect current practice?</li>
            <li>Have regulatory requirements changed?</li>
            <li>Has equipment or technology changed?</li>
            <li>Have incidents revealed procedure inadequacies?</li>
            <li>Do performance metrics suggest process improvement needs?</li>
          </ul> */}

          <p
            className="innertopTextSubHeading"
            id="Making-Management-Review-Valuable"
          >
            Making Management Review Valuable
          </p>
          <p className="blog-body">
            Effective management reviews share common characteristics. They
            occur regularly at planned intervals. Top management actively
            participates, asking questions and making decisions. Data
            presentation is concise and analytical. Discussion focuses on
            strategic issues and systemic problems. Decisions are documented and
            tracked. Resources are allocated for improvement. Follow-up occurs
            systematically.
          </p>
          <p className="blog-body">
            When management reviews function well, they become forums where
            leadership steers organizational performance toward strategic
            objectives. Management systems remain aligned with business needs.
            Resources flow to improvement opportunities. Systemic issues receive
            timely attention. The organization continuously enhances its
            capabilities.
          </p>
          <p className="blog-body">
            When reviews become perfunctory compliance exercises, opportunity is
            wasted. Checking boxes satisfies auditors but delivers zero business
            value. The choice is yours—treat management review as bureaucratic
            obligation or leverage it as strategic management tool.
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
          Effective management reviews transform ISO requirements from
          compliance obligations into strategic management opportunities.
          Organizations that conduct meaningful reviews leverage them for
          continuous improvement and competitive advantage.
        </p>

        <p className="innertopTextSubHeading_Points">
          Download our Management Review Agenda Template to structure
          comprehensive, value-adding reviews.
        </p>

        <p className="blog-body">
          Bexex helps organizations design and facilitate effective management
          review processes that engage leadership, drive strategic decisions,
          and demonstrate genuine system oversight. Our consultants bring
          experience structuring reviews across industries.{" "}
          <span className="blog-body-highlightColorBlue">
            Explore our ISO consulting services
          </span>{" "}
          or contact us to improve your management review effectiveness.
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
