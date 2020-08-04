import React from "react";
import ReactPlayer from "react-player";
import "./Tutorials.css";
import { Col, Row } from "react-bootstrap";
import TutorialNavbar from "../tutorials/TutorialNavbar";

const Tutorials = () => {
  return (
    <>
      <TutorialNavbar />
      <Row className="tutorials">
        <Col xs md={4} className="first-video">
          <h1>Driving At Night</h1>
          <ReactPlayer
            className="video-section"
            controls
            url="https://youtu.be/_qkuautHKlo"
            width="40vw"
            height="40vh"
          />
        </Col>
      </Row>
      <Row className="tutorials">
        <Col xs md={{ span: 4, offset: 3 }}>
          <h1>Child Seat</h1>
          <ReactPlayer
            className="video-section"
            controls
            url="https://youtu.be/Sg5i9YInU64"
            width="40vw"
            height="40vh"
          />
        </Col>
      </Row>
      <Row className="tutorials">
        <Col xs md={{ span: 4, offset: 7 }}>
          <h1>Parallel Parking</h1>
          <ReactPlayer
            className="video-section"
            controls
            url="https://youtu.be/https://youtu.be/l4LcfZeS4qw"
            width="40vw"
            height="40vh"
          />
        </Col>
      </Row>
    </>
  );
};

export default Tutorials;
