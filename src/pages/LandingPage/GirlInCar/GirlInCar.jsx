import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Girl from "../../../assets/img/girl.png"
import "./GirlInCar.css"
export const GirlInCar = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6}> <Image src={Girl} fluid/> </Col>
          <Col md={6} className="section-title text-lg-end">
          <span>AUTOGEN PLUS PROGRAM <br/>COVERAGE AND REQUIREMENT</span>
          <h2><span>Repair Value On In-Scope Components</span></h2>
            <p className="pb-lg-5">Cushioning you financially for unwanted surprises.</p>
            <Button className="getstarted" variant="secondary">GET STARTED</Button>
            <p>See all eAutoGen's panel workshops.</p>
          </Col>
        </Row>

        <Row  className="girlpara justify-content-center align-items-center">
          <Col lg={6}>
            <h1>Up To RM20,000 Per Annum Repair Value</h1>
            <p>
              Enjoy up to RM20,000 repair and replacement value per annum on
              AutoGen PLUS program coverage components (namely, car engine and
              transmission, including labor cost) when you visit any of
              eAutoGen's panel workshops.{" "}
            </p>
          </Col>
          
          <Col lg={6}>
            <h1>Capped At RM10,000 Per Visit </h1>
            <p>
              Save up to RM10,000 per visit (with no upfront payment required)
              on your car engine and transmission repair work when you visit any
              of eAutoGen's panel workshops.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
