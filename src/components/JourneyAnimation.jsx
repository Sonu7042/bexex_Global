import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "../Css/journeyAnimation.css";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  { year: "1900", text: "Donec semper quam scelerisque tortor dictum gravida." },
  { year: "1930", text: "Nam pulvinar, odio sed rhoncus suscipit." },
  { year: "1944", text: "Proin metus odio, aliquam eget molestie nec." },
  { year: "1950", text: "Phasellus quis est sed turpis sollicitudin." },
  { year: "1971", text: "Praesent eget neque eu eros interdum." },
];

export default function JourneyAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const yearsSwiperRef = useRef(null);
  const wrapperRef = useRef(null);

  /* PIN SECTION */
  useEffect(() => {
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: `+=${timelineData.length * window.innerHeight}`,
      pin: true,
      scrub: true
    });

    return () => ScrollTrigger.killAll();
  }, []);

  /* GSAP animation on slide change */
  useEffect(() => {
    gsap.fromTo(
      ".journey-content-slide",
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [activeIndex]);

  return (
    <div ref={wrapperRef} className="journey-wrapper">
      {/* YEARS */}
      <Swiper
        direction="vertical"
        slidesPerView={3}
        centeredSlides
        allowTouchMove={false}
        loop={false}
        className="journey-swiper journey-years-swiper"
        onSwiper={(swiper) => (yearsSwiperRef.current = swiper)}
      >
        {timelineData.map((item, i) => (
          <SwiperSlide key={i} className="journey-slide">
            <div
              className={`journey-year ${
                i === activeIndex ? "is-active" : ""
              }`}
            >
              {item.year}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CONTENT */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        centeredSlides
        loop={false}
        nested={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true
        }}
        modules={[Mousewheel]}
        className="journey-swiper journey-content-swiper"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          yearsSwiperRef.current?.slideTo(swiper.realIndex, 600);
        }}
      >
        {timelineData.map((item, i) => (
          <SwiperSlide key={i} className="journey-slide">
            <div className="journey-content-slide">
              <h1>{item.year}</h1>
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
