import React from "react";
import "../Css/clients.css";
import BgX from "../assets/images/miniLogo.png"; 

const clientImgs = [
  "https://via.placeholder.com/150/cccccc?text=Client+1",
  "https://via.placeholder.com/150/cccccc?text=Client+2",
  "https://via.placeholder.com/150/cccccc?text=Client+3",
  "https://via.placeholder.com/150/cccccc?text=Client+4",
  "https://via.placeholder.com/150/cccccc?text=Client+5",
  "https://via.placeholder.com/150/cccccc?text=Client+6",
  "https://via.placeholder.com/150/cccccc?text=Client+7",
  "https://via.placeholder.com/150/cccccc?text=Client+8",
  "https://via.placeholder.com/150/cccccc?text=Client+9",
  "https://via.placeholder.com/150/cccccc?text=Client+10",
  "https://via.placeholder.com/150/cccccc?text=Client+11",
  "https://via.placeholder.com/150/cccccc?text=Client+12",
  "https://via.placeholder.com/150/cccccc?text=Client+13",
  "https://via.placeholder.com/150/cccccc?text=Client+14",
  "https://via.placeholder.com/150/cccccc?text=Client+15",
  "https://via.placeholder.com/150/cccccc?text=Client+16"
];

const Clients = () => (
  <div className="clients-section">
    {/* Decorative Images */}
    <img src={BgX} alt="" className="bg-x bg-x--top-right" aria-hidden="true" />
    <img src={BgX} alt="" className="bg-x bg-x--bottom-left" aria-hidden="true" />

    <div className="section-header">
     <img className=" brand-logo" src={BgX} alt="" />
      <span className="title .applyfont">Our Clients</span>
    </div>
    <div className="clients-box">
      <div className="clients-grid">
        {clientImgs.map((src, idx) => (
          <div className="client-item" key={idx}>
            <img src={src} alt={`Client ${idx + 1}`} />
          </div>
        ))}
      </div>
      <div className="clients-discover-btn applyfont">
        Discovery more <span className="arrow">→</span>
      </div>
    </div>
  </div>
);

export default Clients;
