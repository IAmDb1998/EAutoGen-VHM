import React from "react";
import { Col, Container, Image, NavLink, Row } from "react-bootstrap";
import Logo from "./../../assets/img/eautogen_white.svg";

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
          <Col md={6}>
            <strong className="pb-2 d-flex">
              EAUTOGEN CAPITAL SDN BHD (1402277-K){" "}
            </strong>
            <p>
              <i className="fa-solid fa-location-dot"></i> D-26-3 Menara Suezcap 1,
              KL Gateway, <br /> 2, Jalan Kerinchi, 59200 Kuala Lumpur.
            </p>
            <p>
              <i className="fas fa-envelope"></i> cs@eautogen.my
            </p>
          </Col>
          <Col md={2}>
            {/* <strong className="pb-2 d-flex">Explore</strong>
            <ul>
              <li>
                <NavLink to="">Home</NavLink>
              </li>
              <li>
                <NavLink to="">Our Story</NavLink>
              </li>
              <li>
                <NavLink to="">Our Solution</NavLink>
              </li>
              <li>
                <NavLink to="">Sitemap</NavLink>
              </li>
            </ul> */}
          </Col>
          <Col md={2}>
            <strong className="pb-2 d-flex">AUTOGEN Plus</strong>
            <ul>
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
          <Col md={2}>
            <strong className="pb-2 d-flex">Legal</strong>
            <ul>
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
      <div className="footer-bottom">
        <p>Copyright © 2022 eautogen capital sdn bhd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
