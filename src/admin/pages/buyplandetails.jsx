import React from "react";
import { Col, Container, Image, Nav, Row, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CarDetails from "../components/Buyplan";
import CustomerDetails from "../components/Buyplan/CustomerDetails";
import PlanPayment from "../components/Buyplan/PlanPayment";
import PlanQuotation from "../components/Buyplan/PlanQuotation";
import Header from "../components/common/header";
import car_inspection_icon from "./../../assets/img/car_inspection_icon.png";
import autogen_icon from "./../../assets/img/autogen-icon.png";
import autohgenplus from "./../../assets/img/autohgenplus.png";
function BuyPlanCar({ children }) {
  return (
    <React.Fragment>
      <Header />
      <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="CarDetails">
        <Row>
          <Col md={4}>
            <Nav className="flex-column Wizard-navigation">
              <Nav.Item>
                <Nav.Link  eventKey="CarDetails">
                  <div className="nav-box">
                    <Image src={car_inspection_icon} />
                    <div className="nav-content">
                      <h5>1. Car Details</h5>
                      <p>Input car model, brand & year</p>
                    </div>
                  </div>
                </Nav.Link >
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  eventKey="CustomerDetails">
                  <div className="nav-box">
                    <Image src={autogen_icon} />
                    <div className="nav-content">
                      <h5>2. Customer Details</h5>
                      <p>Input customer information</p>
                    </div>
                  </div>
                </Nav.Link >
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  eventKey="PlanQuotation">
                  <div className="nav-box">
                    <Image src={autohgenplus} />
                    <div className="nav-content">
                      <h5>Plan Quotation</h5>
                      <p>Generate quotation</p>
                    </div>
                  </div>
                </Nav.Link >
                
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  eventKey="PlanPayment">
                  <div className="nav-box">
                    <div className="icon-box">
                      <i class="fa-solid fa-check"></i>
                    </div>
                    <div className="nav-content">
                      <h5>Completed</h5>
                      <p>You’re all set. </p>
                    </div>
                  </div>
                </Nav.Link >
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={8}>
            <Tab.Content>
              <Tab.Pane eventKey="CarDetails">
                <CarDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="CustomerDetails">
                <CustomerDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="PlanQuotation">
                <PlanQuotation />
              </Tab.Pane>
              <Tab.Pane eventKey="PlanPayment">
                <PlanPayment />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
        </Tab.Container>
      </Container>
    </React.Fragment>
  );
}

export default BuyPlanCar;
