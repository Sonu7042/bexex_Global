import React from "react";
import "../Css/animationScrolling.css";

const OnScrollingAnimation = () => {
  const preventClick = (e) => e.preventDefault();

  return (
    <section data-section-name="news" id="newsroom">
      <h2 className="section-heading">Newsroom</h2>

      <div className="container">
        <div className="news-section-slider">
          {/* YEAR SECTION */}
          <div className="year-wrapper">
            <span>20</span>
            <div className="year-slider">
              <div className="item-year active">25</div>
              <div className="item-year">24</div>
              <div className="item-year">23</div>
              <div className="item-year">22</div>
              <div className="item-year">21</div>
              <div className="item-year">20</div>
              <div className="item-year">19</div>
            </div>
          </div>

          {/* NEWS SLIDER */}
          <div className="news-slider">

            {/* 2025 */}
            <div className="news-item">
              <div className="news-wrapper">
                <ul role="list" className="news-list animate__slideInRight">
                  <li>
                    <a
                      href="#"
                      onClick={preventClick}
                      className="contentPopup_open"
                      data-slug="amns-india-accelerates-circularity-and-low-carbon-emissions-steelmaking"
                      data-title="AM/NS India accelerates circularity and low-carbon emissions steelmaking"
                      data-slug-key="press-release"
                      data-content-url="press-releases/amns-india-accelerates-circularity-and-low-carbon-emissions-steelmaking.html"
                    >
                      AM/NS India accelerates circularity and low-carbon emissions steelmaking
                    </a>
                    <div className="publish-date-city">
                      <span className="city">Mumbai/Delhi</span>
                      <span className="date">November 2025</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2024 */}
            <div className="news-item">
              <div className="news-wrapper">
                <ul role="list" className="news-list animate__slideInRight">
                  <li>
                    <a
                      href="#"
                      onClick={preventClick}
                      className="contentPopup_open"
                      data-slug="am-ns-india-launches-magnelis-r"
                      data-title="AM/NS India launches Magnelis®"
                    >
                      AM/NS India launches Magnelis® - unique import substitute
                    </a>
                    <div className="publish-date-city">
                      <span className="city">Mumbai</span>
                      <span className="date">September 2024</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Repeat other years SAME WAY (structure unchanged) */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default OnScrollingAnimation;
