import React from "react";
import "./3_zip_code.css";

function ZipCode() {
  return (
    <section class="queries">
      <h1>Query 3: Zip_Code</h1>
      <div class="section">
        <div class="box">
          <div class="querybox">
            <p>
              <span class="textStyle">SELECT</span>{" "}
              Age,Gender,Zip_Code,Employment,Marital_Status <br />
              <span class="textStyle">FROM</span>
              `plenary-chalice-369413.Incremental_Diversity_Dataset.Original_Microdata_1000_Records_k_3`
              <br />
              <span class="textStyle">WHERE</span> Zip_Code=51618 <br />
              <span class="textStyle">LIMIT</span> 1000
            </p>
          </div>
          <figure>
            <div>
              <div class="image">
                <img
                  class="one"
                  src={require("../images/Zip_Code/Compare Zip_Code Original Result.png")}
                  alt=""
                />
              </div>
            </div>

            <figcaption>Fig 1: Original Dataset</figcaption>
          </figure>
        </div>

        <div class="box">
          <div class="querybox">
            <p>
              <span class="textStyle">SELECT</span> Lower_Age,Upper_Age,Gender,
              Zip_Code,Employment,Marital_Status <br />
              <span class="textStyle">FROM</span>
              `plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Microdata_1000_Records_k_3_v2`
              <br />
              <span class="textStyle">WHERE</span> Zip_Code LIKE "51%" <br />
              <span class="textStyle">LIMIT</span> 1000
            </p>
          </div>
          <figure>
            <div>
              <div class="image">
                <img
                  class="two"
                  src={require("../images/Zip_Code/Compare Zip_Code Masked Result.png")}
                  alt=""
                />
              </div>
            </div>
            <figcaption>Fig 2: Masked Dataset</figcaption>
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

export default ZipCode;
