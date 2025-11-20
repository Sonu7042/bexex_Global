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

const App = () => {
  // optional Lenis smooth scroll if you want later

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
