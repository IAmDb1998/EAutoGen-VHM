import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Affordable from "./../../assets/img/engine.png";
import Workshops from "./../../assets/img/gearbox.png";
import high_claim_value_white from "./../../assets/img/coverage.png";
import hassle_free_process_white from "./../../assets/img/anuam_covreage.png";
import lady_in_car from "./../../assets/img/car_logo.png";
function WhatIncluded() {
  return (
    <section className="autogen whatincluded py-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-title">
              <span>AUTOGEN+ COVERAGE FEATURES</span>
              <h2>
                <span>WHAT IS INCLUDED ? </span>
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <strong className="pb-3 d-flex">
              Car component(S) covered by AUTOGEN+{" "}
            </strong>

            <div className="icon-box">
              <Image src={Affordable} />
              <div className="icon-content">
                <strong className="pb-2 d-flex">Engine</strong>
                <p>terms and conditions about engine here</p>
              </div>
            </div>
            <div className="icon-box">
              <Image src={Workshops} />
              <div className="icon-content">
                <strong className="pb-2 d-flex">
                  Transmission (a.k.a. Gearbox)
                </strong>
                <p>terms and conditions about transmission here</p>
              </div>
            </div>
            <strong className="pb-3 d-flex">Coverage value by AUTOGEN+</strong>
            <div className="icon-box">
              <Image src={high_claim_value_white} />
              <div className="icon-content">
                <strong className="pb-2">
                  Up to RM 5,000 coverage <span>per transaction</span>
                </strong>
              </div>
            </div>
            <div className="icon-box">
              <Image src={hassle_free_process_white} />
              <div className="icon-content">
                <strong className="pb-2">
                  Up to RM 5,000 coverage <span>per transaction</span>
                </strong>
              </div>
            </div>
            <p>*Terms & Conditions applies. </p>
          </Col>
          <Image src={lady_in_car} className="section-img" />
          <Col md={8} className="d-flex m-auto">
            <a
              className=" text-center m-auto"
              style={{ textDecoration: "none" }}
              href=""
            >
              <Button variant="primary">BUY NOW</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhatIncluded;
