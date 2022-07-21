import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthorizedWorkshops from "../../../components/home/authorizedWorkshops";
import "./WorkshopTwo.css";
export const WorkshopTwo = () => {
  return (
    <div
      style={{ marginTop: "90px", background: "#F4F6F6", paddingTop: "50px" }}
    >
      <Container>
        <Row className="workshopone">
          <Col md={6} className="workshopone_left">
            <h1>EAUTOZEN'S PANELS WORKSHOPS</h1>
            <h2>
              Nationwide Access To <br /> 200+ Panel Workshops
            </h2>
          </Col>
          <Col md={4}>
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
