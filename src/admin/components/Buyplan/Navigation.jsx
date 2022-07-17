import React from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import car_inspection_icon from './../../../assets/img/car_inspection_icon.png';
import autogen_icon from './../../../assets/img/autogen-icon.png';
import autohgenplus from './../../../assets/img/autohgenplus.png';
function Navigation() {
  return (
    <>
      <div className="Wizard-navigation">
        <ul>
          <li>
            <NavLink to="/admin/buyplan">
              <div className="nav-box">
                <Image src={car_inspection_icon} />
                <div className="nav-content">
                    <h5>1. Car Details</h5>
                    <p>Input car model, brand & year</p>
                    </div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/customerdetails">
              <div className="nav-box">
                <Image src={autogen_icon} />
                <div className="nav-content">
                    <h5>2. Customer Details</h5>
                    <p>Input customer information</p>
                    </div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/planquotation">
              <div className="nav-box">
                <Image src={autohgenplus} />
                <div className="nav-content">
                    <h5>Plan Quotation</h5>
                    <p>Generate quotation</p>
                    </div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/planpayment">
              <div className="nav-box">
                <div className="icon-box">
              <i className="fa-solid fa-check"></i>
              </div>
                <div className="nav-content">
                    <h5>Completed</h5>
                    <p>You’re all set. </p>
                    </div>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
