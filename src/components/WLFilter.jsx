import React from "react";

import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

const links = [
  { id: nanoid(), text: "all" },
  { id: nanoid(), text: "list" },
  { id: nanoid(), text: "wasfaty" },
];

const WLFilter = ({setFilterName}) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {" "}
      {user && (
        <div className="shadow ">
          <select
            className="form-select bg-success text-light text-capitalize text-center"
            aria-label="Default select example"
            onChange={(e) => setFilterName(e.target.value)}
          >
            {links.map((link) => {
              const { id, text } = link;
              return (
                <option key={id} className="m-1" value={text}>
                  {text}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default WLFilter;
