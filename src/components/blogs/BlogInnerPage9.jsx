import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/third-party-inspection.png";
import hazardIdentification from "../../assets/images/blog_imgs/Hazard-Identification.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "HIRA Format (Excel)",
    description:
      "Comprehensive template with hazard categories, risk matrix, control hierarchy, and action tracking.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "HIRA Workshop — Live Session",
    description:
      "Video walkthrough of complete HIRA process with real examples from Indian manufacturing environments.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Proactively managing workplace",
    anchor: "Proactively-managing-workplace",
  },
  {
    label: "Understanding HIRA Fundamentals",
    anchor: "Understanding-HIRA-Fundamentals",
  },
  {
    label: "Types of Workplace Hazards",
    anchor: "Types-of-Workplace-Hazards",
  },
  {
    label: "The HIRA Process: Step-by-Step",
    anchor: "The-HIRA-Process:-Step-by-Step",
  },
  {
    label: "Effective Hazard Identification Techniques",
    anchor: "Effective-Hazard-Identification-Techniques",
  },
  {
    label: "Documenting HIRA Findings",
    anchor: "Documenting-HIRA-Findings",
  },
  {
    label: "Common HIRA Pitfalls to Avoid",
    anchor: "Common-HIRA-Pitfalls-to-Avoid",
  },
  {
    label: "Integrating HIRA with Safety Management",
    anchor: "Integrating-HIRA-with-Safety-Management",
  },
  {
    label: "Building Documentation That Works",
    anchor: "Building-Documentation-That-Works",
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
      question: "How often should HIRA be conducted?",
      answer:
        "Review all assessments annually minimum. Conduct new assessments when introducing new processes, equipment, or materials. Update existing assessments after incidents or near-misses. Significant process changes trigger immediate reassessment.",
    },
    {
      question: "Who should conduct HIRA?",
      answer:
        "Cross-functional teams including supervisors, experienced workers, maintenance personnel, and safety professionals. Teams of 4-6 people work well. Rotate team membership over time to bring fresh perspectives.",
    },
    {
      question: "Do we need separate HIRA for each work area?",
      answer:
        "Organize HIRA by process, area, or activity—whatever makes sense for your operations. Similar processes can share assessments if hazards are identical. Unique operations require separate assessments.",
    },
    {
      question: "How do we determine severity and likelihood ratings?",
      answer:
        "Use historical incident data when available. Consult industry statistics for activities you perform infrequently. Involve experienced personnel who understand operations. Accept that some judgment is required—perfect precision isn't the goal.",
    },
    {
      question: "Should we assess risks assuming controls are in place or absent?",
      answer:
        "Assess inherent risk (before controls) first to understand hazard severity. Then evaluate residual risk (after existing controls) to determine if additional measures are needed. This approach shows control effectiveness.",
    },
  ];

 


  // table data
  const tableConfig = {
  heading: "Hazard Identification",
  theme: "dark", // "dark" | "light"
  columns: [
    { key: "category", label: "Hazard Category" },
    { key: "examples", label: "Examples" },
    { key: "sources", label: "Common Sources" },
  ],
};



const tableData = [
  {
    category: "Physical",
    examples: "Noise, vibration, heat, cold, radiation, pressure",
    sources: "Machinery, equipment, work environment",
  },
  {
    category: "Chemical",
    examples: "Solvents, acids, bases, dusts, fumes, gases",
    sources: "Raw materials, process chemicals, cleaning agents, welding",
  },
   {
    category: "Biological",
    examples: "Bacteria, viruses, fungi, insects",
    sources: "Wastewater, organic materials, contaminated surfaces",
  },
  {
    category: "Ergonomic",
    examples: "Repetitive motion, awkward postures, manual handling, static positions",
    sources: "Assembly work, material handling, computer work",
  },
  {
    category: "Psychosocial",
    examples: "Work pressure, harassment, violence, isolation",
    sources: "Work organization, interpersonal relationships",
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
              src={hazardIdentification}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            HIRA <span className="blog-highlight itly">process</span>{" "}
          </h1>
          <p className="blog-description">
            hazard identification, risk assessment workplace, HIRA methodology, workplace safety India, ISO 45001 risk assessment
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
          <p className="innertopText" id="Common-Mistakes-in-ISO-Documentation">
           Hazard Identification and Risk Assessment (HIRA) — Simplified
          </p>

          <p className="innertopTextSubHeading" id="Proactively-managing-workplace">
              Proactively managing workplace risks before incidents occur
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Workplace incidents rarely happen without warning. Most accidents result from hazards that existed for months or years before someone got hurt. The machinery guard that was always awkward to use. The chemical storage area with poor ventilation. The repetitive motion that strained workers' backs. These hazards sat in plain sight, waiting for the wrong combination of circumstances to cause injury.
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
           Hazard Identification and Risk Assessment (HIRA) provides systematic methodology for finding these hazards before incidents occur. It enables organizations to evaluate which risks posgreatest threats and implement controls preventing harm. Yet many organizations struggle with HIRA, creating elaborate risk matrices that gather dust while actual hazards remain unaddressed.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Research from Indian manufacturing sectors shows that organizations conducting thorough HIRA reduce workplace incidents by 50-60% within the first year of implementation compared to reactive safety programs.
          </p>






          <p className="innertopTextSubHeading_Points" id="Understanding-HIRA-Fundamentals">
            Understanding HIRA Fundamentals

          </p>

          <p className="blog-body blog-body-highlightColor">
          HIRA consists of two interconnected processes. Hazard identification systematically finds workplace hazards—anything with           potential to cause harm. Risk assessment evaluates the likelihood and severity of harm from identified hazards. Together, they           provide foundation for <span className="blog-body-highlightColorBlue">ISO 45001</span>  compliance and effective safety           management.
          </p>

          <p className="blog-body blog-body-highlightColor">
             <span className="innerBlogTextBold">Hazard</span> means anything with potential to cause injury, illness, property damage, or environmental harm. Hazards include physical conditions, chemical substances, biological agents, ergonomic factors, and psychosocial stressors. A hazard doesn't guarantee harm will occur—it represents potential for harm under certain conditions.
          </p>
          <p className="blog-body blog-body-highlightColor">
             <span className="innerBlogTextBold">Risk </span> 
              measures the combination of likelihood that hazard will cause harm and severity of that harm. High-risk hazards require immediate attention and robust controls. Low-risk hazards may need only basic precautions or ongoing monitoring.
          </p>
          <p className="blog-body blog-body-highlightColor">
            The key distinction: hazards represent potential for harm, while risks measure that potential's significance. You can't eliminate all hazards from workplaces, but you can reduce risks to acceptable levels through appropriate controls.
          </p>



            <p className="innertopTextSubHeading_Points" id="Types-of-Workplace-Hazards">
             Types of Workplace Hazards
            </p>
          <p className="blog-body blog-body-highlightColor">
           Effective HIRA begins with understanding hazard categories. Organizing hazard identification by type ensures comprehensive coverage without overlooking important hazard sources.
          </p>

          <DynamicTable config={tableConfig} data={tableData} />


          <p className="blog-body blog-body-highlightColor">
           Understanding these categories helps teams brainstorm comprehensively during hazard identification sessions. Teams that focus only on obvious physical hazards often miss significant ergonomic and psychosocial risks affecting worker health over time.
          </p>
          <p className="blog-body blog-body-highlightColor">
          Organizations implementing comprehensive safety management through <span className=" ISO 45001"></span> must consider all hazard categories, not just traditional safety concerns.
          </p>









          <p className="innertopTextSubHeading" id="The-HIRA-Process:-Step-by-Step">
           The HIRA Process: Step-by-Step
          </p>

          <p className="innertopTextSubHeading_Points">
         Step 1: Preparation and Team Formation
          </p>




          <p className="blog-body">
           Effective HIRA requires cross-functional teams bringing diverse perspectives. Include supervisors who understand processes, experienced workers who know where problems occur, maintenance personnel aware of equipment issues, and safety professionals providing technical expertise.
          </p>
          <p className="blog-body">
          Divide your facility into manageable sections for systematic coverage—by department, process, or area. Attempting to assess an entire facility in single session overwhelms teams and produces superficial results. Breaking into sections enables thorough examination while maintaining manageable scope.
          </p>
          <p className="blog-body">
          Gather relevant information before starting: process flow diagrams, equipment manuals, safety data sheets for chemicals, incident records, and previous risk assessments. This background information focuses discussions and prevents overlooking known hazards.
          </p>





          <p className="innertopTextSubHeading_Points">
           Step 2: Hazard Identification
          </p>
          <p className="blog-body">
           Walk through each area or process systematically. Observe work activities, examine equipment and materials, interview workers, and review documentation. Consider routine operations, non-routine activities like maintenance and startups, and emergency situations.
          </p>

          <p className="innertopTextSubHeading_Points" id="Effective-Hazard-Identification-Techniques">
           Effective Hazard Identification Techniques:
          </p>


          <p className="blog-body">
           Ask "what if" questions: What if this guard is removed? What if ventilation fails? What if two incompatible chemicals mix?
          </p>
          <p className="blog-body">
            Review incident history: What injuries have occurred here? What near-misses have workers reported? Patterns in past incidents reveal ongoing hazards.
          </p>
          <p className="blog-body">
            Observe actual work: Watch how tasks are actually performed, not just how procedures describe them. Workers often develop informal practices that create unrecognized hazards.
          </p>
          <p className="blog-body">
           Consult workers: People doing the work daily know where hazards exist. Create environments where workers feel comfortable identifying hazards without fear of blame.
          </p>
          <p className="blog-body">
          Consider lifecycle: Think beyond normal operations to installation, maintenance, cleaning, troubleshooting, and decommissioning activities.
          </p>
          <p className="blog-body">
             Understanding <span className="blog-body-highlightColorBlue">common mistakes in ISO documentation</span>  helps ensure HIRA findings are properly documented for future reference.
          </p>





          <p className="innertopTextSubHeading_Points">
          Step 3: Risk Assessment
          </p>
          <p className="blog-body">
           For each identified hazard, assess risk by evaluating severity and likelihood. Severity measures potential consequences if harm occurs. Likelihood estimates probability of harm occurring during a specified time period.
          </p>
          <p className="innerBlogTextBold">
           Severity Levels:
          </p>
            <ul className="disk">
                <li> <span className="innerBlogTextBold">Catastrophic:</span>  Multiple fatalities or permanent total disabilities</li>
                <li> <span className="innerBlogTextBold"> Critical:</span> Single fatality or permanent partial disability</li>
                <li> <span className="innerBlogTextBold">Serious:</span> Lost-time injury requiring medical treatment</li>
                <li> <span className="innerBlogTextBold">Moderate:</span> Minor injury requiring first aid</li>
                <li> <span className="innerBlogTextBold">Negligible:</span> Discomfort or minor irritation</li>
                
            </ul>

          <p className="innerBlogTextBold">
          Likelihood Levels:
          </p>
            <ul className="disk">
                <li> <span className="innerBlogTextBold">Almost Certain: </span>Expected to occur frequently (multiple times per year)</li>
                <li> <span className="innerBlogTextBold">Likely: </span>Will probably occur (once per year)</li>
                <li> <span className="innerBlogTextBold">Possible: </span>Might occur occasionally (once every few years)</li>
                <li> <span className="innerBlogTextBold">Unlikely: </span> Could occur but rarely (once per decade)</li>
                <li> <span className="innerBlogTextBold">Rare: </span> Theoretically possible but highly improbable</li>
                
            </ul>

            <p className="blog-body">
              Combine severity and likelihood using risk matrix to determine risk level. This prioritization focuses resources on highest risks requiring immediate attention.
            </p>



          



          

          <p className="innertopTextSubHeading_Points">
           Step 4: Control Measures
          </p>
          <p className="blog-body">
           Apply hierarchy of controls to manage identified risks, starting with most effective:
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Elimination :</span> Remove the hazard entirely. Replace manual material handling with automated systems. Eliminate toxic chemicals by reformulating products. This is the most effective control but often requires significant investment or process redesign.
          </p>
         

          <p className="blog-body">
            <span className="innerBlogTextBold">Substitution :</span>
            Replace hazardous materials or processes with safer alternatives. Use water-based paints instead of solvent-based. Replace pneumatic tools with electric to reduce noise and vibration.
          </p>



          <p className="blog-body">
            <span className="innerBlogTextBold">Engineering Controls: </span>
           Install physical controls that reduce exposure without relying on worker behavior. Machine guards prevent contact with moving parts. Local exhaust ventilation captures fumes at source. Acoustic enclosures reduce noise exposure.
          </p>


          <p className="blog-body">
            <span className="innerBlogTextBold">Administrative Controls :</span>
          Change work methods to reduce exposure. Implement job rotation to limit repetitive motion exposure. Establish permit-to-work systems for high-risk activities. Provide <span className="blog-body-highlightColorBlue">workplace safety training</span>  to build worker awareness and skills.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">Personal Protective Equipment:  :</span>
            Provide PPE as last line of defense when other controls are insufficient. Understanding <span className="blog-body-highlightColorBlue">PPE selection and usage</span>  ensures workers receive appropriate protection without over-reliance on PPE where better controls exist.
          </p>
          <p className="blog-body">
           Never rely solely on PPE when higher-level controls are feasible. PPE requires perfect use every time to provide protection. It fails when workers forget to wear it, wear it incorrectly, or equipment degrades.
          </p>

          

          <p className="innertopTextSubHeading" id="Documenting-HIRA-Findings">
            Documenting HIRA Findings
          </p>
          <p className="blog-body">
           Documentation serves multiple purposes: regulatory compliance demonstration, communication tool for workers and management, baseline for monitoring effectiveness, and input for <span className="blog-body-highlightColorBlue">management review meetings</span>.
          </p>
          <p className="innertopTextSubHeading_Points">
        Effective HIRA documentation includes:
          </p>


          <p className="blog-body">
  <span className="innerBlogTextBold">Identified Hazards:</span>{" "}
  Clear description of each hazard, where it exists, who may be affected, and under what circumstances exposure occurs.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Risk Assessment:</span>{" "}
  Severity rating, likelihood rating, calculated risk level, and rationale for ratings.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Existing Controls:</span>{" "}
  Current measures already in place managing the risk.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Residual Risk:</span>{" "}
  Risk level after considering existing controls. This determines whether additional controls are needed.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Required Actions:</span>{" "}
  Additional control measures needed, responsible persons, target completion dates, and resources required.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Review Information:</span>{" "}
  Assessment date, team members involved, next review date.
</p>

<p className="blog-body">
  Maintain HIRA documentation as living documents updated when processes change, incidents occur, or periodic reviews reveal new information. Integrate HIRA with your{" "}
  <span className="blog-body-highlightColorBlue">document control system</span>{" "}
  ensuring current versions are accessible while obsolete versions are archived.
</p>





      <p className="innertopTextSubHeading" id="Common-HIRA-Pitfalls-to-Avoid">
          Common HIRA Pitfalls to Avoid
      </p>
      <p className="blog-body">
  <span className="innerBlogTextBold">Generic Assessments:</span>{" "}
  Copying HIRA from similar facilities without customization misses site-specific hazards. Conduct actual assessments even when templates exist.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">One-Time Exercise:</span>{" "}
  HIRA isn't a project you complete then forget. Processes change, equipment ages, personnel turnover occurs. Schedule regular reviews—annually minimum, or when significant changes happen.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Desk-Based Assessment:</span>{" "}
  Completing HIRA from your office without visiting work areas produces theoretical assessments disconnected from reality. Walk the areas, observe work, talk to people.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Overcomplicating:</span>{" "}
  Elaborate risk scoring systems requiring complex calculations discourage use. Simple approaches work better than sophisticated methodologies nobody understands.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Ignoring Worker Input:</span>{" "}
  Workers doing the tasks daily know hazards better than anyone. HIRA without worker participation misses critical insights.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">All Controls Are PPE:</span>{" "}
  Defaulting to PPE for every hazard represents lazy risk management. Push yourself up the hierarchy of controls toward elimination and engineering solutions.
</p>

<p className="blog-body">
  Organizations using{" "}
  <span className="blog-body-highlightColorBlue">CAPA processes</span>{" "}
  effectively address HIRA findings systematically rather than allowing identified risks to languish without action.
</p>





 <p className="innertopTextSubHeading" id="Integrating-HIRA-with-Safety-Management">
        Integrating HIRA with Safety Management
      </p>


      <p className="blog-body">
  HIRA shouldn't exist in isolation. It integrates with broader safety management activities providing foundation for multiple processes.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Safety Committee Activities:</span>{" "}
  HIRA findings provide agenda items for{" "}
  <span className="blog-body-highlightColorBlue">safety committee</span>{" "}
  discussions about priorities and resource allocation.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Training Programs:</span>{" "}
  Hazard information informs what training workers need. High-risk processes require specialized training addressing specific hazards.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Emergency Preparedness:</span>{" "}
  HIRA identifies scenarios requiring{" "}
  <span className="blog-body-highlightColorBlue">emergency response planning</span>{" "}
  such as chemical spills, fires, or equipment failures.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Contractor Management:</span>{" "}
  <span className="blog-body-highlightColorBlue">Contractor safety management</span>{" "}
  uses HIRA to brief contractors on site-specific hazards before work begins.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Incident Investigation:</span>{" "}
  When incidents occur, review relevant HIRA. Did assessment miss hazards? Were controls inadequate? Update HIRA based on incident lessons.
</p>

<p className="blog-body">
  <span className="innerBlogTextBold">Performance Monitoring:</span>{" "}
  Track incidents by hazard category. Patterns reveal where HIRA needs improvement or where control implementation is insufficient.
</p>

<p className="blog-body">
  Organizations implementing{" "}
  <span className="blog-body-highlightColorBlue">integrated management systems</span>{" "}
  extend HIRA principles to environmental aspects and quality risks, creating unified risk management approaches.
</p>






























          
          <p className="innertopTextSubHeading_Points">
            Mistake #8: Forgetting the Purpose
          </p>
          <p className="blog-body">
            Perhaps the most fundamental mistake is losing sight of why
            documentation exists. Organizations treat documentation as necessary
            evil for certification rather than valuable business tool. This
            mindset produces minimum viable documentation that satisfies
            auditors while adding zero operational value.
          </p>
          <p className="blog-body">
            Documentation should capture organizational knowledge, ensure
            process consistency, support training, enable improvement, and
            demonstrate due diligence. When documentation serves these purposes,
            it becomes asset not burden. When created solely for compliance, it
            becomes wasteful overhead.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">The Solution :</span> Before
            creating any document, articulate its purpose. How will this
            document help the organization? Who will use it and for what? If you
            can't articulate clear business value beyond "auditors require it,"
            reconsider whether the document is necessary.
          </p>
          <p className="blog-body">
            Focus documentation on processes that matter—those affecting product
            quality, customer satisfaction, regulatory compliance, or safety.
            Don't document trivial processes just to inflate procedure counts.
          </p>
          <p className="blog-body">
            Organizations implementing{" "}
            <span className="blog-body-highlightColorBlue">ISO 45001</span> or{" "}
            <span className="blog-body-highlightColorBlue">ISO 14001</span>{" "}
            should integrate documentation across management systems rather than
            creating separate document sets for quality, environment, and
            safety.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Building-Documentation-That-Works"
          >
            Building Documentation That Works
          </p>
          <p className="blog-body">
            Effective ISO documentation shares common characteristics. It's
            concise—providing necessary information without unnecessary detail.
            It's clear—using simple language accessible to all users. It's
            current—reflecting actual practice and updated regularly. It's
            controlled—managed through systematic processes preventing obsolete
            versions. Most importantly, it's useful—people actually reference it
            during work.
          </p>
          <p className="blog-body">
            Creating such documentation requires cultural shift. Stop viewing
            documentation as compliance checkbox. Start treating it as knowledge
            management investment. Involve workers in development. Keep language
            simple. Maintain ruthless version control. Review and update
            systematically. Focus on value over volume.
          </p>
          <p className="blog-body">
            Organizations that approach documentation strategically find it
            supports rather than hinders operations. Well-documented processes
            enable consistent execution, faster training, effective
            troubleshooting, and continuous improvement. Poor documentation
            creates confusion, inefficiency, and audit findings.
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
        Effective HIRA transforms workplace safety from reactive incident response to proactive risk prevention. Organizations that conduct thorough, regular HIRA identify and control hazards before they cause harm.
        </p>

        <p className="innertopTextSubHeading_Points">
        Download our HIRA Template to structure your hazard identification and risk assessment process.
        </p>

        <p className="blog-body">


          Bexex helps organizations implement comprehensive HIRA programs tailored to their specific operations and hazards. Our safety consultants facilitate HIRA workshops, train internal teams, and integrate HIRA with broader safety management systems. <span className="blog-body-highlightColorBlue"></span> Explore our workplace safety services or contact us to discuss your HIRA needs.

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
