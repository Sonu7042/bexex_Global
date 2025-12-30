// InnerServicePage.jsx
import "../Css/innerServicePage.css";
import React, { useState } from "react";
import { Play } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function InnerServicePage() {
  const { state } = useLocation();
  const card = state?.card;


  const [selectedMedia, setSelectedMedia] = useState(card?.media?.[0]);

  if (!card) return <p>Data not found</p>;

  return (
    <section className="px-4 md:px-16 lg:px-12">
      <div className="fs-page">
        {/* LEFT COLUMN */}
        <div className="fs-left">
          {/* GALLERY */}
          <div className="gallery-container">
            <div className="gallery-flex">
              {/* Thumbnails */}
              <div className="thumb-column">
                {card.media.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedMedia(item)}
                    className={`thumb-btn ${
                      selectedMedia?.id === item.id ? "thumb-active" : ""
                    }`}
                  >
                    {item.type === "image" ? (
                      <img src={item.url} alt={item.title} className="thumb-img" />
                    ) : (
                      <div className="video-thumb">
                        <img
                          src={`https://img.youtube.com/vi/${item.url.split("/embed/")[1]?.split("?")[0]}/hqdefault.jpg`}
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

              {/* Selected Media */}
              <div className="media-wrapper">
                <div className="media-card">
                  {selectedMedia?.type === "image" ? (
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
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* DOWNLOAD CARD */}
          <div className="fs-iso-card">
            <div className="fs-iso-text">
              <h3 className="fs-iso-title">
                {card.downlaodheadingText}
              </h3>

              <p className="fs-iso-desc">
                {card.downlaodheadingSubText}
              </p>

              <button
                className="fs-download-btn"
                onClick={() => window.open(card.downloadPdf, "_blank")}
              >
                Download now
              </button>
            </div>

            <div className="fs-iso-flyer-wrapper">
              <img
                src={card.downlaodheadingImg}
                alt="Download preview"
                className="fs-iso-flyer"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="fs-right">
          <header className="fs-header">
            <h1 className="fs-why-title applyfont">
              {card.Heading.split(" ")[0]}{" "}
              <span className="fs-why-highlight itly">
                {card.Heading.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="fs-why-text">{card.paragrapgh}</p>
          </header>

          {/* COVER LIST */}
          <section className="fs-cover-section">
            <h2 className="fs-cover-title">{card.subHeading}</h2>
            <ul className="fs-cover-list">
              {card.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* BADGES */}
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
