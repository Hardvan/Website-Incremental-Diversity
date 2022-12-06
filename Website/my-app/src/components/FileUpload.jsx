import React from "react";

function FileUpload() {
  return (
    <div>
      <h2 className="SectionTitle">Check with your Own Dataset:</h2>
      {/* Guidelines */}
      <h3>Guidelines for the dataset:</h3>
      <ol>
        <li>
          The most sensitive attribute should be considered as primary sensitive
          attribute. The second most sensitive attribute should be considered as
          secondary sensitive attribute, and so on.
        </li>
        <li>The quasi-identifiers will be either generalised or masked.</li>
        <li>The dataset should be in .csv or .xlsx format.</li>
      </ol>
      {/* Upload Section */}
      {/* TODO: Style Upload Section */}
      <div class="ChooseFile">
        <strong>
          <p>Click on the "Choose File" button to upload your dataset:</p>
        </strong>
        {/* TODO: Add route */}
        <form action="/">
          <fieldset>
            <label for="FileUpload">Select a CSV File:</label>
            <input
              type="file"
              name="FileReceived"
              id="FileReceived"
              accept=".csv,.xlsx"
            />
            <br />
            <input type="submit" id="SubmitFile" name="SubmitFile" />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default FileUpload;
