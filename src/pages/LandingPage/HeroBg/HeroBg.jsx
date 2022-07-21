import React from 'react'
import "./HeroBg.css";
import {Col, Row,Container,Image} from "react-bootstrap";
import Hero from "../../../assets/img/herotag.png";
import Banner from '../../../components/home/banner';
export const HeroBg = () => {
  return (
    <div>
        <div className="hero-bg">
           <Container style={{paddingTop:"300px",paddingBottom:"300px"}}>
            <Row>
             <Col md={5}>
                <Image src={Hero} fluid/>
             </Col>
          
            </Row>
          
           </Container>
          
        </div>
        <Container>
        <Row>
                <Banner/>
            </Row>
        </Container>
    </div>
  )
}
