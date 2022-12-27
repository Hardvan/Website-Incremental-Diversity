import React from "react";
import "./2_gender.css";

function Gender() {
  return (
    <section>
      <h1>Query 2: Gender</h1>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic ad,
        dicta inventore iure amet perspiciatis labore, cupiditate veritatis
        excepturi quos optio odio ab aliquam repellat vero. Excepturi similique
        in, asperiores autem quisquam vel eos omnis necessitatibus libero sunt
        quae cumque aperiam saepe molestias natus. Eos reprehenderit maxime odit
        animi!
      </p>
    </section>
  );
}

export default Gender;
