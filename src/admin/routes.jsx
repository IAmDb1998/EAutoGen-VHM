import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarDetails from './components/Buyplan';
import CustomerDetails from './components/Buyplan/CustomerDetails';
import PlanPayment from './components/Buyplan/PlanPayment';
import PlanQuotation from './components/Buyplan/PlanQuotation';
import BuyPlanCar from './pages/buyplandetails';

function AdminRoutes() {
    return (  

        <BrowserRouter>
        <Routes>
          {/* Admin */}
          <Route path="/buyplan" element={<BuyPlanCar />}>
            <Route path="cardetails" element={<CarDetails />}/>
            <Route path="customerdetails" element={<CustomerDetails />}/>
            <Route path="planquotation" element={<PlanQuotation />}/>
            <Route path="planpayment" element={<PlanPayment />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default AdminRoutes;