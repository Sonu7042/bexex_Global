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
    title: "Risk Assessment Template (Excel)",
    description:
      "Simple risk register format with likelihood/impact matrix and treatment planning fields.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Risk-Based Thinking Explained with Examples",
    description:
      "Practical video demonstration of risk identification and treatment in manufacturing contexts.",
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
            ISO 9001  &nbsp;<span className="blog-amp">&amp;</span>&nbsp;
            <span className="blog-highlight itly">risk-based</span> <br />
            thinking
          </h1>
          <p className="blog-description">
           Learn how to implement risk-based thinking in ISO 9001:2015. Practical approaches to identify risks, assess opportunities, and integrate into QMS.
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
          ISO 9001:2015 — Understanding Risk-Based Thinking
          </p>

          <p className="blog-body">
            Moving from reactive problem-solving to proactive risk management
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
           ISO 9001:2015 introduced a fundamental shift in quality management philosophy. Unlike its predecessor, the 2015 revision doesn't mandate documented procedures for preventive action. Instead, it embeds risk-based thinking throughout the entire quality management system. This change recognizes that quality management isn't about following rigid procedures—it's about thinking ahead, anticipating problems, and seizing opportunities.
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
            Yet five years after the standard's release, many Indian organizations still struggle with risk-based thinking. A 2023 survey by the Quality Council of India found that 60% of certified companies lack documented risk registers beyond what's needed for certification audits. The reason is simple: organizations treat risk-based thinking as a checkbox exercise rather than integrating it into daily operations.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Effective risk-based thinking doesn't require elaborate risk matrices or complex calculations. It requires asking simple questions at every process step: What could go wrong? What's already working well? How can we improve?
          </p>

          <p className="innertopTextSubHeading" id="iso-standards">
          What Risk-Based Thinking Really Means
          </p>

          <p className="blog-body blog-body-highlightColor">
           Risk-based thinking represents a mindset more than a methodology. ISO 9001:2015 defines risk as the effect of uncertainty on expected results. This definition is broader than traditional risk concepts focused solely on negative outcomes. Uncertainty can create both threats to avoid and opportunities to pursue.
          </p>

          <p className="blog-body blog-body-highlightColor">
            The standard requires organizations to consider risks and opportunities when planning their quality management systems. This doesn't mean conducting formal risk assessments for everything. It means being thoughtful about what could affect your ability to deliver conforming products and satisfy customers.
          </p>

          <p className="blog-body blog-body-highlightColor">
           For a textile manufacturer in Surat, risk-based thinking means recognizing that dye-lot variability poses quality risks and adjusting supplier agreements accordingly. For a Bangalore electronics firm, it means acknowledging dependency on a single logistics provider and developing backup arrangements. These aren't complex risk calculations—they're practical business judgments informed by experience.
          </p>

          <p className="blog-body blog-body-highlightColor">
           Organizations already implementing <span className="blog-body-highlightColorBlue"> ISO 45001</span> or <span className="blog-body-highlightColorBlue">ISO 14001</span>  may find risk-based thinking familiar. Both standards emphasize systematic risk assessment. The principles translate readily across management systems, particularly for organizations pursuing <span className="blog-body-highlightColorBlue">integrated management systems.</span> 
          </p>





          <p className="innertopTextSubHeading" id="iso-framework">
          Where Risk-Based Thinking Applies in ISO 9001
          </p>

          <p className="blog-body">
           Risk-based thinking isn't confined to one clause of ISO 9001:2015. It permeates the entire standard, influencing how organizations approach quality management at every level.
          </p>
          <p className="blog-body">
           Understanding <span className="blog-body-highlightColorBlue">context of the organization</span>  requires risk thinking. Organizations must identify external issues like regulatory changes, market conditions, and competitive pressures that create uncertainty. Internal issues like resource constraints, workforce capabilities, and infrastructure limitations also generate risks and opportunities.
          </p>
          <p className="blog-body">
           Planning the QMS demands explicit risk assessment. Clause 6.1 requires organizations to determine risks and opportunities that need addressing to ensure the QMS achieves intended results, enhance desirable effects, and prevent undesirable effects. Organizations must plan actions to address these risks and integrate them into QMS processes.
          </p>
          <p className="blog-body">
          Operational planning incorporates risk thinking. When organizations design and develop products, they must determine potential failures and their consequences. When selecting suppliers, they assess risks associated with external providers. When planning production, they consider risks that could affect conformity of products and services.
          </p>
          <p className="blog-body">
         Performance evaluation includes risk considerations. <span className="blog-body-highlightColorBlue"> Internal audits</span> should focus on high-risk processes. <span className="blog-body-highlightColorBlue">Management reviews</span>  must evaluate effectiveness of actions taken to address risks and opportunities.
          </p>
          <p className="blog-body">
       Improvement activities respond to risks. When nonconformities occur, <span className="blog-body-highlightColorBlue">corrective actions</span>  eliminate causes to prevent recurrence—essentially risk mitigation. Organizations should proactively improve processes in areas where risks to quality exist, even if problems haven't yet occurred.
          </p>




          <p className="innertopTextSubHeading">
           Practical Risk Identification Methods
          </p>
          <p className="blog-body">
           Risk identification doesn't require sophisticated techniques. Simple, practical approaches work effectively for most organizations.
          </p>

          <p className="blog-body">
            Process mapping reveals risk points. Walk through your processes from start to finish, identifying handoffs between departments, decision points, and dependencies on external factors. These transition points often harbor risks. A process map showing material flow from receiving through production to shipping highlights where delays, errors, or quality issues might arise.
          </p>
          <p className="blog-body">
           Brainstorming with process owners generates risk insights. People doing the work daily know what can go wrong. Facilitated sessions asking "What keeps you awake at night about this process?" produce remarkably accurate risk inventories. Document these discussions and prioritize identified risks based on likelihood and potential impact.
          </p>
          <p className="blog-body">
          Historical data analysis identifies patterns. Review past nonconformities, customer complaints, audit findings, and process performance data. Recurring problems indicate systemic risks requiring attention. A pattern of late deliveries from specific suppliers signals supply chain risk. Consistent measurement errors from particular equipment indicate calibration or training risks.
          </p>
          <p className="blog-body">
         Customer feedback highlights external risks. What concerns do your customers express? What additional requirements are they imposing? Changes in customer expectations create risks if your processes can't adapt. Understanding <span className="blog-body-highlightColorBlue">supplier evaluation processes</span>  helps assess risks from your supply chain perspective, while considering your position as a supplier helps identify customer-related risks.
          </p>
          <p className="blog-body">
        Industry benchmarking reveals risks you might miss. What challenges face other companies in your sector? Industry associations, technical forums, and professional networks share common risk experiences. Learning from others' problems allows proactive risk management rather than reactive firefighting.
          </p>








          <p className="innertopTextSubHeading">
            Assessing and Prioritizing Risks
          </p>
          <p className="blog-body">
            Not all risks deserve equal attention. Practical risk assessment helps prioritize where to focus resources. Simple approaches work better than complex methodologies that consume time without adding insight.
          </p>
          <p className="blog-body">
            Likelihood and impact matrices provide straightforward prioritization. Assess each identified risk on two dimensions: How likely is it to occur? How severe would the impact be if it occurs? A simple 3x3 matrix (low/medium/high for each dimension) suffices for most purposes.
          </p>

          <p className="blog-body">
            High likelihood, high impact risks demand immediate attention. These are your critical few—address them first. Medium risks require monitoring and contingency planning. Low likelihood, low impact risks may need no action beyond awareness.
          </p>
          <p className="blog-body">
           Consider detection capability when assessing risks. Some risks are obvious when they occur, allowing quick response. Others remain hidden until significant damage accumulates. Risks with poor detection deserve higher priority even if likelihood seems moderate.            
          </p>
          <p className="blog-body">
           Quantitative assessment helps for significant risks. Calculate potential costs of risk realization—customer loss, warranty claims, regulatory penalties, operational downtime. Compare these costs to mitigation investments. This business case approach helps secure management support for risk treatment.            
          </p>
          <p className="blog-body">
          Organizations in specialized sectors may need sector-specific risk assessment. <span className="blog-body-highlightColorBlue">IATF 16949 automotive quality</span>  systems emphasize FMEA (Failure Mode and Effects Analysis). <span className="blog-body-highlightColorBlue">AS9100 aerospace standards</span>  require configuration management to address change-related risks. <span className="blog-body-highlightColorBlue">ISO 13485 medical device</span>  systems demand risk management per ISO 14971. Adapt your approach to industry expectations while maintaining practical simplicity.            
          </p>












          <p className="innertopTextSubHeading">
            Taking Action on Risks and Opportunities
          </p>
          <p className="blog-body">
           Identifying risks accomplishes nothing without action. Risk treatment options range from risk avoidance to risk acceptance, with various mitigation strategies between.
          </p>
          <p className="blog-body">
           Risk avoidance eliminates the activity creating risk. If a process consistently produces nonconformities and adds limited value, eliminate it. If a supplier repeatedly fails quality requirements despite improvement efforts, find alternative sources. Avoidance is the strongest risk treatment when feasible.
          </p>
          <p className="blog-body">
          Risk reduction implements controls that decrease likelihood or impact. Enhanced inspection catches defects before they reach customers. Redundant suppliers prevent single-source dependencies. Preventive maintenance reduces equipment failure risks. Training improves workforce capability and reduces human error. Most risk treatment involves reduction strategies.
          </p>
          <p className="blog-body">
         Risk sharing transfers risk consequences to others. Insurance covers financial impacts. Contractual terms allocate risks between parties. Outsourcing transfers operational risks to service providers. Sharing doesn't eliminate risks but limits your exposure.
          </p>
          <p className="blog-body">
         Risk acceptance acknowledges risks but takes no specific action. When likelihood is low, impact is minimal, and treatment costs exceed potential consequences, acceptance makes business sense. Document accepted risks and rationale to demonstrate conscious decision-making rather than oversight.
          </p>
          <p className="blog-body">
         Opportunity pursuit requires proactive action. When risk assessment reveals favorable uncertainties—new market segments, process improvements, efficiency gains—develop action plans to capture benefits. Treat opportunities as seriously as threats.
          </p>








          <p className="innertopTextSubHeading">
            Integrating Risk Thinking into Daily Operations
          </p>
          <p className="blog-body">
           The real test of risk-based thinking isn't documentation—it's whether people actually think about risks in daily work. Integration requires cultural change supported by practical mechanisms.
          </p>
          <p className="blog-body">
            Include risk discussions in regular meetings. Production meetings should ask "What risks do we face this week?" Project reviews should evaluate whether planned risk treatments are working. <span className="blog-body-highlightColorBlue">Management reviews</span>  should assess overall effectiveness of risk-based thinking.
          </p>
          <p className="blog-body">
            Embed risk considerations in decision-making. When evaluating process changes, ask what new risks they introduce. When launching products, assess what could affect customer satisfaction. When selecting suppliers, consider beyond price to evaluate reliability, quality capability, and business stability.
          </p>
          <p className="blog-body">
           Make risk information accessible. Maintain a risk register that people actually reference rather than a document created for auditors. Simple formats work best—a spreadsheet listing risks, owners, treatments, and status that's reviewed and updated regularly.
          </p>
          <p className="blog-body">
           Connect risks to performance indicators. If late delivery is a key risk, track on-time delivery metrics. If quality defects concern you, monitor first-pass yield. Performance data validates whether risk treatments work and highlights when new risks emerge.
          </p>
          <p className="blog-body">
           Recognize risk thinking in practice. When employees identify and address risks proactively, acknowledge their efforts. When teams prevent problems through risk-aware planning, celebrate successes. Cultural change happens through recognition and reinforcement.
          </p>




          <p className="innertopTextSubHeading">
           Common Pitfalls to Avoid
          </p>
          <p className="blog-body">
           Organizations frequently encounter predictable challenges implementing risk-based thinking. Awareness helps avoid these traps.
          </p>
          <p className="blog-body">
           Over-documentation represents the most common mistake. Organizations create elaborate risk registers, detailed assessment methodologies, and complex matrices that consume time without driving action. ISO 9001:2015 intentionally doesn't require documented risk assessments—only that risk-based thinking occurs.
          </p>
          <p className="blog-body">
            Analysis paralysis delays action. Some organizations study risks endlessly without implementing treatments. Perfect risk assessment isn't necessary. Good enough assessment followed by action beats perfect assessment followed by nothing.
          </p>
          <p className="blog-body">
           Disconnect between documentation and reality undermines effectiveness. Risk registers created for certification audits but never referenced operationally serve no purpose. If your team doesn't use risk information, it's waste.
          </p>
          <p className="blog-body">
          Static risk assessments miss changing conditions. Risks evolve as your business changes. Periodic review and update ensures risk thinking remains relevant. Integrate risk reviews into <span className="blog-body-highlightColorBlue"> internal audit</span> schedules and management review cycles.
          </p>
          <p className="blog-body">
         Neglecting opportunities limits benefits. Risk-based thinking encompasses both threats and opportunities. Organizations focused solely on preventing problems miss the standard's encouragement to pursue improvement opportunities proactively.
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
          Risk-based thinking transforms quality management from reactive problem-solving to proactive excellence. Organizations that embed this mindset into daily operations prevent problems before they occur and seize opportunities others miss.
        </p>

        <p className="innertopTextSubHeading_Points">
         Download our Risk Assessment Template to structure your risk identification and treatment planning.
        </p>

        <p className="blog-body">
         Bexex helps organizations implement practical risk-based thinking that drives real operational improvement. Our consultants bring experience across diverse industries and guide teams through risk assessment methods suited to your context. Explore  <span className="blog-body-highlightColorBlue">our ISO 9001 consulting services</span>   or contact us to discuss your risk management needs.
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
