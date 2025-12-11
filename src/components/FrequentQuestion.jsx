import React, { useState, useRef, useEffect } from "react";
import "../Css/frequentQuestion.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqData = [
  {
    question: "How long does ISO 45001 implementation typically take?",
    answer:
      "Small organizations can complete implementation in 4 to 6 months. Medium-sized manufacturers typically require 8 to 12 months for thorough implementation. Focus on building a robust system rather than meeting arbitrary deadlines.",
  },
  {
    question: "Can we implement ISO 45001 without hiring consultants?",
    answer:
      "Yes, many organizations successfully implement ISO 45001 using internal resources. Success factors include having personnel with time to dedicate to the project and access to competent internal auditor training. Consultants accelerate implementation but aren't mandatory., it is possible to implement ISO 45001 internally if your team has sufficient knowledge and capacity.",
  },
  {
    question: "How much does ISO 45001 certification cost?",
    answer:
      "Total investment for a medium-sized manufacturer typically falls between ₹5 lakhs and ₹15 lakhs, including consultant fees, training, and certification body audit fees. Insurance savings and reduced incident costs often recover this investment within two years.",
  },
  {
    question: "What’s the difference between ISO 45001 and OHSAS 18001?",
    answer:
      "ISO 45001 replaced OHSAS 18001 in March 2018. Key differences include stronger emphasis on organizational context, enhanced worker participation requirements, explicit leadership accountability provisions, and integration with ISO's High-Level Structure.",
  },
  {
    question: "How does ISO 45001 relate to India’s OSH Code 2020?",
    answer:
      "The OSH Code 2020 consolidates 13 previous labor laws. ISO 45001 complements rather than replaces these legal requirements. Organizations certified to ISO 45001 demonstrate systematic approaches to meeting regulatory obligations, though certification doesn't exempt anyone from legal compliance.",
  },
];

const FrequentQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-page page_indenation">
      <div className="faq-wrapper">
        <h1 className="faq-heading">
          Frequently <span>Asked</span> Questions
        </h1>

        <div className="faq-list">
          {faqData.map((item, index) => {
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
