import React from "react";
import { Link } from "react-router-dom";
import { l1, l2 } from "../utils/UrlData";

const GoogleLink = ({ name, color }) => {
  return (
    <Link
      to={l1 + name + l2}
      target="_blank"
      rel="noopener noreferrer"
      style={color ? { color: color } : { color: "red" }}
      className="p-1"
    >
      Google Pic
    </Link>
  );
};

export default GoogleLink;