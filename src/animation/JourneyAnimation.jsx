import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { gsap } from "gsap";

import "swiper/css";
// import "../Css/journeyAnimation.css";

const timelineData = [
  { year: "1900", img: "https://www.csslab.cl/ejemplos/timelinr/latest/images/1.png", text: "Donec semper quam scelerisque tortor dictum gravida." },
  { year: "1930", img: "https://www.csslab.cl/ejemplos/timelinr/latest/images/2.png", text: "Nam pulvinar, odio sed rhoncus suscipit." },
  { year: "1944", img: "https://www.csslab.cl/ejemplos/timelinr/latest/images/3.png", text: "Proin metus odio, aliquam eget molestie nec." },
  { year: "1950", img: "https://www.csslab.cl/ejemplos/timelinr/latest/images/4.png", text: "Phasellus quis est sed turpis sollicitudin." },
  { year: "1971", img: "https://www.csslab.cl/ejemplos/timelinr/latest/images/5.png", text: "Praesent eget neque eu eros interdum." },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const yearsSwiperRef = useRef(null);

  /* GSAP animation on content change */
  useEffect(() => {
    gsap.fromTo(
      ".content-slide",
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [activeIndex]);

  return (
    <div id="timeline-container">
      {/* YEARS (FOLLOWER ONLY) */}
      <Swiper
        direction="vertical"
        slidesPerView={3}
        centeredSlides
        allowTouchMove={false}   // ❗ IMPORTANT
        loop
        className="years-swiper"
        onSwiper={(swiper) => (yearsSwiperRef.current = swiper)}
      >
        {timelineData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className={`year ${i === activeIndex ? "selected" : ""}`}>
              {item.year}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CONTENT (MASTER SCROLLER) */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        centeredSlides
        loop
        mousewheel={{ sensitivity: 1 }}
        modules={[Mousewheel]}
        className="content-swiper"
        onSlideChange={(swiper) => {
          const index = swiper.realIndex % timelineData.length;
          setActiveIndex(index);

          // 🔥 MOVE YEARS SMOOTHLY
          yearsSwiperRef.current?.slideToLoop(index, 600);
        }}
      >
        {timelineData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="content-slide">
              {/* <img src={item.img} alt={item.year} /> */}
              <h1>{item.year}</h1>
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}






