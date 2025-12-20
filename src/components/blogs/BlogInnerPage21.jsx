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
// import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "Ambient Air Monitoring Toolkit (Excel)",
    description:
      "Complete toolkit including monitoring location map template, data logging formats, exceedance investigation forms, and regulatory reporting templates.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Ambient Air Quality Monitoring Best Practices",
    description:
      "Practical video demonstrating monitoring station setup, equipment operation, quality assurance procedures, and common monitoring mistakes to avoid.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Ambient Air Quality Monitoring",
    anchor: "Ambient-Air-Quality-Monitoring",
  },
  {
    label: "Understanding Regulatory Framework",
    anchor: "Understanding-Regulatory-Framework",
  },
  {
    label: "Key Monitoring Parameters",
    anchor: "Key-Monitoring-Parameters",
  },
  {
    label: "Monitoring Location Selection",
    anchor: "Monitoring-Location-Selection",
  },
  {
    label: "Monitoring Methods and Equipment",
    anchor: "Monitoring Methods and Equipment",
  },
  {
    label: "Data Management and Reporting",
    anchor: "Data-Management-and-Reporting",
  },
  {
    label: "Responding to Exceedances",
    anchor: "Responding-to-Exceedances",
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
      question: "How often should ambient air monitoring be conducted?",
      answer:
        "Frequency depends on environmental clearance conditions and State Pollution Control Board requirements. Typical requirements mandate quarterly monitoring for PM10, PM2.5, SO2, and NO2, with monthly or continuous monitoring for high-emission industries.",
    },
    {
      question: "What's the difference between ambient and stack monitoring?",
      answer:
        "Stack monitoring measures emissions directly from specific sources (chimneys, vents), while ambient monitoring measures pollutant concentrations in surrounding air reflecting combined impacts of all sources plus background pollution.",
    },
    {
      question: "Can industries conduct monitoring in-house?",
      answer:
        "Manual sampling requires NABL-accredited laboratory analysis. Industries can operate samplers but must send samples to accredited labs. Continuous monitors can be maintained in-house with periodic third-party calibration verification.",
    },
    {
      question: "What are typical ambient monitoring costs?",
      answer:
        "Manual monitoring costs ₹8,000-15,000 per location per quarter including sampling and analysis. Continuous monitoring stations require ₹15-25 lakh capital investment plus ₹2-3 lakh annual maintenance and calibration costs.",
    },
    {
      question: "How do meteorological conditions affect monitoring?",
      answer:
        "Wind speed and direction determine pollutant dispersion. Temperature inversions trap pollutants near ground level. Rainfall washes particulates from air. Understanding meteorology helps interpret monitoring data and predict high-pollution periods requiring operational adjustments.",
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
              src={construction_worker_img}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            Ambient air  <span className="blog-highlight itly">quality</span>{" "}
            monitoring
          </h1>
          <p className="blog-description">
           air quality monitoring India, CPCB air quality standards, environmental monitoring compliance, air pollution monitoring, AQI measurement
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
           Ambient Air Quality Monitoring: Requirements and Process
          </p>

          <p
            className="innertopTextSubHeading"
            id="Building-consumer-trust-through"
          >
            Meeting environmental obligations while protecting community health
          </p>

          <p className="blog-body blog-body-highlightColor">
           Air quality monitoring has evolved from optional environmental practice to mandatory compliance requirement for Indian industries. The Central Pollution Control Board and State Pollution Control Boards enforce increasingly stringent ambient air quality standards, requiring industries to demonstrate they aren't degrading local air quality beyond permissible limits.
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
          Industries operating near residential areas face particular scrutiny. Communities demand transparency regarding air pollution impacts. Regulatory authorities conduct surprise inspections verifying monitoring compliance. Non-compliance triggers penalties, operational restrictions, or facility closures in severe cases.
          </p>
          <p className="blog-body blog-body-highlightColorBlue">
            Systematic ambient air quality monitoring transforms regulatory obligation into environmental management tool, identifying pollution trends, validating emission control effectiveness, and demonstrating community stewardship that strengthens social license to operate.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-Regulatory-Framework"
          >
            Understanding Regulatory Framework
          </p>

          <p className="blog-body">
            The Air (Prevention and Control of Pollution) Act 1974 provides legal authority for air quality regulation in India. CPCB establishes National Ambient Air Quality Standards (NAAQS) defining acceptable concentration limits for various pollutants across different area categories industrial, residential, rural, and ecologically sensitive zones.
          </p>

          <p className="blog-body">
            Industries must monitor ambient air quality under multiple scenarios. Environmental clearance conditions typically mandate baseline monitoring before project commencement, then periodic monitoring during operations. Consent to Operate from State Pollution Control Boards includes ambient monitoring requirements with specified parameters, locations, and frequencies.
          </p>

          <p className="blog-body">
           The 2009 NAAQS revision introduced PM2.5 standards alongside existing PM10 requirements, reflecting growing understanding of fine particulate health impacts. The standards specify 24-hour average and annual average concentration limits for pollutants including particulate matter, sulfur dioxide, nitrogen dioxide, carbon monoxide, ozone, lead, ammonia, benzene, and others.
          </p>
          <p className="blog-body">

            Different area classifications have varying standards. Industrial areas tolerate higher pollution levels than residential zones, while ecologically sensitive areas demand the strictest limits. Understanding applicable area classification determines compliance obligations. Organizations implementing <span className="blog-body-highlightColorBlue">ISO 14001 environmental management</span>  integrate ambient monitoring into broader environmental compliance frameworks.

          </p>











          <p
            className="innertopTextSubHeading"
            id="Key-Monitoring-Parameters"
          >
            Key Monitoring Parameters
          </p>

          <p className="blog-body">
          Ambient air quality assessment examines multiple pollutants based on industrial operations and environmental clearance conditions.
          </p>

          <p className="blog-body">
           Particulate matter represents the most commonly monitored parameter. PM10 (particles under 10 microns) includes dust, smoke, and aerosols from combustion and mechanical processes. PM2.5 (particles under 2.5 microns) penetrates deep into lungs, posing greater health risks. Both require monitoring using high-volume samplers or continuous monitoring instruments.
          </p>
          <p className="blog-body">
          Sulfur dioxide (SO2) emissions originate from fossil fuel combustion, particularly coal and diesel. Power plants, boilers, and furnaces release SO2 requiring ambient monitoring. 
          </p>
          <p className="blog-body">
            Concentrations measured using manual methods or continuous analyzers indicate combustion source impacts on local air quality. 
          </p>
          <p className="blog-body">
           Nitrogen oxides (NOx), primarily nitrogen dioxide (NO2), result from high-temperature combustion in vehicles, generators, and industrial processes. NO2 contributes to smog formation and respiratory irritation. Ambient monitoring near traffic or combustion sources tracks NOx impacts.
          </p>
          <p className="blog-body">
            Carbon monoxide (CO) from incomplete combustion poses health risks through oxygen transport interference in blood. Industries with significant combustion equipment monitor CO levels ensuring worker and community safety.       
          </p>
          <p className="blog-body">
              Volatile organic compounds (VOCs) including benzene require monitoring near petroleum, chemical, or solvent-using industries. These compounds contribute to photochemical smog and pose direct health hazards. Facilities conducting <span className="blog-body-highlightColorBlue">soil contamination assessment</span>  often monitor associated VOCs in ambient air.      
          </p>

          

          {/* start from here  */}
          <p
            className="innertopTextSubHeading"
            id="Monitoring-Location-Selection"
          >
            Monitoring Location Selection
          </p>
          <p className="blog-body">
           Strategic monitoring location selection ensures data represents actual community exposure and facility impact rather than isolated hotspots or unaffected areas.
          </p>
          <p className="blog-body">
            Upwind locations establish background concentrations unaffected by facility emissions. Comparing upwind background with downwind measurements isolates facility contribution from regional pollution. Background stations should be positioned based on prevailing wind patterns, typically 500-1000 meters upwind of major emission sources.
          </p>
          <p className="blog-body">
            Downwind locations capture maximum facility impact, positioned along predominant wind directions where plume dispersion models predict highest ground-level concentrations. Distance from sources varies with emission characteristics and stack heights—typically 100-500 meters for ambient monitoring stations.
          </p>
          <p className="blog-body">
           Fence-line monitoring at facility boundaries demonstrates compliance at the point where facility control ends and public exposure begins. Many regulations specify fence-line concentration limits not to exceed during operations.
          </p>
          <p className="blog-body">
          Sensitive receptor locations near schools, hospitals, residential areas, or ecologically sensitive zones require monitoring even if not directly downwind, addressing community concerns and demonstrating protective measures for vulnerable populations.
          </p>
          <p className="blog-body">
        Adequate spacing between monitoring locations prevents redundancy while ensuring coverage. CPCB guidelines suggest minimum 200-meter separation between stations for meaningful data variation. Organizations planning <span className="blog-body-highlightColorBlue">environmental monitoring programs </span>  balance comprehensive coverage against resource constraints.
          </p>



          <p
            className="innertopTextSubHeading"
            id="Monitoring Methods and Equipment"
          >
            Monitoring Methods and Equipment
          </p>
          <p className="blog-body">
          Ambient air quality monitoring employs manual sampling methods, continuous automated monitoring, or hybrid approaches balancing accuracy, cost, and regulatory acceptance.
          </p>
          <p className="blog-body">
            Manual monitoring using high-volume samplers collects particulate matter on filters over 8 or 24-hour periods. Laboratory analysis determines mass concentration. Gaseous pollutants are absorbed in chemical solutions during sampling, with laboratory analysis measuring concentrations. Manual methods provide NABL-accredited results meeting regulatory requirements but lack real-time data.
          </p>
          <p className="blog-body">
          Continuous Ambient Air Quality Monitoring Stations (CAAQMS) provide real-time measurements transmitted to central servers. These automated systems measure PM10, PM2.5, SO2, NO2, CO, ozone, and meteorological parameters continuously. Data availability enables immediate response to exceedances and supports Air Quality Index calculations.
          </p>
          <p className="blog-body">
            Passive samplers offer cost-effective monitoring for certain pollutants like NO2 or benzene. These diffusion-based samplers require no power, providing time-averaged concentrations over weeks or months. Lower costs enable greater spatial coverage though temporal resolution suffers.
          </p>
          <p className="blog-body">
       Equipment selection balances regulatory requirements, budget constraints, and data needs. Continuous monitors cost ₹15-25 lakhs but provide superior data quality and compliance demonstration. Manual sampling costs ₹50,000-2 lakhs annually depending on frequency but lacks real-time capability.
          </p>
          <p className="blog-body">
      Calibration and maintenance ensure data accuracy. Regular calibration against certified reference gases, filter weighing quality control, and preventive maintenance prevent measurement errors undermining monitoring program credibility.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Data-Management-and-Reporting"
          >
           Data Management and Reporting
          </p>
          <p className="blog-body">
             Systematic data management transforms raw measurements into meaningful information supporting compliance demonstration and environmental management decisions.
          </p>
          <p className="blog-body">
        Quality assurance procedures validate data accuracy through field blanks, duplicate samples, and inter-laboratory comparisons. Outlier investigation identifies instrument malfunctions, sampling errors, or genuine pollution events requiring different responses.
          </p>
          <p className="blog-body">
             Statistical analysis calculates 24-hour averages, annual averages, and percentile values for comparison against NAAQS limits. Trend analysis identifies seasonal variations, long-term changes, or emission control effectiveness. Organizations implementing  <span className="blog-body-highlightColorBlue">CAPA processes </span> use monitoring trends to trigger corrective actions before violations occur.
          </p>
          <p className="blog-body">
          Regulatory reporting submits monitoring data to State Pollution Control Boards at prescribed frequencies—typically monthly or quarterly. Reports include raw data, averages, exceedance analysis, and explanations for any limit violations. Annual environmental statements consolidate monitoring results with emission inventories and compliance status.
          </p>
          <p className="blog-body">
         Public disclosure requirements increasingly mandate sharing air quality data with communities. Web-based displays, public meetings, or community reports build transparency and trust. Proactive communication prevents misinformation and demonstrates environmental responsibility.
          </p>
          <p className="blog-body">
        Data retention requirements typically mandate five-year record keeping for regulatory inspection. Digital archiving simplifies storage while enabling historical trend analysis supporting <span className="blog-body-highlightColorBlue">management review</span>  and strategic planning.
          </p>



           <p
            className="innertopTextSubHeading"
            id="Responding-to-Exceedances"
          >
            Responding to Exceedances
          </p>
          <p className="blog-body">
            Monitoring programs detecting ambient air quality standard exceedances trigger investigation and corrective action rather than simple documentation.
          </p>
          <p className="blog-body">
       Immediate verification confirms exceedances represent actual pollution rather than measurement errors. Review calibration records, inspect sampling equipment, and check meteorological conditions during sampling. Rule out instrument malfunction before assuming genuine violations.
          </p>
          <p className="blog-body">
            Source identification determines whether facility emissions caused exceedances or external factors—nearby construction, traffic, regional pollution, or natural events like dust storms—contributed. Dispersion modeling, wind pattern analysis, and pollutant characteristics help attribute responsibility.
          </p>
          <p className="blog-body">
            Corrective actions address facility-caused exceedances through emission source control, operational adjustments, or enhanced pollution control equipment. Temporary production curtailment may prevent continued violations while permanent solutions are implemented.
          </p>
          <p className="blog-body">
            Communication with regulatory authorities demonstrates proactive management. Self-reporting exceedances with investigation findings and corrective action plans maintains regulatory credibility better than waiting for enforcement action. Organizations maintaining  <span className="blog-body-highlightColorBlue">legal compliance registers</span>  systematically track reporting obligations.
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
         
         Effective ambient air quality monitoring requires proper equipment, standardized procedures, and systematic data management supporting both regulatory compliance and environmental improvement.
        </p>

        <p className="innertopTextSubHeading_Points">
         Download our Ambient Air Monitoring Plan Template providing structured framework for establishing monitoring programs meeting CPCB requirements and environmental clearance conditions.
        </p>
        <p className="blog-body">

          Need expert guidance with ambient air quality monitoring program development or equipment selection? Bexex environmental specialists provide comprehensive monitoring services including baseline assessments, continuous monitoring system installation, and regulatory compliance support. <span className="blog-body-highlightColorBlue"> Explore our environmental monitoring services</span> or contact us for site-specific consultation.
        </p>

        
        <p className="blog-body">

        


          <span className="innerBlogTextBold">Expert Tip :</span>Install continuous ambient monitors with data logging and remote access even if regulations only mandate quarterly manual monitoring. Real-time data enables immediate response to pollution events, validates emission control effectiveness, and provides defensible evidence during regulatory disputes or community complaints.
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
