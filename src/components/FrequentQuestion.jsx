import React, { useState, useRef, useEffect } from "react";
import "../Css/frequentQuestion.css";
import { FaPlus, FaMinus } from "react-icons/fa6";



const FrequentQuestion = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-page page_indenation">
      <div className="faq-wrapper">
        <h1 className="faq-heading">
          Frequently <span className="itly">Asked</span> Questions
        </h1>

        <div className="faq-list">
          {data.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isActive ? "active" : ""}`}
              >
                <button
                  className="faq-toggle"
                  onClick={() => toggleIndex(index)}
                >
                  <span className="faq-icon">
                    {isActive ? <FaMinus /> : <FaPlus />}
                  </span>
                  <span className="faq-question">{item.question}</span>
                </button>

                <div
                  className="faq-answer-wrapper"
                  ref={(el) => (answerRefs.current[index] = el)}
                  style={{
                    height: isActive
                      ? answerRefs.current[index]?.scrollHeight + "px"
                      : "0px",
                    overflow: "hidden",
                    transition: "height 0.35s ease",
                  }}
                >
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestion;
