import React from "react";
import Contact from "./Contact";


const Footer = () => (
    <nav className=" navbar  navbar-expand-lg bg-primary navbar-dark justify-content-center">
      <div className="footer-copyright text-center py-3 text-light ">
      <h5>© {new Date().getFullYear()}</h5>
        <span>All rights reserved</span>
        <Contact />
      </div>
    </nav>
  );
  
  export default Footer;