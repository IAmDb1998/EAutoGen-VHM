import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Hassle1 from "../../../assets/img/hassle1.png";
import Hassle2 from "../../../assets/img/hassle2.png";
import Hassle3 from "../../../assets/img/hassle3.png";
import Money from "../../../assets/img/noupfront.png";
import "./HassleFree.css";
export const HassleFree = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="hasslefree justify-content-center align-items-center">
          <Col md={6}>
            <div className="section-title text-lg-start">
              <span style={{color:"#777777",fontSize:"14px"}}>
                AUTOGEN PLUS PROGRAM <br />
                COVERAGE AND REQUIREMENT
              </span>
              <h2>
                <span>Hassle-free Repair</span>
              </h2>
              <p style={{color:"black"}}>
                All repair works must be performed at{" "}
                <span style={{textDecoration:"underline"}}>eAutoGen's panel workshops </span>. Repair works and
                repair value claim can be made once the program passes the{" "}
                <span style={{fontWeight:"bold"}}>program cooling-off period</span> of the first 7 days and
                the first 500 kilometers from program activation date and
                odometer reading at point of program activation.{" "}
              </p>
              <Row>
                <Col md={5}>
                  <Image src={Money}   style={{marginTop:"30px"}}/>
                </Col>
               
              </Row>
              <Button className="mt-lg-5 mt-2 mb-2 gethassle"  variant="secondary" onClick={()=>window.location.href="https://pgmall.my/s/IMA2/3033"}>
                GET STARTED
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <Image src={Hassle1} fluid />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={Hassle2} fluid />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={Hassle3} fluid />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
