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
                  <option value="01">Johor</option>
    <option value="02">Kedah</option>
    <option value="03">Kelantan</option>
    <option value="14">Kuala Lumpur</option>
    <option value="15">Labuan</option>
    <option value="04">Melaka</option>
    <option value="05">Negeri Sembilan</option>
    <option value="06">Pahang</option>
    <option value="07">Penang</option>
    <option value="08">Perak</option>
    <option value="09">Perlis</option>
    <option value="16">Putrajaya</option>
    <option value="12">Sabah</option>
    <option value="13">Sarawak</option>
    <option value="10">Selangor</option>
    <option value="11">Terengganu</option>
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
