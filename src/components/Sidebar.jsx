import React, { Fragment, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      {" "}
      <FaBarsStaggered
        className="fs-1"
        style={{ cursor: "pointer" }}
        onClick={() => setShow(!show)}
      />
      <ul tabIndex={0} className={show ? "" : "d-none"}>
        <NavLinks setShow={setShow}/>
      </ul>
    </Fragment>
  );
};

export default Sidebar;
