import React, { useEffect, useState } from "react";
import { HeaderSty, MobileHeaderSty } from "../styles/HeaderStyle";
import { Link, useNavigate } from "react-router-dom";
import { postLogout } from "../api/client";
import { useRecoilState, useResetRecoilState, RecoilEnv, atom } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { AgreeStudentModalAtom } from "../pages/studentPages/Student";
import {
  faBuilding,
  faFileLines,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { recoilPersist } from "recoil-persist";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const StudentHeader = () => {
  const [authState, setAuthState] = useRecoilState(AuthStateAtom);
  const [select, setSelect] = useState("myportfolio");
  const navigate = useNavigate();

  const ResetStdAgreeRecoil = useResetRecoilState(AgreeStudentModalAtom);

  const menus = [
    {
      ibt: "a1",
      type: "myportfolio",
      title: "나의 포트폴리오 관리",
      icon: <FontAwesomeIcon icon={faFileLines} />,
    },
    {
      ibt: "a2",
      type: "mypage",
      title: "마이페이지",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      ibt: "a3",
      type: "connectcompany",
      title: "협약 기업",
      icon: <FontAwesomeIcon icon={faBuilding} />,
    },
  ];

  const handleLogout = () => {
    ResetStdAgreeRecoil();
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
