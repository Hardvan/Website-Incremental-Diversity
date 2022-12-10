import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function FileUpload() {
  return (
    <div id="fileupload">
      <h2 className="SectionTitle" id="FileUploadTitle">
        Check with your Own Dataset:
      </h2>
      {/* Guidelines */}
      <Card border="primary" style={{ width: "75%" }} className="CenterCard">
        {/* Original Dataset */}
        <Card.Body>
          <Card.Title className="CardTitle">
            Guidelines for the dataset:
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            (to be filled)
          </Card.Subtitle>
          <Card.Text align="justify" className="CardText">
            <ul className="GuidelinesList">
              <li>
                The most sensitive attribute should be considered as primary
                sensitive attribute. The second most sensitive attribute should
                be considered as secondary sensitive attribute, and so on.
              </li>
              <li>
                The quasi-identifiers will be either generalised or masked.
              </li>
              <li>The dataset should be in .csv or .xlsx format.</li>
            </ul>
          </Card.Text>

          <div class="ChooseFile">
            <p>Click on the "Choose File" button to upload your dataset:</p>
            {/* TODO: Add route */}
            <form action="/">
              <fieldset>
                <label for="FileUpload">Select a CSV File:</label>
                <input
                  type="file"
                  name="FileReceived"
                  id="FileReceived"
                  accept=".csv,.xlsx"
                  value=""
                />
                <br />
                <input type="submit" id="SubmitFile" name="SubmitFile" />
              </fieldset>
            </form>
          </div>
        </Card.Body>
      </Card>
      ;
    </div>
  );
}

// Old Code:
// return (
//   <div id="fileupload">
//     <h2 className="SectionTitle">Check with your Own Dataset:</h2>
//     {/* Guidelines */}
//     <h3>Guidelines for the dataset:</h3>
//     <ol>
//       <li>
//         The most sensitive attribute should be considered as primary sensitive
//         attribute. The second most sensitive attribute should be considered as
//         secondary sensitive attribute, and so on.
//       </li>
//       <li>The quasi-identifiers will be either generalised or masked.</li>
//       <li>The dataset should be in .csv or .xlsx format.</li>
//     </ol>
//     {/* Upload Section */}
//     {/* TODO: Style Upload Section */}
//     <div class="ChooseFile">
//       <strong>
//         <p>Click on the "Choose File" button to upload your dataset:</p>
//       </strong>
//       {/* TODO: Add route */}
//       <form action="/">
//         <fieldset>
//           <label for="FileUpload">Select a CSV File:</label>
//           <input
//             type="file"
//             name="FileReceived"
//             id="FileReceived"
//             accept=".csv,.xlsx"
//           />
//           <br />
//           <input type="submit" id="SubmitFile" name="SubmitFile" />
//         </fieldset>
//       </form>
//     </div>
//   </div>
// );

export default FileUpload;
