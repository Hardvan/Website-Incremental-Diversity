import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TitleNavBar() {
  return (
    <Navbar sticky="top" id="navbar" bg="dark" variant="dark">
      <Container className="CustomNavbar">
        <Navbar.Brand href="#home" className="NavbarBrand">
          Incremental Diversity
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#quicklinks">Quick Links</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
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
