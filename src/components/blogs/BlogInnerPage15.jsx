import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/eco-friendly.png";
import noiseMonitoring from "../../assets/images/blog_imgs/industrial-noise-monitoring.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "Noise Monitoring SOP (PDF)",
    description:
      "Standard operating procedure covering measurement techniques, equipment calibration, documentation requirements, and control measures.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "How to Conduct Noise Level Assessment",
    description:
      "Video demonstration of noise monitoring techniques, equipment usage, and interpretation of results for compliance and control.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Noise Monitoring",
    anchor: "Noise-Monitoring",
  },
  {
    label: "Understanding Noise Regulations",
    anchor: "Understanding-Noise-Regulations",
  },
  {
    label: "Types of Noise Monitoring",
    anchor: "Types-of-Noise-Monitoring",
  },
  {
    label: "Measurement Techniques and Equipment",
    anchor: "Measurement-Techniques-and-Equipment",
  },
  {
    label: "Noise Control Hierarchy",
    anchor: "Noise-Control-Hierarchy",
  },
  {
    label: "Hearing Conservation Programs",
    anchor: "Hearing-Conservation-Programs",
  },
  {
    label: "Common Noise Monitoring Mistakes",
    anchor: "Common-Noise-Monitoring-Mistakes",
  },
  {
    label: "Integrating Noise Monitoring",
    anchor: "Integrating-Noise-Monitoring",
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
      question: "How often should we conduct noise monitoring?",
      answer:
        "Occupational monitoring annually minimum, or when processes change significantly. Environmental boundary monitoring per consent conditions, typically quarterly. More frequent monitoring advisable during initial program development or after implementing controls.",
    },
    {
      question: "Can we conduct noise monitoring in-house?",
      answer: (
        <>
          Organizations can perform internal monitoring for management purposes
          if personnel are trained and equipment properly calibrated. However,
          compliance demonstrations often require measurements by accredited
          industrial hygienists or{" "}
          <span className="blog-highlight itly">
            ISO 17025 accredited laboratories
          </span>
          .
        </>
      ),
    },
    {
      question: "What noise level requires hearing protection?",
      answer:
        "OSH Code requires hearing protection availability when exposures reach or exceed 85 dB(A). Protection becomes mandatory above 90 dB(A). Best practice provides protection at 85 dB(A) recognizing individual susceptibility variations.",
    },
    {
      question: "How do we select appropriate hearing protection?",
      answer:
        "Consider noise characteristics (frequency content, continuous vs. impact), required attenuation, comfort for extended wear, and compatibility with other PPE. Provide options allowing workers to select preferred style increasing consistent usage.",
    },
    {
      question: "What if workers refuse to wear hearing protection?",
      answer:
        "Address through training explaining hearing loss permanence, enforcement of safety rules, and investigating reasons for non-compliance (discomfort, communication difficulties, poor fit). Involve workers in selecting alternatives they'll consistently use.",
    },
  ];

  const tableConfig = {
    // heading: "User Management",
    theme: "dark", // "dark" | "light"
    columns: [
      { key: "name", label: "Monitoring Type" },
      { key: "email", label: "Purpose" },
      { key: "role", label: "Measurement Method" },
      { key: "status", label: "Typical Frequency" },
    ],
  };

  const tableData = [
    {
      name: "Personal Exposure Monitoring",
      email: "Assess individual worker exposure",
      role: "Dosimeters worn by workers throughout shift",
      status: "Annual or when processes change",
    },
    {
      name: "Area Monitoring",
      email: "Identify high-noise work areas",
      role: "Sound level meters at fixed locations",
      status: "Semi-annual or as needed",
    },
    {
      name: "Boundary Monitoring",
      email: "Verify environmental compliance",
      role: "Measurements at facility boundaries",
      status: "Quarterly or per consent conditions",
    },
    {
      name: "Source Monitoring",
      email: "Evaluate specific equipment noise",
      role: "Near-field measurements at noise sources",
      status: "During commissioning or troubleshooting",
    },
    // {
    //   name: "Network Security",
    //   email: "Firewalls, network segmentation, secure configuration",
    //   role: "Protect network infrastructure",
    //   // status: "Active",
    // },
    // {
    //   name: "Incident Management",
    //   email: "Detection, response procedures, evidence preservation",
    //   role: "Handle security incidents effectively",
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
              src={noiseMonitoring}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            Industrial <span className="blog-highlight itly">noise</span>{" "}
            monitoring
          </h1>
          <p className="blog-description">
            Noise pollution compliance India, occupational noise exposure, noise
            level assessment, workplace noise control, factory noise standards
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
          <p className="innertopText" id="Noise-Monitoring">
            Noise Monitoring in Industrial Environments
          </p>

          <p className="innertopTextSubHeading">
            Protecting workers and communities from excessive noise exposure
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Industrial noise often gets overlooked in environmental and safety
            programs. Unlike visible pollution or obvious chemical hazards,
            noise seems less threatening. Yet prolonged exposure to excessive
            noise causes permanent hearing loss affecting millions of Indian
            industrial workers. Beyond health impacts, noise creates community
            complaints, regulatory violations, and productivity losses from
            worker fatigue and communication difficulties.
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
            Systematic noise monitoring enables organizations to identify
            exposure levels, implement appropriate controls, and demonstrate
            compliance with occupational and environmental regulations.
            Effective programs protect worker health while addressing community
            concerns and regulatory requirements.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Studies from industrial health organizations show that facilities
            implementing comprehensive noise monitoring and control programs
            reduce noise-induced hearing loss cases by 70% while improving
            worker productivity through better communication and reduced
            fatigue.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-Noise-Regulations"
          >
            Understanding Noise Regulations in India
          </p>
          <p className="innertopTextSubHeading_Points">
            Occupational Exposure Standards:
          </p>
          <p className="blog-body blog-body-highlightColor">
            The Occupational Safety, Health and Working Conditions Code 2020
            (OSH Code) establishes permissible exposure limits for workplace
            noise. Workers must not be exposed to continuous noise exceeding 90
            dB(A) for 8-hour work shifts. Higher noise levels require reduced
            exposure duration following dose-based calculations.
          </p>
          <p className="blog-body blog-body-highlightColor">
            The Factories Act and state-specific rules also address noise
            exposure, requiring employers to reduce noise at source, provide
            hearing protection where noise cannot be adequately controlled, and
            conduct periodic audiometric testing for workers in high-noise
            areas.
          </p>

          <p className="innertopTextSubHeading_Points">
            Environmental Noise Standards:
          </p>
          <p className="blog-body">
            The Noise Pollution (Regulation and Control) Rules 2000 establish
            ambient noise standards for different area categories. Industrial
            areas have daytime limit of 75 dB(A) and nighttime limit of 70
            dB(A). Facilities near residential or commercial zones face stricter
            limits.
          </p>

          <p className="blog-body">
            State Pollution Control Boards enforce environmental noise standards
            through facility boundary monitoring requirements. Consent to
            Operate conditions often specify noise monitoring frequencies and
            measurement locations.
          </p>
          <p className="blog-body">
            Organizations implementing{" "}
            <Link to={"/blog/iso-45001-implementation-guide"} className="blog-body-highlightColorBlue">ISO 45001</Link> must
            identify noise as significant occupational health hazard and
            implement systematic controls.
          </p>

          <p className="innertopTextSubHeading" id="Types-of-Noise-Monitoring">
            Types of Noise Monitoring
          </p>
          {/* table  */}
          <DynamicTable config={tableConfig} data={tableData} />
          <p className="blog-body">
            <span className="innerBlogTextBold">Personal Noise Dosimetry </span>{" "}
            provides most accurate occupational exposure assessment. Small
            dosimeters worn by workers throughout shifts integrate noise
            exposure over time, accounting for movement between areas and work
            task variations. Results expressed as percentage of permissible
            exposure—100% means exposure at regulatory limit.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Area Monitoring </span> using
            sound level meters identifies high-noise zones requiring engineering
            controls or hearing protection. Spot measurements or continuous
            monitoring over work shifts characterize noise levels in different
            facility areas.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Boundary Monitoring </span> at
            facility property lines demonstrates environmental compliance.
            Measurements at points specified in consent conditions verify noise
            doesn't exceed limits at nearest sensitive receptors.
          </p>
          <p className="blog-body">
            Understanding{" "}
            <span className="blog-body-highlightColorBlue">HIRA processes</span>{" "}
            helps integrate noise hazards into comprehensive risk assessment
            programs.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Measurement-Techniques-and-Equipment"
          >
            Measurement Techniques and Equipment
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Sound Level Meters : </span>{" "}
            Basic instruments measuring instantaneous or time-averaged noise
            levels. Type 1 (precision) meters required for compliance
            measurements. Type 2 (general purpose) suitable for preliminary
            surveys. Meters must be calibrated before each measurement session
            using acoustic calibrators.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Noise Dosimeters : </span> Noise
            Dosimeters: Integrating instruments computing exposure dose over
            measurement period. Workers wear small microphones near hearing zone
            throughout shifts. Dosimeters must be properly positioned, protected
            from contamination, and downloaded promptly after measurements.
          </p>
          <p className="innertopTextSubHeading_Points">
            Measurement Parameters:
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">A-weighting : </span> Most
            common weighting approximating human ear response. Regulatory limits
            typically specified in dB(A).
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Time-weighted Average (TWA) :{" "}
            </span>{" "}
            Average exposure over specified time period, typically 8 hours for
            occupational standards.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Peak Levels :</span> Maximum
            instantaneous sound pressure. Important for impact noise from
            pneumatic tools, metal forming, or other impulse sources.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Octave Band Analysis : </span>
            Detailed frequency analysis identifying dominant noise frequencies.
            Essential for designing effective engineering controls.
          </p>
          {/* 
          <p className="blog-body">
            Regular{" "}
            <span className="blog-body-highlightColorBlue">
              security awareness training
            </span>{" "}
            transforms culture from viewing security as IT's problem to
            recognizing it as everyone's responsibility.
          </p> */}

          <p className="innertopTextSubHeading_Points">
            Measurement Procedures:
          </p>
          <p className="blog-body">
            Position microphones at ear height (approximately 1.5 meters)
            avoiding reflective surfaces. For personal monitoring, place
            microphone near worker's ear within hearing zone. Record measurement
            conditions including equipment operation, environmental factors, and
            work activities.
          </p>
          <p className="blog-body">
            Conduct measurements during representative operating conditions.
            Single measurements during abnormal operations don't characterize
            typical exposure. For area monitoring, measure during normal
            production including various operational states.
          </p>

          <p className="innertopTextSubHeading" id="Noise-Control-Hierarchy">
            Noise Control Hierarchy
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Apply hierarchy of controls prioritizing most effective solutions:
            </span>{" "}
          </p>
          <p className="innertopTextSubHeading_Points">
            Engineering Controls - Source Reduction :
          </p>
          <ul className="disk">
            <li>Replace noisy equipment with quieter alternatives</li>
            <li>
              Maintain equipment properly (worn bearings, loose components
              increase noise)
            </li>
            <li>
              Modify processes reducing noise generation (slower speeds, softer
              impacts)
            </li>
            <li>Install vibration damping on machinery</li>
            <li>Optimize cutting tool geometry and speeds in machining</li>
          </ul>
          <p className="innertopTextSubHeading_Points">
            Engineering Controls - Path Modification :
          </p>
          <ul className="disk">
            <li>Install acoustic enclosures around noisy equipment</li>
            <li>Use sound-absorbing materials on walls and ceilings</li>
            <li>Create barriers between noise sources and workers</li>
            <li>
              Increase distance between sources and receptors where feasible
            </li>
            <li>
              Implement vibration isolation preventing structure-borne noise
              transmission
            </li>
          </ul>
          <p className="innertopTextSubHeading_Points">
            Administrative Controls :
          </p>
          <ul className="disk">
            <li>Limit time workers spend in high-noise areas</li>
            <li>Rotate personnel between high and low noise tasks</li>
            <li>
              Schedule noisy operations during periods with fewer workers
              present
            </li>
            <li>
              Implement{" "}
              <span className="blog-body-highlightColorBlue">
                workplace safety training
              </span>{" "}
              on noise hazards
            </li>
            {/* <li>Implement vibration isolation preventing structure-borne noise transmission</li> */}
          </ul>
          <p className="innertopTextSubHeading_Points">
            Personal Protective Equipment :
          </p>
          <ul className="disk">
            <li>
              Provide appropriate hearing protection (earplugs, earmuffs, or
              combination)
            </li>
            <li>Ensure proper fit and usage through training</li>
            <li>
              Follow{" "}
              <span className="blog-body-highlightColorBlue">
                PPE selection guidelines
              </span>
            </li>
            {/* <li>Implement <span className="blog-body-highlightColorBlue">workplace safety training</span> on noise hazards</li> */}
            {/* <li>Implement vibration isolation preventing structure-borne noise transmission</li> */}
          </ul>
          <p className="blog-body">
            Never rely solely on hearing protection where engineering controls
            are feasible. PPE requires perfect usage consistency and fails when
            workers forget or improperly wear protection.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Hearing-Conservation-Programs"
          >
            Hearing Conservation Programs
          </p>
          <p className="blog-body">
            Facilities with noise exposures at or above 85 dB(A) should
            implement comprehensive hearing conservation programs including:
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Baseline and Periodic Audiometry :{" "}
            </span>{" "}
            Conduct hearing tests for workers in high-noise areas. Baseline
            audiograms establish starting hearing levels. Annual tests detect
            hearing changes enabling early intervention.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Training and Education : </span>{" "}
            Workers must understand noise hazards, control measures, proper
            hearing protection use, and audiometric testing purpose. Training
            should occur during initial assignment and annually thereafter.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Recordkeeping : </span> Maintain
            noise measurement results, audiometric test records, training
            documentation, and hearing protection issuance records. These
            records demonstrate program effectiveness and support workers'
            compensation claims if hearing loss occurs.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Program Evaluation : </span>{" "}
            Review program effectiveness annually. Analyze audiometric test
            trends identifying areas where controls need improvement. Track
            hearing protection usage compliance through observations and worker
            feedback.
          </p>
          <p className="blog-body">
            Organizations using{" "}
            <span className="blog-body-highlightColorBlue">CAPA processes</span>{" "}
            systematically address audiometric test results showing hearing
            threshold shifts.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Environmental-Noise-Management"
          >
            Environmental Noise Management
          </p>
          <p className="blog-body">For boundary noise compliance, consider:</p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Source Controls: </span>{" "}
            Engineering controls reducing occupational noise also reduce
            environmental emissions. Enclosed processes and well-maintained
            equipment benefit both workers and community.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Barriers and Berms : </span>{" "}
            Solid barriers between noise sources and facility boundaries provide
            significant attenuation. Earth berms combining mass and vegetation
            offer dual benefits.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Operational Controls : </span>{" "}
            Schedule high-noise activities during daytime when limits are less
            restrictive. Avoid nighttime operations of particularly noisy
            equipment near residential areas.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Monitoring Points : </span>{" "}
            Establish permanent monitoring locations at points specified in
            consent conditions. Regular measurements at consistent locations
            enable trend tracking.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Community Relations : </span>{" "}
            Proactively communicate with neighbors about noise management
            efforts. Investigate complaints promptly and implement corrective
            measures. Good community relations prevent escalation to regulatory
            enforcement.
          </p>
          <p className="blog-body">
            Include noise performance in{" "}
            <span className="blog-body-highlightColorBlue">
              management review meetings
            </span>{" "}
            ensuring leadership attention to both occupational and environmental
            noise management.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Common-Noise-Monitoring-Mistakes"
          >
            Common Noise Monitoring Mistakes
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Inadequate Measurement Duration :{" "}
            </span>{" "}
            Spot measurements during quiet periods don't represent actual
            exposure. Conduct measurements during typical operations over
            sufficient duration capturing variability.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Improper Calibration : </span>{" "}
            Uncalibrated instruments produce unreliable results. Always
            calibrate before and after measurement sessions. Maintain
            calibration records.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Ignoring Impact Noise : </span>{" "}
            Continuous noise monitoring misses intermittent high-level impacts.
            Use instruments capable of capturing peak levels from impact
            sources.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Poor Documentation : </span>{" "}
            Incomplete records of measurement conditions prevent meaningful
            interpretation. Document equipment operated, production rates,
            environmental conditions, and unusual circumstances.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              No Follow-Up on High Readings :{" "}
            </span>{" "}
            Identifying high noise levels means nothing without implementing
            controls. Use measurement results to drive engineering improvements
            and exposure reduction.
          </p>
          <p className="blog-body">
            Organizations implementing{" "}
            <span className="blog-body-highlightColorBlue">
              environmental compliance programs
            </span>{" "}
            integrate noise monitoring into broader environmental management.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Integrating-Noise-Monitoring"
          >
            Integrating Noise Monitoring with Safety Systems
          </p>
          {/* <p className="innertopTextSubHeading_Points">Infrequent Reviews</p> */}
          <p className="blog-body">
            Noise monitoring shouldn't operate in isolation. Integration with
            broader safety management creates synergy:
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Safety Committee Involvement :{" "}
            </span>{" "}
            <span className="blog-body-highlightColorBlue">
              Safety committees
            </span>{" "}
            should review noise monitoring results, participate in control
            measure selection, and monitor implementation effectiveness.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Internal Audit Coverage :{" "}
            </span>{" "}
            Include noise monitoring compliance in{" "}
            <span className="blog-body-highlightColorBlue">
              internal audits
            </span>
            . Verify measurements conducted on schedule, controls maintained
            properly, and hearing protection used consistently.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              New Equipment Evaluation :{" "}
            </span>{" "}
            Consider noise emissions when specifying new equipment. Request
            noise data from vendors. Include noise performance in procurement
            criteria.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Change Management : </span>{" "}
            Evaluate noise impacts when making process changes. Modifications
            increasing production rates or speeds may increase noise requiring
            reassessment.
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
          Effective noise monitoring protects worker health, ensures regulatory
          compliance, and maintains community relations. Organizations
          implementing systematic programs reduce hearing loss risks while
          demonstrating environmental responsibility.
        </p>

        <p className="innertopTextSubHeading_Points">
          Download our Noise Monitoring SOP to establish systematic measurement
          and control programs.
        </p>

        <p className="blog-body">
          Bexex provides comprehensive noise monitoring services including
          occupational exposure assessment, environmental boundary monitoring,
          and engineering control design. Our industrial hygienists use
          calibrated equipment and follow standardized protocols.{" "}
          <span className="blog-body-highlightColorBlue">
            Explore our environmental monitoring services
          </span>{" "}
          or contact us for noise assessment needs.
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
