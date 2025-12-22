import React, { useEffect, useState } from "react";
import "../../Css/blogInnerPage.css";
import { Link } from "react-router-dom";
import NewsLetter from "../NewsLetter";
import LetsConnect from "../LetsConnect";
import Footer from "../Footer";
import { LearnMoreButton } from "../Buttons";
import construction_worker_img from "../../assets/images/blog_imgs/third-party-inspection.png";
import waterQuality from "../../assets/images/blog_imgs/water-quality-testing.png";
import FrequentQuestion from "../FrequentQuestion";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import ReadMoreBlog from "../ReadMoreBlog";
import DynamicTable from "../DynamicTable";

const resources = [
  {
    title: "Water Testing Checklist (Excel)",
    description:
      "Comprehensive parameter list, sampling protocols, testing frequencies, and compliance tracking for Indian industries.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "Water Quality Testing Best Practices",
    description:
      "Video guide to sampling techniques, common pitfalls, and interpreting test results for compliance and process optimization.",
    buttonLabel: "Coming Soon",
    type: "secondary",
  },
];

const tags = ["ISO Systems", "Consulting", "Energy"];

const navItems = [
  {
    label: "Water Quality Testing",
    anchor: "Water-Quality-Testing",
  },
  {
    label: "Understanding Water Quality Regulations",
    anchor: "Understanding-Water-Quality-Regulations",
  },

  {
    label: "Sampling and Testing Process",
    anchor: "Sampling-and-Testing-Process",
  },
  {
    label: "Treatment Technologies",
    anchor: "Treatment-Technologies",
  },
  {
    label: "Building Effective Monitoring Programs",
    anchor: "Building-Effective-Monitoring-Programs",
  },
  {
    label: "Managing Non-Compliance",
    anchor: "Managing-Non-Compliance",
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
      question: "How often must industries test water quality?",
      answer:
        "Frequency depends on Consent to Operate conditions. Typical requirements include daily pH and flow monitoring, weekly BOD/COD testing, and monthly comprehensive analyses. High discharge industries face more frequent testing requirements. Review consent conditions for specific obligations.",
    },
    {
      question:
        "Can industries use in-house laboratories for compliance testing?",
      answer:
        "In-house laboratories can support process control and optimization. However, most State Pollution Control Boards require testing by independent NABL accredited laboratories for compliance reporting. In-house testing supplements but doesn't replace required third-party analysis.",
    },
    {
      question: "What happens if effluent exceeds discharge limits?",
      answer:
        "Investigate causes immediately and implement corrective actions. Increase monitoring to verify corrections work. Report violations as required. Repeated violations trigger escalating enforcement notices, penalties, and potentially closure orders. Proactive response and demonstrated corrective action influence enforcement outcomes.",
    },
    {
      question: "How much does water quality testing cost?",
      answer:
        "Costs vary by parameters tested and sampling frequency. Basic parameter packages (pH, BOD, COD, TSS) cost ₹3,000–8,000 per sample. Comprehensive testing including heavy metals runs ₹10,000–25,000. Annual monitoring programs for medium facilities typically cost ₹1.5–5 lakhs depending on discharge volume and complexity.",
    },
    {
      question: "Can treated water be recycled instead of discharged?",
      answer:
        "Yes. Water recycling reduces both freshwater consumption and discharge volumes, potentially lowering compliance obligations. Reverse osmosis, ultrafiltration, or other advanced treatment enables water reuse in cooling, cleaning, or process applications. Evaluate recycling economics versus discharge treatment costs.",
    },
  ];

  const tableConfig = {
    heading: "Key Water Quality Parameters",
    theme: "dark", // or "dark"
    columns: [
      { key: "category", label: "Parameter Category" },
      { key: "measures", label: "What It Measures" },
      { key: "sources", label: "Typical Sources" },
    ],
  };

  const tableData = [
    {
      category: "Physical Parameters",
      measures: "Temperature, color, odor, turbidity, total suspended solids",
      sources: "Process operations, cooling systems, material washing",
    },
    {
      category: "Chemical Parameters",
      measures: "pH, BOD, COD, oil & grease, heavy metals, specific chemicals",
      sources: "Chemical reactions, cleaning operations, raw materials",
    },
    {
      category: "Biological Parameters",
      measures: "Fecal coliform, total coliform",
      sources: "Sanitary waste, biological treatment systems",
    },
    {
      category: "Nutrient Parameters",
      measures: "Nitrogen (ammonia, nitrate), phosphorus",
      sources: "Fertilizer runoff, organic waste, detergents",
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
              src={waterQuality}
              alt="Blog visual"
              className="blog-main-image"
            />
          </div>
        </div>
        <div className="blog-text">
          <h1>
            Water quality <span className="blog-highlight itly">testing</span>{" "}
            India
          </h1>
          <p className="blog-description">
            effluent testing, water testing parameters, industrial wastewater
            compliance, water pollution control India, CPCB water standards
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
          <p className="innertopText" id="Water-Quality-Testing">
            Water Quality Testing: Parameters and Compliance
          </p>

          <p className="innertopTextSubHeading">
            Ensuring industrial water meets environmental and regulatory
            standards
          </p>

          {/* <h2 id="why">
        National &nbsp;<span className="italic">Standardization</span> Bodies
      </h2> */}

          <p className="blog-body blog-body-highlightColor">
            Water quality testing has evolved from optional good practice to
            mandatory compliance requirement for Indian industries. State
            Pollution Control Boards enforce strict effluent standards.
            Industries face regular inspections, substantial penalties for
            violations, and potential closure orders if non-compliance persists.
            Beyond regulatory compliance, effective water quality monitoring
            protects receiving water bodies, maintains community relations, and
            often reveals process inefficiencies affecting both environmental
            performance and operational costs.
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
          <p className="blog-body blog-body-highlightColorBlue">
            Data from State Pollution Control Boards shows that industries with
            systematic water quality monitoring programs face 65% fewer
            enforcement actions and demonstrate better environmental stewardship
            compared to those conducting minimal testing.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Understanding-Water-Quality-Regulations"
          >
            Understanding Water Quality Regulations
          </p>
          <p className="blog-body blog-body-highlightColor">
            Indian industries face water quality obligations from multiple
            sources. The Water (Prevention and Control of Pollution) Act 1974
            establishes the legal framework. Environment Protection Rules
            prescribe general standards for effluent discharge. State Pollution
            Control Boards issue Consents to Operate specifying
            facility-specific discharge limits based on industry type,
            production volume, and receiving water body characteristics.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Discharge standards vary significantly by industry sector. Textile
            dyeing facilities face stringent color and chemical oxygen demand
            limits. Pharmaceutical manufacturers must control specific active
            pharmaceutical ingredients. Food processing plants address
            biological oxygen demand and oil/grease parameters. Understanding
            which standards apply to your specific operations prevents
            compliance gaps.
          </p>
          <p className="blog-body blog-body-highlightColor">
            Organizations implementing{" "}
            <Link to={"/blog/iso-14001-implementation-india"} className="blog-body-highlightColorBlue"> ISO 14001</Link>{" "}
            integrate water quality monitoring into environmental management
            systems, providing systematic approach to compliance and continual
            improvement.
          </p>
          {/* table1  */}
          <DynamicTable config={tableConfig} data={tableData} />

          <p className="blog-body">
            <span className="innerBlogTextBold">pH</span> indicates acidity or
            alkalinity on 0-14 scale. Most discharge standards require pH
            between 6.5-8.5. Extreme pH damages aquatic life and corrodes
            infrastructure. Process upsets, chemical spills, or treatment system
            failures cause pH excursions.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Biological Oxygen Demand (BOD)
            </span>{" "}
            measures oxygen consumed by microorganisms decomposing organic
            matter. High BOD depletes dissolved oxygen in receiving waters,
            harming aquatic ecosystems. Food processing, dairy, and
            pharmaceutical industries typically generate high BOD effluents
            requiring biological treatment.{" "}
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              {" "}
              Chemical Oxygen Demand (COD)
            </span>{" "}
            measures total oxidizable matter including biodegradable and
            non-biodegradable compounds. COD testing is faster than BOD, making
            it useful for process control. The COD/BOD ratio indicates
            biodegradability ratios near 2:1 suggest readily treatable waste,
            while higher ratios indicate recalcitrant compounds.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">
              Total Suspended Solids (TSS)
            </span>{" "}
            represents solid particles suspended in water. High TSS causes
            turbidity, affects aquatic life, and indicates treatment system
            performance. Sedimentation, filtration, or dissolved air flotation
            remove TSS.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Oil and Grease</span> from
            lubricants, cutting fluids, or process operations form surface films
            preventing oxygen transfer. Most standards limit oil/grease to 10-20
            mg/L. Oil-water separators, dissolved air flotation, or coalescence
            remove oil before discharge.
          </p>
          <p className="blog-body">
            <span className="innerBlogTextBold">Heavy Metals</span> including
            lead, mercury, cadmium, chromium, and arsenic pose serious
            environmental and health risks even at trace levels. Industries
            using these metals in processes must implement stringent controls
            and specialized treatment.
          </p>
          <p className="blog-body">
            Understanding{" "}
            <Link to={"/blog/hira-hazard-risk-assessment"} className="blog-body-highlightColorBlue">
              hazard identification processes
            </Link>{" "}
            helps identify which water pollutants specific operations generate.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Sampling-and-Testing-Process"
          >
            Sampling and Testing Process
          </p>

          <p className="blog-body">
            Effective water quality monitoring requires proper sampling
            techniques. Grab samples taken at single points in time work for
            certain parameters but miss variability. Composite samples collected
            at intervals over 24 hours better represent actual discharge
            characteristics and are often required by regulations.
          </p>

          <p className="innertopTextSubHeading_Points" id="Sampling-Protocol">
            Sampling Protocol:
          </p>

          <ul className="disk">
            <li>
              Collect samples at designated discharge points specified in
              Consent to Operate
            </li>
            <li>
              Use clean, appropriate containers (glass for organics, plastic for
              metals)
            </li>
            <li>
              Preserve samples as required (acidification for metals,
              refrigeration for biological parameters)
            </li>
            <li>Maintain chain of custody documentation</li>
            <li>Transport to laboratory within specified holding times</li>
          </ul>

          <p className="blog-body">
            Engage{" "}
            <span className="blog-body-highlightColorBlue">
              ISO 17025 accredited laboratories
            </span>{" "}
            for analysis. Accredited laboratories follow standardized methods,
            maintain calibrated equipment, and employ qualified analysts.
            Testing results from accredited laboratories withstand regulatory
            scrutiny better than in-house testing without proper quality
            controls.
          </p>

          <p
            className="innertopTextSubHeading_Points"
            id="Common-Analytical-Methods"
          >
            Common analytical methods include:
          </p>

          <ul className="disk">
            <li>
              pH and temperature: Field measurements with calibrated meters
            </li>
            <li>BOD: 5-day incubation test measuring oxygen consumption</li>
            <li>
              COD: Chemical oxidation using dichromate under acidic conditions
            </li>
            <li>TSS: Filtration and gravimetric determination</li>
            <li>Heavy metals: Atomic absorption spectroscopy or ICP-MS</li>
            <li>Oil/grease: Solvent extraction and gravimetric analysis</li>
          </ul>

          <p className="blog-body">
            Quality assurance through blank samples, duplicate analyses, and
            spike recoveries validates testing accuracy. Comprehensive QA/QC
            distinguishes reliable data from questionable results.
          </p>

          <p className="innertopTextSubHeading" id="Treatment-Technologies">
            Treatment Technologies
          </p>

          <p className="blog-body">
            Various technologies treat industrial wastewater depending on
            pollutant characteristics and discharge requirements.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">Primary Treatment</span> removes
            settleable solids through screens, grit chambers, and sedimentation
            tanks. Oil-water separators and equalization tanks also fall under
            primary treatment. These physical processes provide initial cleanup
            but rarely achieve discharge standards alone.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">Secondary Treatment</span> uses
            biological processes to degrade organic pollutants. Activated sludge
            systems, trickling filters, and sequencing batch reactors employ
            microorganisms consuming organic matter, reducing BOD and COD.
            Biological treatment is highly effective but requires careful
            operation maintaining proper conditions for microbial activity.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">Tertiary Treatment</span>{" "}
            provides additional polishing after secondary treatment. Sand
            filtration removes remaining suspended solids. Chemical
            precipitation removes phosphorus and heavy metals. Activated carbon
            adsorbs dissolved organics. Disinfection eliminates pathogens before
            discharge.
          </p>

          <p className="blog-body">
            <span className="innerBlogTextBold">Advanced Treatment</span>{" "}
            addresses specific pollutants through specialized processes.
            Membrane filtration (ultrafiltration, reverse osmosis) removes
            dissolved contaminants. Ion exchange treats heavy metals and
            specific ions. Advanced oxidation destroys recalcitrant organic
            compounds.
          </p>

          <p className="blog-body">
            Technology selection depends on influent characteristics, discharge
            limits, space availability, operating costs, and operator skill
            levels. Consult with environmental engineers to design appropriate
            treatment systems.
          </p>

          <p className="blog-body">
            Organizations implementing{" "}
            <span className="blog-body-highlightColorBlue">
              environmental compliance programs
            </span>{" "}
            integrate treatment system performance monitoring into broader
            environmental management.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Building-Effective-Monitoring-Programs"
          >
            Building Effective Monitoring Programs
          </p>

          <p className="blog-body">
            Systematic monitoring delivers better compliance results than
            reactive testing. Develop monitoring schedules covering all required
            parameters at frequencies specified in Consent to Operate
            conditions. Many facilities require daily pH and flow monitoring,
            weekly BOD/COD testing, and monthly comprehensive analyses including
            heavy metals.
          </p>

          <p className="blog-body">
            Assign clear responsibilities. Environmental managers typically
            coordinate testing, while operations personnel collect samples.
            Laboratory technicians or contracted laboratories perform analyses.
            Treatment plant operators use results for process optimization.
          </p>

          <p className="blog-body">
            Maintain comprehensive records through{" "}
            <Link to={"/blog/document-control-system-iso"} className="blog-body-highlightColorBlue">
              document control systems
            </Link>
            . Organize test reports, calibration certificates, consent
            conditions, and compliance correspondence. Good recordkeeping
            supports compliance demonstrations during inspections.
          </p>

          <p className="blog-body">
            Track trends over time. Gradual deterioration in effluent quality
            warns of treatment system problems before violations occur. Sudden
            changes indicate process upsets requiring immediate investigation.
            Use monitoring data for process improvement beyond compliance
            efficient treatment often reduces chemical costs and energy
            consumption.
          </p>

          <p className="blog-body">
            Include water quality performance in{" "}
            <Link to={"/blog/management-review-meeting-iso"} className="blog-body-highlightColorBlue">
              management review meetings
            </Link>
            . Regular leadership attention ensures resources for monitoring
            programs and timely responses to findings. When violations occur,
            implement systematic{" "}
            <Link to={"/blog/capa-process-iso-standards"} className="blog-body-highlightColorBlue">
              corrective actions
            </Link>{" "}
            addressing root causes.
          </p>

          <p className="innertopTextSubHeading" id="Managing-Non-Compliance">
            Managing Non-Compliance
          </p>

          <p className="blog-body">
            When test results exceed discharge limits, respond immediately.
            Investigate causes—treatment system failure, process upset,
            equipment malfunction, or operational error. Implement corrective
            measures and increase monitoring frequency to verify effectiveness.
          </p>

          <p className="blog-body">
            Report exceedances to State Pollution Control Boards as required by
            consent conditions. Proactive notification with explanation of
            corrective actions demonstrates good faith and may influence
            enforcement responses. Concealing violations discovered during
            routine monitoring creates far more serious problems if regulators
            find them during inspections.
          </p>

          <p className="blog-body">
            For chronic compliance issues, consider process modifications
            reducing pollutant generation at source. Prevention through cleaner
            production often proves more economical than end-of-pipe treatment.
            Evaluate raw material substitutions, process optimization, water
            recycling, or waste segregation as pollution prevention strategies.
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
          Effective water quality monitoring protects environmental compliance
          while supporting operational efficiency. Organizations approaching
          monitoring systematically prevent violations, optimize treatment
          systems, and demonstrate environmental responsibility.
        </p>

        <p className="innertopTextSubHeading_Points">
          Download our Water Testing Schedule Template to organize your
          monitoring program and ensure compliance.
        </p>

        <p className="blog-body">
          Bexex provides comprehensive water quality testing services through
          our NABL-accredited laboratory. We help industries develop monitoring
          programs, troubleshoot treatment systems, and maintain regulatory
          compliance .{" "}
          <span className="blog-body-highlightColorBlue">
            Explore our water quality testing services
          </span>{" "}
          or contact us to discuss your monitoring needs.
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
