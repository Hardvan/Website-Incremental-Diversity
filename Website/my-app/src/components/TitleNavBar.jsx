import React from "react";

function TitleNavBar() {
  return (
    <header>
      {/* Title */}
      <h1 class="Title">Incremental Diversity</h1>
      {/* NavBar */}
      <nav class="CustomNav">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#QuickLinks">Quick Links</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TitleNavBar;
