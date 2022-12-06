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
      id={`query${query.id}`}
      slno={query.id}
      title={query.title}
      statement={query.statement}
      image={query.image}
      caption={query.caption}
      explanation={query.explanation}
      link={query.link}
      memory={query.memory}
    />
  ));

  return (
    <div>
      <h2 className="SectionTitle" id="QueriesTitle">
        Queries
      </h2>
      {queryList}
    </div>
  );
}

export default Queries;
