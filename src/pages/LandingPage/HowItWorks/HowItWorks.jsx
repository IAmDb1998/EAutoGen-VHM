import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import autohgenplus from "../../../assets/img/autohgenplus.png";
import autogenplus_logo from "../../../assets/img/autogenplus_logo.png";
import car_inspection_icon from "../../../assets/img/car_inspection_icon.png";
import arrow from "../../../assets/img/arrow.svg";
import Letter from "../../../assets/img/mailbox.png";
import "../../../assets/css/style.css";
function HowItWorks() {
  return (
    <>
      <section className="py-5 how_work">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-title">
                <span>HOW IT WORKS</span>
                <h2>
                  <span>It's Easy To Get Started</span>{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col md={3}>
              <Image src={autohgenplus} fluid className="hiw_img" />
              <strong className="pb-2 d-flex">
                Tell Us About You And Your Car
              </strong>
              <p className="pb-2">
                Complete form with the required details to get an instant
                quotation for your AutoGen PLUS program.
              </p>
            </Col>
            <Col md={1}>
              <Image src={arrow} className="arrow_img" />
            </Col>
            <Col md={3}>
              <Image
                src={Letter}
                fluid
                className="hiw_img"
              />
              <strong className="pb-2 d-flex">Receive Order Code</strong>
              <p className="pb-2">
                Upon successful payment, an order code with 90 days validity
                will be sent to your registered email.
              </p>
            </Col>
            <Col md={1}>
              <Image src={arrow} className="arrow_img" />
            </Col>
            <Col md={3}>
              <Image src={car_inspection_icon} className="hiw_img" fluid />
              <strong className="pb-2  d-flex">Program Activation</strong>
              <p className="pb-2">
                Visit any of our authorized partners with your order code to
                have your car inspected for AutoGen PLUS program activation.
              </p>
            </Col>
            <Col md={8} className="d-flex m-auto">
              {/* <Button variant="primary" className=" text-center m-auto">GET QUOTE</Button> */}
              <a
                className=" text-center m-auto"
                style={{ textDecoration: "none" }}
              >
                <Button variant="secondary">GET STARTED</Button>
              </a>
            </Col>
            <Col md={12} className="pt-2">
              <p style={{ color: "#777777" }}>*TERMS & CONDITIONS APPLIES.</p>
              <p style={{ color: "#777777" }}>
                For all email communication, kindly check your inbox, spam box
                or junk box.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export { HowItWorks };
