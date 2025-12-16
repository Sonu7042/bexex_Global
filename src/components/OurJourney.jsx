import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../Css/ourJourney.css";

export const OurJourney = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="journey-wrapper">
      <div className="journey-container">
        <h2 className="journey-title">Changelog from my journey</h2>
        <p className="journey-desc">
          I've been working on Aceternity for the past 2 years. Here's a timeline
          of my journey.
        </p>
      </div>

      <div ref={ref} className="journey-timeline">
        {data.map((item, index) => (
          <div key={index} className="journey-row">
            {/* LEFT (YEAR / TITLE) */}
            <div className="journey-left">
              <div className="journey-dot-outer">
                <div className="journey-dot-inner" />
              </div>
              <h3 className="journey-year">{item.title}</h3>
            </div>

            {/* RIGHT (CONTENT) */}
            <div className="journey-right">
              <h3 className="journey-year-mobile">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical line */}
        <div className="journey-line" style={{ height }}>
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="journey-line-progress"
          />
        </div>
      </div>
    </div>
  );
};
