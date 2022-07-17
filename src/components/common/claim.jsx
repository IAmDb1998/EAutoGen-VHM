import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import step_claims from '../../assets/img/4_step_claims.png';
import MaskGroup1 from '../../assets/img/MaskGroup1.png';
import MaskGroup2 from '../../assets/img/MaskGroup2.png';


function Claims() {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-title">
              <h2>
                <span>
                Claims Have Never Been This Easy.
                </span>{" "}
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col md={12}>
              <Image className='desk_claim_img' src={step_claims} fluid />
              <div className='claim_img mt-5'>
                <Image  src={MaskGroup2} fluid/>
                <Image src={MaskGroup1} fluid/>
              </div>
            </Col>
          </Row>
          <Col md={8} className="d-flex m-auto mt-5">
            <Button variant="primary" className=" text-center m-auto"  onClick={() => window.scrollTo(0, window.innerHeight)}>GET QUOTE</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Claims;