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
import BlogInnerPage from "./components/BlogInnerPage";
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
        <Route path="/innerBlogPage" element={<BlogInnerPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  );
};

export default App;
