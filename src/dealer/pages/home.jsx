import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import HeaderDelaer from '../common/header';
import Dashboard from '../Homepage/dashboard';
import Historypage from '../Homepage/hisotry';
function HomePageDealer() {
    return (  <React.Fragment>
    <HeaderDelaer/>
    <Tab.Container id="left-tabs-example" defaultActiveKey="Dashboard">
    <header className="home-nav">
    <Container>
      <Row>
        <Col sm={12}>
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="Dashboard">
              Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Historypage" >
              History
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        </Row>
        </Container>
        </header>
        <Container>
        <Row>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="Dashboard">
             <Dashboard/>
            </Tab.Pane>
            <Tab.Pane eventKey="Historypage">
              <Historypage />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      </Container>
    </Tab.Container>
    </React.Fragment> );
}

export default HomePageDealer;