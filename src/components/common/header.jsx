import React, { useRef } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/eautogen_white.svg";
function Header() {
  return (
    <>
      <header
        style={{
          background:
            "-webkit-linear-gradient(left, rgb(12, 78, 131) 0%, rgb(21, 121, 152) 40%, rgb(29, 164, 173) 80%, rgb(34, 185, 184) 100%)",
        }}
      >
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <Image src={Logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#home">ABOUT US</Nav.Link>
                <Nav.Link href="#link">OUR PRODUCT</Nav.Link>
                <Nav.Link href="#link">HOW IT WORKS</Nav.Link>
                <Nav.Link href="#link">FAQ</Nav.Link>
                <Nav.Link href="#link">AUTHORIZED WORKSHOPS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="login">
              {/* <i class="fa-regular fa-circle-user"></i> */}

              
              <Link to="">EN</Link>|<Link to=""> BM</Link>
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
