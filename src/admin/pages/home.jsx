import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/common/header';
import HomeNavigation from '../components/Homepage/Navigation';
function HomePage() {
    return (  <React.Fragment>
    <Header/>
    <HomeNavigation/>
   
   <div> <Outlet/></div>
    </React.Fragment> );
}

export default HomePage;