import React from "react";
import { useRef } from "react";
import Claims from "../components/common/claim";
// import Footer from "../components/common/footer";
// import Header from "../components/common/header";
import HowItWork from "../components/common/howItWork";
import Aboutus from "../components/home/about";
import AuthorizedWorkshops from "../components/home/authorizedWorkshops";
import AutogenPlus from "../components/home/autogenPlus";
import Banner from "../components/home/banner";
import Faq from "../components/home/faq";
import { Link } from "react-router-dom";
import Logo from "./../assets/img/eautogen_white.svg";
import desk_logo from "./../assets/img/eutogen_logo.svg";
// import mobile_profile from "./../assets/img/Profile.svg";

import Dropdown from "react-bootstrap/Dropdown";
import { Col, NavLink, Row } from "react-bootstrap";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
function Homepage() {
  const aboutus = useRef(null);
  const ourproduct = useRef(null);
  const authorizedWorkshops = useRef(null);
  const faq = useRef(null);

  const howItWork = useRef(null);

  const scrollToSection = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });

  const userLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  function handlePrivacy() {
    window.location.href = "/privacy-policy";
  }

  return (
    <>
      <ToastContainer />
      <header
        style={{
          background:
            "-webkit-linear-gradient(left, rgb(12, 78, 131) 0%, rgb(21, 121, 152) 40%, rgb(29, 164, 173) 80%, rgb(34, 185, 184) 100%)",
        }}
      >
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <Image className="logo" src={Logo} />
              <Image className="desk_logo" src={desk_logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link onClick={() => scrollToSection(aboutus)}>
                  ABOUT US
                </Nav.Link>
                <Nav.Link
                  onClick={() => scrollToSection(ourproduct)}
                  href="#link"
                >
                  OUR PRODUCT
                </Nav.Link>
                <Nav.Link
                  onClick={() => scrollToSection(howItWork)}
                  href="#link"
                >
                  HOW IT WORKS
                </Nav.Link>
                <Nav.Link onClick={() => scrollToSection(faq)} href="#link">
                  FAQ
                </Nav.Link>
                <Nav.Link
                  onClick={() => scrollToSection(authorizedWorkshops)}
                  href="#link"
                >
                  AUTHORIZED WORKSHOPS
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="login">
              {/* <i class="fa-regular fa-circle-user"></i> */}
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <i
                    className="fa-regular fa-circle-user"
                    style={{ color: "white" }}
                  ></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {localStorage.getItem("userId") ? (
                    <Dropdown.Item
                      href="/login"
                      onClick={userLogout}
                      style={{ color: "black", textAlign: "center" }}
                    >
                      Logout
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item
                      href="/login"
                      style={{ color: "black", textAlign: "center" }}
                    >
                      Login
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>

              <Link to="" className="mt-1">
                EN
              </Link>
              <span className="mt-1">|</span>
              <Link className="mt-1" to="">
                {" "}
                BM
              </Link>
            </div>
          </Container>
        </Navbar>
      </header>

      <Banner />
      <div ref={aboutus}>
        <Aboutus />
      </div>
      <div ref={ourproduct}>
        <AutogenPlus />{" "}
      </div>
      <div ref={howItWork}>
        <HowItWork />
      </div>
      <div ref={authorizedWorkshops}>
        <AuthorizedWorkshops />
      </div>
      <div ref={faq}>
        <Faq />
      </div>

      <Claims />
      {/* <Footer /> */}

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
                <i class="fa-solid fa-location-dot"></i> D-26-3 Menara Suezcap
                1, KL Gateway, <br /> 2, Jalan Kerinchi, 59200 Kuala Lumpur.
              </p>
              <p>
                <i class="fas fa-envelope"></i> cs@eautogen.my
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
                  {/* <NavLink to="">About AutoGen Plus</NavLink> */}
                  <Nav.Link onClick={() => scrollToSection(aboutus)}>
                    About AutoGen Plus
                  </Nav.Link>
                </li>
                <li>
                  {/* <NavLink to="">How It Works</NavLink> */}
                  <Nav.Link
                    onClick={() => scrollToSection(howItWork)}
                    href="#link"
                  >
                    How It Works
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link onClick={() => scrollToSection(faq)} href="#link">
                    FAQ
                  </Nav.Link>
                </li>
                <li>
                  {/* <NavLink to="">Panel Workshops</NavLink> */}
                  <Nav.Link
                    onClick={() => scrollToSection(authorizedWorkshops)}
                    href="#link"
                  >
                    Panel Workshops
                  </Nav.Link>
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
                  <NavLink onClick={handlePrivacy}>Privacy Policy </NavLink>
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
    </>
  );
}

export default Homepage;
