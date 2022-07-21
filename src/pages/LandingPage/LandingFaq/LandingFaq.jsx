import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import "./LandingFaq.css";

export const LandingFaq = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="justify-content-center">
        <Col md={6} className="section-title">
            
            <h2><span>Frequently Asked Questions</span> </h2>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Accordion className="accordance">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How do I know if my car is eligible for AutoGen PLUS?
                </Accordion.Header>
                <Accordion.Body>
                  "Your car must meet the following criterias: <br />
                  Car Type: Private Use Car (excluding Commercial Use Car and
                  e-Hailing), including Reconditioned Car/Used Car/Existing on
                  the road car
                  <br />
                  Car Age: up to 10 years old (from date of registration), and{" "}
                  <br />
                  Odometer Reading: less than 200,000km mileage"
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="accordance">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Is Car Inspection compulsory prior to plan activation?
                </Accordion.Header>
                <Accordion.Body>
                  "Yes, your Car is required to undergo a car inspection at any
                  of our authorized partners prior to plan activation. Please
                  visit the one nearest you for a short diagnosis test results
                  within 90 days the Order Code is sent to you after purchase.
                  See all eAutoGen's authorized partners here. "
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="accordance">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What if I am unable to send my car for inspection at any of
                  your authorized partners listed?
                </Accordion.Header>
                <Accordion.Body>
                  Please call our Help Desk at 03-7931 3663 during office hour
                  or WhatsApp at the same number to arrange for a mobile
                  inspection (limited areas).
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="accordance">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What are the warranty components of AutoGen PLUS?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  AutoGen PLUS covers 2 key components of a car - the engine and
                  transmission.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="accordance">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What is the program coverage period of AutoGen PLUS?
                </Accordion.Header>
                <Accordion.Body>
                  1 calendar year or 30,000 kilometers mileage, whichever comes
                  first.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6}>
            <Accordion className="accordance">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What is the repair limit of AutoGen PLUS?
                </Accordion.Header>
                <Accordion.Body>
                  AutoGen Plus provides repair limit up to RM20,000 per annum
                  and RM10,000 per repair depending on your program plan.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="accordance">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What is the maximum number of repairs per annum?
                </Accordion.Header>
                <Accordion.Body>
                  There is no limit on the number of repairs as long as it is
                  within your repair value per annum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="accordance">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What is the program cooling-off period?
                </Accordion.Header>
                <Accordion.Body>
                  The cooling-off period is the first 7 days and the first 500
                  kilometers from program activation date before car repair
                  works can commence.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="accordance">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How do I know if my car problem is within the scope of AutoGen
                  PLUS?
                </Accordion.Header>
                <Accordion.Body>
                  You can take your car to any eAutoGen’s panel workshops for
                  assessment. See all eAutoGen's panel workshop here.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className="accordance">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Do I need to pay upfront for the repair?
                </Accordion.Header>
                <Accordion.Body>
                  No upfront payment is required. Kindly ensure you only go to
                  eAutoGen's panel workshop for the repair. See all eAutoGen's
                  panel workshop here.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
