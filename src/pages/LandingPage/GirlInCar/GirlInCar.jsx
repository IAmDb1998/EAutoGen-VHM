import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Girl from "../../../assets/img/girl.png"
import "./GirlInCar.css"
export const GirlInCar = () => {
  return (
    <div style={{paddingTop:'50px'}}>
      <Container>
        <Row className="justify-content-center">
          <Col md={5}> <Image src={Girl} fluid/> </Col>
          <Col md={5} className="girl_right">
            <h1>AUTOGEN PLUS PROGRAM <br/>COVERAGE AND REQUIREMENT</h1>
            <Row>
            <Col md={3} >
           
            </Col>
            <Col md={9} >
            <h2>Repair Value On In-Scope Components</h2>
            </Col>
            </Row>
            <h3>Cushioning you financially for unwanted surprises.</h3>
            <Button className="getstarted" variant="secondary">GET STARTED</Button>
            <p><span>See all eAutoGen's panel workshops.</span></p>
          </Col>
        </Row>

        <Row  className="girlpara">
        <Col md={1}></Col>
          <Col md={5}>
            <h1>Up To RM20,000 Per Annum Repair Value</h1>
            <p>
              Enjoy up to RM20,000 repair and replacement value per annum on
              AutoGen PLUS program coverage components (namely, car engine and
              transmission, including labor cost) when you visit any of
              eAutoGen's panel workshops.{" "}
            </p>
          </Col>
          
          <Col md={5}>
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
