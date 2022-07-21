import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthorizedWorkshops from "../../../components/home/authorizedWorkshops";
import "./WorkshopOne.css";
export const WorkshopOne = () => {
  return (
    <div style={{ marginTop: "90px" ,background:"#F4F6F6",paddingTop:"50px"}}>
      <Container>
        <Row className="workshopone">
          <Col md={4}>
            <p>
              Visit any of our authorized partners with your order code to have
              your car inspected for AutoGen PLUS program activation. To arrange
              for a mobile inspection (limited areas), please call eAutoGen’s
              Help Desk.
            </p>

          </Col>
          <Col md={6} className="workshopone_right">
            <h1>EAUTOZEN'S AUTHORISED PARTNERS</h1>
            <h2>Locate Your Preferred <br/> Program Activation Point</h2>
          </Col>
          <AuthorizedWorkshops/>
        </Row>
       
      </Container>
      
    </div>
  );
};
