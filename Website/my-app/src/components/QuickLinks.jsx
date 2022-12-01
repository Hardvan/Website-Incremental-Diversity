import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItems from "./DropdownItems";

function QuickLinks() {
  return (
    <div id="quicklinks">
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="QuickLinksButton"
        >
          Quick Links Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <DropdownItems />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default QuickLinks;

// Old code:
// function QuickLinks() {
//   return (
//     <main>
//       {/* Quick Links */}
//       <h2 id="TitleQuick">Quick Links</h2>
//       <div id="QuickLinksBox">
//         <ol class="QueriesList">
//           <li>
//             <a href="#Query1">Bachelors_State_Gov_Details</a>
//           </li>
//           <li>
//             <a href="#Query2">Divorcee Details</a>
//           </li>
//           <li>
//             <a href="#Query3">Own_Child_White_Details</a>
//           </li>
//           <li>
//             <a href="#Query4">Widowed_{">"}50K_Salary_Details</a>
//           </li>
//         </ol>
//       </div>
//     </main>
//   );
// }
