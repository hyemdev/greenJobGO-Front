import React, { useEffect, useState } from "react";
import { HeaderSty, MobileHeaderSty } from "../styles/HeaderStyle";
import { Link, useNavigate } from "react-router-dom";
import { postLogout } from "../api/client";
import { useRecoilState, useResetRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { ReactComponent as StudentPortFolioIcon } from "../assets/StudentPortFolioIcon.svg";
import { ReactComponent as JobmangerIcon } from "../assets/JobmangerIcon.svg";
import { ReactComponent as EnterpriseIcon } from "../assets/EnterpriseIcon.svg";
import { AgreeStudentModalAtom } from "../pages/studentPages/Student";

const StudentHeader = () => {
  const [authState, setAuthState] = useRecoilState(AuthStateAtom);
  const [select, setSelect] = useState("myportfolio");
  const navigate = useNavigate();

  const ResetStdAgreeRecoil = useResetRecoilState(AgreeStudentModalAtom);

  // 반응형 state
  const [isMobile, setIsMobile] = useState("");

  const menus = [
    {
      ibt: "a1",
      type: "myportfolio",
      title: "나의 포트폴리오 관리",
      icon: <StudentPortFolioIcon />,
    },
    {
      ibt: "a2",
      type: "mypage",
      title: "마이페이지",
      icon: <JobmangerIcon />,
    },
    {
      ibt: "a3",
      type: "connectcompany",
      title: "협약 기업",
      icon: <EnterpriseIcon />,
    },
  ];

  const handleLogout = () => {
    ResetStdAgreeRecoil()
    postLogout();

    setAuthState(prevAuthState => ({
      ...prevAuthState,
      isLogin: false,
      accessToken: null,
      role: "",
      id: "",
    }));
    navigate("/");
  };

  const handleLogoClick = () => {
    setSelect("myportfolio");
  };
  const handleColor = e => {
    setSelect(e);
  };

  

  return (
    <>
   
        <HeaderSty>
          <div className="student-header">
            <div className="upper-logo-div" onClick={handleLogoClick}>
              <Link to="/student">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/LoginTitle.png`}
                  alt="greenlogo"
                />
              </Link>
            </div>
            <ul className="header-menu">
              {menus.map(item => (
                <li
                  key={item.ibt}
                  onClick={() => handleColor(item.type)}
                  className={`${select === item.type ? "select" : ""}`}
                >
                  <Link to={`./${item.type}`}>
                    {item.icon} {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="loguout-btn" onClick={handleLogout}>
              로그아웃
              <img
                src={`${process.env.PUBLIC_URL}/assets/LogoutIcon.svg`}
                alt="logout"
              />
            </div>
          </div>
        </HeaderSty>
    </>
  );
};

export default StudentHeader;
