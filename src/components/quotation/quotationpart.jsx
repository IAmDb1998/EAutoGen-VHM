import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import car_wireframe from "../../assets/img/car_wireframe.png";
import eautogen_product from "../../assets/img/eautogen_product.png";

function QuotationPart() {
  return (
    <section className="py-5 mt-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-title mb-5">
              <span>get covered by autogen+</span>
              <h2>
                <span>YOUR</span> AUTOGEN PLUS LEAD <span>QUOTATION</span>{" "}
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Image src={car_wireframe} fluid />
          </Col>
          <Col md={6}>
            <div className="quot">
              <Image src={eautogen_product} fluid />
              <p className="mt-5">
                This is a computer generated quotation, no signature is
                required.{" "}
              </p>

              <Row>
                <Col md={4}>
                  <strong>Owner Name: </strong>
                </Col>
                <Col md={8}>
                  <p>Name</p>
                </Col>
                <Col md={4}>
                  <strong>Brand: </strong>
                </Col>
                <Col md={8}>
                  <p>Name</p>
                </Col>
                <Col md={4}>
                  <strong>Year Make:</strong>
                </Col>
                <Col md={8}>
                  <p>Name</p>
                </Col>
                <Col md={4}>
                  <strong>Other input:</strong>
                </Col>
                <Col md={8}>
                  <p>Name</p>
                </Col>
              </Row>
            </div>
            <div className="customer_details">
              <h2>Customer Details</h2>
              <Row>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="e.g. Tan Eng" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="e.g. abg@gmail.com"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Mobile </Form.Label>
                    <Form.Control type="email" placeholder="e.g. 0123456789" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>NRIC Number </Form.Label>
                    <Form.Control type="email" placeholder="e.g. 0123456789" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>State</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={12}>
                    <strong>Get covered by AUTOGEN+ for only</strong>
                    <div className="section-title d-flex align-items-end">
                        <h2 className="mb-0">RM 298.00</h2><h5>/YEAR</h5>
                    </div>
                </Col>
                <Col md={12} className="d-flex m-auto">
                  <Form.Check
                      className="mb-3"
                    > <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>I HEREBY AGREE,,,,</Form.Check.Label>
                        </Form.Check>
                  </Col>
                  <Col md={12}>
                    <Button variant="primary" className=" text-center m-auto">BUY NOW</Button>
                  </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default QuotationPart;
