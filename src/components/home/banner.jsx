import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Banner_img from "../../assets/img/woman_with_bill.png";
function Banner() {
  return (
    <>
      <section className="banner">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="banner-content">
                <h1>Daunted by expensive car repairs ?</h1>
                <p>
                  eAutoGen picks up where your auto warranty expires. Protect
                  your car's engine and transmission with our vehicle protection
                  plan that shields you from major car repair costs.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <Image src={Banner_img} fluid />
            </Col>
            <div className="banner-quote">
              <Form>
                <Row>
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Brand</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Model</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Years</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="e.g. Tan Eng" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    {" "}
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
                  <Col md={4}>
                    {" "}
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Mobile </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="e.g. 0123456789"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={8} className="d-flex m-auto">
                  <Form.Check
                      className="mb-3"
                    > <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>By filling the checkbox and submitting this registration to eAutoGen. I understand and agree to the Terms and Conditions and Privacy Policy.</Form.Check.Label>
                        </Form.Check>
                  </Col>
                  <Col md={8} className="d-flex m-auto">
                    <Button variant="primary" className=" text-center m-auto">GET QUOTE</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
