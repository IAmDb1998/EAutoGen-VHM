import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Hassle1 from "../../../assets/img/hassle1.png";
import Hassle2 from "../../../assets/img/hassle2.png";
import Hassle3 from "../../../assets/img/hassle3.png";
import Money from "../../../assets/img/money.png";
import "./HassleFree.css";
export const HassleFree = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="hasslefree justify-content-center align-items-center">
          <Col md={6}>
            <div className="section-title text-lg-start">
              <span>
                AUTOGEN PLUS PROGRAM <br />
                COVERAGE AND REQUIREMENT
              </span>
              <h2>
                <span>Hassle-free Repair</span>
              </h2>
              <p>
                All repair works must be performed at{" "}
                <span>eAutoGen's panel workshops </span>. Repair works and
                repair value claim can be made once the program passes the{" "}
                <span>program cooling-off period</span> of the first 7 days and
                the first 500 kilometers from program activation date and
                odometer reading at point of program activation.{" "}
              </p>
              <Row>
                <Col md={3}>
                  <Image src={Money} fluid width="100px" height="100px" />
                </Col>
                <Col md={9}>
                  <p>No upfront payment needed</p>
                </Col>
              </Row>
              <Button className="mt-lg-5 mt-2 mb-2" variant="secondary">
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