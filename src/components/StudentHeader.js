import React from "react";
import { HeaderSty } from "../styles/HeaderStyle";
import { Link } from "react-router-dom";

const StudentHeader = () => {
  return (
    <HeaderSty>
      <div className="student-header">
        <div className="upper-logo-div">
          <Link to="/student">
            <img
              src={`${process.env.PUBLIC_URL}/assets/LoginTitle.png`}
              alt="greenlogo"
            />
          </Link>
        </div>
        <ul>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/StudentPortFolioIcon.svg`}
              alt="studentPf"
            />
            <Link to="./myportfolio"> 나의 포트폴리오 관리</Link>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/JobmangerIcon.svg`}
              alt="mypage"
            />
            <Link to="./mypage">마이페이지</Link>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/EnterpriseIcon.svg`}
              alt="Enterprise"
            />
            <Link to="./connectcompany">협약 기업</Link>
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

export default StudentHeader;
