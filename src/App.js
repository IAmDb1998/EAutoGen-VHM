import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import Quotation from "./pages/Quotation";
import PayPage from "./pages/pay";
import Checkoutpage from "./pages/checkoutpage";
import CheckoutUnsuccessPage from "./pages/checkoutunsuccesspage";
import Login from "./pages/login";
import OTP from "./pages/otp";
import Signup from "./pages/signup";
import BuyPlanCar from "./admin/pages/buyplandetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/pay" element={<PayPage />} />
          <Route path="/checkout" element={<Checkoutpage />} />
          <Route path="/checkoutfail" element={<CheckoutUnsuccessPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/otp" element={<OTP />} />
          <Route path="/signup" element={<Signup />} />
          {/* Admin */}
          {/* <Route path="/buyplan" element={<BuyPlanCar />}/> */}
          {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
