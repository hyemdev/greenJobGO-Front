import React, { useEffect, useState } from "react";
import { HeaderSty } from "../styles/HeaderStyle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { postLogout } from "../api/client";
import { useRecoilState, useResetRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { AgreeStudentModalAtom } from "../pages/studentPages/Student";
import {
  faBuilding,
  faFileLines,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OkModal from "./OkModal";
import ConfirmModal from "./ConfirmModal";

const StudentHeader = () => {
  const [authState, setAuthState] = useRecoilState(AuthStateAtom);
  const [select, setSelect] = useState("myportfolio");
  const navigate = useNavigate();

  const ResetStdAgreeRecoil = useResetRecoilState(AgreeStudentModalAtom);

  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

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
    setLogoutModalOpen(true);
  };
  const handleLogoutConfirm = () => {
    try {
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
    } catch (error) {
      setErrorApiInfo("로그아웃이 정상적으로 처리되지 않았습니다.");
    }
  };

  const handleLogoClick = () => {
    setSelect("myportfolio");
  };
  const handleColor = e => {
    setSelect(e);
  };
  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("mypage")) {
      setSelect("mypage");
    } else if (pathname.includes("connectcompany")) {
      setSelect("connectcompany");
    } else {
      setSelect("myportfolio");
    }
  }, [pathname]);

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
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <OkModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false);
            setErrorApiInfo("");
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false);
            setErrorApiInfo("");
          }}
        >
          <span>{errorApiInfo}</span>
        </OkModal>
      )}
      {/* 로그아웃모달 */}
      {logoutModalOpen && (
        <ConfirmModal
          open={logoutModalOpen}
          close={() => {
            setLogoutModalOpen(false);
          }}
          onConfirm={handleLogoutConfirm}
          onCancel={() => {
            setLogoutModalOpen(false);
          }}
        >
          <span>로그아웃 하시겠습니까?</span>
        </ConfirmModal>
      )}
    </>
  );
};

export default StudentHeader;
