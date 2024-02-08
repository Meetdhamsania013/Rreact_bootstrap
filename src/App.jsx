import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { About } from "./components/about";
import { Features } from "./components/features";
import { Employee } from "./components/employee";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import "./style.scss";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Banner data={landingPageData.Banner} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Employee data={landingPageData.Employee} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default App;
