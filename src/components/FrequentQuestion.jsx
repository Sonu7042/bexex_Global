import React, { useState } from "react";
import "../Css/frequentQuestion.css";

const faqData = [
  {
    question: "How long does ISO 45001 implementation typically take?",
    answer:
      "Implementation typically takes several months depending on organization size, existing systems, and resource availability.",
  },
  {
    question: "Can we implement ISO 45001 without hiring consultants?",
    answer:
      "Yes, it is possible to implement ISO 45001 internally if your team has sufficient knowledge and capacity.",
  },
  {
    question: "How much does ISO 45001 certification cost?",
    answer:
      "Costs vary based on organization size, scope, and chosen certification body.",
  },
  {
    question: "What’s the difference between ISO 45001 and OHSAS 18001?",
    answer:
      "ISO 45001 follows the Annex SL structure and emphasizes organizational context and leadership more strongly than OHSAS 18001.",
  },
  {
    question: "How does ISO 45001 relate to India’s OSH Code 2020?",
    answer:
      "ISO 45001 can help organizations align their occupational health and safety management with requirements in India’s OSH Code 2020.",
  },
];

const FrequentQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
                    {isActive ? "−" : "+"}
                  </span>
                  <span className="faq-question">{item.question}</span>
                </button>

                {isActive && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestion;
