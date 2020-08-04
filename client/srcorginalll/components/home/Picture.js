import React from "react";
import { Row, Image, Card } from "react-bootstrap";
import "./Picture.css";

const Picture = () => {
  return (
    <>
      <Image src="/assets/driversCourse.webp" className="first-image" xs={10} />
      <Row className="justify-content-center">
        <Card className="driver-card d-none d-md-block">
          <Card.Body>
            <Card.Title className="card-title">
              Learn on your schedule
            </Card.Title>

            <Card.Text className="card-text">
              Anywhere, anytime.
              <br /> Prepare for your driving license today!
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default Picture;
