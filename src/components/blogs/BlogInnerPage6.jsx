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
    title: "TPI Request Format (Word)",
    description:
      "Standard template for communicating inspection requirements to TPI providers including specifications, acceptance criteria, and sampling plans.",
    buttonLabel: "Download now",
    badge: "X", // use icon or text
    type: "primary",
  },
  {
    title: "When Do You Need TPI? Real-World Examples",
    description:
      "Video exploring scenarios where third-party inspection adds value with case studies from Indian manufacturing.",
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
    label: "Types of Third-Party Inspection Services",
    anchor: "Types-of-Third-Party",
  },
  { label: "The TPI Process: What to Expect", anchor: "What-to-Expect" },
  {
    label: "Selecting Third-Party Inspection Providers",
    anchor: "Third-Party-Inspection-Providers",
  },
  { label: "Maximizing TPI Value", anchor: "Maximizing-TPI-Value" },
  {
    label: "Common TPI Challenges and Solutions",
    anchor: "Challenges-and-Solutions",
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
      question: "How much does third-party inspection cost?",
      answer:
        "Costs vary by inspection type, product complexity, and location. Simple visual inspections might cost ₹5,000-15,000. Complex inspections requiring testing could reach ₹50,000 or more. Request quotes based on specific inspection requirements.",
    },
    {
      question: "How long does TPI take?",
      answer:
        "Inspection duration depends on product complexity and quantity. Simple inspections might complete in 2-4 hours. Complex products or large quantities could require full days. Add travel time if inspectors must reach remote locations.",
    },
    {
      question: "Can suppliers refuse third-party inspection?",
      answer:
        "Suppliers can refuse if not contractually required. However, refusal signals potential quality concerns. Establish inspection rights in purchase orders and supplier agreements to prevent disputes",
    },
    {
      question: "What happens if products fail inspection?",
      answer:
        "Buyers typically negotiate with suppliers for rework, replacement, or price adjustment. Some contracts specify remedies for failed inspections. TPI reports provide objective evidence supporting negotiations.",
    },
    {
      question: "Do TPI services guarantee product quality?",
      answer:
        "No. TPI verifies conformity at the time of inspection but doesn't guarantee future performance. TPI represents sampling-based verification, not 100% inspection. It significantly reduces risk but doesn't eliminate all possibility of defects.",
    },
  ];

  const tableConfig = {
  heading: "User Management",
  theme: "dark", // "dark" | "light"
  columns: [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
  ],
};
  const tableData = [
    {
      name: "John",
      email: "john@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Sarah",
      email: "sarah@gmail.com",
      role: "User",
      status: "Inactive",
    },
    {
      name: "David",
      email: "david@gmail.com",
      role: "Manager",
      status: "Active",
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

          <DynamicTable config={tableConfig} data={tableData}/>

          <p className="blog-body">
            Contract requirements sometimes specify independent inspection.
            International trade agreements, government procurement, or large
            projects may mandate TPI. Compliance with these contractual
            obligations requires engaging qualified inspection services.
          </p>

          <p className="innertopTextSubHeading" id="Types-of-Third-Party">
            Types of Third-Party Inspection Services
          </p>
          <p className="blog-body">
            TPI encompasses various inspection types serving different
            verification needs. Understanding these options helps buyers and
            suppliers select appropriate services.
          </p>

          <p className="blog-body">
            Pre-shipment inspection (PSI) occurs after production completion but
            before shipment. Inspectors verify finished goods against
            specifications, checking quantity, quality, packaging, and labeling.
            PSI represents the most common TPI type, particularly in export
            manufacturing. Defects discovered during PSI allow correction before
            shipment, preventing costly returns.
          </p>
          <p className="blog-body">
            During production inspection monitors manufacturing processes at
            various stages. Rather than waiting until completion, inspectors
            verify quality at critical control points. This early detection
            prevents producing large quantities of non-conforming items. During
            production inspection suits complex products with multiple
            manufacturing stages.
          </p>
          <p className="blog-body">
            Initial production inspection checks the first articles from a
            production run. This verification ensures setup, materials, and
            processes produce conforming items before full production proceeds.
            Initial inspection prevents systematic errors that would affect
            entire batches.
          </p>
          <p className="blog-body">
            Container loading inspection verifies proper product loading into
            shipping containers. Inspectors confirm correct products in correct
            quantities are loaded, packaging protects goods during transit, and
            containers are sealed properly. This inspection prevents shipping
            errors and transit damage claims.
          </p>
          <p className="blog-body">
            Factory audit services assess supplier capabilities, quality
            systems, and production conditions. Unlike product inspection,
            audits evaluate whether suppliers have systems and capabilities to
            consistently produce conforming items. Factory audits support
            supplier selection and development programs, particularly for
            organizations implementing{" "}
            <span className="blog-body-highlightColorBlue">
              {" "}
              integrated management systems
            </span>{" "}
            .
          </p>
          <p className="blog-body">
            Laboratory testing provides detailed analysis beyond visual
            inspection. Material composition, mechanical properties, chemical
            resistance, or electrical characteristics require testing
          </p>
          <p className="blog-body">
            equipment. TPI providers either operate laboratories or coordinate
            testing through accredited facilities. Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              ISO 17025 laboratory standards
            </span>{" "}
            helps evaluate testing service quality.
          </p>

          <p className="innertopTextSubHeading" id="What-to-Expect">
            The TPI Process: What to Expect
          </p>
          <p className="blog-body">
            Understanding the inspection process helps buyers and suppliers
            prepare effectively and maximize TPI value.
          </p>
          <p className="blog-body">
            Inspection planning begins when clients engage TPI services. Buyers
            provide detailed specifications, inspection criteria, acceptance
            standards, and sampling plans. Clear specifications prevent disputes
            about what inspectors should verify. Ambiguous requirements lead to
            subjective interpretations that neither party finds satisfactory.
          </p>

          <p className="blog-body">
            Inspector assignment considers technical requirements and location.
            TPI providers assign inspectors with relevant experience—electrical
            product inspectors understand electrical testing, textile inspectors
            recognize fabric defects, and mechanical inspectors read engineering
            drawings. Local inspectors reduce travel costs and enable flexible
            scheduling.
          </p>
          <p className="blog-body">
            Site visit coordination involves scheduling with suppliers.
            Inspectors coordinate access to facilities, products, and
            documentation. Advance notice allows suppliers to prepare products,
            gather test reports, and arrange personnel availability. Last-minute
            inspection requests create logistical challenges that reduce
            effectiveness.
          </p>
          <p className="blog-body">
            Inspection execution follows agreed protocols. Inspectors review
            documentation, examine products using visual inspection and
            measurement tools, conduct functional tests, verify quantities, and
            photograph findings. Systematic approaches ensure comprehensive
            coverage. Understanding{" "}
            <span className="blog-body-highlightColorBlue">
              internal audit processes{" "}
            </span>{" "}
            helps suppliers prepare for TPI visits, as preparation methods
            overlap.
          </p>
          <p className="blog-body">
            Defect documentation records any non-conformities discovered.
            Inspectors photograph defects, measure deviations, and classify
            severity. Critical defects render products unusable. Major defects
            significantly affect usability or salability. Minor defects involve
            cosmetic issues with limited impact. This classification helps
            buyers make informed acceptance decisions.
          </p>
          <p className="blog-body">
            Reporting communicates findings to clients. TPI reports include
            inspection details, observations, test results, defect descriptions
            with photos, and recommendations regarding acceptance or rejection.
            Reports arrive within 24-48 hours of inspection, enabling timely
            decisions.
          </p>

          <p
            className="innertopTextSubHeading"
            id="Third-Party-Inspection-Providers"
          >
            Selecting Third-Party Inspection Providers
          </p>
          <p className="blog-body">
            Provider selection significantly affects TPI effectiveness. Poor
            provider choices waste money without delivering quality assurance.
          </p>
          <p className="blog-body">
            Technical competence forms the foundation. Providers should
            demonstrate expertise in your product category through inspector
            qualifications, relevant certifications, and past experience with
            similar products. Ask about inspector training and technical
            backgrounds. Providers serving multiple industries may lack depth in
            your specific sector.
          </p>
          <p className="blog-body">
            Geographic coverage matters for multi-location operations. If you
            source from multiple states or countries, providers with broad
            networks reduce coordination complexity. However, local providers
            often deliver better service through deeper regional knowledge and
            faster response times.
          </p>
          <p className="blog-body">
            Accreditation demonstrates quality. International organizations like
            the Independent Inspection Association establish standards for
            inspection services.{" "}
            <span className="blog-body-highlightColorBlue">ISO 17020 </span>{" "}
            accreditation for inspection bodies provides confidence in provider
            competence. Check whether providers maintain relevant
            accreditations.
          </p>
          <p className="blog-body">
            Reporting quality affects decision-making utility. Review sample
            reports before engaging providers. Reports should be clear,
            specific, well-photographed, and actionable. Vague reports that
            don't support clear decisions waste inspection investment.
          </p>
          <p className="blog-body">
            Independence ensures objectivity. Verify that inspection providers
            don't have conflicts of interest with suppliers being inspected.
            Some manufacturers operate captive inspection divisions—using these
            for independent verification defeats the purpose.
          </p>
          <p className="blog-body">
            Cost structures should be transparent. Understand fee components
            including inspection fees, travel costs, laboratory testing, and
            report preparation. Hidden costs create budget surprises. However,
            cheapest isn't always best—inadequate inspection costs more than
            savings.
          </p>

          <p className="innertopTextSubHeading" id="Maximizing-TPI-Value">
            Maximizing TPI Value
          </p>
          <p className="blog-body">
            Organizations that approach TPI strategically realize greater
            benefits than those treating it as transaction overhead.
          </p>
          <p className="blog-body">
            Develop clear specifications before engaging TPI. Ambiguous
            requirements guarantee disputes regardless of inspection findings.
            Invest time upfront defining exact specifications, acceptance
            criteria, and test methods. This clarity enables objective
            verification.
          </p>
          <p className="blog-body">
            Use TPI data for continuous improvement. Rather than simply
            accepting or rejecting shipments, analyze TPI findings for patterns.
            Do certain suppliers consistently have specific defects? Do
            particular processes generate more problems? Use this intelligence
            for{" "}
            <span className="blog-body-highlightColorBlue">
              supplier quality audits
            </span>{" "}
            and improvement initiatives.
          </p>
          <p className="blog-body">
            Integrate TPI with{" "}
            <span className="blog-body-highlightColorBlue">CAPA processes</span>{" "}
            . When inspections reveal non-conformities, investigate root causes
            and implement corrective actions. TPI findings provide objective
            evidence supporting improvement efforts.
          </p>
          <p className="blog-body">
            Build TPI costs into procurement decisions. Factor inspection costs
            into total cost of ownership when selecting suppliers. Lowest quoted
            prices that require extensive inspection may cost more than slightly
            higher prices from suppliers delivering consistent quality.
          </p>
          <p className="blog-body">
            Communicate inspection results to suppliers. Share detailed findings
            including photos and measurements. This feedback helps suppliers
            understand buyer expectations and identify improvement
            opportunities. Collaborative approaches yield better long-term
            results than adversarial relationships.
          </p>
          <p className="blog-body">
            Adjust inspection frequency based on supplier performance. Suppliers
            demonstrating consistent quality may require less frequent
            inspection. Those with recurring issues need closer monitoring. This
            risk-based approach aligns with{" "}
            <span className="blog-body-highlightColorBlue">
              {" "}
              ISO 9001 risk-based thinking
            </span>
            .
          </p>

          <p className="innertopTextSubHeading" id="Challenges-and-Solutions">
            Common TPI Challenges and Solutions
          </p>
          <p className="blog-body">
            Third-party inspection isn't without challenges. Awareness helps
            organizations navigate difficulties effectively.
          </p>
          <p className="blog-body">
            Specification ambiguity creates most disputes. When specifications
            lack precision, inspectors and suppliers interpret requirements
            differently. Solution: Invest in clear specification development
            including drawings, samples, tolerances, and test methods.
          </p>
          <p className="blog-body">
            Time pressures compromise thoroughness. Rush inspections miss
            defects. Solution: Schedule inspections with adequate lead time.
            Incorporate inspection time into production planning rather than
            treating it as last-minute activity.
          </p>
          <p className="blog-body">
            Access limitations prevent complete inspection. Suppliers sometimes
            restrict inspector access to certain areas or information. Solution:
            Clearly define inspection scope and access requirements in purchase
            orders and supplier agreements
          </p>
          <p className="blog-body">
            Language and communication barriers create misunderstandings,
            particularly in international contexts. Solution: Use TPI providers
            with local language capabilities. Ensure inspectors can communicate
            effectively with supplier personnel.
          </p>
          <p className="blog-body">
            Cost perceptions limit TPI use. Organizations view inspection as
            pure overhead rather than risk mitigation. Solution: Calculate the
            cost of receiving non-conforming shipments including returns,
            rework, customer complaints, and relationship damage. Compare these
            costs to inspection fees.
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
          Third-party inspection provides objective quality verification that
          protects both buyers and suppliers. Organizations that integrate TPI
          into quality management systems reduce disputes, improve supplier
          performance, and protect their reputations.
        </p>

        <p className="innertopTextSubHeading_Points">
          Download our TPI Request Format to standardize how you engage
          inspection services and communicate requirements.
        </p>

        <p className="blog-body">
          Bexex provides comprehensive third-party inspection services across
          India, covering diverse manufacturing sectors. Our qualified
          inspectors bring technical expertise, state-of-the-art equipment, and
          understanding of international quality standards.{" "}
          <span className="blog-body-highlightColorBlue">
            {" "}
            Explore our TPI services
          </span>{" "}
          or contact us to discuss your inspection needs.
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
