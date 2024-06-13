import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { FcSearch } from "react-icons/fc";
import { nanoid } from "nanoid";

import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import Contact from "./Contact";
import { useSelector } from "react-redux";

export const mainPages = [
  {
    id: nanoid(),
    text: "Products",
    ping: [
      { linkName: "Products", link: "/Products" },
      { linkName: "Cart", link: "/cart" },
      { linkName: "Lists", link: "/lists" },
      { linkName: "Filter", link: "/filterProducts" },
      {
        linkName: "pregnancy",
        link: "https://wikem.org/wiki/Drug_pregnancy_categories",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        linkName: "Clinical-Biochemistry-reference-ranges",
        link: "https://www.esht.nhs.uk/wp-content/uploads/2017/08/Clinical-Biochemistry-reference-ranges-handbook.pdf",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: nanoid(),
    text: "Insurance",
    ping: [{ linkName: "insurance", link: "/insurance" }],
  },
  {
    id: nanoid(),
    text: "Courses",
    ping: [{ linkName: "EXCEL", link: "/courses" }],
  },
  {
    id: nanoid(),
    text: "Calc",
    ping: [
      { linkName: "Calc", link: "/calc" },
      { linkName: "Calc5", link: "/calc5" },
      {
        linkName: "PARACETAMOL",
        link: "https://sfda.gov.sa/en/paracetamol-calculator",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        linkName: "Cefixime",
        link: "https://www.drugs.com/dosage/cefixime.html",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        linkName: "Ibuprofen",
        link: "https://www.drugs.com/dosage/ibuprofen.html",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
];

const Navbar1 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const { user } = useSelector((state) => state.auth);

  return (
    <Navbar collapseOnSelect expand="expand" bg="primary" variant="dark">
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleShow}
          className="bg-warning None"
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Mederma
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleClose}
                className="p-2 border-bottom  border-success"
              >
                Home
              </Nav.Link>
              {mainPages.map((mainPage) => (
                <NavDropdown
                  title={mainPage.text}
                  id="basic-nav-dropdown"
                  key={mainPage.id}
                  className="p-2 border-bottom  border-success text-dark"
                >
                  {mainPage.ping.map((m, index) => {
                    const { linkName, link, target, rel, icon } = m;
                    if (linkName === "Cart" && !user) return null;
                    if (linkName === "Lists" && !user) return null;
                    return (
                      <NavDropdown.Item
                        as={Link}
                        to={link}
                        onClick={handleClose}
                        key={index}
                        target={target}
                        rel={rel}
                        className="text-capitalize"
                      >
                        {linkName} {icon}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              ))}
            </Nav>
            <Contact />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {/* website name */}
        <Navbar.Brand>
          <Link
            to="/"
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            <h1>Mederma</h1>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
