import React from "react";
import { Link } from "react-router-dom";

// learn btn with hover 
const LearnMoreButton = ({text, link, marginTop, color}) => {
  return (
    <>
      <style>{`
    /* Learn More Button */

    .learn-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 17px;
      text-decoration: none;
      color: #000;
      font-weight: 600;
      // margin-top:10px
    }

    .icon-box {
      position: relative;
      width: 28px;
      height: 28px;
      background: #0073ff;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .icon-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #000;
      transform: translateY(-100%) scale(0);
      transition: 0.35s ease;
    }

    .arrowLearn {
      position: relative;
      z-index: 2;
      color: #000;
      transition: 0.35s ease;
    }

    .learn-btn:hover .icon-bg {
      transform: translateY(0) scale(1);
    }

    .learn-btn:hover .arrowLearn {
      transform: rotate(90deg);
      color: #fff;
    }
      `}</style>

      <Link className="learn-btn"
      style={{ marginTop: marginTop ? `${marginTop}px` : "0px", color:color }}
       to={link}>
        <span>{text}</span>

        <div className="icon-box">
          <div className="icon-bg"></div>

          <svg
            className="arrowLearn"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </Link>
    </>
  );
};

// btn 2 with hover 
const MagicButton = () => {
  return (
    <>
      <style>{`
        .magic-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 14px 30px 14px 54px;
          background: #ffffff;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-size: 18px;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
          color: #000;
        }

        .blue-dot {
          position: absolute;
          left: 18px;
          width: 10px;
          height: 10px;
          background: #0070ff;
          border-radius: 50%;
          z-index: 1;
          transition:
            width 0.6s ease,
            height 0.6s ease,
            left 0.6s ease,
            transform 0.6s ease;
        }

        .btn-text {
          position: relative;
          z-index: 2;
          transition: color 0.3s ease;
        }

        .magic-btn:hover .blue-dot {
          width: 320px;
          height: 320px;
          left: -120px;
          border-radius: 50%;
        }

        .magic-btn:hover .btn-text {
          color: #fff;
        }
      `}</style>

      <button className="magic-btn">
        <span className="blue-dot"></span>
        <span className="btn-text">Contact us</span>
      </button>
    </>
  );
};



export {LearnMoreButton, MagicButton};
