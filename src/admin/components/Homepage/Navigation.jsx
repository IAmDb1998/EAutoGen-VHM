import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function HomeNavigation() {
  return (
    <>
      <header className="home-nav">
        <Container>
          <Row>
            <Col>
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="home-nav" />
                <Navbar.Collapse id="home-nav">
                  <Nav>
                    <NavLink className="nav-link" to="dashboard">
                      Dashboard
                    </NavLink>
                    <NavLink className="nav-link" to="/buyplan">
                      History
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default HomeNavigation;
