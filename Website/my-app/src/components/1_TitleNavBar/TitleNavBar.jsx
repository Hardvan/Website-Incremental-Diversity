import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import QuickLinks from "./QuickLinks";
import "./styles.css";

function TitleNavBar() {
  return (
    <Navbar sticky="top" id="navbar" bg="dark" variant="dark">
      <Container className="CustomNavbar">
        <Navbar.Brand href="#home" className="NavbarBrand">
          Incremental Diversity
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="NavLink" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="NavLink" href="#dataset">
            Dataset
          </Nav.Link>
          <Nav.Link className="NavLink" href="#about">
            About
          </Nav.Link>
          <QuickLinks />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TitleNavBar;
