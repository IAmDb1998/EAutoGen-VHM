import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Periodic from "../../../assets/img/periodic-calender.png";
export const PeriodicCar = () => {
  return (
    <div>
      <Container>
        <Row >
          <Col md={6} style={{disply:'flex', textAlign:'right',border:"1px solid red"}}>
            <Image src={Periodic} fluid/>
          </Col>
          <Col md={6} style={{disply:'flex', textAlign:'right',border:"1px solid red"}}>
          <Row>
            <Col md={7}>
            
            </Col>
            <Col md={5}>
            <p>AUTOGEN PLUS program coverage and requirement</p>
            </Col>
          </Row>

            <Row>
            <Col md={6}>
            </Col>
            <Col md={6}>
            <h1>Periodic Car Maintenance Requirement</h1>
            </Col>
            </Row>

            <Row>
            <Col md={3}>
            </Col>
            <Col md={9}>
            <p>
              Cultivate good car owner behavior by keeping your program
              activated. You are required to perform your periodic car
              maintenance at your own expense at any eAutoGen's panel workshops.
             </p>
            </Col>
            </Row>

            <Row>
            <Col md={3}>
            </Col>
            <Col md={9}>
            <p>
              AutoGen PLUS periodic car maintenance schedule (as per recommended
              by manufacturers) as below:
            </p>
            </Col>
            </Row>
           
        
          </Col>
          
        </Row>
      
        <Row className=" justify-content-center " >
        <Col style={{disply:'flex', textAlign:'center',border:"1px solid red",margin:"10px",padding:"10px",background:"#0C4C81"}} md={5}>
        <p style={{fontSize:"12.8px",color:"#ffffff"}}>Car Lubricant Type</p>
        </Col>
        <Col md={5} style={{disply:'flex', textAlign:'center',border:"1px solid red",alignItems:"center",margin:"10px",padding:"10px",background:"#0C4C81"}} >
        <p style={{fontSize:"12.8px",color:"#ffffff"}}>AutoGen PLUS 
Periodic Car Maintenance Schedule</p>
        </Col>
        </Row>
        <Row className=" justify-content-center " >
        <Col md={6} style={{disply:'flex', textAlign:'center',border:"1px solid red",margin:"10px",padding:"10px",background:"#0C4C81"}} md={5}>
        <p>Semi-synthetic</p>
        </Col>
        <Col md={6} style={{disply:'flex', textAlign:'center',border:"1px solid red",margin:"10px",padding:"10px",background:"#0C4C81"}} md={5}>
        <p>every 3 months (or 5,000 kilometers, whichever earlier)</p>
        </Col>
        <Col md={6}>
        <p>Fully-synthetic</p>
        </Col>
        <Col md={6}>
        <p>every 6 months (or 10,000 kilometers, whichever earlier)</p>
        </Col>
        <Button variant="secondary">GET STARTED</Button>
        </Row>
        </Container>
    
      
    </div>
  );
};
