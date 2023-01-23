import React from "react";
import "./3_zip_code.css";

function ZipCode() {
  return (
    <section class="queries">
      <h1 className="CardTitle">Query 3: Zip_Code</h1>
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
      <p style={{ "text-align": "justify" }}>
        Here, comparision of query results for Original Dataset and Masked
        Microdata is done with respect to zipcode. Similar to the comparision of
        results of queries with repect to gender and age , the number of records
        in Original Dataset is less than the number of records in Masked
        Microdata. In Fig. 1, the query executed for the Original Dataset where
        Zip_Code = 51618 showed only 1 record whereas the query executed for the
        Masked Microdata where Zip_Code is generalised as 51*** showed 9
        records. This is because of generalisation in Masked Microdata.
      </p>
    </section>
  );
}

export default ZipCode;
