import React from "react";
import Footer from "../components/common/footer";
import HeaderInnner from "../components/common/headerInner";
import WhatIncluded from "../components/common/included";
import Package from "../components/pay/package";
function PayPage() {
  return (
    <>
      <HeaderInnner />
      <Package />
      <WhatIncluded />
      <Footer />
    </>
  );
}

export default PayPage;
