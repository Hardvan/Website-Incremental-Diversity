import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Component for a single Query
function Query(props) {
  return (
    <Card id={props.id} style={{ width: "75%" }} className="CenterCard">
      <Card.Body>
        <Card.Title className="CardTitle">{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Query {props.slno} ({props.memory} runtime memory used)
        </Card.Subtitle>
        <code className="Code">{props.statement}</code>
        <div className="ImageDiv">
          <img src={props.image} alt="Query" />
          <figcaption>{props.caption}</figcaption>
        </div>
        <Card.Text align="justify" className="CardText">
          {props.explanation}
        </Card.Text>
        {/* Query Button */}
        <Button
          variant="dark"
          href={props.link}
          className="CustomButton"
          target="_blank"
        >
          Query
        </Button>{" "}
        {/* Corresponding Query Table */}
        <Button
          variant="success"
          href={props.table}
          className="CustomButton"
          target="_blank"
        >
          Dataset
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Query;
