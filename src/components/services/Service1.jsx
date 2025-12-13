import React from "react";
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

              <button className="sfBarPill sfBarPill--active">
                <span className="sfBarPillIcon">✔</span>
                <span className="sfBarPillText">Consulting</span>
              </button>

              <button className="sfBarPill">
                <span className="sfBarPillIcon">✔</span>
                <span className="sfBarPillText">
                  Environment, health &amp; safety (ehs) solution
                </span>
              </button>
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
