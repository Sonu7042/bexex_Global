import React, { useState, useEffect } from "react";
import "../Css/header.css";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import header_logo from "../assets/images/Bexexlogo.png";
import { IoIosArrowDown } from "react-icons/io";

const menuItems = [
  { label: "ABOUT US", to: "/about" },
  { label: "SERVICES", to: "/Services", dropdown: true, key: "services" },
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
  { title: "Blogs", link: "/resources/blog" },
  { title: "NewsLetters", link: "/resources/newsletters" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);

  /* =========================
     ✅ NEW: Hover handlers
  ========================= */
  const handleMouseEnter = (key) => {
    if (key === "services") {
      setServiceOpen(true);
      setResourceOpen(false);
    } else if (key === "resources") {
      setResourceOpen(true);
      setServiceOpen(false);
    }
  };

  const handleMouseLeave = () => {
    setServiceOpen(false);
    setResourceOpen(false);
  };

  const handleHamburgerToggle = () => {
    setMenuOpen((prev) => !prev);
    setServiceOpen(false);
    setResourceOpen(false);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setServiceOpen(false);
    setResourceOpen(false);
  };

  /* =========================
     Close menu on outside click
  ========================= */
  useEffect(() => {
    const handleClose = (e) => {
      if (!e.target.closest(".header")) {
        closeAllMenus();
      }
    };
    document.addEventListener("mousedown", handleClose);
    return () => document.removeEventListener("mousedown", handleClose);
  }, []);

  return (
    <header className="header" data-aos="fade-down">
      <div className="header-inner">
        <Link to="/" className="logo-area">
          <img src={header_logo} alt="header Logo" />
        </Link>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={handleHamburgerToggle}
        >
          <span />
          <span />
          <span />
        </button>

        {/* =========================
            NAV MENU
        ========================= */}
        <nav className={`nav-menu ${menuOpen ? "mobile-open" : ""}`}>
          {menuItems.map((item, idx) => {
            if (item.dropdown) {
              return (
                <Link
                  key={idx}
                  to={item.to} // ✅ Click → navigate
                  className="nav-link applyfont"
                  onMouseEnter={() => handleMouseEnter(item.key)} // ✅ Hover open
                  onClick={closeAllMenus}
                >
                  {item.label}
                  <span className="dropdown-icon">
                    <IoIosArrowDown />
                  </span>
                </Link>
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

        <Link to="/contact">
          <button className="talk-us">
            Talk to us
            <div className="arrow-ho">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span className="fill-bg"></span>
            </div>
          </button>
        </Link>
      </div>

      {/* =========================
          SERVICES DROPDOWN
      ========================= */}
      <div
        className={`service-menu-dropdown services-dropdown ${
          serviceOpen ? "open" : ""
        }`}
        onMouseEnter={() => handleMouseEnter("services")} // ✅ keep open
        onMouseLeave={handleMouseLeave} // ✅ close on leave
      >
        <div className="services-grid_Head">
          {services.map((service, idx) => (
            <Link
              key={idx}
              to={service.link}
              className="header-service-card"
              onClick={closeAllMenus}
            >
              <div className="service-title">{service.title}</div>
              <span className="service-icon">
                <MdArrowOutward />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* =========================
          RESOURCES DROPDOWN
      ========================= */}
      <div
        className={`service-menu-dropdown resources-dropdown ${
          resourceOpen ? "open" : ""
        }`}
        onMouseEnter={() => handleMouseEnter("resources")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="services-grid_Head-resources">
          {resources.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="header-service-card"
              onClick={closeAllMenus}
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
