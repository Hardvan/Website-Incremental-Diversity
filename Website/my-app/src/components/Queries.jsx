import React from "react";
import getQueries from "../query";
import Query from "./Query";

function Queries() {
  // Running a for loop to display query by passing props to Query.jsx
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
