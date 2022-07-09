import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Affordable from './../../assets/img/affordable_icon.png'
import Workshops from './../../assets/img/workshops.png'
import high_claim_value_white from './../../assets/img/high_claim_value_white.png'
import hassle_free_process_white from './../../assets/img/hassle_free_process_white.png'
import lady_in_car from './../../assets/img/lady_in_car.png'


function AutogenPlus() {
  return (
    <>
      <section className="autogen py-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-title light">
                <span>Product Overview</span>
                <h2>
                  {" "}
                  GET COVERED BY <span>AUTOGEN PLUS </span>
                </h2>
              </div>
            </Col>
            <Col md={4} className="py-3 text-center">
              <strong>Car Brand:</strong>
            </Col>
            <Col md={8} className="py-3 text-center">
              <p>
                {"<"} auto sliding carousel showing car brand logossss{" > "}
              </p>
            </Col>
            <Col md={4} className="py-3 text-center">
              <strong>Car Age & Mileage:</strong>
            </Col>
            <Col md={8} className="py-3 text-center">
              <p>
                Age of car from the year of make which are NOT more than 10
                years from manufacturing year, odometer mileage reading shall
                not exceed 200,000km at the time of activation of this warranty
                plan.
              </p>
            </Col>
            <Col md={4} className="py-3 text-center">
              <strong>Car Inspection:</strong>
            </Col>
            <Col md={8} className="py-3 text-center">
              <p>
                All cars are subjected to a car inspection prior to plan
                activation at any panel workshop.
              </p>
            </Col>
            <Col md={4} className="py-3 text-center">
              <strong>Warranty Period:</strong>
            </Col>
            <Col md={8} className="py-3 text-center">
              <p>
                Warranty period is activated from the registration date for 1
                year or 30,000kms{" "}
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
                <strong className="pb-3 d-flex">AutoGen Plus is an extended warranty program that aid car owners from unexpected car engine and transmission repair cost. </strong>
                <strong className="pb-3 d-flex">We aim to improve car owners’ well-being by providing affordable extended warranty program with easily accessible workshops, and recognized quality of workmanship for all auto generation:</strong>

                <div className="icon-box">
                    <Image src={Affordable} />
                    <div className="icon-content">
                        <strong className="pb-2 d-flex">Light Weight Affordability</strong>
                        <p>Enjoy AutoGen Plus from as low as RM 298/per annum*.</p>
                    </div>
                </div>
                <div className="icon-box">
                    <Image src={Workshops} />
                    <div className="icon-content">
                        <strong className="pb-2 d-flex">Vast Panel Workshops Nationwide</strong>
                        <p>More than 200 panel workshops ready to serve you at your convenience. </p>
                    </div>
                </div>
                <div className="icon-box">
                    <Image src={high_claim_value_white} />
                    <div className="icon-content">
                        <strong className="pb-2 d-flex">High Claim Value</strong>
                        <p>Depending on your program, get as high as RM 20,000 claim value per annum* and RM 10,000 limit per transaction*.  </p>
                    </div>
                </div>
                <div className="icon-box">
                    <Image src={hassle_free_process_white} />
                    <div className="icon-content">
                        <strong className="pb-2 d-flex">Hassle-Free Claim Process</strong>
                        <p>Transparent and peace of mind claim process through panel workshop. </p>
                    </div>
                </div>
                <p>*Terms & Conditions applies. </p>
            </Col>
            <Image src={lady_in_car} className="section-img"/>
            <Col md={8} className="d-flex m-auto">
                    <Button variant="primary" className=" text-center m-auto">GET QUOTE</Button>
                  </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AutogenPlus;
