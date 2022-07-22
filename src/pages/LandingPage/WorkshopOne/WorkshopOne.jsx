import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthorizedWorkshops from "../../../components/home/authorizedWorkshops";
import "./WorkshopOne.css";
export const WorkshopOne = () => {
  return (
    <div style={{ background:"#F4F6F6",marginTop:"50px"}} className="py-5">
      <Container>
        <Row className="workshopone">
          <Col md={6}>
            <p>
              Visit any of our authorized partners with your order code to have
              your car inspected for AutoGen PLUS program activation. To arrange
              for a mobile inspection (limited areas), please call eAutoGen’s
              Help Desk.
            </p>

          </Col>
          <Col md={6} className="section-title text-lg-end">
            <span>EAUTOGEN'S AUTHORISED PARTNERS</span>
            <h2><span>Locate Your Preferred Program Activation Point</span></h2>
          </Col>
         
        </Row>
        <AuthorizedWorkshops/>
      </Container>
      
    </div>
  );
};
