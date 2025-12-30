// FireSafetySection.jsx
import pdcaImg from "../assets/images/blog_imgs/CAPA-process.png";
import flyerImg from "../assets/images/blog_imgs/CAPA-process.png";
import "../Css/innerServicePage.css";
import React, { useState } from "react";
import { Play, X } from "lucide-react";
import pdf from "../../public/service_pdf/Fire Safety Assessment Report_UIL_03.05.2025.pdf"
import { useLocation } from "react-router-dom";

const media = [
  {
    id: 1,
    type: "image",
    url: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Modern Architecture",
  },
  {
    id: 2,
    type: "video",
    url: "https://www.youtube.com/embed/MFLVmAE4cqg?si=p1FgakYdmIl50WZm",
    title: "Interior Space",
  },
  {
    id: 3,
    type: "image",
    url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Contemporary Living",
  },
  {
    id: 4,
    type: "image",
    url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Urban Design",
  },
];

export default function InnerServicePage() {
   const { state } = useLocation();
  const [selectedMedia, setSelectedMedia] = useState(media[0]);

  const handleThumbnailClick = (item) => {
    setSelectedMedia(item);
  };


  console.log(state?.card,"statecard");




  return (
    <section className="px-4 md:px-16 lg:px-12">
      <div className="fs-page">
        {/* LEFT COLUMN */}
        <div className="fs-left">
          {/* GALLERY: SMALL LEFT, BIG RIGHT = video */}
          <div className="gallery-container">
            <div className="gallery-flex">
              {/* Thumbnails (small images) */}
              <div className="thumb-column">
                {media.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleThumbnailClick(item)}
                    className={`thumb-btn ${
                      selectedMedia.id === item.id ? "thumb-active" : ""
                    }`}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="thumb-img"
                      />
                    ) : (
                      <div className="video-thumb">
                        <img
                          src="https://img.youtube.com/vi/MFLVmAE4cqg/hqdefault.jpg"
                          alt="Video thumbnail"
                        />
                        <span className="video-play-icon">
                          <Play size={28} />
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Big selected image */}
              <div className="media-wrapper">
                <div className="media-card">
                  {selectedMedia.type === "image" ? (
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      className="media-img"
                    />
                  ) : (
                    <div className="video-container">
                      <iframe
                        src={selectedMedia.url}
                        title={selectedMedia.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ISO CARD */}
          <div className="fs-iso-card">
            <div className="fs-iso-text">
              <h3 className="fs-iso-title">
                ISO 45001 Gap Analysis
                <br />
                Checklist <span className="fs-iso-em">(Excel)</span>
              </h3>
              <p className="fs-iso-desc">
                Comprehensive assessment tool covering all ISO 45001
                requirements with scoring methodology and implementation
                priority guidance.
              </p>
              <button
                className="fs-download-btn"
                onClick={() =>
                  window.open(pdf, "_blank")
                }
              >
                Download now
              </button>
            </div>

            <div className="fs-iso-flyer-wrapper">
              <img
                src={flyerImg}
                alt="Fire safety training flyer"
                className="fs-iso-flyer"
              />
            </div>
          </div>
        </div>

      {/* RIGHT CONTENT */}
      <div className="fs-right">
        <header className="fs-header">
          <h1 className="fs-why-title applyfont">
            Why <span className="fs-why-highlight itly">Fire Safety</span>?
          </h1>
          <p className="fs-why-text">
            Fire emergencies can occur anytime, anywhere often due to small, overlooked hazards.
            Most fires are preventable when people understand how fires start, how to stop them
            from spreading, and what actions to take in the first few critical minutes. Our Fire
            Safety Training helps participants recognize risks, understand fire prevention
            principles, and respond effectively in emergencies.
          </p>
        </header>

          <section className="fs-cover-section">
            <h2 className="fs-cover-title">What We Cover During Trainings:</h2>
            <ul type="disc" className="fs-cover-list">
              <li>Introduction to Fire Behavior and the Fire Triangle</li>
              <li>Types and Classes of Fire</li>
              <li>Common Workplace Fire Hazards and Prevention Tips</li>
              <li>Introduction to Fire Extinguishers and Their Applications</li>
              <li>Emergency Evacuation Procedures and Safe Assembly</li>
              <li>Roles of Employees During a Fire Emergency</li>
              <li>Basic Fire Safety Do&apos;s &amp; Don&apos;ts</li>
              <li>Case Discussions and Interactive Q&amp;A</li>
            </ul>
          </section>

          <div className="fs-badges">
            <div className="fs-badge">
              <span className="fs-badge-icon">📚</span>
              <span>Training Material (PDF Format)</span>
            </div>
            <div className="fs-badge">
              <span className="fs-badge-icon">🎓</span>
              <span>Training Certificate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
