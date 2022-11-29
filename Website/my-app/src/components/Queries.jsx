import React from "react";
import getQueries from "../query";

function Queries(props) {
  //TODO: Run a for loop to display query by passing props to Query.jsx
  return (
    <div class="Query">
      <h2 class="QueryTitle">Query 1</h2>
      <div class="QueryDescription">
        <h4 class="QueryStatement">Query Statement :</h4>
        <strong>
          SELECT * FROM
          `plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Table_1000_Records_k_3`
          WHERE Education='Bachelors' AND Employment='State-gov' ORDER BY
          Group_ID LIMIT 1000
        </strong>
        <div class="Image Center">
          <img
            class="QueryImage"
            src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/5f484fc61c2008cac8934cde_logo.png"
            alt="Query"
          />
          <figcaption class="Caption">Fig 1: Caption</figcaption>
        </div>
      </div>
      <p class="Explanation">
        It can be a lot of fun simply learning interesting facts and that's
        exactly what this online tool will allow you to do. If you spend even a
        little time, you're going to quickly expand your knowledge with a lot of
        random fun facts. Even if you never share them with others (which you
        likely will at some point), it's fun to know you have that knowledge in
        your head.
      </p>
      <hr class="Line" />
    </div>
  );
}

export default Queries;
