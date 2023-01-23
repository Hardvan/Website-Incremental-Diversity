import React from "react";
import Age from "./Age/1_Age";
import Gender from "./Gender/2_Gender";
import ZipCode from "./ZipCode/3_Zip_Code";
import "./comparison.css";

function Comparison() {
  return (
    <div className="Comparison" id="comparison">
      <h2 className="SectionTitle" id="FileUploadTitle">
        Comparisons
      </h2>
      <Age />
      <Gender />
      <ZipCode />
    </div>
  );
}

export default Comparison;
