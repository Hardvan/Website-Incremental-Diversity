import React from "react";
import "./2_gender.css";

function Gender() {
  return (
    <section>
      <h1 className="CardTitle">Query 2: Gender</h1>
      <div class="Section">
        <div class="Box">
          <div class="QueryBox">
            <p>
              <span class="ApplySpan">SELECT</span> Age, Gender, Education,
              Marital_Status, Disease
              <br />
              <span class="ApplySpan">FROM</span>
              `plenary-chalice-369413.Incremental_Diversity_Dataset.Original_Microdata_1000_Records_k_3`
              <br />
              <span class="ApplySpan">WHERE</span> Gender="Male" AND
              Education="Bachelors" <span class="ApplySpan">LIMIT</span> 1000
            </p>
          </div>
          <figure class="ImportImage">
            <div>
              <div class="Image">
                <img
                  class="InsertImage"
                  src={require("../images/Gender/Compare Gender Original Result.png")}
                  alt=""
                />
              </div>
            </div>

            <figcaption class="FigureCaption">
              Fig 1: Original Dataset
            </figcaption>
          </figure>
        </div>

        <div class="Box">
          <div class="QueryBox">
            <p>
              <span class="ApplySpan">SELECT</span> Lower_Age, Upper_Age,
              Gender, Education, Marital_Status, Disease
              <br />
              <span class="ApplySpan">FROM</span>
              `plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Microdata_1000_Records_k_3_v2`
              <br />
              <span class="ApplySpan">WHERE</span> Education="Bachelors"
              <span class="ApplySpan"> LIMIT</span> 1000
            </p>
          </div>
          <figure class="ImportImage">
            <div>
              <div class="Image">
                <img
                  class="InsertImage"
                  src={require("../images/Gender/Compare Gender Masked Result.png")}
                  alt=""
                />
              </div>
            </div>
            <figcaption class="FigureCaption">Fig 2: Masked Dataset</figcaption>
          </figure>
        </div>
      </div>
      <p style={{ "text-align": "justify" }}>
        The Result of the Query for the Origianl Dataset consisting of
        Age,Gender,Marital Status,Education,Disease is compared with the result
        of the Query for Masked Microdata consisting of Upper Age,Lower Age(Age
        is generalized in this case as shown in Fig 2.),Gender,Marital
        Status,Education,Disease.The Comparison shows that the Original Dataset
        has less records as query results,Masked Microdata has more records due
        to more generalization done.In Fig1.,the query executed for the Original
        Dataset where Gender="Male"and Education="Bachelors"showed 117 records
        whereas,the query that has been executed for the Masked Microdata with
        gender generalized to M/F has 166 records(Fig 2.) which is more than the
        records of the Original Dataset.Generalization has increased the number
        of records in order to preserve the privacy of the data.
      </p>
    </section>
  );
}

export default Gender;
