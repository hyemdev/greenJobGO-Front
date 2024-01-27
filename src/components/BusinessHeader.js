import React, { useEffect, useState } from "react";
import { HeaderSty, MobileHeaderSty } from "../styles/HeaderStyle";
import { Link, useNavigate } from "react-router-dom";
import { postLogout } from "../api/client";
import { useRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { ReactComponent as StudentPortFolioIcon } from "../assets/StudentPortFolioIcon.svg";
import { ReactComponent as JobmangerIcon } from "../assets/JobmangerIcon.svg";
import { ReactComponent as HomeBtn } from "../assets/HomeBtn.svg";

const BusinessHeader = () => {
  const [authState, setAuthState] = useRecoilState(AuthStateAtom);
  const [select, setSelect] = useState("businessintro");
  const navigate = useNavigate();

  // 반응형 state
  const [isMobile, setIsMobile] = useState("");

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
  };

  // 헤더 반응형
  const handleResize = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // unmount 시 실행되는 cleanup 함수
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      {isMobile ? (
        <MobileHeaderSty>
          <div className="business-header">
            <div className="upper-logo-div" onClick={handleLogoClick}>
              <Link to="/business">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/LoginTitle.png`}
                  alt="greenlogo"
                />
              </Link>
            </div>
            <div className="header-menu">
            <Link to={`./${menus[1].type}`}>
                    {menus[1].icon} {menus[1].title}
                  </Link>
            </div>
            {/* <div className="loguout-btn" onClick={handleLogout}>
              로그아웃
              <img
                src={`${process.env.PUBLIC_URL}/assets/LogoutIcon.svg`}
                alt="logout"
              />
            </div> */}
          </div>
        </MobileHeaderSty>
      ) : (
        <HeaderSty>
          <div className="business-header">
            <div className="upper-logo-div" onClick={handleLogoClick}>
              <Link to="/business">
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
      )}
    </>
  );
};

export default BusinessHeader;
