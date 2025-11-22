import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Buttons = () => {
  const [hover, setHover] = useState(false);

  const btnStyle = {
    background: hover ? "#111" : "#1169ee",
    color: "#000",
    border: "none",
    padding: "4px 4px",
    // borderRadius: "5px",
    fontSize: "1.0em",
    marginLeft:"10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "background .2s",
    outline: "none",
    
  };

  const arrowStyle = {
    marginLeft: "0px",
    transition: "color .2s, transform .2s",
    display: "inline-block",
    color: hover ? "#fff" : "#fff",
    transform: hover ? "rotate(90deg)" : "none",
  };

  return (
    <button
      style={btnStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span style={arrowStyle}><FaArrowRight/></span>
    </button>
  );
};

export default Buttons;
