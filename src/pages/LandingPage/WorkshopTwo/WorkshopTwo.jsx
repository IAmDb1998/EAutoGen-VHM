import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthorizedWorkshops from "../../../components/home/authorizedWorkshops";
import "./WorkshopTwo.css";
export const WorkshopTwo = () => {
  return (
    <div
      style={{ background: "#F4F6F6",marginTop:"50px" }} 
      className="py-5"
    >
      <Container>
        <Row className="workshopone">
          <Col md={6} className="section-title text-lg-start">
            <span>EAUTOGEN'S PANELS WORKSHOPS</span>
            <h2>
              <span>
              Nationwide Access To <br /> 200+ Panel Workshops
              </span>
            </h2>
          </Col>
          <Col md={6}>
            <p>
              With over 200 panel workshops nationwide, making it convenient and
              accessible for your periodic car maintenance and repair work.
            </p>
          </Col>
          <AuthorizedWorkshops />
        </Row>
      </Container>
    </div>
  );
};
