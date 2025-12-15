import React, { useEffect, useRef, useState } from "react";
import "../../Css/service1.css";
import { LearnMoreButton, HeadingComponent } from "../Buttons.jsx";
import nature from "../../assets/images/nature.jpg";
import servicesCardData from "../../dataStore/serviceData.js";
import { CiSearch } from "react-icons/ci";
import { IoCheckmarkOutline } from "react-icons/io5";

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
  const [searchText, setSearchText] = useState("");


  const options = ["Consulting", "Auditing", "Training", "Software Solution"];

  const handleSelect = (opt) => {
    setSelectedFilter(opt);
    setOpenMenu(null);
  };

  // second filter
  const [selectedSecondFilter, setSelectedSecondFilter] = useState(
    "environment, health & safety solutions"
  );

  // console.log(selectedSecondFilter, "selectedSecondFilter")
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

  // third filter
  const [selectedthirdFilter, setselectedthirdFilter] = useState("");
  // console.log(selectedthirdFilter, "selectedthirdFilter")

  useEffect(() => {
    if (safetyServices.length > 0) {
      setselectedthirdFilter(safetyServices[0].name);
    }
  }, [selectedSecondFilter]);

  const handlethirdSelect = (opt) => {
    setselectedthirdFilter(opt);
    setOpenMenu(null);
  };



// search by type letter searchbar
const handleSearch = (e) => {
  setSearchText(e.target.value);
};


// filtering data from serviceCards
  const normalize = (str = "") => str.toLowerCase().trim();


 const filteredServices = servicesCardData.filter((item) => {
  const matchTitle =
    !selectedSecondFilter ||
    normalize(item.title) === normalize(selectedSecondFilter);

  const matchCategory =
    !selectedthirdFilter ||
    normalize(item.category) === normalize(selectedthirdFilter);

  const matchSearch =
    !searchText ||
    normalize(item.value).includes(normalize(searchText)); 

  return matchTitle && matchCategory && matchSearch;
});

// console.log(filteredServices, "filteredServices")  



const dropdownRef = useRef(null);


useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpenMenu(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);





  return (
    <>
      {/* service card rendering  */}
      <section className="csCardsFlexWrapper">
        <HeadingComponent text="Service" paddingBottom="0" />

        <div className="searchContainerWrapper">
          <div className="sfBarLeft">
            <h2 className="sfBarHeading">
              A Structured View of Our{" "}
              <span className="itly">Service Framework</span>
            </h2>

            <div className="sfBarFiltersRow"  ref={dropdownRef}>
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
                  <span className="sfBarPillIcon"><IoCheckmarkOutline /></span>
                  <span className="sfBarPillText">{selectedFilter}</span>
                </button>

                {openMenu === "first" && (
                  <div className="sfBarPillMenu sfBarPillMenu--animate">
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
                  <span className="sfBarPillIcon"><IoCheckmarkOutline /></span>
                  <span className="sfBarPillText">{selectedSecondFilter}</span>
                </button>

                {openMenu === "second" && (
                  <div className="sfBarPillMenu sfBarPillMenu--animate">
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
                  <span className="sfBarPillIcon"><IoCheckmarkOutline /></span>
                  <span className="sfBarPillText">{selectedthirdFilter}</span>
                </button>

                {openMenu === "third" && (
                  <div className="sfBarPillMenu sfBarPillMenu--animate">
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

          <div className="sfBarSearchWrap sfFloatSearch">
            <div className="sfBarSearchField sfFloatSearchField">
              <input
                id="sfSearch"
                type="text"
                placeholder=""
                className="sfBarSearchInput sfFloatSearchInput"
                value={searchText}
                onChange={handleSearch}
              />

              <label
                className="sfBarSearchLabel sfFloatSearchLabel"
                htmlFor="sfSearch"
              >
                Search
              </label>

              <span className="sfBarSearchIcon"><CiSearch /></span>
            </div>
          </div>
        </div>

        {filteredServices.map((card, index) => (
          <article key={index} className="csCardItem">
            <div className="csCardItemImageShell">
              <img
                src={card.img}
                alt={"img" + index}
                className="csCardItemImage"
              />
            </div>

            <div className="csCardItemBody">
              <h3 className="csCardItemTitle">{card.value}</h3>

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
