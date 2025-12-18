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
    title: "Air Monitoring SOP (PDF)",
    description:
      "Standard operating procedure for conducting stack emission monitoring including sampling, safety, and quality assurance requirements.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Understanding Stack Emission Monitoring",
    description:
      "Video demonstration of stack testing process, equipment, and interpretation of results.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  { label: "Environmental Monitoring", anchor: "Environmental-Monitoring" },
  {
    label: "Understanding Air Quality Monitoring Requirements",
    anchor: "Understanding-Air-Quality-Monitoring-Requirements",
  },
  {
    label: "Types of Air Quality Testing",
    anchor: "Types-of-Air-Quality-Testing",
  },
  {
    label: "The Testing Process",
    anchor: "The-Testing-Process",
  },
  {
    label: "Interpreting Test Results and Taking Action",
    anchor: "Interpreting-Test-Results-and-Taking-Action",
  },
  {
    label: "Building an Effective Monitoring Program",
    anchor: "Building-an-Effective-Monitoring-Program",
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
      question: "How often must industries conduct air quality testing?",
      answer:
        "Frequency depends on Consent to Operate conditions, which vary by industry category and location. Typical requirements range from monthly for high-emission facilities to annually for low-emission operations. Review your specific consent conditions for exact requirements.",
    },
    {
      question: "Can we conduct air quality testing in-house?",
      answer:
        "Organizations can operate internal laboratories for some parameters if properly equipped and staffed. However, regulatory agencies often require testing by NABL-accredited independent laboratories for compliance demonstrations. Internal testing supplements but doesn't replace required third-party testing.",
    },
    {
      question: "What happens if test results exceed emission limits?",
      answer:
        "Immediately investigate causes and implement corrective actions. Repeat testing after corrections to verify effectiveness. Report exceedances to Pollution Control Boards as required. Proactive responses and demonstrated good faith efforts influence enforcement decisions.",
    },
    {
      question: "How much does air quality testing cost?",
      answer:
        "Costs vary based on parameters tested, sampling complexity, and analytical requirements. Basic stack testing might cost ₹15,000-30,000. Comprehensive testing with multiple parameters can exceed ₹1 lakh. Continuous monitoring systems require substantial capital investment plus ongoing maintenance.",
    },
    {
      question: "Do small industries have different requirements?",
      answer:
        "Scale matters but doesn't eliminate requirements. Small-scale industries may have less stringent limits or reduced testing frequency, but still face regulatory obligations. Verify specific requirements with State Pollution Control Boards.",
    },
  ];

  const tableConfig = {
    heading: "Key Air Quality Parameters",
    theme: "dark", // "dark" | "light"
    columns: [
      { key: "name", label: "Pollutant" },
      { key: "email", label: "Primary Sources" },
      { key: "role", label: "Control Technologies" },
      // { key: "status", label: "Status" },
    ],
  };
  const tableData = [
    {
      name: "Particulate Matter (PM10, PM2.5)",
      email:
        "Particulate Matter (PM10, PM2.5)	Combustion, grinding, material handling	Cyclones, bag filters, electrostatic precipitators, wet scrubbers",
      role: "Cyclones, bag filters, electrostatic precipitators, wet scrubbers",
      // status: "Active",
    },
    {
      name: "Sulfur Dioxide (SO₂)",
      email: "Coal and heavy fuel oil combustion",
      role: "Fuel switching, flue gas desulfurization, low-sulfur fuels",
      // status: "Inactive",
    },
    {
      name: "Nitrogen Oxides (NOₓ)",
      email: "High-temperature combustion",
      role: "Low-NOₓ burners, selective catalytic reduction",
      // status: "Active",
    },
    {
      name: "Carbon Monoxide (CO)",
      email: "Incomplete combustion",
      role: "Combustion optimization, proper air-fuel ratios",
      // status: "Active",
    },
    {
      name: "VOCs",
      email: "Solvents, paints, petroleum products",
      role: "Solvent substitution, thermal oxidizers, carbon adsorption",
      // status: "Active",
    },
    {
      name: "Heavy Metals",
      email: "Specific industrial processes",
      role: "Material selection, specialized filtration systems",
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
            Air quality <span className="blog-highlight itly">testing</span>{" "}
            industries
          </h1>
          <p className="blog-description">
            environmental monitoring India, stack emission testing, ambient air
            quality, industrial pollution control, CPCB compliance.
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
          <p className="innertopText" id="Environmental-Monitoring">
            Environmental Monitoring: Air Quality Testing in Industries
          </p>

          <p className="innertopTextSubHeading">
            Meeting compliance requirements while protecting community health
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Air quality monitoring has moved from optional environmental
            practice to mandatory regulatory requirement for Indian industries.
            The Central Pollution Control Board and State Pollution Control
            Boards enforce increasingly stringent emission standards. Industries
            face regular inspections, substantial penalties for non-compliance,
            and potential operational shutdowns if violations persist.
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
            Yet many organizations approach air quality testing
            reactively—testing only when auditors arrive or complaints emerge.
            This creates compliance risks, operational disruptions, and
            community relations problems. Proactive air quality monitoring
            programs prevent violations before they occur, demonstrate
            environmental stewardship, and often reveal operational
            inefficiencies affecting both environmental performance and
            production costs.
          </p>

          <p className="blog-body blog-body-highlightColorBlue">
            Data from State Pollution Control Boards shows that industries with
            systematic air quality monitoring programs face 70% fewer
            enforcement actions and maintain better community relationships
            compared to those conducting minimal compliance testing.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-Air-Quality-Monitoring-Requirements"
          >
            Understanding Air Quality Monitoring Requirements
          </p>

          <p className="blog-body blog-body-highlightColor">
            Indian industries face air quality monitoring obligations from
            multiple regulatory sources. The Air (Prevention and Control of
            Pollution) Act 1981 establishes the legal framework. Environment
            Protection Rules prescribe emission standards for specific
            industries. The Occupational Safety, Health and Working Conditions
            Code 2020 addresses workplace air quality affecting employee health.
          </p>

          <p className="blog-body blog-body-highlightColor">
            State Pollution Control Boards issue Consents to Operate that
            specify emission limits for individual facilities. These limits vary
            based on industry category, production capacity, fuel type, and
            location. Red category industries face stricter requirements than
            orange or green categories. Municipal regulations add another layer
            in urban areas with additional restrictions on emissions, operating
            hours, and fuel usage.
          </p>

          <p className="blog-body blog-body-highlightColor">
            For organizations pursuing{" "}
            <span className="blog-body-highlightColorBlue">
              ISO 14001 certification,
            </span>{" "}
            air quality monitoring provides objective evidence of environmental
            performance. Monitoring data feeds into{" "}
            <span className="blog-body-highlightColorBlue">
              environmental compliance audits
            </span>{" "}
            and{" "}
            <span className="blog-body-highlightColorBlue">
              management reviews
            </span>
            .
          </p>

          <p
            className="innertopTextSubHeading"
            id="Types-of-Air-Quality-Testing"
          >
            Types of Air Quality Testing
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Stack Emission Monitoring</span>{" "}
            measures pollutants released from industrial chimneys and exhaust
            stacks. This represents the most common air quality testing for
            manufacturing facilities. Parameters monitored depend on processes
            and fuels used but typically include particulate matter, sulfur
            dioxide, nitrogen oxides, carbon monoxide, and sometimes volatile
            organic compounds. Testing frequency depends on Consent to Operate
            conditions—many facilities must conduct stack monitoring quarterly
            or semi-annually, while high-emission industries require monthly
            testing.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Ambient Air Quality Monitoring
            </span>{" "}
            measures pollutant concentrations in the surrounding environment
            rather than at emission points. Industries in sensitive areas near
            residential zones, schools, or hospitals often must demonstrate they
            don't adversely affect local air quality. Monitoring involves
            establishing stations at facility boundaries and nearby communities.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Fugitive Emission Monitoring
            </span>{" "}
            addresses pollutants released from sources other than
            stacks—material handling, storage areas, process equipment leaks,
            and construction activities. While harder to quantify than stack
            emissions, fugitive emissions significantly affect local air
            quality. Control measures include covered conveyors, enclosed
            storage, and dust suppression systems.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Indoor Air Quality Monitoring
            </span>{" "}
            assesses workplace environments for parameters including respirable
            dust, chemical vapors, and welding fumes. This testing informs{" "}
            <span className="blog-body-highlightColorBlue">
              personal protective equipment selection
            </span>
            and ventilation system design. Organizations implementing{" "}
            <span className="blog-body-highlightColorBlue">ISO 45001</span>
            integrate workplace air monitoring into comprehensive safety
            management.
          </p>

          <DynamicTable config={tableConfig} data={tableData} />

          <p className="blog-body">
            Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              hazard identification and risk assessment
            </span>{" "}
            helps organizations identify which air pollutants their operations
            generate and implement appropriate controls.
          </p>

          <p className="innertopTextSubHeading" id="The-Testing-Process">
            The Testing Process
          </p>
          <p className="blog-body">
            Effective air quality testing requires proper methodology to
            generate defensible data supporting compliance demonstrations.
            Testing planning begins with identifying what needs testing, where,
            when, and using which methods. Consent to Operate conditions specify
            some requirements while industry-specific emission standards
            prescribe test methods.
          </p>
          <p className="blog-body">
            Engaging{" "}
            <span className="blog-body-highlightColorBlue">
              ISO 17025 accredited laboratories
            </span>{" "}
            ensures data quality. Accredited laboratories follow standardized
            procedures, maintain calibrated equipment, and employ qualified
            technicians. Accreditation provides confidence that test results
            withstand regulatory scrutiny.
          </p>
          <p className="blog-body">
            Sample collection methodology significantly affects results. Stack
            sampling requires establishing sampling points that represent
            average conditions, avoiding locations with turbulent flow or
            unusual temperatures. Trained technicians use isokinetic sampling
            maintaining sample velocity equal to gas velocity in the stack.
            Field measurements record operating conditions during
            testing—production rates, fuel consumption, control equipment
            operation. These parameters allow correlation between emissions and
            operating conditions.
          </p>
          <p className="blog-body">
            Laboratory analysis follows standardized methods prescribed by CPCB
            or EPA, specifying sample preparation, analytical instruments,
            quality control measures, and detection limits. Quality assurance
            measures validate testing accuracy through blank samples, duplicate
            samples, and standard additions. Comprehensive quality assurance
            distinguishes reliable testing from questionable results.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Interpreting-Test-Results-and-Taking-Action"
          >
            Interpreting Test Results and Taking Action
          </p>
          <p className="blog-body">
            Compare results against applicable limits specified in Consent to
            Operate conditions and emission standards. Results consistently
            below limits demonstrate compliance. Results near limits suggest
            need for process optimization before violations occur. Results
            exceeding limits require immediate investigation and corrective
            action.
          </p>
          <p className="blog-body">
            Consider measurement uncertainty when evaluating compliance. All
            measurements have uncertainty ranges. Results falling within
            measurement uncertainty of limits warrant careful evaluation.
            Analyze trends over time rather than focusing solely on individual
            results. Gradual deterioration in emission performance warns of
            developing control equipment problems or process changes.
          </p>

          <p className="blog-body">
            Correlate emissions with operating parameters. If emissions increase
            during high production rates, evaluate whether control equipment
            capacity adequately matches production capacity. If emissions vary
            with fuel quality, consider fuel procurement specifications.
            Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              corrective and preventive action processes
            </span>{" "}
            helps organizations address findings systematically.
          </p>
          <p className="blog-body">
            Various technologies control air emissions depending on pollutant
            types and concentrations. Particulate control devices include
            cyclone separators for coarse particles, fabric filters for fine
            particles, and electrostatic precipitators for high-temperature
            applications. Gas scrubbers absorb gaseous pollutants into liquid
            solutions. Thermal oxidizers destroy VOCs through high-temperature
            combustion. Technology selection requires balancing effectiveness,
            capital cost, operating cost, and reliability.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Building-an-Effective-Monitoring-Program"
          >
            Building an Effective Monitoring Program
          </p>
          <p className="blog-body">
            Systematic monitoring programs deliver better results than ad-hoc
            testing. Develop monitoring schedules covering all required testing
            including stack testing, ambient monitoring, and workplace air
            quality assessments. Calendar reminders ensure timely execution
            preventing deadline misses.
          </p>
          <p className="blog-body">
            Assign clear responsibilities for monitoring activities. Designate
            who coordinates testing, who reviews results, and who implements
            corrective actions. Accountability prevents tasks falling through
            organizational cracks. Integrate monitoring with{" "}
            <span className="blog-body-highlightColorBlue">
              document control systems
            </span>{" "}
            to maintain organized records of test reports, calibration
            certificates, and equipment maintenance logs.
          </p>
          <p className="blog-body">
            Use monitoring data for process improvement beyond compliance.
            Emission data often reveals process inefficiencies. High particulate
            emissions may indicate excessive material losses. Poor combustion
            efficiency causing CO emissions wastes fuel. Environmental
            monitoring thus supports operational optimization.
          </p>
          <p className="blog-body">
            Include air quality performance in{" "}
            <span className="blog-body-highlightColorBlue">
              management review meetings.
            </span>
            Regular management attention ensures resources for monitoring
            programs and timely responses to findings.
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
          Effective air quality monitoring protects both environmental
          compliance and operational performance. Organizations that approach
          monitoring systematically prevent violations, optimize processes, and
          demonstrate environmental responsibility.
        </p>

        <p className="innertopTextSubHeading_Points">
          Download our Air Monitoring Schedule Template to organize your testing
          program and ensure timely compliance.
        </p>

        <p className="blog-body">
          Bexex provides comprehensive environmental monitoring services
          including stack emission testing, ambient air quality monitoring, and
          fugitive emission surveys. Our NABL-accredited laboratory and
          experienced technicians deliver accurate, defensible data supporting
          your compliance needs. <span className="blog-body-highlightColorBlue">Explore our environmental monitoring services</span> or contact us to discuss your air quality testing requirements.
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
