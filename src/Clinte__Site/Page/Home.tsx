import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Common/Header/Header";
import Hero__Slider from "../Block/Slider/Hero__Slider";
const Home: React.FC = () => {
  return (
    <>
      {/* Header Section start */}
      <Header />
      {/* Header Section End */}

      {/* Slider section Start */}
      <Hero__Slider />
      {/* Slider section End */}
    </>
  );
};

export default Home;
