import React from "react";

function About() {
  return (
    <div id="about">
      <h2 class="AboutTitle">About:</h2>
      Project developed by:
      <ul class="NamesList">
        <li>Hardik Hiraman Pawar</li>
        <li>Tanmay S Lal</li>
        <li>S Mohammed Ashiq</li>
        <li>Mohammed Raza</li>
      </ul>
      <div class="description">
        <p>
          The need of protecting the privacy of data has got an immense
          importance in the society. There are many anonymity models that exist
          today, most of them aiming to preserve privacy for only a single
          sensitive attribute and very for multiple sensitive attributes. The
          Incremental Diversity algorithm is able to diversify the data for
          multiple sensitive attributes and also produce lesser quantity of
          residue records as compared to other diversity models. This website
          discusses about querying a dataset from GCP obtained from the
          Incremental Diversity model developed by us.
        </p>
      </div>
    </div>
  );
}

export default About;
