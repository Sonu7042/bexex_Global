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
    title: "Internal Audit Checklist (PDF)",
    description:
      "Comprehensive checklist covering ISO 9001, 14001, and 45001 requirements with audit tips and sample questions.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Internal Audit Process — Live Walkthrough",
    description:
      "Video demonstration of complete audit from planning through reporting with real-world manufacturing examples.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  { label: "How to Conduct an Internal Audit", anchor: "Conduct-Internal-Audit" },
  { label: "Understanding Internal Audit Purpose", anchor: "Internal-Audit-Purpose" },
  { label: "Planning the Audit Program", anchor: "the-Audit-Program" },
  { label: "Preparing for Individual Audits", anchor: "Preparing-for-Individual-Audits" },
  { label: "Conducting the Opening Meeting", anchor: "the-Opening-Meeting" },
  { label: "Gathering Audit Evidence", anchor: "Gathering-Audit-Evidence" },
  { label: "Identifying and Documenting Findings", anchor: "and-Documenting-Findings" },
  { label: "Conducting the Closing Meeting", anchor: "Conducting-the-Closing-Meeting" },
  { label: "Reporting and Follow-Up", anchor: "Reporting-and-Follow-Up" },
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
      question: "How long should internal audits take?",
      answer:
        "Duration depends on scope and complexity. Small departments might require 2-3 hours. Major processes spanning multiple areas could need full days. Plan sufficient time for thorough examination without rushing, typically allocating 1-2 hours per auditor per process area.",
    },
    {
      question: "Can we audit our own department?",
      answer:
        "No. Auditors must be independent of the activities they audit. However, you can audit other departments while someone else audits yours. This cross-functional approach builds organizational knowledge while maintaining objectivity.",
    },
    {
      question: "What qualifications do internal auditors need?",
      answer: (
        <>
          ISO standards require auditors to be competent but don't mandate
          specific certifications. Many organizations provide{" "}
          <span className="blog-body-highlightColorBlue">
            internal auditor training
          </span>{" "}
          to build this competence.
        </>
      ),
    },
    {
      question: "How many non-conformities should we expect to find?",
      answer:
        "There's no target number. Well-functioning systems might have few non-conformities. Newly implemented systems or areas undergoing change typically have more. Focus on finding genuine issues rather than meeting quotas.",
    },
    {
      question: "Should we share audit schedules in advance?",
      answer:
        "Yes. Advance notice allows auditees to arrange personnel availability and prepare relevant documentation. Surprise audits rarely add value in internal audit programs and tend to create defensive behaviors that reduce cooperation.",
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
            internal <span className="blog-highlight itly">audit</span> process
          </h1>
          <p className="blog-description">
            Step-by-step guide to conducting effective internal audits. Learn
            planning, execution, reporting, and follow-up for ISO management
            systems.
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
          <p className="innertopText" id="Conduct-Internal-Audit">
            How to Conduct an Internal Audit: A Practical Guide
          </p>

          <p className="blog-body">
            Transforming audits from compliance exercises to improvement engines
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Internal audits represent one of the most powerful tools available
            to organizations for improving their management systems. Yet many
            companies treat audits as necessary evils—compliance requirements
            that consume time without adding value. Auditors rush through
            checklists, auditees provide minimal responses, and reports gather
            dust without driving meaningful change.
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
            The difference between ineffective and valuable audits lies in
            approach. Audits focused solely on finding problems create defensive
            behaviors and minimal cooperation. Audits conducted as collaborative
            improvement exercises generate insights, engage stakeholders, and
            drive genuine system enhancement.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Research from Indian manufacturing sectors shows that organizations
            conducting high-quality internal audits identify 35% more
            improvement opportunities and achieve 25% faster corrective action
            implementation compared to those performing superficial compliance
            checks.
          </p>

          <p className="innertopTextSubHeading" id="Internal-Audit-Purpose">
            Understanding Internal Audit Purpose
          </p>
          <p className="blog-body blog-body-highlightColor">
            Internal audits serve multiple objectives beyond checking boxes for
            certification bodies. Understanding these broader purposes helps
            auditors approach their work more effectively.
          </p>

          <p className="blog-body blog-body-highlightColor">
            Verification of conformity represents the most obvious purpose.
            Audits confirm that the organization's management system meets
            standard requirements and follows documented procedures. This
            conformity check satisfies{" "}
            <span className="blog-body-highlightColorBlue">ISO 9001</span>,{" "}
            <span className="blog-body-highlightColorBlue">ISO 14001</span>, and{" "}
            <span className="blog-body-highlightColorBlue">ISO 45001</span>
            requirements for periodic internal assessment.
          </p>

          <p className="blog-body blog-body-highlightColor">
            Improvement identification leverages auditor insights. Experienced
            auditors recognize when processes work inefficiently even if they
            meet requirements. Sharing observations about potential
            improvements—without writing non-conformities—helps organizations
            enhance operations continuously.
          </p>

          <p className="blog-body blog-body-highlightColor">
            Management information provision gives leadership visibility into
            system performance. Audit reports aggregate findings across the
            organization, revealing patterns, systemic issues, and areas
            requiring management attention. This information feeds into{" "}
            <span className="blog-body-highlightColorBlue">
              management review meetings
            </span>{" "}
            where strategic decisions occur.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Competence development happens when auditors and auditees engage
            constructively. Audits expose people to different perspectives,
            processes, and best practices. This cross-functional exposure builds
            organizational capability beyond the immediate audit scope.
          </p>

          <p className="innertopTextSubHeading" id="the-Audit-Program">
            Planning the Audit Program
          </p>
          <p className="blog-body">
            Effective audits begin with thoughtful program planning. Annual
            audit programs ensure comprehensive coverage while allowing
            flexibility for emerging priorities.
          </p>
          <p className="blog-body">
            Define audit scope and frequency based on risk and importance.
            High-risk processes, areas with previous non-conformities, or
            functions critical to customer satisfaction warrant more frequent
            auditing. Stable, low-risk processes can be audited less frequently.
            This risk-based approach aligns with{" "}
            <span className="blog-body-highlightColorBlue">
              ISO 9001's risk-based thinking
            </span>{" "}
            principles.
          </p>
          <p className="blog-body">
            Ensure all management system elements receive audit coverage within
            the planning cycle. ISO standards typically require audits cover all
            processes at planned intervals—usually interpreted as annually.
            Organizations may audit different processes at different times
            throughout the year rather than conducting one massive audit.
          </p>
          <p className="blog-body">
            Assign qualified auditors with appropriate independence. Auditors
            shouldn't audit their own work or areas where they have direct
            responsibility. Cross-functional auditing—having production
            personnel audit maintenance, for example—builds objectivity while
            developing broader organizational understanding.
          </p>
          <p className="blog-body">
            Consider integration opportunities for organizations with multiple
            management systems. Rather than separately auditing quality,
            environmental, and safety systems,{" "}
            <span className="blog-body-highlightColorBlue">
              integrated audits
            </span>{" "}
            improve efficiency and highlight system interactions.
          </p>
          <p className="blog-body">
            Document the audit program with sufficient detail for
            implementation. Include which processes will be audited, when, by
            whom, and against what criteria. This documented program
            demonstrates systematic planning to certification bodies and
            provides a roadmap for audit execution.
          </p>

          <p className="innertopTextSubHeading" id="Preparing-for-Individual-Audits">
            Preparing for Individual Audits
          </p>
          <p className="blog-body">
            Once the annual program is established, each individual audit
            requires specific preparation to maximize effectiveness.
          </p>

          <p className="blog-body">
            Review background information before the audit. Examine previous
            audit reports to understand historical issues. Check recent
            performance data to identify trends. Review customer complaints,
            non-conformity reports, and corrective actions related to the audit
            area. This preparation focuses audit attention on relevant concerns
            rather than generic requirement checking.
          </p>
          <p className="blog-body">
            Develop an audit plan that communicates logistics to auditees.
            Include audit date, time, expected duration, auditors assigned,
            processes to be covered, and key personnel to be interviewed. Share
            this plan with auditees several days in advance so they can arrange
            availability and prepare necessary documentation.
          </p>
          <p className="blog-body">
            Prepare audit checklists as memory aids, not scripts. Well-designed
            checklists ensure requirement coverage and maintain consistency
            across audits. However, auditors should remain flexible to pursue
            unexpected observations rather than rigidly following checklists
            regardless of what they discover.
          </p>
          <p className="blog-body">
            Confirm availability of key personnel. Nothing derails audits faster
            than discovering critical people are traveling, in urgent meetings,
            or on leave. Verify availability when scheduling and reconfirm
            shortly before the audit.
          </p>
          <p className="blog-body">
            Arrange logistics for opening and closing meetings. Book conference
            rooms, arrange projector if presenting slides, and ensure sufficient
            time for discussions. These meetings frame the audit and ensure
            shared understanding of findings.
          </p>

          <p className="innertopTextSubHeading" id="the-Opening-Meeting">
            Conducting the Opening Meeting
          </p>
          <p className="blog-body">
            Opening meetings set the tone for the entire audit. Effective
            openings create collaborative atmospheres rather than adversarial
            confrontations.
          </p>
          <p className="blog-body">
            Introduce the audit team and explain each member's role. Clarify who
            leads the audit, who focuses on which processes, and who takes
            notes. This clarity prevents confusion during audit execution.
          </p>

          <p className="blog-body">
            Confirm the audit scope, objectives, and criteria. Ensure everyone
            understands which processes, areas, or activities the audit covers
            and which requirements apply. Address any questions about scope
            before beginning field work.
          </p>
          <p className="blog-body">
            Explain the audit methodology. Describe how auditors will gather
            evidence—through document review, interviews, and observations.
            Clarify that auditors seek objective evidence, not opinions or
            justifications. Set expectations for open access to personnel,
            records, and work areas.
          </p>
          <p className="blog-body">
            Outline the timeline and logistics. Walk through the audit schedule,
            explaining when auditors will be in which areas and who they need to
            interview. Confirm closing meeting time and location.
          </p>
          <p className="blog-body">
            Emphasize the audit's improvement focus. Frame the audit as an
            opportunity to identify strengths and improvement opportunities, not
            a fault-finding exercise. Encourage open dialogue and promise
            constructive feedback. This positive framing reduces defensiveness
            and improves cooperation.
          </p>

          <p className="innertopTextSubHeading" id="Gathering-Audit-Evidence">Gathering Audit Evidence</p>
          <p className="blog-body">
            The heart of internal auditing lies in effective evidence gathering.
            Multiple techniques complement each other to build comprehensive
            understanding.
          </p>
          <p className="blog-body">
            Document examination verifies that required documentation exists and
            meets requirements. Review procedures, work instructions, forms, and
            records for completeness, currency, and adequacy. Check that{" "}
            <span className="blog-body-highlightColorBlue">
              document control systems
            </span>{" "}
            prevent use of obsolete documents.
          </p>
          <p className="blog-body">
            Interviews with personnel provide insights into actual practices.
            Ask open-ended questions that encourage detailed responses: "Walk me
            through how you handle incoming materials." Avoid yes/no questions
            that generate minimal information. Listen actively, allowing people
            to fully explain before probing deeper. Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              common ISO documentation mistakes
            </span>{" "}
            helps auditors recognize when documented procedures don't reflect
            reality.
          </p>
          <p className="blog-body">
            RDirect observation of activities reveals whether actual practice
            matches documented procedures. Watch work being performed. Observe
            equipment operation. Examine work areas for housekeeping, safety
            conditions, and organization. Observation often uncovers gaps that
            interviews miss because people describe what should happen rather
            than what actually occurs.
          </p>
          <p className="blog-body">
            Physical evidence examination provides objective facts. Review
            calibration labels on instruments. Check expiration dates on
            materials. Examine maintenance records. Count inventory. Physical
            evidence confirms or contradicts verbal claims.
          </p>
          <p className="blog-body">
            Process tracing follows work from input to output, crossing
            organizational boundaries. Start with a customer order and trace it
            through receipt, planning, production, inspection, and shipment.
            This process view reveals handoff problems, delays, and
            communication gaps that departmental audits miss.
          </p>
          <p className="blog-body">
            Sampling techniques ensure adequate coverage without reviewing
            everything. Select representative samples that provide confidence in
            conclusions. Document sampling rationale so audit conclusions remain
            defensible.
          </p>

          <p className="innertopTextSubHeading" id="and-Documenting-Findings">
            Identifying and Documenting Findings
          </p>
          <p className="blog-body">
            Distinguishing between significant issues requiring corrective
            action and minor observations helps prioritize improvement efforts.
          </p>
          <p className="blog-body">
            Non-conformities represent failures to meet specified requirements.
            Major non-conformities indicate systematic failures or complete
            absence of required system elements. Minor non-conformities reflect
            isolated lapses that don't indicate systemic breakdown. Learning to
            write clear{" "}
            <span className="blog-body-highlightColorBlue">
              audit non-conformities and corrective action requests
            </span>{" "}
            ensures findings drive effective improvement.
          </p>
          <p className="blog-body">
            Write specific, factual findings that include three elements: the
            requirement, the objective evidence observed, and the gap between
            them. Avoid vague statements like "calibration inadequate." Instead
            write: "Micrometer MC-015 calibration certificate expired May 2024
            per label inspection, violating procedure QP-12 requirement for
            annual calibration."
          </p>
          <p className="blog-body">
            Observations note areas for improvement that don't constitute
            non-conformities. These might include inefficiencies, best practice
            opportunities, or areas where current approaches could be enhanced.
            Sharing observations demonstrates auditor value beyond compliance
            checking.
          </p>
          <p className="blog-body">
            Positive findings deserve recognition too. When auditors observe
            particularly effective practices, innovative solutions, or exemplary
            implementation, documenting these positives encourages their
            continuation and potential replication elsewhere.
          </p>
          <p className="blog-body">
            Discuss findings with auditees during the audit. This immediate
            feedback allows clarification of misunderstandings before they
            become documented non-conformities. It also gives auditees
            opportunity to provide additional evidence that might resolve
            apparent gaps.
          </p>

          <p className="innertopTextSubHeading" id="Conducting-the-Closing-Meeting">
            Conducting the Closing Meeting
          </p>
          <p className="blog-body">
            Summarize audit scope and coverage. Remind attendees which processes
            were audited and confirm that planned activities were completed.
            This context frames the findings presentation.
          </p>
          <p className="blog-body">
            Present findings systematically, starting with positive
            observations. Acknowledge effective practices and areas of strong
            performance. This positive opening creates receptiveness for
            subsequent critical findings.
          </p>
          <p className="blog-body">
            Present non-conformities with supporting evidence. Explain what
            requirement wasn't met and what objective evidence revealed the gap.
            Remain factual and avoid judgmental language. Focus on processes,
            not personalities.
          </p>
          <p className="blog-body">
            Allow discussion and clarification. Auditees may provide additional
            evidence or context that affects findings. However, avoid extended
            debates—document disagreements for later resolution rather than
            delaying the closing meeting.
          </p>
          <p className="blog-body">
            Communicate next steps clearly. Explain expectations for corrective
            action responses, timelines, and verification processes. Clarify who
            receives the audit report and when.
          </p>
          <p className="blog-body">
            Thank participants for their cooperation and time. End on a
            constructive note that emphasizes shared commitment to improvement.
            Organizations implementing{" "}
            <span className="blog-body-highlightColorBlue">CAPA processes</span>{" "}
            benefit from clear audit follow-up procedures.
          </p>

          <p className="innertopTextSubHeading" id="Reporting-and-Follow-Up">Reporting and Follow-Up</p>
          <p className="blog-body">
            Audit reports communicate findings to management and drive
            corrective actions. Effective reports balance completeness with
            conciseness.
          </p>
          <p className="blog-body">
            Structure reports consistently with sections covering audit details,
            executive summary, detailed findings, and conclusions about system
            effectiveness. Include audit scope, dates, auditors, areas covered,
            and personnel interviewed.
          </p>
          <p className="blog-body">
            Write clearly and specifically. Avoid jargon or overly technical
            language that obscures meaning. Ensure readers understand what was
            found, why it matters, and what needs fixing.
          </p>
          <p className="blog-body">
            Distribute reports promptly—within one week of audit completion.
            Delayed reports lose impact and urgency. Rapid reporting enables
            quicker corrective action initiation.
          </p>
          <p className="blog-body">
            Follow up systematically on corrective actions. Verify that
            responses address root causes, not just symptoms. Confirm
            implementation of proposed solutions. Close out findings only when
            objective evidence demonstrates effective correction.
          </p>
          <p className="blog-body">
            Track audit metrics over time. Monitor trends in non-conformities by
            area, type, or process. Analyze whether repeat findings indicate
            ineffective corrective actions or deeper systemic issues. Share
            these analyses during{" "}
            <span className="blog-body-highlightColorBlue">
              management reviews
            </span>{" "}
            to inform strategic decisions.
          </p>

          {/* <p className="innertopTextSubHeading">
            Frequently Asked Questions
          </p>


          <p className="innertopTextSubHeading_Points">
           Does ISO 9001:2015 require a documented risk register?
          </p>
          <p className="blog-body">
            No. The standard requires risk-based thinking but doesn't mandate specific documentation formats. Organizations decide how to document their approach based on what's useful for their operations.
          </p>


           <p className="innertopTextSubHeading_Points">
           How detailed should risk assessments be?
          </p>
          <p className="blog-body">
           Sufficient to drive appropriate action. Complex quantitative analysis suits significant risks with major consequences. Simple qualitative judgment suffices for routine operational risks. Match assessment rigor to risk significance.
          </p>


          <p className="innertopTextSubHeading_Points">
          Who should conduct risk assessments?
          </p>
          <p className="blog-body">
           People with process knowledge and authority to implement treatments. Quality managers shouldn't assess all risks alone. Engage process owners, technical experts, and front-line employees who understand what can go wrong.
          </p>


          <p className="innertopTextSubHeading_Points">
          How often should risks be reassessed?
          </p>
          <p className="blog-body">
          When significant changes occur—new products, processes, equipment, or suppliers. Additionally, conduct periodic reviews at least annually. High-risk areas may warrant more frequent assessment.
          </p>



          <p className="innertopTextSubHeading_Points">
          Can we use existing risk methods like FMEA?
          </p>
          <p className="blog-body">
          Absolutely. If you're already using FMEA, HAZOP, or other structured risk methods, they fulfill risk-based thinking requirements. ISO 9001:2015 doesn't prescribe methods—use what works for your organization.
          </p>
 */}

          {/* <p className="innertopTextSubHeading">
           Your Next Steps
          </p>
          <p className="blog-body">
           Risk-based thinking transforms quality management from reactive problem-solving to proactive excellence. Organizations that embed this mindset into daily operations prevent problems before they occur and seize opportunities others miss.
          </p>

          <p className="innertopTextSubHeading_Points">
          Download our Risk Assessment Template to structure your risk identification and treatment planning.
          </p>
          <p className="blog-body">
           Bexex helps organizations implement practical risk-based thinking that drives real operational improvement. Our consultants bring experience across diverse industries and guide teams through risk assessment methods suited to your context. Explore our ISO 9001 consulting services or contact us to discuss your risk management needs.
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
            </p> */}
          {/* </div> */}
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
          Effective internal audits require planning, skilled execution, and
          systematic follow-up. Organizations that approach audits as
          collaborative improvement exercises rather than compliance obligations
          realize substantially greater value from their audit programs.
        </p>

        <p className="innertopTextSubHeading_Points">
          Download our Internal Audit Checklist to structure your audit process
          and ensure comprehensive coverage.
        </p>

        <p className="blog-body">
          Bexex's experienced auditors provide internal audit services and
          auditor training across multiple management system standards. We help
          organizations build audit programs that drive genuine improvement
          while meeting certification requirements.{" "}
          <span className="blog-body-highlightColorBlue">
            Explore our internal audit services
          </span>{" "}
          or contact us to discuss your audit needs.
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
