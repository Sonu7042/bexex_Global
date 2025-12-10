import React from "react";
import "../Css/makeUsDifferent.css";
import { HeadingComponent } from "./Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const originalCards = [
  {
    title: "We’ve Been There",
    text: "Our team brings 100,000+ man-hours of real-world experience from shop floors, construction sites, and factories across India. We’ve dealt with the same headaches you’re facing. We know what works—and what’s just consultant theatre.",
  },
  {
    title: "We Don’t Just Advise—We Implement",
    text: "We don’t drop a report and disappear. We roll up our sleeves—Gap analysis. System design. Documentation. Training. Internal audits. We stay until it’s embedded in your operations.",
  },
  {
    title: "One Team, One Plan",
    text: "Most firms specialize in fragments. We work end-to-end so your professionals cover strategy, operations, compliance, business excellence, and vendor coordination without silos.",
  },
  {
    title: "We’ve Been There",
    text: "Our team brings 100,000+ man-hours of real-world experience from shop floors, construction sites, and factories across India. We’ve dealt with the same headaches you’re facing. We know what works—and what’s just consultant theatre.",
  },
  {
    title: "We Don’t Just Advise—We Implement",
    text: "We don’t drop a report and disappear. We roll up our sleeves—Gap analysis. System design. Documentation. Training. Internal audits. We stay until it’s embedded in your operations.",
  },
  {
    title: "One Team, One Plan",
    text: "Most firms specialize in fragments. We work end-to-end so your professionals cover strategy, operations, compliance, business excellence, and vendor coordination without silos.",
  },
];

const MakeUsDifferent = () => {
  return (
    <section className="whyus-wrapper">
      <HeadingComponent text="Why Us" />

      <div className="whyus-header">
        <h2 className="whyus-heading">
          What Makes Us <br />
          <span className="whyus-heading-accent itly">Different</span>
        </h2>
      </div>

      <div className="section-padding">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2800 }}
          speed={700}
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1.1 }, // Mobile
            600: { slidesPerView: 1.8 }, // Small tablets
            900: { slidesPerView: 2.3 }, // Tablets
            1200: { slidesPerView: 3 }, // Desktop → EXACTLY 3 CARDS
          }}
        >
          {[...originalCards, ...originalCards].map((card, i) => (
            <SwiperSlide key={i}>
              <div className="whyus-card-swiper">
                <h3 className="whyus-card-title">{card.title}</h3>
                <p className="whyus-card-text">{card.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MakeUsDifferent;
