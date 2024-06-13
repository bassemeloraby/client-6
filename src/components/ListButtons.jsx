import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListButtons = ({ drug, updatePage, cardPage }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="d-flex bg-light rounded-2">
      {user && (
        <Link
          className="me-2 ms-2"
          style={{ cursor: "pointer", color: "black" }}
          to={`${updatePage}/${drug._id}`}
        >
          Edit
        </Link>
      )}
      <Link
        className="me-2 ms-2"
        style={{ cursor: "pointer", color: "black" }}
        to={`${cardPage}/${drug._id}`}
      >
        card
      </Link>
    </div>
  );
};

export default ListButtons;
