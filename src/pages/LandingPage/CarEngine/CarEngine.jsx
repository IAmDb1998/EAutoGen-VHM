import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Engine from "../../../assets/img/enginee.png";
import Dropdown from "react-bootstrap/Dropdown";
import "./CarEngine.css";
export const CarEngine = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="section-title text-lg-start">
            <p>
              AUTOGEN PLUS PROGRAM <br /> COVERAGE AND REQUIREMENT
            </p>

            <h2><span>Program In-Scope Components</span></h2>
            <p>
              AutoGen PLUS is an extended warranty program that covers two key
              components of a car, car engine and car transmission.{" "}
            </p>
            <Button  variant="secondary">
              GET STARTED
            </Button>
          </Col>
          <Col md={6}>
            <Image src={Engine} fluid />
          </Col>
        </Row>
        <Row className="enginedrop">
          <Col md={6}>
            <h3>Car Engine</h3>
              <p>
                Program covers 21x parts of the car's engine component including
                the commonly reported faulty oil pressure sensor.{" "}
              </p>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                21x Car Engine Covered Parts
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Engine Block </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Cylinder Head</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Crankshaft</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Eccentric Shaft</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Connecting Rod</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Piston</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Piston Ring</Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Variable Valve Timing
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Camshaft Adjuster Solenoid
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">Balancer Shaft</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Intake Valve</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Exhaust Valve</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Intake Camshaft</Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Exhaust Camshaft
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Valvetronic Motor
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">Oil Pump</Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Emission Control Air Pump
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Air Mass Sensor (Air Flow Sensor) &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Engine Vacuum Pump
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">Crankshaft</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Position Sensor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={6}>
            <h3>Car Transmission</h3>
              <p>
                Program covers 9x parts of the car's transmission component
                (commonly known as gearbox) including the commonly reported
                faulty gear shaft.{" "}
              </p>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                9x Car Transmission Covered Parts
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  (Automatic or Manual) Clutch Temperature Sensor &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Transmission Control Module TCM
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Transmission Oil Pump
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  All Type of Solenoid Valve
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Torque Converter
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Transmission Speed Sensor
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">Gear Shaft</Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Gear Shifting / Selector Module
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">Valve Body</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
