import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/third-party-inspection.png";
import safetyCommitteeIndia from "../../assets/images/blog_imgs/safety-committee-India.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "Safety Committee Structure Guide (PDF)",
    description:
      "Complete toolkit including charter template, meeting agenda format, action tracking sheet, and effectiveness metrics.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Setting Up a Safety Committee — Step by Step",
    description:
      "Video guide to forming effective safety committees with practical examples from Indian manufacturing facilities.",

    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Safety Committee Formation",
    anchor: "Safety-Committee-Formation",
  },
  {
    label: "Legal Requirements",
    anchor: "Legal-Requirements",
  },
  {
    label: "Safety Committee Responsibilities",
    anchor: "Safety-Committee-Responsibilities",
  },
  {
    label: "Structuring Your Safety Committee",
    anchor: "Structuring-Your-Safety-Committee",
  },
  {
    label: "Running Effective Safety Committee Meetings",
    anchor: "Running-Effective-Safety-Committee-Meetings",
  },
  {
    label: "Common Safety Committee Pitfalls",
    anchor: "Common-Safety-Committee-Pitfalls",
  },
  {
    label: "Integrating Committees with Safety Management",
    anchor: "Integrating-Committees",
  },
  {
    label: "Measuring Safety Committee Effectiveness",
    anchor: "Measuring-Safety-Committee-Effectiveness",
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
      question: "What size establishments must form safety committees?",
      answer:
        "OSH Code 2020 requires committees for establishments with 250+ workers. State rules may mandate lower thresholds. Check state-specific requirements. Even where not legally required, voluntary committees benefit safety management.",
    },
    {
      question: "How should worker representatives be selected?",
      answer: (
        <>
          Workers should elect representatives through transparent processes.
          Management appointment of "worker representatives" undermines
          authentic participation. Consider department-based elections ensuring
          representation across facility areas.",
        </>
      ),
    },
    {
      question: "Can contractor workers serve on safety committees??",
      answer:
        "While not typically required, including contractor representatives makes sense when contractors constitute significant facility workforce. Their participation improves safety coordination and demonstrates commitment to all worker safety.",
    },
    {
      question: "How long should committee meetings last?",
      answer:
        "Effective meetings typically run 60-90 minutes. Shorter meetings may rush important discussions. Longer meetings lose participant attention. If agenda consistently requires more time, consider more frequent meetings or sub-committees for specific topics.",
    },
    {
      question: "What authority do safety committees have?",
      answer:
        "Committees make recommendations to management who retain decision-making authority. However, management should respond to recommendations promptly with explanations for acceptance or rejection. Ignoring recommendations undermines committee effectiveness and potentially violates consultation requirements.",
    },
  ];

  const tableConfig = {
    // heading: "User Management",
    theme: "dark", // "dark" | "light"
    columns: [
      { key: "name", label: "Responsibility" },
      { key: "email", label: "Specific Activities" },
      // { key: "role", label: "Strategic Questions" },
      // { key: "status", label: "Status" },
    ],
  };

  const tableData = [
    {
      name: "Hazard Identification",
      email:
        "Conduct workplace inspections, review incident reports, analyze near-miss data, identify unsafe conditions and practices",
      // role: "Are commitments being fulfilled? What's blocking progress?",
      // status: "Active",
    },
    {
      name: "Policy Review",
      email:
        "Evaluate safety policies and procedures, recommend updates based on operational experience, ensure policies remain practical",
      // role: "How has our operating environment changed? Do these changes require system adaptation?",
      // status: "Inactive",
    },
    {
      name: "Incident Investigation",
      email:
        "Participate in accident investigations, identify root causes, recommend corrective actions, track implementation",
      // role: "Are we meeting targets? Where are we falling short and why?",
      // status: "Active",
    },
    {
      name: "Training Coordination",
      email:
        "Identify training needs, review training effectiveness, recommend improvements to safety education programs",
      // role: "What are customers telling us? Are we addressing their concerns?",
      // status: "Active",
    },
    {
      name: "Safety Promotion",
      email:
        "Safety Promotion	Organize safety awareness campaigns, recognize safe behaviors, communicate safety messages throughout organization",
      // role: "Which processes underperform? Where can we improve?",
      // status: "Active",
    },
    {
      name: "Performance Monitoring",
      email:
        "Performance Monitoring	Review safety statistics and trends, evaluate effectiveness of safety programs, track progress on safety objectives",
      // role: "Are we consistently delivering conforming outputs?",
      // status: "Active",
    },
    // {
    //   name: "Audit Results",
    //   email: ""

    //   // role: "Which processes underperform? Where can we improve?",
    //   // status: "Active",
    // },
    // {
    //   name: "Supplier Performance",
    //   email: "Quality issues, delivery performance, cost trends",
    //   role: "Which suppliers create problems? Do we need alternative sources?",
    //   // status: "Active",
    // },
    // {
    //   name: "Adequacy of Resources",
    //   email: "Personnel, infrastructure, technology, budget",
    //   role: "Do we have resources needed for system effectiveness?",
    //   // status: "Active",
    // },
    // {
    //   name: "Effectiveness of Actions",
    //   email: (
    //     <>
    //       <span className="blog-body-highlightColorBlue">CAPA</span>{" "}
    //       effectiveness, improvement results{" "}
    //     </>
    //   ),
    //   role: "Are our improvement efforts working? What lessons have we learned?",
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
              src={safetyCommitteeIndia}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            safety <span className="blog-highlight itly">committee</span> India
          </h1>
          <p className="blog-description">
            safety committee requirements, workplace safety committee, OSH Code
            2020, factory safety committee, employee safety participation
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
          <p className="innertopText" id="Safety-Committee-Formation">
            Safety Committee Formation : Legal Requirements and Best Practices
          </p>

          <p className="innertopTextSubHeading">
            Building effective worker participation in occupational health and
            safety
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Safety committees represent one of the most powerful tools for
            workplace safety improvement, yet many organizations treat them as
            compliance formalities. Committees meet irregularly, discuss trivial
            matters, and produce no meaningful change. Workers view
            participation as burden rather than opportunity. Management ignores
            recommendations. The committee exists on paper but delivers zero
            safety value.
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
            This approach wastes the strategic potential safety committees
            offer. When structured properly and operated effectively, safety
            committees transform workplace safety culture. They channel worker
            insights into hazard identification, build shared ownership of
            safety outcomes, and create communication bridges between shop floor
            and management
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Research from Indian manufacturing shows that facilities with
            active, engaged safety committees experience 45% fewer lost-time
            injuries and 60% higher hazard reporting rates compared to those
            with inactive committees.
          </p>

          <p className="innertopTextSubHeading" id="Legal-Requirements">
            Legal Requirements for Safety Committees
          </p>
          <p className="blog-body blog-body-highlightColor">
            The Occupational Safety, Health and Working Conditions Code 2020
            (OSH Code) consolidates previous legislation and strengthens safety
            committee requirements. The Code mandates establishment of safety
            committees in establishments employing 250 or more workers, though
            state rules may specify lower thresholds.{" "}
          </p>

          <p className="innertopTextSubHeading_Points">
            Committee Composition Requirements:
          </p>

          <p className="blog-body blog-body-highlightColor">
            Safety committees must include equal representation from employer
            and workers. Worker representatives should be selected from among
            workers themselves, not appointed by management. This ensures
            authentic worker voice rather than management proxies.
          </p>
          <p className="innertopTextSubHeading_Points">
            Specific composition varies by state rules, but typically includes:
          </p>
          <ul className="disk">
            <li>innertopTextSubHeading_Points</li>
            <li>Works manager or person in charge</li>
            <li>Safety officer where appointed</li>
            <li>Representatives from major departments</li>
            <li>Medical officer where available</li>
            <li>Worker representatives elected or nominated by workers</li>
          </ul>

          <p className="blog-body blog-body-highlightColor">
            Total committee size typically ranges from 8-12 members for
            effective functioning. Larger committees become unwieldy, while
            smaller committees may lack necessary representation.
          </p>

          <p className="blog-body blog-body-highlightColor">
            Organizations implementing{" "}
            <Link
              to={"/blog/iso-45001-implementation-guide"}
              className="blog-body-highlightColorBlue"
            >
              ISO 45001
            </Link>{" "}
            must demonstrate worker participation and consultation mechanisms.
            Safety committees fulfill this requirement while meeting legal
            obligations.
          </p>
          <p
            className="innertopTextSubHeading"
            id="Safety-Committee-Responsibilities"
          >
            Safety Committee Responsibilities
          </p>

          <p className="blog-body blog-body-highlightColor">
            Effective safety committees go beyond compliance checkbox to drive
            genuine safety improvements. Core responsibilities include:
          </p>

          {/* <p
            className="innertopTextSubHeading_Points"
          >
            Who Should Attend Management Reviews
          </p> */}

          {/* table  */}
          <DynamicTable config={tableConfig} data={tableData} />

          <p className="blog-body">
            Beyond these core functions, committees should address emerging
            safety concerns raised by workers, evaluate new equipment or process
            changes for safety implications, and serve as consultation forum for
            safety-related decisions.
          </p>
          <p className="blog-body">
            Understanding{" "}
            <Link
              to={"/blog/hira-hazard-risk-assessment"}
              className="blog-body-highlightColorBlue"
            >
              HIRA processes
            </Link>{" "}
            helps committees systematically identify and assess workplace
            hazards.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Structuring-Your-Safety-Committee"
          >
            Structuring Your Safety Committee
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Chairperson Selection:</span>{" "}
            whose The committee chair should command respect from both
            management and workers. While often a senior manager, effectiveness
            matters more than hierarchy. The chair facilitates discussions,
            ensures all voices are heard, drives action on recommendations, and
            maintains committee momentum.
          </p>
          <p className="blog-body">
            {" "}
            <span className="innerBlogTextBold">
              Worker Representative Selection:
            </span>
            , Genuine worker participation requires authentic representation.
            Workers should elect their representatives through transparent
            processes. Representatives should come from different departments
            and shifts ensuring comprehensive facility coverage. Consider
            including representatives from contractor workforce if they
            constitute significant facility presence.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Essential-Management-Review-Inputs"
          ></p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Term Duration :</span> Stagger
            member terms to maintain continuity while enabling fresh
            perspectives. Two-year terms work well, with half the members
            rotating annually. This prevents complete membership turnover
            disrupting committee effectiveness.
          </p>
          {/* table 
          <DynamicTable config={tableConfig} data={tableData} /> */}

          <p className="blog-body">
            <span className="innerBlogTextBold">Meeting Frequency :</span>{" "}
            Monthly meetings represent minimum for active committees. Some
            organizations conduct bi-weekly or weekly meetings depending on
            safety performance and facility complexity. Regular scheduling
            demonstrates commitment and maintains momentum.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Required-Management-Review-Outputs"
          ></p>

          <p className="blog-body">
            <span className="innerBlogTextBold">Documentation: </span> Maintain
            formal minutes documenting attendance, issues discussed, decisions
            made, actions assigned, and follow-up status. Minutes serve as
            accountability tool and provide historical record for tracking
            improvement over time.
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
            Organizations using{" "}
            <Link
              to={"/blog/document-control-system-iso"}
              className="blog-body-highlightColorBlue"
            >
              document control systems
            </Link>
            should integrate safety committee records for systematic management
          </p>

          {/* <p className="blog-body">
            <span className="innerBlogTextBold">Resource Needs :</span> Allocate
            budget, personnel, equipment, or training needed to maintain or
            improve system effectiveness. Management review is where resource
            commitments happen
          </p> */}

          <p
            className="innertopTextSubHeading"
            id="Running-Effective-Safety-Committee-Meetings"
          >
            Running Effective Safety Committee Meetings
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">
              {" "}
              Prepare Structured Agendas :
            </span>{" "}
            Distribute agendas at least 3 days before meetings. Standard agenda
            items include:
          </p>

          <ul className="disk">
            <li>Review of previous meeting actions</li>
            <li>Incident and near-miss review</li>
            <li>Safety inspection findings</li>
            <li>New hazard reports</li>
            <li>Training updates</li>
            <li>Safety performance metrics</li>
            <li>New business and concerns</li>
          </ul>

          <p className="blog-body">
            Allow agenda flexibility for urgent safety issues requiring
            immediate attention.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              {" "}
              Create Psychological Safety:
            </span>{" "}
            Committee effectiveness depends on open discussion. Members must
            feel safe raising concerns without fear of retaliation. Management
            sets this tone through respectful listening, avoiding defensive
            responses, and valuing input regardless of source.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold"> Focus on Action: </span> Avoid
            meetings becoming complaint sessions without resolution. For each
            issue identified, assign specific action owner, define what will be
            done, and set realistic deadline. Track actions systematically and
            report status in subsequent meetings.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">
              {" "}
              Balance Discussion Time:{" "}
            </span>{" "}
            Ensure worker representatives receive equal speaking time as
            management members. Active facilitation prevents management
            dominating discussions or worker representatives remaining silent.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold"> Use Data Effectively: </span>{" "}
            Present safety statistics and trends visually. Graphs showing injury
            rates, hazard reports, training completion, or inspection findings
            focus discussions on facts rather than opinions..
          </p>
          <p className="blog-body">
            Understanding{" "}
            <Link to={"/blog/internal-audit-process-guide"} className="blog-body-highlightColorBlue">
              internal audit processes{" "}
            </Link>{" "}
            helps committees evaluate safety system effectiveness
            systematically.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Common-Safety-Committee-Pitfalls"
          >
            Common Safety Committee Pitfalls
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Management Dominance: </span>
            When management controls agendas, dismisses worker input, or makes
            decisions without consultation, committees become rubber-stamps
            rather than genuine participation forums. True participation
            requires shared power and genuine consideration of worker
            perspectives.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Lack of Action Follow-Through:
            </span>{" "}
            Committees lose credibility when recommendations are ignored or
            actions stall without explanation. If resource constraints prevent
            implementing recommendations, explain limitations honestly and
            discuss alternatives.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Irregular Meetings: </span>{" "}
            Canceling meetings due to operational pressures signals that safety
            is secondary to production. Protect meeting schedules except for
            genuine emergencies. Irregular meetings kill momentum and member
            engagement.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Superficial Discussions: </span>{" "}
            Focusing only on minor issues (break room cleanliness, parking)
            while avoiding serious hazards wastes committee potential. While
            housekeeping matters, committees must tackle substantive safety
            concerns.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              No Management Accountability:
            </span>{" "}
            When committee recommendations disappear into bureaucratic void
            without response, participation becomes futile exercise. Management
            must respond to recommendations with decisions and explanations
            within defined timeframes.
          </p>

          <p className="blog-body">
            Organizations implementing effective <Link to={"/blog/capa-process-iso-standards"} className="blog-body-highlightColorBlue">CAPA processes</Link> systematically address safety committee recommendations.
          </p>


          <p className="innertopTextSubHeading" id="Integrating-Committees">
            Integrating Committees with Safety Management
          </p>
          <p className="blog-body">
            Safety committees shouldn't operate in isolation. Integration with
            broader safety management creates synergy:
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Feed into Management Reviews :
            </span>{" "}
            Safety committee reports should inform{" "}
            <Link to={"/blog/management-review-meeting-iso"} className="blog-body-highlightColorBlue">
              management review meetings.
            </Link>{" "}
            Committee insights about safety culture, emerging hazards, and
            program effectiveness help leadership make informed strategic
            decisions.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">
              Support Emergency Preparedness :
            </span>{" "}
            Committee members can participate in{" "}
            <Link to={"/blog/emergency-preparedness-response-plan"} className="blog-body-highlightColorBlue">
              emergency response plans
            </Link>{" "}
            and coordinate drills. Worker representatives ensure plans reflect
            operational realities.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">
              Link to Training Programs :
            </span>{" "}
            Committees identify training needs based on hazard observations and
            incident trends. This input ensures{" "}
            <Link to={" "} className="blog-body-highlightColorBlue">
              safety training
            </Link>{" "}
            addresses real workplace needs rather than generic content.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">
              Contribute to Risk Assessment :
            </span>{" "}
            Committee members bring valuable perspective to{" "}
            <Link to={"/blog/hira-hazard-risk-assessment"} className="blog-body-highlightColorBlue">
              hazard identification{" "}
            </Link>{" "}
            and control measure evaluation. Their operational knowledge improves
            risk
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">
              Monitor Contractor Safety :
            </span>{" "}
            Where contractors work on site, committee oversight of{" "}
            <Link to={"/blog/contractor-safety-management"} className="blog-body-highlightColorBlue">
              contractor safety management
            </Link>{" "}
            ensures coordination and consistent standards.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Measuring-Safety-Committee-Effectiveness"
          >
            Measuring Safety Committee Effectiveness
          </p>
          <p className="blog-body">
            Track metrics indicating whether committees drive actual safety
            improvements:
          </p>
          <p className="innertopTextSubHeading_Points">Leading Indicators:</p>

          <ul className="disk">
            <li>Hazard reports submitted by committee members</li>
            <li>Percentage of recommendations implemented</li>
            <li>Number of safety improvements initiated by committee</li>
            <li>Training sessions coordinated through committee</li>
          </ul>

          <p className="innertopTextSubHeading_Points">Lagging Indicators:</p>

          <ul className="disk">
            <li>Injury frequency rate trends</li>
            <li>Severity of incidents</li>
            <li>Near-miss reporting rates</li>
            <li>Safety compliance audit scores</li>
          </ul>

          <p className="innertopTextSubHeading_Points">
            Engagement Indicators:
          </p>
          <ul className="disk">
            <li>Meeting attendance rates</li>
            <li>Active participation during meetings</li>
            <li>Time from recommendation to implementation</li>
            <li>Worker awareness of committee activities</li>
          </ul>

          <p className="blog-body">
            Effective committees show improving safety performance, high
            engagement, and demonstrated impact on workplace conditions.
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
          Effective safety committees transform workplace safety from management
          directive to shared responsibility. Organizations that invest in
          genuine worker participation through well-structured committees build
          stronger safety cultures and achieve better safety outcomes.
        </p>

        <p className="innertopTextSubHeading_Points">
          Download our Safety Committee Charter Template to establish clear
          structure, responsibilities, and operating procedures.
        </p>

        <p className="blog-body">
          Bexex helps organizations establish and operate effective safety
          committees that drive genuine safety improvements. Our consultants
          provide training for committee members, facilitate initial meetings,
          and help integrate committees with broader safety management systems.{" "}
          <span className="blog-body-highlightColorBlue">
            Explore our workplace safety services
          </span>{" "}
          or contact us to strengthen your safety committee effectiveness..{" "}
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
