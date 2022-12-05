import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Dataset() {
  return (
    <div className="Dataset" id="dataset">
      <h2 className="SectionTitle" id="DatasetTitle">
        Dataset
      </h2>
      <Card border="success" style={{ width: "50rem" }} className="CenterCard">
        {/* Original Dataset */}
        <Card.Body>
          <div className="ImageDiv">
            <img src={require("../images/Original_Table.png")} alt="Query" />
            <figcaption>Original Microdata Table</figcaption>
          </div>
          <Card.Title>Original Dataset</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            12 Attributes, 1 Added (Group ID)
          </Card.Subtitle>
          <Card.Text align="justify">
            The Incremental Diversity is obtained by choosing right sensitive
            attributes to produce Masked Microdata Table with lesser number of
            residue records for a given value of K and lesser time complexity. A
            microdata table is basically a raw data obtained from any survey or
            census (for example: details of all students in a class).
          </Card.Text>
          <Button
            variant="success"
            href="https://storage.googleapis.com/incremental_diversity_dataset/original_microdata_Records_1000_k_3.csv"
          >
            Dataset
          </Button>
        </Card.Body>

        {/* Masked Dataset */}
        <Card.Body>
          <div className="ImageDiv">
            <img src={require("../images/Masked_Table.png")} alt="Query" />
            <figcaption>Masked Microdata Table</figcaption>
          </div>
          <Card.Title>Masked Dataset</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Anatomy, k-anonymity, (l, e) diversity
          </Card.Subtitle>
          <Card.Text align="justify">
            A Masked Microdata Table is nothing but the table obtained from
            applying various anonymity techniques in order bring the efficient
            model to protect the privacy of the data. Disease as Primary,
            Education as Secondary, Employment as Tertiary and Race as
            Quaternary Sensitive Attributes are taken under consideration to
            obtain efficient Incremental Diversity. Sensitive Attributes are the
            attributes which an individual wants to maintain a secret or
            private. Here Age, Gender, Zip Code is considered as
            Quasi-Identifiers. Masked Table is formed by masking and sorting of
            sensitive attributes into various Equivalence Class from Microdata
            Table. An Equivalence Class is a table of records consisting of
            sensitive attributes and quasi-identifier attributes obtained from a
            microdata table, i.e., it is basically a subclass obtained from
            microdata table. Masking is a process to create a face but realistic
            version of organised sensitive data of an individual.
          </Card.Text>
          <Button
            variant="success"
            href="https://storage.googleapis.com/incremental_diversity_dataset/masked_microdata_Records_1000_k_3.csv"
          >
            Dataset
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dataset;
