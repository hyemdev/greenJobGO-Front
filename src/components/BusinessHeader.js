import React, { useState } from "react";
import { HeaderSty } from "../styles/HeaderStyle";
import { Link, useNavigate } from "react-router-dom";
import { postLogout } from "../api/client";
import { useRecoilState, useResetRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { ReactComponent as StudentPortFolioIcon } from "../assets/StudentPortFolioIcon.svg";
import { ReactComponent as JobmangerIcon } from "../assets/JobmangerIcon.svg";
import { ReactComponent as HomeBtn } from "../assets/HomeBtn.svg";
import { AgreeModalAtom } from "../pages/businessPages/Business";
import { useMediaQuery } from "react-responsive";
import { BusinessPageAtom } from "../pages/businessPages/PortfolioList";

const BusinessHeader = () => {
  const [authState, setAuthState] = useRecoilState(AuthStateAtom);
  const [select, setSelect] = useState("businessintro");
  const navigate = useNavigate();

  // 반응형 state
  const isMobileDevice = useMediaQuery({ query: "(max-width: 767px)" });

  const ResetBizAgreeRecoil = useResetRecoilState(AgreeModalAtom);
  const ResetStudentPageRecoil = useResetRecoilState(BusinessPageAtom);

  const menus = [
    {
      ibt: "b1",
      type: "businessintro",
      title: "홈",
      icon: <HomeBtn />,
    },
    {
      ibt: "b2",
      type: "portpoliolist",
      title: "수강생 포트폴리오",
      icon: <StudentPortFolioIcon />,
    },
    {
      ibt: "b3",
      type: "jobmanagerlist",
      title: "취업 담당자 안내",
      icon: <JobmangerIcon />,
    },
  ];

  const handleLogout = () => {
    ResetBizAgreeRecoil();
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
    setSelect("businessintro");
  };
  const handleColor = e => {
    setSelect(e);
    ResetStudentPageRecoil();
  };

  return (
    <>
      <HeaderSty>
        <div className="business-header">
          <div className="upper-logo-div" onClick={handleLogoClick}>
            {isMobileDevice ? (
              <img
                src={`${process.env.PUBLIC_URL}/assets/LoginTitle.png`}
                alt="greenlogo"
              />
            ) : (
              <Link to="/business">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/LoginTitle.png`}
                  alt="greenlogo"
                />
              </Link>
            )}
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

export default BusinessHeader;
