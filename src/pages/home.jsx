import React from 'react'
import Claims from '../components/common/claim';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import HowItWork from '../components/common/howItWork';
import Aboutus from '../components/home/about';
import AuthorizedWorkshops from '../components/home/authorizedWorkshops';
import AutogenPlus from '../components/home/autogenPlus';
import Banner from '../components/home/banner';
import Faq from '../components/home/faq';
function Homepage() {
    return ( <>
    <Header/>
    <Banner/>
    <Aboutus/>   
    <AutogenPlus/>    
    <HowItWork/>  
    <AuthorizedWorkshops/>
    <Faq/>
    <Claims/>
    <Footer/>
    </> );
}

export default Homepage;