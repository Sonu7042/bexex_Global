import React, { useEffect, useState } from "react";
import "../../Css/service1.css";
import { LearnMoreButton, HeadingComponent } from "../Buttons.jsx";
import nature from "../../assets/images/nature.jpg";

const cards = [
  {
    id: 1,
    title: "Fire Safty Assesments",
    image: nature,
    tag: "Fire Safty Assesments",
  },
  {
    id: 2,
    title: "Fire Safty Assesments",
    image: nature,
    tag: "Fire Safty Assesments",
  },
  {
    id: 3,
    title: "Fire Safty Assesments",
    image: nature,
    tag: "Fire Safty Assesments",
  },
  {
    id: 4,
    title: "Fire Safty Assesments",
    image: nature,
    tag: "Fire Safty Assesments",
  },
  {
    id: 5,
    title: "Safety & Environment",
    image: nature,
    tag: "Safety & Environment",
  },
  {
    id: 6,
    title: "ISO Internal Audit",
    image: nature,
    tag: "ISO Internal Audit",
  },
];

const Service1 = () => {
  //  first filter
  const [openMenu, setOpenMenu] = useState(null);

  const [selectedFilter, setSelectedFilter] = useState("Consulting");

  const options = ["Consulting", "Auditing", "Training", "Software Solution"];

  const handleSelect = (opt) => {
    setSelectedFilter(opt);
    setOpenMenu(null);
  };

  // secondary filter
  const [selectedSecondFilter, setSelectedSecondFilter] = useState(
    "environment, health & safety solutions"
  );
  const secondaryOptions = [
    "quality & business excellence",
    "management systems and compliance",
    "esg and sustainability services",
    "software & digital solutions",
    "training & competency development",
    "environment, health & safety solutions",
  ];

  const handleSecondSelect = (opt) => {
    setSelectedSecondFilter(opt);
    setOpenMenu(null);
  };

  // filter data according second filter
  const filterDataforthirdfilter = [
    // ENVIRONMENT, HEALTH & SAFETY SOLUTIONS
    {
      name: "Fire Safety",
      category: "ENVIRONMENT, HEALTH & SAFETY SOLUTIONS",
    },
    {
      name: "Electrical Safety",
      category: "ENVIRONMENT, HEALTH & SAFETY SOLUTIONS",
    },
    {
      name: "Logistics and Warehouse Safety",
      category: "ENVIRONMENT, HEALTH & SAFETY SOLUTIONS",
    },
    {
      name: "Behavior-Based Safety (BBS)",
      category: "ENVIRONMENT, HEALTH & SAFETY SOLUTIONS",
    },

    // QUALITY & BUSINESS EXCELLENCE
    {
      name: "Six Sigma",
      category: "QUALITY & BUSINESS EXCELLENCE",
    },
    {
      name: "5-S Workplace Organization",
      category: "QUALITY & BUSINESS EXCELLENCE",
    },
    {
      name: "Supplier Quality Management",
      category: "QUALITY & BUSINESS EXCELLENCE",
    },
    {
      name: "Lean Management",
      category: "QUALITY & BUSINESS EXCELLENCE",
    },
    {
      name: "Total Productive Maintenance (TPM)",
      category: "QUALITY & BUSINESS EXCELLENCE",
    },

    // MANAGEMENT SYSTEMS AND COMPLIANCE
    {
      name: "ISO System Consulting",
      category: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    },
    {
      name: "Automotive & Aerospace Standards",
      category: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    },
    {
      name: "Miscellaneous Services",
      category: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    },
    {
      name: "Legal Compliance Management",
      category: "MANAGEMENT SYSTEMS AND COMPLIANCE",
    },

    // ESG AND SUSTAINABILITY SERVICES
    {
      name: "ESG Strategy & Reporting",
      category: "ESG AND SUSTAINABILITY SERVICES",
    },
    {
      name: "Energy Management",
      category: "ESG AND SUSTAINABILITY SERVICES",
    },
    {
      name: "Environmental Compliance",
      category: "ESG AND SUSTAINABILITY SERVICES",
    },
    {
      name: "Water & Waste Management",
      category: "ESG AND SUSTAINABILITY SERVICES",
    },
    {
      name: "Social & Welfare",
      category: "ESG AND SUSTAINABILITY SERVICES",
    },

    // SOFTWARE & DIGITAL SOLUTIONS
    {
      name: "Custom EHS Software",
      category: "SOFTWARE & DIGITAL SOLUTIONS",
    },
    {
      name: "Digital LMS Platforms",
      category: "SOFTWARE & DIGITAL SOLUTIONS",
    },
    {
      name: "Performance Dashboards",
      category: "SOFTWARE & DIGITAL SOLUTIONS",
    },
    {
      name: "Digital Resources & Toolkits",
      category: "SOFTWARE & DIGITAL SOLUTIONS",
    },

    // TRAINING & COMPETENCY DEVELOPMENT
    {
      name: "Management Systems Training",
      category: "TRAINING & COMPETENCY DEVELOPMENT",
    },
    {
      name: "Leadership & Soft Skills",
      category: "TRAINING & COMPETENCY DEVELOPMENT",
    },
    {
      name: "Technical Training",
      category: "TRAINING & COMPETENCY DEVELOPMENT",
    },
    {
      name: "Quality Tools Training",
      category: "TRAINING & COMPETENCY DEVELOPMENT",
    },
    {
      name: "Competency Management",
      category: "TRAINING & COMPETENCY DEVELOPMENT",
    },
  ];

  const safetyServices = filterDataforthirdfilter.filter(
    (item) => item.category.toLowerCase() === selectedSecondFilter.toLowerCase()
  );

  console.log(safetyServices, "safetyServices");

  // third filter
  const [selectedthirdFilter, setselectedthirdFilter] = useState("");

  useEffect(() => {
    if (safetyServices.length > 0) {
      setselectedthirdFilter(safetyServices[0].name);
    }
  }, [selectedSecondFilter]);

  const handlethirdSelect = (opt) => {
    setselectedthirdFilter(opt);
    setOpenMenu(null);
  };

  return (
    <>
      {/* service card rendering  */}
      <section className="csCardsFlexWrapper">
        <HeadingComponent text="Service" paddingBottom="0" />

        <div className="searchContainerWrapper">
          <div className="sfBarLeft">
            <h2 className="sfBarHeading">
              A Structured View of Our{" "}
              <span className="sfBarHeadingEmphasis">Service Framework</span>
            </h2>

            <div className="sfBarFiltersRow">
              {/* <span className="sfBarFilterLabel">Filter</span> */}

              {/* pill with dropdown */}
              <div className="sfBarPillDropdown">
                <button
                  type="button"
                  className="sfBarPill sfBarPill--active"
                  onClick={() =>
                    setOpenMenu(openMenu === "first" ? null : "first")
                  }
                >
                  <span className="sfBarPillIcon">✔</span>
                  <span className="sfBarPillText">{selectedFilter}</span>
                </button>

                {openMenu === "first" && (
                  <div className="sfBarPillMenu">
                    {options.map((opt) => (
                      <button
                        key={opt}
                        className="sfBarPillMenuItem"
                        onClick={() => handleSelect(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/*  second filter pill with dropdown */}
              <div className="sfBarPillDropdown">
                <button
                  type="button"
                  className="sfBarPill sfBarPill--active"
                  onClick={() =>
                    setOpenMenu(openMenu === "second" ? null : "second")
                  }
                >
                  <span className="sfBarPillIcon">✔</span>
                  <span className="sfBarPillText">{selectedSecondFilter}</span>
                </button>

                {openMenu === "second" && (
                  <div className="sfBarPillMenu">
                    {secondaryOptions.map((opt) => (
                      <button
                        key={opt}
                        className="sfBarPillMenuItem"
                        onClick={() => handleSecondSelect(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* third filter pill with dropdown */}
              <div className="sfBarPillDropdown">
                <button
                  type="button"
                  className="sfBarPill sfBarPill--active"
                  onClick={() =>
                    setOpenMenu(openMenu === "third" ? null : "third")
                  }
                >
                  <span className="sfBarPillIcon">✔</span>
                  <span className="sfBarPillText">{selectedthirdFilter}</span>
                </button>

                {openMenu === "third" && (
                  <div className="sfBarPillMenu">
                    {safetyServices.map((opt) => (
                      <button
                        key={opt.name} // ✅ unique string key
                        className="sfBarPillMenuItem"
                        onClick={() => handlethirdSelect(opt.name)} // ✅ pass name only
                      >
                        {opt.name} {/* ✅ render string */}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="sfBarSearchWrap">
            <label className="sfBarSearchLabel" htmlFor="sfSearch">
              Search
            </label>
            <div className="sfBarSearchField">
              <input
                id="sfSearch"
                type="text"
                placeholder=""
                className="sfBarSearchInput"
              />
              <span className="sfBarSearchIcon">🔍</span>
            </div>
          </div>
        </div>

        {cards.map((card) => (
          <article key={card.id} className="csCardItem">
            <div className="csCardItemImageShell">
              <img
                src={card.image}
                alt={card.title}
                className="csCardItemImage"
              />
            </div>

            <div className="csCardItemBody">
              <h3 className="csCardItemTitle">{card.title}</h3>

              {/* <div className="csCardItemIconRow">
              <span className="csCardItemIconBox">X</span>
              <span className="csCardItemIconBox">PDF</span>
              <span className="csCardItemIconBox">PPT</span>
              <span className="csCardItemIconBox">W</span>
            </div>

             <LearnMoreButton text="Discover more" link="/" marginTop="0" /> */}
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
export default Service1;
