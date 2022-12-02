import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

function About() {
  return (
    <Accordion id="about" defaultActiveKey="0">
      <h2 className="SectionTitle">About</h2>
      {/* Team Members */}
      <Accordion.Item eventKey="0">
        <Accordion.Header>Team Members</Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Hardik Hiraman Pawar</ListGroup.Item>
            <ListGroup.Item as="li">Tanmay S Lal</ListGroup.Item>
            <ListGroup.Item as="li">S Mohammed Ashiq</ListGroup.Item>
            <ListGroup.Item as="li">Mohammed Raza</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      {/* Project Description */}
      <Accordion.Item eventKey="1">
        <Accordion.Header>Project Description</Accordion.Header>
        <Accordion.Body className="Description">
          The need of protecting the privacy of data has got an immense
          importance in the society. There are many anonymity models that exist
          today, most of them aiming to preserve privacy for only a single
          sensitive attribute and very for multiple sensitive attributes. The
          Incremental Diversity algorithm is able to diversify the data for
          multiple sensitive attributes and also produce lesser quantity of
          residue records as compared to other diversity models. This website
          discusses about querying a dataset from GCP obtained from the
          Incremental Diversity model developed by us.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default About;
