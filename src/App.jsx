import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import Lenis from "@studio-freight/lenis";

import HeroSectionLayout from "./components/HeroSectionLayout";
import AboutSectionLayout from "./components/AboutSectionLayout";

import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import BlogSectionLayout from "./components/blogSectionLayout";

// dummy/detail components – create real ones as needed
import ServiceDetails  from "./components/ServiceDetails";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import CommunitiesSectionLayout from "./components/CommunitiesSectionLayout";
import BlogInnerPage from "./components/BlogInnerPage";
import ResourcesNewsLetter from "./components/ResourcesNewsLetter";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {



    useEffect(() => {
    AOS.init({
      duration: 800,      // animation duration in ms
      once: true,         // animate only once
      easing: "ease-out", // default easing
    });
  }, []);




  // optional Lenis smooth scroll if you want later
    useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,  // motion speed
      lerp: 0.1,
      smoothTouch: false,
    });

    // animation frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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

        <Route path="/resources/blog" element={<BlogSectionLayout/>} />
        <Route path="/resources/newsletters" element={<ResourcesNewsLetter />} />
        <Route path="/innerBlogPage" element={<BlogInnerPage />} />
        <Route path="/contact" element={<Contact/>}/>
         
      </Routes>

    </Provider>
  );
};

export default App;
