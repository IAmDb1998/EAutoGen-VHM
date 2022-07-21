import React, { useRef } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/header_bg.png";
export function Header() {
  return (
    <>
      <header
       
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


