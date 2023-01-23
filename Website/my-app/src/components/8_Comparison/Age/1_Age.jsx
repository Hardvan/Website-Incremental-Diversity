import React from "react";
import "./1_age.css";

function Age() {
  return (
    <div class="queries">
      <h1 className="CardTitle">Query 1: Age</h1>
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
      <p style={{ "text-align": "justify" }}>
        The Comparison of the Results obtained from the Original Dataset Query
        and the Masked Microdata Query (Age is Generalised) is done here. The
        Comparison reveals that the number of records in the Original Dataset is
        significantly lower than the number of records obtained from the Masked
        Microdata because more generalisations are made there. In Fig. 1, the
        query executed for the Original Dataset where Age = 35 showed only 28
        records, whereas the query executed for the Masked Microdata where Age
        is generalised between 30 and 40 showed 80 records (Fig. 2), which is
        much more than the Original Dataset. The Generalisation of Age has
        increased the number of records in order to preserve the privacy of
        data.
      </p>
    </div>
  );
}

export default Age;
