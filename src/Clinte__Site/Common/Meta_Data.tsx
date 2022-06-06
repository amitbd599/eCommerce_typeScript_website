import React from "react";
import { Helmet } from "react-helmet";
const Meta_Data = ({ title }: { title: string }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} || React TypeScript E-commerce Website</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    </>
  );
};

export default Meta_Data;
