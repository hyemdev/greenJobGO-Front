import React from "react";
import BusinessSwipe from "../../components/business/BusinessHome/BusinessSwipe";
import { BusinessStyWrap } from "../../styles/BusinessIntroStyle";

const BusinessIntro = () => {
  return (
    <BusinessStyWrap>
      <h2> 수강생 포트폴리오 </h2>
      <BusinessSwipe />
    </BusinessStyWrap>
  );
};

export default BusinessIntro;
