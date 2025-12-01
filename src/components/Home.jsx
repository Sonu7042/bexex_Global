import React  from "react";
import "../Css/home.css";
import cardImg from "../assets/images/homeImg.png";
import {HeadingComponent, LearnMoreButton} from "./Buttons"

export default function Home() {
  // const gridRef = useRef(null);
  // const cellSize = 30;

  // useEffect(() => {
  //   const grid = gridRef.current;
  //   let flickerInterval;
  //   let lastX = null;
  //   let lastY = null;

  //   const buildGrid = () => {
  //     grid.innerHTML = "";
  //     const cols = Math.floor(window.innerWidth / cellSize);
  //     const rows = Math.floor(window.innerHeight / cellSize);

  //     grid.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
  //     grid.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;

  //     for (let i = 0; i < cols * rows; i++) {
  //       const cell = document.createElement("div");
  //       cell.classNameList.add("cell");
  //       grid.appendChild(cell);
  //     }

  //     const cells = grid.querySelectorAll(".cell");

  //     const handleMouseMove = (e) => {
  //       if (Math.random() < 0.1) return;

  //       const x = Math.floor(e.clientX / cellSize);
  //       const y = Math.floor(e.clientY / cellSize);
  //       const index = y * cols + x;

  //       if (index >= 0 && index < cells.length) {
  //         const cell = cells[index];
  //         const randomFlash = Math.random() < 0.3;
  //         if (randomFlash) {
  //           cell.classNameList.add("flash");
  //           setTimeout(() => cell.classNameList.remove("flash"), 200);
  //         } else if (!cell.classNameList.contains("active")) {
  //           cell.classNameList.add("active");
  //           setTimeout(() => cell.classNameList.remove("active"), 350);
  //         }
  //       }

  //       if (lastX !== null && lastY !== null) {
  //         const dx = x - lastX;
  //         const dy = y - lastY;
  //         const steps = Math.min(Math.max(Math.abs(dx), Math.abs(dy)), 2);
  //         for (let i = 1; i <= steps; i++) {
  //           const midX = lastX + Math.round((dx * i) / steps);
  //           const midY = lastY + Math.round((dy * i) / steps);
  //           const midIndex = midY * cols + midX;
  //           if (midIndex >= 0 && midIndex < cells.length) {
  //             const cell = cells[midIndex];
  //             if (!cell.classNameList.contains("active")) {
  //               cell.classNameList.add("active");
  //               cell.style.opacity = 0.9 - i * 0.1;
  //               setTimeout(() => cell.classNameList.remove("active"), 250);
  //             }
  //           }
  //         }
  //       }
  //       lastX = x;
  //       lastY = y;
  //     };

  //     window.addEventListener("mousemove", handleMouseMove);

  //     flickerInterval = setInterval(() => {
  //       const randomIndex = Math.floor(Math.random() * cells.length);
  //       const cell = cells[randomIndex];
  //       if (!cell.classNameList.contains("active")) {
  //         cell.classNameList.add("flicker");
  //         setTimeout(() => cell.classNameList.remove("flicker"), 900);
  //       }
  //     }, 200);

  //     return () => {
  //       window.removeEventListener("mousemove", handleMouseMove);
  //       clearInterval(flickerInterval);
  //     };
  //   };

  //   let cleanup = buildGrid();

  //   const handleResize = () => {
  //     cleanup && cleanup();
  //     cleanup = buildGrid();
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     cleanup && cleanup();
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <div className="home-container">
        <main className="home-main">
          <section className="hero-section" style={{ position: "relative" }}>
            <div className="grid" ></div>

            {/* <div className="brand" style={{ position: "relative", zIndex: 1 }}>
              <div className="brand-logo">  
                <img src={miniLogo} alt="miniLogo" />
              </div>
              <span className="brand-name">Consulting firm</span>
            </div> */}
           <HeadingComponent text="Strategic Partner"  marginTop="0" paddingBottom="1"/>



            <h1 className="hero-title" style={{ position: "relative", zIndex: 1 }}>
              From Compliance Chaos to Operational{" "}
              <span className="itly"> Excellence</span>    
            </h1>

            <p className="hero-subtext" style={{ position: "relative", zIndex: 1 }}>
             Integrated EHS, Quality, and Sustainability solutions that simplify complexity and deliver measurable results.
            </p>

            {/* <button className="discover-btn applyFont" style={{ position: "relative", zIndex: 1 }}>
              Discover more
              <span className="discover-icon">
                <svg width="17" height="17" fill="none" stroke="#fff" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 4l6 4.5-6 4.5" />
                </svg>
              </span>

            </button> */}
              <LearnMoreButton  text="Discover more" link="/" marginTop="0"  />
          </section>

          <aside className="hero-card">
            <div className="card">
              <div className="card-content">
                <div>
                  <div className="card-label applyFont">Consulting firm</div>
                  <div className="card-title_home applyFont">
                    Your Partner in Building Safer, Compliant, and Operations
                  </div>
                </div>
                <div className="card-subtext applyFont">
                  Integrated EHS, Quality, and Sustainability solutions designed for lasting business excellence.
                </div>

                {/* <button className="card-btn">
                  <span>Discover more</span>
                  <span className="card-icon">
                    <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 3l4 3-4 3" />
                    </svg>
                  </span>
                </button> */}

                {/* <div className="card-btn">
                  <span>Discover more</span>
                </div> */}
                  
              <LearnMoreButton  text="Discover more" link="/" marginTop="15"  />


              </div>
              <div className="card-image">
                <img src={cardImg} alt="Card artwork" />
              </div>
            </div>
          </aside>
        </main>



        <div className="mobile-card">
          <div className="card">
            <div className="card-content">
              <div>
                <div className="card-label applyFont">Consulting firm</div>
                <div className="card-title_home applyFont">
                  Your Partner in Building Safer, Compliant, and High-Performing Operations
                </div>
              </div>
              <div className="card-subtext applyFont">
                Integrated EHS, Quality, and Sustainability solutions designed for lasting business excellence.
              </div>
               <LearnMoreButton text="Discover more" />
              {/* <button className="card-btn">
                <span>Discover more</span>
                <span className="card-icon">

                  
                  <svg width="12" height="12" fill="none" stroke="#fff" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 3l4 3-4 3" />
                  </svg>
                </span>
              </button> */}
            </div>
            <div className="card-image">
              <img src={cardImg} alt="Card artwork" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
