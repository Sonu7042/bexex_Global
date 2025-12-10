import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current ? scrollContainerRef.current : window;

    const mobStart = "top 95%";         // 👈 fires earlier on mobile
    const mobEnd   = "bottom 65%";

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: isMobile ? 1 : baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: isMobile ? mobStart : "top bottom",
          end: isMobile ? mobEnd : rotationEnd,
          scrub: true
        }
      }
    );

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      {
        opacity: isMobile ? 0.4 : baseOpacity,     // 👈 prevent disappearing
        willChange: 'opacity'
      },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.03,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: isMobile ? mobStart : "top bottom-=20%",
          end: isMobile ? mobEnd : wordAnimationEnd,
          scrub: true
        }
      }
    );

    // Disable blur on mobile (important)
    if (enableBlur && !isMobile) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.03,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
    isMobile
  ]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`about-intro applyfont scroll-reveal-text ${textClassName}`}>
        {splitText}
      </p>
    </h2>
  );
};

export default AboutScrollReveal;
