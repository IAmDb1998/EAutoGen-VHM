import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import Quotation from "./pages/Quotation";
import PayPage from "./pages/pay";
import {Privacypolicy} from "./pages/privacypolicy";
import Checkoutpage from "./pages/checkoutpage";
import CheckoutUnsuccessPage from "./pages/checkoutunsuccesspage";
import Login from "./pages/login";
import OTP from "./pages/otp";
import Signup from "./pages/signup";
import BuyPlanCar from "./admin/pages/buyplandetails";
import { UserProfileUpdate } from "./pages/UserProfileUpdate";
import HomePageAdmin from "./admin/pages/home";
import PagenotFound from "./pages/pagenotfound";
import HomePageDealer from "./dealer/pages/home";
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
          <Route path="/privacy-policy" element={<Privacypolicy/>} />
          {/* Admin */}
        
          <Route path="/userprofile" element={<UserProfileUpdate/>} />

          <Route path="/buyplan" element={<BuyPlanCar />}/>
          <Route path="/home" element={<HomePageAdmin />}/>
          <Route path="/dealer" element={<HomePageDealer />}/>

          
          <Route path="*" element={<PagenotFound />}/>
          {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
