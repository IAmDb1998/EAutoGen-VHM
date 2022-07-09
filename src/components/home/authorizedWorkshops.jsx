import React from "react";
import { Button, Carousel, Col, Container, Form, Image, Row } from "react-bootstrap";
import autogenplus_logo from "../../assets/img/autogenplus_logo.png";
function AuthorizedWorkshops() {
  return (
    <>
      <section className="py-5 workshops">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-title">
                <span>Authorized Workshops</span>
                <h2>
                  <span>
                    GET YOUR CAR INSPECTED
                    <br /> FOR PLAN ACTIVATION
                  </span>{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={4}>
              {" "}
              <Form.Group
                className="mb-5 mt-5"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Select aria-label="Default select example">
                  <option>Filter by State</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col md={4}>
                  <div className="workshop-box">
                    <Image src={autogenplus_logo} fluid />
                    <h4>workshop name</h4>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="workshop-box">
                    <Image src={autogenplus_logo} fluid />
                    <h4>workshop name</h4>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="workshop-box">
                    <Image src={autogenplus_logo} fluid />
                    <h4>workshop name</h4>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={4}>
                  <div className="workshop-box">
                    <Image src={autogenplus_logo} fluid />
                    <h4>workshop name</h4>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="workshop-box">
                    <Image src={autogenplus_logo} fluid />
                    <h4>workshop name</h4>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="workshop-box">
                    <Image src={autogenplus_logo} fluid />
                    <h4>workshop name</h4>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={4}>
                  <div className="workshop-box">
                    <Image src={autogenplus_logo} fluid />
                    <h4>workshop name</h4>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="workshop-box">
                    <Image src={autogenplus_logo} fluid />
                    <h4>workshop name</h4>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="workshop-box">
                    <Image src={autogenplus_logo} fluid />
                    <h4>workshop name</h4>
                    <p>Address</p>
                    <p>Contact</p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
          <Row>
          <Col md={8} className="d-flex m-auto mt-5">
                    <Button variant="primary" className=" text-center m-auto">GET QUOTE</Button>
                  </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AuthorizedWorkshops;
