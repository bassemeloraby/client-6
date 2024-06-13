import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 2, url: "drugs", text: "drugs" },
  { id: 3, url: "cosmotics", text: "cosmotics" },
  { id: 4, url: "equipments", text: "equipments" },
  { id: 5, url: "insurance", text: "insurance" },
  { id: 6, url: "courses", text: "courses" },
  // { id: 7, url: "products", text: "products" },
  
];

const NavLinks = () => {
  const { user } = useSelector((state) => state.auth);


  return (
    <Fragment>
      {links.map((link) => {
        const { id, url, text } = link;
       
        return (
          <li key={id} className="m-1">
            <NavLink className="text-capitalize" to={url}
             >
             <h3>{text}</h3> 
            </NavLink>
          </li>
        );
      })}
    </Fragment>
  );
};

export default NavLinks;
