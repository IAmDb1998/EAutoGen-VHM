import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import step_claims from '../../assets/img/4_step_claims.png';
function Claims() {
    return ( 
        <section className="py-5">
            <Container>
          <Row>
            <Col md={12}>
              <div className="section-title">
                <h2>
                  <span>
                    GET YOUR CAR INSPECTED
                    <br /> FOR PLAN ACTIVATION
                  </span>{" "}
                </h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Row> 
                <Col md={12}>
                    <Image src={step_claims} fluid/>
                </Col>
            </Row>
          <Col md={8} className="d-flex m-auto mt-5">
                    <Button variant="primary" className=" text-center m-auto">GET QUOTE</Button>
                  </Col>
          </Row>
          </Container>
        </section>
     );
}

export default Claims;