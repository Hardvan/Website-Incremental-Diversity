import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TitleNavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Incremental Diversity</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#quicklinks">Quick Links</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
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
