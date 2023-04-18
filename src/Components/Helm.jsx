import React from "react";
import { Helmet } from "react-helmet";

const Helm = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="My app description" />
    </Helmet>
  );
};

export default Helm;
