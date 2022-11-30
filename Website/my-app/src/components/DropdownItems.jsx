import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import getQueries from "../query";

function DropdownItems() {
  // Getting the queries from the query.js file
  const queries = getQueries();

  // Creating the dropdown items from the queries
  const itemList = queries.map((query) => {
    return (
      <Dropdown.Item href={`#query${query.id}`}>
        {`Query ${query.id}`}
      </Dropdown.Item>
    );
  });

  return itemList;
}

export default DropdownItems;
