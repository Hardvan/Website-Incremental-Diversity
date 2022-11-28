import React from "react";

function Headers() {
  return (
    <div>
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

      <main>
        {/* Quick Links */}
        <h2 id="TitleQuick">Quick Links</h2>
        <div id="QuickLinksBox">
          <ol class="QueriesList">
            <li>
              <a href="#Query1">Bachelors_State_Gov_Details</a>
            </li>
            <li>
              <a href="#Query2">Divorcee Details</a>
            </li>
            <li>
              <a href="#Query3">Own_Child_White_Details</a>
            </li>
            <li>
              <a href="#Query4">Widowed_{">"}50K_Salary_Details</a>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}

export default Headers;
