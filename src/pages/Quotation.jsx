import React, { useEffect } from "react";
import Claims from "../components/common/claim";
import Footer from "../components/common/footer";
import HeaderInnner from "../components/common/headerInner";
import HowItWork from "../components/common/howItWork";
import WhatIncluded from "../components/common/included";
import QuotationPart from "../components/quotation/quotationpart";
function Quotation() {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <HeaderInnner />
      <QuotationPart />
      <WhatIncluded />
      <HowItWork />
      <Claims />
      <Footer />
    </>
  );
}

export default Quotation;
