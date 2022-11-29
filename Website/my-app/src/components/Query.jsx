import React from "react";

function Query(props) {
  return (
    <div class="Query">
      <h2 class="QueryTitle">{props.title}</h2>
      <div class="QueryDescription">
        <h4 class="QueryStatement">Query Statement :</h4>
        <strong>{props.statement}</strong>
        <div class="Image Center">
          <img class="QueryImage" src={props.image} alt="Query" />
          <figcaption class="Caption">{props.caption}</figcaption>
        </div>
      </div>
      <p class="Explanation">{props.explanation}</p>
      <hr class="Line" />
    </div>
  );
}

export default Query;
