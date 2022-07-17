import React from "react";
import { Carousel, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import values_that_lead_us from "../../assets/img/values_that_lead_us.png";
import Header from "../components/common/header";

export function Dashboard() {
  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col md={4}>
          <div className="overview-box">
            <h5>Overview</h5>
            <Row>
              <Col md={6}>
                <div className="overview-item">
                  <div className="expired">
                    <h1>10</h1>
                    <span>Expired</span>
                    <p>
                      •7 Updates <br />
                      •3 Remarks
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="overview-item">
                  <div className="unpaid">
                    <h1>10</h1>
                    <span>Unpaid</span>
                    <p>
                      •7 Updates <br />
                      •3 Remarks
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="overview-item">
                  <div className="paid">
                    <h1>30</h1>
                    <span>Paid</span>
                    <p>
                      •7 Updates <br />
                      •3 Remarks
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="overview-item">
                  <div className="draft">
                    <h1>1</h1>
                    <span>Draft</span>
                    <p>
                      •7 Updates <br />
                      •3 Remarks
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={8}>
          <div className="payment-box dashbord-box">
            <h1>AutoGen Plus Extended Warranty Program</h1>
            <Carousel>
      <Carousel.Item>
      <Row className="align-items-end">
              <Col md={6}>
                <div className="authentication-inputs">
                  {/* <Form noValidate validated={validated} onSubmit={onSubmit}> */}
                  <div className="quot pb-0">
                    <p>
                      <strong>Car Details</strong>
                    </p>

                    <Row>
                      <Col md={4}>
                        <p>Brand :</p>
                      </Col>
                      <Col md={8}>
                        <p>Name</p>
                      </Col>
                      <Col md={4}>
                        <p>Model :</p>
                      </Col>
                      <Col md={8}>
                        <p>Name</p>
                      </Col>
                      <Col md={4}>
                        <p>Year :</p>
                      </Col>
                      <Col md={8}>
                        <p>Name</p>
                      </Col>
                    </Row>
                  </div>
                  <div className="quot pt-0">
                    <p>
                      <strong>Insurance Duration</strong>
                    </p>

                    <Row>
                      <Col md={4}>
                        <p>Start Date :</p>
                      </Col>
                      <Col md={8}>
                        <p>20 Jul 2022</p>
                      </Col>
                      <Col md={4}>
                        <p>End Date :</p>
                      </Col>
                      <Col md={8}>
                        <p>20 Jul 2022</p>
                      </Col>
                      <Col md={4}>
                        <p>Status :</p>
                      </Col>
                      <Col md={8}>
                        <p>
                          {" "}
                          <Link
                            to="/"
                            className="btn btn-success rounded"
                          >
                            {" "}
                            Paid
                          </Link>
                        </p>
                      </Col>
                      <Col md={12}>
                        <strong>Get covered by AUTOGEN+ for only</strong>
                        <div className="section-title d-flex align-items-end mb-3">
                          <h2 className="mb-0">RM 298.00</h2>
                          <h5>/YEAR</h5>
                        </div>
                        <Link
                          to="/"
                          className="btn btn-secondary rounded"
                        >
                          {" "}
                          download receipt
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <Image src={values_that_lead_us} fluid />
              </Col>
            </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row className="align-items-end">
              <Col md={6}>
                <div className="authentication-inputs">
                  {/* <Form noValidate validated={validated} onSubmit={onSubmit}> */}
                  <div className="quot pb-0">
                    <p>
                      <strong>Car Details</strong>
                    </p>

                    <Row>
                      <Col md={4}>
                        <p>Brand :</p>
                      </Col>
                      <Col md={8}>
                        <p>Name</p>
                      </Col>
                      <Col md={4}>
                        <p>Model :</p>
                      </Col>
                      <Col md={8}>
                        <p>Name</p>
                      </Col>
                      <Col md={4}>
                        <p>Year :</p>
                      </Col>
                      <Col md={8}>
                        <p>Name</p>
                      </Col>
                    </Row>
                  </div>
                  <div className="quot pt-0">
                    <p>
                      <strong>Insurance Duration</strong>
                    </p>

                    <Row>
                      <Col md={4}>
                        <p>Start Date :</p>
                      </Col>
                      <Col md={8}>
                        <p>20 Jul 2022</p>
                      </Col>
                      <Col md={4}>
                        <p>End Date :</p>
                      </Col>
                      <Col md={8}>
                        <p>20 Jul 2022</p>
                      </Col>
                      <Col md={4}>
                        <p>Status :</p>
                      </Col>
                      <Col md={8}>
                        <p>
                          {" "}
                          <Link
                            to="/"
                            className="btn btn-danger rounded"
                          >
                            {" "}
                            Paid
                          </Link>
                        </p>
                      </Col>
                      <Col md={12}>
                        <strong>Get covered by AUTOGEN+ for only</strong>
                        <div className="section-title d-flex align-items-end mb-3">
                          <h2 className="mb-0 text-danger">RM 298.00</h2>
                          <h5>/YEAR</h5>
                        </div>
                        <Link
                          to="/"
                          className="btn btn-secondary rounded"
                        >
                          {" "}
                          Renew now
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <Image src={values_that_lead_us} fluid />
              </Col>
            </Row>
      </Carousel.Item>
    </Carousel>
         
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

