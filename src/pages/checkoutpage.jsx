import React from "react";
import Checkoutbox from "../components/Checkout/checkout";
// import CheckoutboxUnsuccessful from "../components/Checkout/checkoutUnsuccessful";
import Footer from "../components/common/footer";
import HeaderInnner from "../components/common/headerInner";
import HowItWork from "../components/common/howItWork";
import AuthorizedWorkshops from "../components/home/authorizedWorkshops";
function Checkoutpage() {
  return (
    <>
      <HeaderInnner />
      <Checkoutbox />
      {/* <CheckoutboxUnsuccessful/> */}
      <HowItWork />
      <AuthorizedWorkshops />
      <Footer />
    </>
  );
}

export default Checkoutpage;
