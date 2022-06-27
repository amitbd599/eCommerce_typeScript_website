/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Header from "../Common/Header/Header";
import Intro__Section from "../Common/IntroSection/Intro__Section";
import Meta_Data from "../Common/Meta_Data";

const Single__Blog: React.FC = () => {
  return (
    <>
      {/* Helmet Intro Start */}

      <Meta_Data title={"Single-Blog"} />

      {/* Helmet Intro End*/}

      {/* Header Section start */}

      <Header />

      {/* Header Section End */}

      {/* Intro Section Start */}

      <Intro__Section title="Single-Blog" />

      {/* Intro Section End */}
    </>
  );
};

export default Single__Blog;
