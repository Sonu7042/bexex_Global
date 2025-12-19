import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/eco-friendly.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "Emergency Preparedness Toolkit (Word + Excel)",
    description:
      "Complete toolkit including emergency response plan template, drill evaluation forms, equipment inspection checklists, and training record formats.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Conducting Effective Emergency Drills",
    description:
      "Step-by-step video guide to planning and executing emergency drills with evaluation techniques and common pitfalls to avoid.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Emergency Preparedness & Response Planning",
    anchor: "Emergency-Preparedness-and-Response-Planning",
  },
  {
    label: "Understanding Emergency Types & Risk",
    anchor: "Understanding-Emergency-Types-and-Risk",
  },
  {
    label: "Developing Emergency Response Plans",
    anchor: "Developing-Emergency-Response-Plans",
  },
  {
    label: "Building Emergency Response Capabilities",
    anchor: "Building-Emergency-Response-Capabilities",
  },
  {
    label: "Conducting Effective Emergency Drills",
    anchor: "Conducting-Effective-Emergency-Drills",
  },
  {
    label: "Integrating External Emergency Services",
    anchor: "Integrating-External-Emergency-Services",
  },
  {
    label: "Regulatory Compliance Requirements",
    anchor: "Regulatory-Compliance-Requirements",
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
      question: "How often should emergency drills be conducted?",
      answer:
        "Regulatory minimums typically require annual drills, though best practice suggests quarterly full drills plus monthly tabletop exercises. High-risk operations benefit from monthly full-scale drills maintaining peak readiness.",
    },
    {
      question: "What size emergency response team is needed?",
      answer:
        "Team size depends on facility scale, shift patterns, and risk levels. Minimum viable teams include incident commander, evacuation coordinator, first aid responder, and fire response capability. Large 24/7 operations require teams of 10-15 per shift ensuring coverage during absences.",
    },
    {
      question: "Are external agency approvals required for emergency plans?",
      answer:
        "Chemical facilities handling threshold quantities under MSIHC Rules require District Emergency Authority approval. Other industries may need State Pollution Control Board review. Requirements vary by industry type and location.",
    },
    {
      question: "How long should emergency drills take?",
      answer:
        "Evacuation drills should complete within 5-10 minutes for most facilities. Response team activation and initial response typically requires 2-5 minutes. Full scenario drills including external coordination may extend to 30-60 minutes.",
    },
    {
      question: "What documentation is mandatory?",
      answer:<>
        Required documentation includes written emergency response plans, drill records with attendance and evaluation notes, training records, equipment inspection logs, and external agency coordination evidence. Retain records for regulatory inspection and <span className="blog-body-highlightColorBlue">management review</span>.</>,
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
              src={construction_worker_img}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            Emergency <span className="blog-highlight itly">preparedness</span>{" "}
            response plan
          </h1>
          <p className="blog-description">
            emergency response planning India, disaster management plan, crisis
            preparedness, ERP compliance, emergency drill procedures
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
          <p
            className="innertopText"
            id="Emergency-Preparedness-and-Response-Planning"
          >
            Emergency Preparedness and Response Planning
          </p>

          <p className="innertopTextSubHeading">
            Protecting people and assets through systematic crisis readiness
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Industrial emergencies strike without warning. Fires, chemical
            releases, equipment failures, natural disasters, or security
            incidents can unfold within minutes, leaving no time for planning.
            Organizations without systematic emergency preparedness face chaotic
            responses, preventable injuries, property damage, regulatory
            violations, and operational disruptions extending far beyond the
            initial incident.
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
            The Factories Act 1948, Disaster Management Act 2005, and various
            industrial safety regulations mandate emergency preparedness for
            Indian industries. Yet compliance often remains superficial—outdated
            plans sitting in files, untrained response teams, and drills
            conducted as checkbox exercises rather than genuine readiness
            validation.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Effective emergency preparedness transforms crisis situations from
            chaotic disasters into managed incidents where trained personnel
            execute practiced procedures, minimizing harm to people, property,
            and business continuity.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-Emergency-Types-and-Risk"
          >
            Understanding Emergency Types and Risks
          </p>
          {/* <p className="innertopTextSubHeading_Points">
            Occupational Exposure Standards:
          </p> */}
          <p className="blog-body blog-body-highlightColor">
            Comprehensive emergency planning addresses diverse scenarios based
            on facility-specific risks identified through systematic hazard
            assessment.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Fire emergencies represent the most common industrial crisis.
            Flammable materials, hot work, electrical faults, or equipment
            overheating can trigger fires requiring immediate response.
            Understanding fire classification Class A combustibles, Class B
            flammables, Class C electrical, or Class D metal fires determines
            appropriate suppression methods and equipment needs.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Chemical emergencies involve spills, leaks, or releases of hazardous
            materials. Severity depends on chemical properties, quantities, and
            exposure pathways. Toxic gases demand immediate evacuation, while
            liquid spills may allow controlled containment. Organizations
            implementing{" "}
            <span className="blog-body-highlightColorBlue">
              ISO 14001 environmental systems
            </span>{" "}
            integrate chemical emergency planning with broader environmental
            management.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Natural disasters including earthquakes, floods, cyclones, or
            extreme weather events require location-specific preparation.
            Coastal facilities plan for cyclones and storm surge, while northern
            operations address earthquake risks. Climate change increases
            extreme weather frequency, making natural disaster preparedness
            increasingly critical.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Medical emergencies from workplace injuries, sudden illness, or
            exposure incidents demand immediate first aid and medical evacuation
            capabilities. Understanding <span className="blog-body-highlightColorBlue">occupational health requirements</span> helps
            integrate medical emergency response with workplace safety
            management.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Security incidents including unauthorized access, sabotage, or
            threats require coordination with law enforcement while protecting
            personnel and assets. The threat landscape varies by location,
            industry, and facility profile.
          </p>

          <p className="innertopTextSubHeading" id="Developing-Emergency-Response-Plans">
            Developing Emergency Response Plans
          </p>
          <p className="blog-body">
            Effective emergency response plans provide clear guidance enabling rapid, coordinated response under stressful conditions. Documentation must be concise, accessible, and regularly updated.
          </p>

          <p className="blog-body">
            Command structure establishes authority and responsibilities during emergencies. Incident commanders coordinate overall response, making critical decisions and allocating resources. Functional roles include evacuation coordinators, first aid responders, fire brigade members, communication officers, and shutdown operators. Clear succession planning ensures leadership continuity if primary responders are unavailable.
          </p>
          <p className="blog-body">
            Emergency contact information enables rapid communication with internal response teams, external emergency services, regulatory authorities, and key stakeholders. Contact lists require regular verification—outdated numbers render plans ineffective. Include 24/7 contact methods for critical personnel and maintain both digital and printed copies accessible during power or system failures.
          </p>
          <p className="blog-body">
            Facility-specific procedures address unique risks and configurations. Chemical facilities document spill containment procedures, neutralization methods, and exposure treatment. Manufacturing plants detail equipment shutdown sequences preventing secondary damage. Multi-story buildings specify evacuation routes, assembly points, and disabled personnel assistance procedures.
          </p>
          <p className="blog-body">
            Resource inventories identify emergency equipment locations—fire extinguishers, spill kits, first aid supplies, personal protective equipment, and emergency tools. Maps showing equipment locations, utility shutoffs, and hazardous material storage enable rapid response. Organizations maintaining <span className="blog-body-highlightColorBlue">document control systems</span> ensure emergency plans remain current as facilities change.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Building-Emergency-Response-Capabilities"
          >
            Building Emergency Response Capabilities
          </p>
          {/* table 
          <DynamicTable config={tableConfig} data={tableData} /> */}

          <p className="blog-body">
            Plans alone don't ensure effective response. Trained, equipped teams with practiced procedures determine actual emergency performance.
          </p>
          <p className="blog-body">
            Emergency response team formation identifies personnel with appropriate skills, physical fitness, and willingness to assume emergency roles. Team size depends on facility scale and shift patterns—24/7 operations require teams across all shifts. Redundancy prevents capability gaps when key personnel are absent.
          </p>
          <p className="blog-body">
            Training programs develop competencies for assigned roles. Fire response training covers extinguisher types, fire behavior, and safe fighting techniques. First aid certification enables injury treatment pending medical evacuation. Hazmat response training addresses containment, decontamination, and exposure management. Regular refresher training maintains skills and updates procedures.
          </p>
          <p className="blog-body">
            Equipment provision supplies tools for effective response. Fire suppression systems, portable extinguishers, emergency lighting, communication devices, first aid kits, spill containment materials, and personal protective equipment must be available, maintained, and accessible. Inspection schedules verify equipment functionality before emergencies occur.
          </p>
          <p className="blog-body">
            Communication systems enable coordination during chaotic situations. Public address systems broadcast evacuation orders. Two-way radios connect response teams. Emergency sirens signal specific threats. Backup power ensures systems function during infrastructure failures. <span className="blog-body-highlightColorBlue">Internal audit processes</span> verify communication system readiness.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Conducting-Effective-Emergency-Drills"
          >
            Conducting Effective Emergency Drills
          </p>
          <p className="blog-body">
            Emergency drills validate preparedness, identify weaknesses, and build response confidence through realistic practice under controlled conditions.
          </p>
          <p className="blog-body">
            Drill planning defines scenarios, objectives, and success criteria before execution. Announced drills allow evaluation of procedural understanding, while unannounced drills test spontaneous response capabilities. Vary scenarios across drills—fires, chemical spills, medical emergencies, or evacuations—ensuring comprehensive preparedness.
          </p>
          <p className="blog-body">
            Tabletop exercises gather response personnel discussing hypothetical scenarios without physical activity. These low-resource exercises test decision-making, communication protocols, and procedural understanding. Facilitators introduce complications—equipment failures, injured responders, or changing conditions—evaluating adaptation capabilities.
          </p>
          <p className="blog-body">
            Full-scale drills simulate actual emergencies with evacuation, equipment deployment, and external coordination. Time evacuation completion, assess assembly point accountability, and evaluate response team effectiveness. Include external agencies—fire departments, medical services, or pollution control boards—building relationships and coordination before real emergencies.
          </p>
          <p className="blog-body">
           Post-drill evaluations identify improvement opportunities through structured debriefing. What worked well? What failed? Were procedures clear? Was equipment adequate? Did communication function effectively? Document findings and implement <span className="blog-body-highlightColorBlue">corrective actions</span> addressing identified gaps.
          </p>
          <p className="blog-body">
           Drill frequency balances preparedness needs against operational disruption. Regulatory minimums often specify annual drills, though quarterly or monthly exercises maintain higher readiness levels, particularly for high-risk operations.
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

          <p
            className="innertopTextSubHeading"
            id="Integrating-External-Emergency-Services"
          >
            Integrating External Emergency Services
          </p>
          <p className="blog-body">
           Industrial emergencies often exceed internal response capabilities, requiring fire departments, medical services, hazmat teams, or law enforcement assistance. Pre-emergency coordination ensures effective collaboration during crises.
          </p>
          <p className="blog-body">
            Facility familiarization allows external responders understanding site layouts, hazards, and resources before emergencies. Arrange facility tours showing access routes, hazardous areas, utility controls, and water sources. Share emergency plans, chemical inventories, and facility maps. This preparation enables faster, safer external response.
          </p>
          <p className="blog-body">
            Joint exercises build working relationships and test coordination procedures. Include external agencies in drills, practicing communication protocols, resource integration, and unified command. Address practical issues radio compatibility, access permissions, or hazard communication methods—before crises occur.
          </p>
          <p className="blog-body">
           Mutual aid agreements with neighboring facilities provide backup resources and expertise. Chemical plants might share hazmat capabilities. Manufacturing complexes coordinate fire response resources. These arrangements multiply available resources beyond individual facility capabilities.
          </p>
          {/* <ul className="disk">
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
          </ul> */}


          <p
            className="innertopTextSubHeading"
            id="Regulatory-Compliance-Requirements"
          >
            Regulatory Compliance Requirements
          </p>
          <p className="blog-body">
            Multiple regulations mandate emergency preparedness for Indian industries, with specific requirements varying by industrial category and location.
          </p>
          <p className="blog-body">
            The Factories Act 1948 requires emergency exits, fire-fighting equipment, and alarm systems. The Manufacture, Storage, and Import of Hazardous Chemicals Rules (MSIHC) impose detailed emergency planning requirements for chemical facilities including on-site and off-site emergency plans.
          </p>
          <p className="blog-body">
           The Disaster Management Act 2005 mandates disaster management plans for critical facilities. State Pollution Control Boards require environmental emergency plans for industries handling hazardous materials. <span className="blog-body-highlightColorBlue">Legal register maintenance</span> helps track applicable emergency preparedness obligations.
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
          Effective emergency preparedness requires systematic development, regular practice, and continuous improvement based on drill findings and incident learning.
        </p>
        <p className="innertopTextSubHeading_Points">
          Download our Emergency Response Plan Template providing structured framework for documenting facility-specific emergency procedures aligned with regulatory requirements
        </p>

        <p className="blog-body">
          Need expert guidance developing comprehensive emergency preparedness programs? Bexex safety specialists have supported industrial facilities across India with emergency planning, response team training, and drill facilitation. <span className="blog-body-highlightColorBlue">Explore our EHS consulting services</span> or contact us for emergency preparedness assessment.
        </p>
        <p className="blog-body">
          <span className="innerBlogTextBold">Expert Tip :</span> Schedule emergency drills during shift changes, holidays, or unusual conditions testing response capabilities under realistic constraints. Most emergencies don't occur during ideal staffing conditions—preparedness must account for reduced crews and non-routine situations.
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
