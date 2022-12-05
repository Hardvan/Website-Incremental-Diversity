import React from "react";
import Carousel from "react-bootstrap/Carousel";

function DatasetDescription() {
  return (
    <div className="CustomCarousel" id="dataset">
      <h2 className="SectionTitle">Dataset Description</h2>
      <Carousel>
        {/* First Slide */}
        <Carousel.Item interval={4200}>
          <img
            className="d-block w-100"
            src={require("../images/Privacy.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Data privacy</h3>
            <p>
              Anonymization plays an important role in preserving privacy of the
              data when published.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Second Slide */}
        <Carousel.Item interval={4200}>
          <img
            className="d-block w-100"
            src={require("../images/Researcher.png")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Researchers who need data</h3>
            <p>
              If the data is published in highly hidden way, research cannot be
              conducted smoothly as some of the information in the dataset would
              be hidden.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Third Slide */}
        <Carousel.Item interval={4200}>
          <img
            className="d-block w-100"
            src={require("../images/Balance.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Our Aim</h3>
            <p>
              Publish data by meticulously balancing between privacy and
              usefulness of the data for researchers for convenient analysis.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DatasetDescription;
