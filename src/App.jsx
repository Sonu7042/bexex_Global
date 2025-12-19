import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import HeroSectionLayout from "./components/HeroSectionLayout";
import AboutSectionLayout from "./components/AboutSectionLayout";

import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import BlogSectionLayout from "./components/blogSectionLayout";

import ServiceDetails from "./components/ServiceDetails";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

import CommunitiesSectionLayout from "./components/CommunitiesSectionLayout";


import BlogInnerPage1 from "./components/blogs/BlogInnerPage1";  
import BlogInnerPage2 from "./components/blogs/BlogInnerPage2";  
import BlogInnerPage3 from "./components/blogs/BlogInnerPage3";  
import BlogInnerPage4 from "./components/blogs/BlogInnerPage4";  
import BlogInnerPage5 from "./components/blogs/BlogInnerPage5";
import BlogInnerPage6 from "./components/blogs/BlogInnerPage6";
import BlogInnerPage7 from "./components/blogs/BlogInnerPage7";
import BlogInnerPage8 from "./components/blogs/BlogInnerPage8";
import BlogInnerPage9 from "./components/blogs/BlogInnerPage9";
import BlogInnerPage10 from "./components/blogs/BlogInnerPage10";
import BlogInnerPage13 from "./components/blogs/BlogInnerPage13";



import ResourcesNewsLetter from "./components/ResourcesNewsLetter";
import Contact from "./components/Contact";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  /* ------------------------------
     INIT AOS
  ------------------------------ */
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });

    AOS.refresh();
  }, []);


  /* ------------------------------
     INIT LENIS + SYNC WITH AOS
  ------------------------------ */
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      lerp: 0.1,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 🔥 VERY IMPORTANT — tells AOS that scroll happened
    lenis.on("scroll", () => {
      AOS.refresh();
    });

    return () => lenis.destroy();
  }, []);

  return (
    <Provider store={store}>
      <Header />

      <Routes>
        <Route path="/" element={<HeroSectionLayout />} />
        <Route path="/about" element={<AboutSectionLayout />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<AboutUs />} />
        <Route path="/communities" element={<CommunitiesSectionLayout />} />

        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/resources/blog" element={<BlogSectionLayout />} />
        <Route path="/resources/newsletters" element={<ResourcesNewsLetter />} />


        <Route path="/blog/iso-45001-implementation-guide" element={<BlogInnerPage1 />} />
        <Route path="/blog/ehs-legal-register-compliance" element={<BlogInnerPage2 />} />
        <Route path="/blog/iso-9001-risk-based-thinking" element={<BlogInnerPage3 />} />
        <Route path="/blog/internal-audit-process-guide" element={<BlogInnerPage4 />} />
        <Route path="/blog/third-party-inspection-manufacturing" element={<BlogInnerPage5 />} />
        <Route path="/blog/industrial-air-quality-testing" element={<BlogInnerPage6 />} />
        <Route path="/blog/iso-14001-implementation-india" element={<BlogInnerPage7 />} />
        <Route path="/blog/iso-documentation-mistakes" element={<BlogInnerPage8 />} />
        <Route path="/blog/hira-hazard-risk-assessment" element={<BlogInnerPage9 />} />
        <Route path="/blog/management-review-meeting-iso" element={<BlogInnerPage10 />} />
        <Route path="/blog/safety-committee-requirements-india" element={<BlogInnerPage13 />} />



        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  );
};

export default App;
