import React from "react";
import { Link } from "react-router-dom";
// import { GoArrowRight } from "react-icons/go";

const SectionTitle = ({
  // webPage,
  // webPageUrl,
  mainPage,
  mainPageUrl,
  subPage,
}) => {
  return (
    <div
      className="d-flex  text-capitalize  mb-2  pe-2 ps-2"
      style={{ backgroundColor: "antiquewhite" }}
    >
      <Link to="/" className="link-danger">
        <h5>Home/</h5>
      </Link>{" "}
      {/*<GoArrowRight className="mt-2 me-1 ms-1" /> */}
      <Link to={mainPageUrl} className="link-danger">
        <h5>{mainPage}/</h5>
      </Link>{" "}
      <h5>{subPage}</h5>
    </div>
  );
};

export default SectionTitle;
