import React from "react";
// import Checkoutbox from "../components/Checkout/checkout";
import CheckoutboxUnsuccessful from "../components/Checkout/checkoutUnsuccessful";
import Footer from "../components/common/footer";
import HeaderInnner from "../components/common/headerInner";
import HowItWork from "../components/common/howItWork";
import AuthorizedWorkshops from "../components/home/authorizedWorkshops";
import Claims from "../components/common/claim";

function CheckoutUnsuccessPage() {
  return (
    <>
      <HeaderInnner />
      {/* <Checkoutbox /> */}
      <CheckoutboxUnsuccessful />
      <HowItWork />
      <AuthorizedWorkshops />
      <Claims />
      <Footer />
    </>
  );
}

export default CheckoutUnsuccessPage;
