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
import TeamList from "./components/TeamList";
import BlogSectionLayout from "./components/blogSectionLayout";

// dummy/detail components – create real ones as needed
import {ServiceDetails, Blog, NewsLetters} from "./components/ServiceDetails";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const App = () => {
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
        <Route path="/communities" element={<TeamList />} />

        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/resources/blog" element={<BlogSectionLayout/>} />
        <Route path="/resources/newsletters" element={<NewsLetters />} />
         
      </Routes>

    </Provider>
  );
};

export default App;
