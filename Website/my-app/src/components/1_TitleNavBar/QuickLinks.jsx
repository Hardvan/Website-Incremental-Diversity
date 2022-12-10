import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItems from "./DropdownItems";

function QuickLinks() {
  return (
    <div id="quicklinks">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Quick Links
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <DropdownItems />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default QuickLinks;
