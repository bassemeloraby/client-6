import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainPageTitle = ({
  mainPage,
  addUrl,
  linkText,
  headPageName,
  headPageUrl,
}) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="d-flex">
      {" "}
      <Link to={headPageUrl}>
        <h4>{headPageName}</h4>
      </Link>
     {headPageName&& "/"}<h4 className="me-2">{mainPage}</h4>
      {user && (
        <div className="options">
          {linkText && (
            <Link to={addUrl} className="btn btn-primary fs-5">
              {linkText}
            </Link>
          )}
        </div>
      )}
    </section>
  );
};

export default MainPageTitle;
