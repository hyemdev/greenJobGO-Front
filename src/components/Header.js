import React from "react";
import { HeaderSty } from "../styles/HeaderStyle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
    // 헤더는 로그인 유형에 따라 다르게 나타남 (기업이면 business / 학생이면 student )
    <HeaderSty>
      <div className="business-header">
        <div>logo</div>
        <ul>
          <li>
            <Link to="../business"> 홈</Link>
          </li>
          <li>
            <Link to="./portpoliolist">수강생 포트폴리오</Link>
          </li>
          <li>
            <Link to="./jobmanager">취업 담당자 안내</Link>
          </li>
        </ul>
        <div>로그아웃</div>
      </div>
    </HeaderSty>
  );
};

export default Header;
