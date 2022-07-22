import React from "react";
import { Col, Container, Image, NavLink, Row } from "react-bootstrap";
import Logo from "./../../assets/img/eautogen_white.svg";
import Working from "./../../assets/img/workinghour.png";
import Location from "./../../assets/img/location.png";
import Email from "./../../assets/img/email.png";
import Phone from "./../../assets/img/phoneicon.png";
import Facebook from "./../../assets/img/face.png";
import Utube from "./../../assets/img/utube.png";
function Footer() {
  return (
    <footer className="py-5">
      <Container>
        <Row>
          <Col className="pb-5">
            <Image src={Logo} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <strong className="pb-2 d-flex">
              EAUTOGEN CAPITAL SDN BHD (1402277-K){" "}
            </strong>
         
            <div style={{paddingBottom:"20px"}}>
            <Row>
           <Col md={2} >
            <Image src={Working} width="30px" height="30px"/>
           </Col>
           <Col md={10} >
              <p>Monday to Friday, excluding public holiday <br/>
9:00 AM to 6:00 PM</p>
           </Col>
           </Row>
           </div>


           <div style={{paddingBottom:"20px"}}>
            <Row>
           <Col md={2} >
            <Image src={Location} width="20px" height="20px"/>
           </Col>
           <Col md={10}>
              <p>D-26-3 Menara Suezcap 1, KL Gateway, <br/>
2, Jalan Kerinchi, 59200 Kuala Lumpur.</p>
           </Col>
            </Row>
</div>
            <div style={{paddingBottom:"20px"}}>
            <Row>
           <Col md={2} >
            <Image src={Email} width="20px" height="20px"/>
           </Col>
           <Col md={10} className="m-auto">
              <p>cs@eautogen.my</p>
           </Col>
            </Row>
            </div>
            <div style={{paddingBottom:"20px"}}>
            <Row>
           <Col md={2} >
            <Image src={Phone} width="20px" height="20px"/>
           </Col>
           <Col md={10}>
              <p>+603-7931 3663</p>
           </Col>
            </Row>
           </div>
          </Col>

          
          
          
          <Col md={3}>
            
            <ul>
            <li>
                <NavLink to=""><strong className="pb-2  d-flex">AUTOGEN Plus</strong></NavLink>
              </li>
              <li>
                <NavLink to="">About AutoGen Plus</NavLink>
              </li>
              <li>
                <NavLink to="">How It Works</NavLink>
              </li>
              <li>
                <NavLink to="">Frequently Asked Questions</NavLink>
              </li>
              <li>
                <NavLink to="">Authorized Workshops </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            
            <ul>
              <li>
                <NavLink to=""><strong className="pb-2 d-flex">Locate Us</strong></NavLink>
              </li>
              <li>
                <NavLink to="">Authorised Partners For Program</NavLink>
              </li>
              <li>
                <NavLink to="">Activation</NavLink>
              </li>
              <li>
                <NavLink to="">Panel Workshops For Car</NavLink>
              </li>
              <li>
                <NavLink to="">Maintenance And Repair Work</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={2}>
           
            <ul>
            <li>
                <NavLink to=""> <strong className="pb-2 d-flex">Quick Links</strong></NavLink>
              </li>
              <li>
                <NavLink to="">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink to="">Privacy Policy </NavLink>
              </li>
              <li>
                <NavLink to="">Refund Policy </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className="text-center d-flex justify-content-center">
      
        <Col md={2}  className="m-0 p-0 text-center d-flex justify-content-center">
        <p style={{fontWeight:"bold"}}>Find Us On :</p> 
        <Image className="m-1 p-0  " src={Facebook} width="20px" height="20px"/>
        <Image  className="m-1 p-0  " src={Utube} width="20px" height="20px"/>
        </Col>
        {/* <Col md={1} className="m-0 p-0">
       
        </Col>
        <Col md={1} className="m-0 p-0">
       
        </Col>
      */}
       
      </Row>
      </Container>
      <div className="footer-bottom">
        <p>COPYRIGHT © 2022 EAUTOGEN CAPITAL SDN BHD. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default Footer;
