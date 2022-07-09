import React from "react";
import { useRef } from "react";
import Claims from "../components/common/claim";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import HowItWork from "../components/common/howItWork";
import Aboutus from "../components/home/about";
import AuthorizedWorkshops from "../components/home/authorizedWorkshops";
import AutogenPlus from "../components/home/autogenPlus";
import Banner from "../components/home/banner";
import Faq from "../components/home/faq";
import { Link } from "react-router-dom";
import Logo from "./../assets/img/eautogen_white.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Image, Nav, Navbar } from "react-bootstrap";
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

  return (
    <>
      <header
        style={{
          background:
            "-webkit-linear-gradient(left, rgb(12, 78, 131) 0%, rgb(21, 121, 152) 40%, rgb(29, 164, 173) 80%, rgb(34, 185, 184) 100%)",
        }}
      >
        <Navbar expand="lg">
          <Container >
            <Navbar.Brand href="/">
              <Image src={Logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav" >
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
                <Dropdown.Toggle variant="transparent"  id="dropdown-basic">
                <i class="fa-regular fa-circle-user" style={{color:"white"}}></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/login" style={{color:"black",textAlign:"center"}}>Login</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Link to="" className="mt-1">EN</Link><span className="mt-1">|</span><Link className="mt-1" to=""> BM</Link>
            </div>
          </Container >
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
      <Footer />
    </>
  );
}

export default Homepage;
