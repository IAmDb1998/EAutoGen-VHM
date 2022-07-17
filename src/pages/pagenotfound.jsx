import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import About from "../assets/img/values_that_lead_us.png"
function PagenotFound() {
    return ( 
    
        <Container style={{
        height: "100vh",
        display: "flex"
    }}>
        <Row className='align-items-center'>
                <Col md={6}>
                    <Image src={About} fluid/>
                </Col>
                <Col md={6}>
                <div className='section-title'>
                      
                        <h2>Page   <span>not</span> found</h2>
                        <Link to="/"  className=" text-center m-auto btn btn-secondary">
               Go To Home
              </Link>
                    </div>
                </Col>
                </Row>
                </Container>
          
      
     );
}

export default PagenotFound;