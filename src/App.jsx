import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import Lenis from "@studio-freight/lenis";

import HeroSectionLayout from "./components/HeroSectionLayout";
import About from "./components/About";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import TeamList from "./components/TeamList";

// dummy/detail components – create real ones as needed
import {ServiceDetails, Blog, NewsLetters} from "./components/ServiceDetails";

const App = () => {
  // optional Lenis smooth scroll if you want later

  return (
    <Provider store={store}>
      <Header />
      <main className="px-4 md:px-16 lg:px-12">

      <Routes>
        {/* main pages */}
        <Route path="/" element={<HeroSectionLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<AboutUs />} />
        <Route path="/communities" element={<TeamList />} />

        {/* services detail pages: /services/1, /services/2, ... */}
        <Route path="/services/:id" element={<ServiceDetails />} />

        {/* resources sub pages */}
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/newsletters" element={<NewsLetters />} />
         
      </Routes>
      </main>

    </Provider>
  );
};

export default App;
