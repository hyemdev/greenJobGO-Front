import React from "react";
import { HeaderSty } from "../styles/HeaderStyle";
import { Link } from "react-router-dom";

const BusinessHeader = () => {
  return (
    <HeaderSty>
      <div className="business-header">
        <div className="upper-logo-div">
          <Link to="/business">
            <img
              src={`${process.env.PUBLIC_URL}/assets/LoginTitle.png`}
              alt="greenlogo"
            />
          </Link>
        </div>
        <ul>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/HomeIcon.svg`}
              alt="home"
            />
            <Link to="/business"> 홈</Link>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/StudentPortFolioIcon.svg`}
              alt="portfolio"
            />
            <Link to="./portpoliolist">수강생 포트폴리오</Link>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/JobmangerIcon.svg`}
              alt="jobManager"
            />
            <Link to="./jobmanagerlist">취업 담당자 안내</Link>
          </li>
        </ul>
        <div className="loguout-btn">
          로그아웃
          <img
            src={`${process.env.PUBLIC_URL}/assets/LogoutIcon.svg`}
            alt="logout"
          />
        </div>
      </div>
    </HeaderSty>
  );
};

export default BusinessHeader;
