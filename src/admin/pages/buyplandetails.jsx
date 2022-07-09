import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Buyplanwizard from '../components/Buyplan';
import Navigation from '../components/Buyplan/Navigation';
import Header from '../components/common/header';
function BuyPlanCar({ children }) {
    return (
      <React.Fragment>
        {/* <Header/>
        <Container>
        <Row>
        <Col md={4}>
            <Navigation />
          </Col>
          <Col md={8}>
          <Buyplanwizard/>
          </Col>
        </Row></Container> */}
        </React.Fragment>
      );
}

export default BuyPlanCar;