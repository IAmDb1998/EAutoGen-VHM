import React, { useState } from "react";
import { Col, Container, Dropdown, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import values_that_lead_us from "./../../assets/img/values_that_lead_us.png";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
function Dashboard() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <div className="dealer-overview">
            <span>Total Revenue</span>
            <h1>RM19,999</h1>
          </div>
        </Col>
        <Col md={3}>
          <div className="dealer-overview">
            <span>Total Customer</span>
            <h1>1,516</h1>
          </div>
        </Col>
        <Col md={3}>
          <div className="dealer-overview">
            <span>Total Orders</span>
            <h1>150</h1>
          </div>
        </Col>
        <Col md={3}>
          <div className="dealer-overview">
            <span>Total Cars</span>
            <h1>150</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className="overview-box">
            <h5>Customer Overview</h5>
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
          <div className="overview-box">
            <Row className="justify-content-between">
              <Col md={3}>
                <h5>Revenue</h5>
              </Col>
              <Col md={3}>
              <Dropdown  autoClose="outside" className="datepicker">
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-autoclose-outside">
        Last 7 days
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">
          <DateRangePicker
                  onChange={(item) => setState([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
              </Col>
            </Row>
          </div>
          <div className="payment-box dashbord-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h1>
                  eAutoGen was started to pick up where your auto warranty
                  expires.{" "}
                </h1>
                <p>
                  *Fill up the form with your car’s details to get a quote for
                  your AutoGen+ plan.
                </p>
                <Link to="/" className="btn btn-secondary rounded">
                  {" "}
                  buy plan
                </Link>
              </Col>
              <Col md={4}>
                {" "}
                <Image src={values_that_lead_us} fluid />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
