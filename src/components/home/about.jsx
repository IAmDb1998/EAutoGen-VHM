import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import About from "../../assets/img/values_that_lead_us.png"
function Aboutus() {
    return ( <>
    <section className='py-5'>
        <Container>
            <Row>
                <Col md={12}>
                    <div className='section-title'>
                        <span>
                        About Us
                        </span>
                        <h2>VALUES <span>THAT</span> LEAD <span>US</span>  </h2>
                    </div>
                </Col>
                </Row>
                <Row className='align-items-center'>
                <Col md={6}>
                    <Image src={About} fluid/>
                </Col>
                <Col md={6}>
                    <div className='box-content'>
                    <p><strong>eAutoGen was started to pick up where your auto warranty expires. </strong></p>
                    <p>is important for us that car users have the option of purchasing an extended warranty from any service providers like ourselves. By circumventing traditional channels, working directly with workshops, and engaging with customers directly, we are able to improve accessibility with recognized quality of workmanship for you and your car without leaving your wallets bare. </p>
                    <p>Protecting car owners from thousands of major car repair cost, we are proud to share to you our very first auto protection plan. </p>
                    <p>Our <strong>auto protection plan</strong> allows car owners to enjoy a peace of mind from major car repair cost related to engine and gearbox. </p>
                    <Button variant="link" className='p-0'>Learn more {">"} </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </> );
}

export default Aboutus;