import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import QuickLinks from "./QuickLinks";

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

// Old Navbar code:
// function TitleNavBar() {
//   return (
//     <header>
//       {/* Title */}
//       <h1 class="Title">Incremental Diversity</h1>
//       {/* NavBar */}
//       <nav class="CustomNav">
//         <ul>
//           <li>
//             <a href="#Home">Home</a>
//           </li>
//           <li>
//             <a href="#QuickLinks">Quick Links</a>
//           </li>
//           <li>
//             <a href="#About">About</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
