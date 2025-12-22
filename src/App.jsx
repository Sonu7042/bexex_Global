import "./App.css";
import Header from "./components/Header";
import {Routes, Route } from "react-router-dom";
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
import BlogInnerPage11 from "./components/blogs/BlogInnerPage11";
import BlogInnerPage12 from "./components/blogs/BlogInnerPage12";
import BlogInnerPage13 from "./components/blogs/BlogInnerPage13";
import BlogInnerPage14 from "./components/blogs/BlogInnerPage14"; 
import BlogInnerPage15 from "./components/blogs/BlogInnerPage15";
import BlogInnerPage16 from "./components/blogs/BlogInnerPage16";
import BlogInnerPage17 from "./components/blogs/BlogInnerPage17";
import BlogInnerPage18 from "./components/blogs/BlogInnerPage18";
import BlogInnerPage19 from "./components/blogs/BlogInnerPage19";
import BlogInnerPage20 from "./components/blogs/BlogInnerPage20";
import BlogInnerPage21 from "./components/blogs/BlogInnerPage21";
import BlogInnerPage23 from "./components/blogs/BlogInnerPage23";
import BlogInnerPage22 from "./components/blogs/BlogInnerPage22";
import BlogInnerPage24 from "./components/blogs/BlogInnerPage24";
import BlogInnerPage25 from "./components/blogs/BlogInnerPage25";



import ResourcesNewsLetter from "./components/ResourcesNewsLetter";
import Contact from "./components/Contact";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTop  from './components/ScrollToTop'


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

       <ScrollToTop />
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
        <Route path="/blog/water-quality-testing-india" element={<BlogInnerPage11 />} />
        <Route path="/blog/document-control-system-iso" element={<BlogInnerPage14 />} />
        <Route path="/blog/capa-process-iso-standards" element={<BlogInnerPage17 />} />
        <Route path="/blog/iso-27001-information-security" element={<BlogInnerPage12 />} />
        <Route path="/blog/industrial-noise-monitoring-compliance" element={<BlogInnerPage15 />} />
        <Route path="/blog/safety-committee-requirements-india" element={<BlogInnerPage13 />} />
        <Route path="/blog/iso-22000-food-safety-management" element={<BlogInnerPage19 />} />
        <Route path="/blog/soil-testing-contamination-assessment" element={<BlogInnerPage18 />} />
        <Route path="/blog/emergency-preparedness-response-plan" element={<BlogInnerPage20 />} />
        <Route path="/blog/iso-50001-energy-management" element={<BlogInnerPage16 />} />
        <Route path="/blog/ambient-air-quality-monitoring" element={<BlogInnerPage21 />} />
        <Route path="/blog/supplier-evaluation-approval-iso" element={<BlogInnerPage23/>} />
        <Route path="/blog/iso-13485-medical-device-quality" element={<BlogInnerPage22 />} />
        <Route path="/blog/stack-emission-monitoring-compliance" element={<BlogInnerPage24 />} />
        <Route path="/blog/integrated-management-systems-ims" element={<BlogInnerPage25 />} />


        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  );
};

export default App;
