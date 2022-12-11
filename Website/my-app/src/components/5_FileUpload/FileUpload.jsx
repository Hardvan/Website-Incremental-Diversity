import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./styles.css";
import axios from "axios";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = (event) => {
    // Prevent default behavior of page refreshing
    event.preventDefault();

    if (!isFilePicked) {
      alert("Please select a file to upload first!");
    } else {
      const url = "http://localhost:8080/uploadFile"; // TODO: Change when hosting on GitHub

      const formData = new FormData();
      formData.append("FileReceived", selectedFile);
      formData.append("FileName", selectedFile.name);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
      });
    }
  };

  return (
    <div id="fileupload">
      <h2 className="SectionTitle" id="FileUploadTitle">
        Check with your Own Dataset:
      </h2>
      {/* Guidelines */}
      <Card border="primary" style={{ width: "75%" }} className="CenterCard">
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

          {/* File Upload Section */}
          <div class="ChooseFile">
            <p>Click on the "Choose File" button to upload your dataset:</p>
            {/* TODO: Add route */}
            <div>
              <input
                type="file"
                name="FileReceived"
                id="FileReceived"
                accept=".csv,.xlsx"
                onChange={changeHandler}
              />{" "}
              {isFilePicked ? (
                <div>
                  <p>Filename: {selectedFile.name}</p>
                  <p>Filetype: {selectedFile.type}</p>
                  <p>Size: {selectedFile.size} bytes</p>
                </div>
              ) : (
                <p style={{ color: "#808080" }}>
                  (Select a file to show details)
                </p>
              )}
              <Button
                variant="success"
                href=""
                className="CustomButton"
                type="submit"
                name="SubmitFile"
                onClick={handleSubmission}
              >
                Submit
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      ;
    </div>
  );
}

export default FileUpload;
