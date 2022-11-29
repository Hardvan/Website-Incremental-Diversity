import React from "react";
import Query from "./Query";
import getQueries from "../query";

// Component to display all Queries
function Queries() {
  // Getting array of query objects from query.js
  const queries = getQueries();

  // Converting the array of query objects into an array of JSX elements
  const queryList = queries.map((query) => (
    <Query
      key={query.id}
      title={query.title}
      statement={query.statement}
      image={query.image}
      caption={query.caption}
      explanation={query.explanation}
    />
  ));

  return queryList;
}

export default Queries;
