import React from "react";
import "./1_age.css";

function Age() {
  return (
    <div class="queries">
      <h1>Query 1: Age</h1>
      <div class="section">
        <div class="box">
          <div class="queryBox">
            <p>
              <span class="textStyle">SELECT</span>{" "}
              Age,Gender,Zip_Code,Education,Employment
              <br />
              <span class="textStyle">FROM</span>
              `plenary-chalice-369413.Incremental_Diversity_Dataset.Original_Microdata_1000_Records_k_3`
              <br />
              <span class="textStyle">WHERE</span> Age=35 <br />
              <span class="textStyle">LIMIT</span> 1000
            </p>
          </div>
          <figure>
            <div>
              <div class="image">
                <img
                  src={require("../images/Age/Compare Age Original Result.png")}
                  alt=""
                  width="500px"
                />
              </div>
            </div>
            <figcaption>Fig 1: Original Dataset</figcaption>
          </figure>
        </div>

        <div class="box">
          <div class="queryBox">
            <p>
              <span class="textStyle">SELECT</span>{" "}
              Lower_Age,Upper_Age,Gender,Zip_Code,Education,Employment
              <br />
              <span class="textStyle">FROM</span>
              `plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Microdata_1000_Records_k_3_v2`
              <br />
              <span class="textStyle">WHERE</span> Lower_Age{">"}=30 AND
              Upper_Age{"<"}=40 <span class="textStyle">ORDER BY </span>{" "}
              Group_ID
              <br />
              <span class="textStyle">LIMIT</span> 1000
            </p>
          </div>
          <figure>
            <div>
              <div class="image">
                <img
                  src={require("../images/Age/Compare Age Masked Result.png")}
                  alt=""
                  width="500px"
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
    </div>
  );
}

export default Age;
