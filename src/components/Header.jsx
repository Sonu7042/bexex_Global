import React, { useState, useEffect } from "react";
import "../Css/header.css";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import header_logo from '../assets/images/Bexexlogo.png'
import { IoIosArrowDown } from "react-icons/io";

const menuItems = [
  // { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/about" },
  { label: "SERVICES", to: "/services", dropdown: true, key: "services" },
  { label: "RESOURCES", to: "#", dropdown: true, key: "resources" },
  { label: "COMMUNITIES", to: "/communities" },
];

const services = [
  { title: "Environment, health & safety (ehs) solution", link: "/services/1" },
  { title: "Managements systems & compliance", link: "/services/2" },
  { title: "Training & competency development", link: "/services/3" },
  { title: "Software & digital solution", link: "/services/4" },
  { title: "Sustainability & ESG services", link: "/services/5" },
  { title: "Quality & business excellence", link: "/services/6" },
];

const resources = [
  { title: "Blogs",        link: "/resources/blog" },
  { title: "NewsLetters",  link: "/resources/newsletters" },
];

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [isHoverable, setIsHoverable] = useState(false); // UPDATED: track devices that support hover

  const handleSearchToggle = () => {
    setSearchActive(prev => !prev);
    setMenuOpen(false);
    setServiceOpen(false);
    setResourceOpen(false);
  };

  // UPDATED: keep click handler only for mobile (no hover)
  const handleDropdownClick = (e, key) => {
    if (isHoverable) return; // UPDATED: ignore click toggle on desktop, let Link navigate
    e.preventDefault();

    if (key === "services") {
      setServiceOpen(prev => !prev);
      setResourceOpen(false);
    } else if (key === "resources") {
      setResourceOpen(prev => !prev);
      setServiceOpen(false);
    }

    setMenuOpen(false);
  };

  const handleHamburgerToggle = () => {
    setMenuOpen(prev => !prev);
    setServiceOpen(false);
    setResourceOpen(false);
    setSearchActive(false);
  };

  useEffect(() => {
    function handleClose(e) {
      if (!e.target.closest(".header")) {
        setMenuOpen(false);
        setServiceOpen(false);
        setResourceOpen(false);
        setSearchActive(false);
      }
    }
    document.addEventListener("mousedown", handleClose);
    return () => document.removeEventListener("mousedown", handleClose);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setServiceOpen(false);
      setResourceOpen(false);
    }
  }, [menuOpen]);

  // UPDATED: detect if device supports hover (desktop / laptop)
  useEffect(() => {
    const mql = window.matchMedia("(hover: hover)");
    const update = () => setIsHoverable(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const closeAllMenus = () => {
    setMenuOpen(false);
    setServiceOpen(false);
    setResourceOpen(false);
    setSearchActive(false);
  };

  // UPDATED: hover handlers for desktop only
  const handleServicesMouseEnter = () => {
    if (!isHoverable || menuOpen) return;
    setServiceOpen(true);
    setResourceOpen(false);
  };

  const handleServicesMouseLeave = () => {
    if (!isHoverable || menuOpen) return;
    setServiceOpen(false);
  };

  const handleResourcesMouseEnter = () => {
    if (!isHoverable || menuOpen) return;
    setResourceOpen(true);
    setServiceOpen(false);
  };

  const handleResourcesMouseLeave = () => {
    if (!isHoverable || menuOpen) return;
    setResourceOpen(false);
  };

  return (
    <header className={`header ${searchActive ? "search-open" : ""}`} data-aos="fade-down">
      <div className="header-inner">
        <Link to="/" className="logo-area">
          {/* <span className="logo">b e x e x</span> */}
          <img src={header_logo} alt="header Logo" />
        </Link>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          onClick={handleHamburgerToggle}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-menu ${menuOpen ? "mobile-open" : ""}`}>
          {menuItems.map((item, idx) => {
            if (item.dropdown) {
              // UPDATED: wrap each dropdown item with a hover container for desktop
              const isServices = item.key === "services";
              const isResources = item.key === "resources";

              return (
                <div
                  key={idx}
                  className={`nav-link-wrapper`} // make sure has no gap with dropdown so hover doesn't break
                  onMouseEnter={
                    isServices ? handleServicesMouseEnter :
                    isResources ? handleResourcesMouseEnter :
                    undefined
                  } // UPDATED
                  // onMouseLeave={
                  //   isServices ? handleServicesMouseLeave :
                  //   isResources ? handleResourcesMouseLeave :
                  //   undefined
                  // } // UPDATED
                >
                  <Link
                    to={item.to} // UPDATED: real navigation on click
                    className="nav-link applyfont"
                    onClick={(e) => handleDropdownClick(e, item.key)} // UPDATED: only used for mobile (no hover)
                  >
                    {item.label}
                    <span className="dropdown-icon"><IoIosArrowDown /></span>
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={idx}
                to={item.to}
                className="nav-link applyfont"
                onClick={closeAllMenus}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="search-area">
          <Link to="/contact">
            <button className="talk-us">
              Talk to us
              <div className="arrow-ho">
                <svg className="arrow-need" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="fill-bg"></span>
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* SERVICES dropdown */}
      <div className={`service-menu-dropdown services-dropdown ${serviceOpen ? "open" : ""}`}>
        <div className="services-grid_Head">
          {services.map((service, idx) => (
            <Link
              className="header-service-card"
              onClick={closeAllMenus}
              to={service.link}
              key={idx}
            >
              <div className="service-title">{service.title}</div>
              <span className="service-icon">
                <MdArrowOutward />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* RESOURCES dropdown */}
      <div className={`service-menu-dropdown resources-dropdown ${resourceOpen ? "open" : ""}`}>
        <div className="services-grid_Head-resources">
          {resources.map((item, idx) => (
            <Link
              className="header-service-card"
              onClick={closeAllMenus}
              to={item.link}
              key={idx}
            >
              <div className="service-title">{item.title}</div>
              <span className="service-icon">
                <MdArrowOutward />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
