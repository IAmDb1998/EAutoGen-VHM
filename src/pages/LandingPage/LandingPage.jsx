import React from 'react'
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, NavLink, Row } from "react-bootstrap";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Logo from "../../assets/img/eautogen_white.svg";
import desk_logo from "../../assets/img/eutogen_logo.svg";
import { HassleFree } from './HassleFree/HassleFree';
import { BrandSlider } from './BrandSlider/BrandSlider';
import { CarEngine } from './CarEngine/CarEngine';
import { GirlInCar } from './GirlInCar/GirlInCar';
import { PeriodicCar } from './PeriodicCar/PeriodicCar';
import { LandingFaq } from './LandingFaq/LandingFaq';
import { Header } from '../../components/common/header';
import { HeroBg } from './HeroBg/HeroBg';
import { HowItWorks } from './HowItWorks/HowItWorks';
import { WorkshopOne } from './WorkshopOne/WorkshopOne';
import { WorkshopTwo } from './WorkshopTwo/WorkshopTwo';
import Footer from '../../components/common/footer';

export const LandingPage = () => {
  return (
    <div>
    <ToastContainer />
       <Header/>
       <HeroBg/>
       <HowItWorks/>
       <BrandSlider/>
       <CarEngine/>
       <GirlInCar/>
       <HassleFree/>
       <WorkshopOne/>
       <LandingFaq/>
       <WorkshopTwo/>
       <Footer/>
        {/* 
        
        
        */}
        {/* <PeriodicCar/> */}
        {/*  */}

    </div>
  )
}
