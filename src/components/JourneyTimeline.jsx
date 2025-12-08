import { useRef, useState, useEffect } from "react";

const timelineData = [
  {
    year: "2025",
    content:
      "Recognized as eGrowth Global, upscaling & leading our evolution into a multi-domain firm focusing on business excellence, sustainability, and growth.",
  },
  {
    year: "2017",
    content:
      "Established as eGrowth India, delivering early consulting assignments and 200+ training hours—laying the foundation for client trust and expertise.",
  },
  {
    year: "2019",
    content:
      "Set up a dedicated office and expanded the consulting and training team to serve more sectors with structured project management",
  },
  {
    year: "2021",
    content:
      "Achieved 5,000+ training hours and completed 200+ consulting projects, strengthening our footprint across industries.",
  },
  {
    year: "2023",
    content:
      "Registered as eGrowth Training & Consultancy Services under GST, reaching 300+ projects and 100+ clients, building a legacy of excellence.",
  },
];

function TimelineSection() {
  const yearsRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const yearsEl = yearsRef.current;
    const contentEl = contentRef.current;
    const containerEl = containerRef.current;

    if (!yearsEl || !contentEl || !containerEl) return;

    const handleWheel = (e) => {
      e.preventDefault(); // lock page scroll completely

      const delta = e.deltaY;

      // YEAR LIST
      const yTop = yearsEl.scrollTop === 0;
      const yBottom =
        yearsEl.scrollTop + yearsEl.clientHeight >= yearsEl.scrollHeight;

      if (!(yTop && delta < 0) && !(yBottom && delta > 0)) {
        yearsEl.scrollTop += delta;
      }

      // CONTENT LIST
      const cTop = contentEl.scrollTop === 0;
      const cBottom =
        contentEl.scrollTop + contentEl.clientHeight >= contentEl.scrollHeight;

      if (!(cTop && delta < 0) && !(cBottom && delta > 0)) {
        contentEl.scrollTop += delta;
      }

      // RELEASE PAGE SCROLL ONLY WHEN BOTH inner scrolls reach top or bottom
      const allowUp = yTop && cTop && delta < 0;
      const allowDown = yBottom && cBottom && delta > 0;

      if (allowUp || allowDown) {
        containerEl.style.pointerEvents = "none";

        setTimeout(() => {
          containerEl.style.pointerEvents = "auto";
        }, 180);
      }
    };

    const syncActive = () => {
      const itemHeight = contentEl.scrollHeight / timelineData.length;
      const index = Math.round(contentEl.scrollTop / itemHeight);
      setActiveIndex(Math.max(0, Math.min(index, timelineData.length - 1)));
    };

    containerEl.addEventListener("wheel", handleWheel, { passive: false });
    contentEl.addEventListener("scroll", syncActive);

    return () => {
      containerEl.removeEventListener("wheel", handleWheel);
      contentEl.removeEventListener("scroll", syncActive);
    };
  }, []);

  return (
    <div className="bg-[#2a2a2a] text-white py-16 px-8">

      {/* STICKY WRAPPER — keeps section fixed until inner scroll is done */}
      <div className="sticky top-0">

        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-20 leading-tight">
            OUR JOURNEY OF <span className="text-blue-500 italic">GROWTH</span>
            <br />
            AND EXCELLENCE
          </h1>

          <div
            ref={containerRef}
            className="relative flex gap-8 h-[600px]"
          >
            {/* YEARS */}
            <div
              ref={yearsRef}
              className="w-1/3 overflow-y-auto scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="space-y-8 pr-8">
                {timelineData.map((item, index) => (
                  <div
                    key={item.year}
                    className={`text-7xl font-bold italic transition-all duration-300 ${
                      activeIndex === index
                        ? "text-white bg-gray-600 px-8 py-6"
                        : "text-gray-500 px-8 py-6"
                    }`}
                    style={{
                      minHeight: "200px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.year}
                  </div>
                ))}
              </div>
            </div>

            {/* CONTENT */}
            <div
              ref={contentRef}
              className="flex-1 overflow-y-auto scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <div
                    key={item.year}
                    className={`p-8 rounded-lg transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-gray-400 text-black"
                        : "bg-gray-600 text-gray-300"
                    }`}
                    style={{
                      minHeight: "200px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p className="text-lg leading-relaxed font-medium">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>

    </div>
  );
}

export default TimelineSection;
