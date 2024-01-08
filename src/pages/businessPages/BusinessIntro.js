import React from "react";
import BusinessSwipe from "../../components/business/BusinessHome/BusinessSwipe";
import { BusinessStyWrap } from "../../styles/BusinessIntroStyle";

const BusinessIntro = () => {
  return (
    <BusinessStyWrap>
      <h2> 수강생 포트폴리오 </h2>
      <div className="main-tab-menu">
        <ul>
          <li>IT</li>
          <li>UIUX</li>
          <li>건축기계</li>
          <li>빅데이터</li>
          <li>영상</li>
          <li>편집디자인</li>
        </ul>
      </div>
      <BusinessSwipe />
      <div className="main-portfolio-linkBtn">
        <span> 포트폴리오 전체보기 </span>
      </div>
    </BusinessStyWrap>
  );
};

export default BusinessIntro;
