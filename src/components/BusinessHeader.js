import React, { useEffect, useState } from "react";
import { HeaderSty } from "../styles/HeaderStyle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { postLogout } from "../api/client";
import { useRecoilState, useResetRecoilState, atom, RecoilEnv } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { ReactComponent as HomeBtn } from "../assets/HomeBtn.svg";
import { AgreeModalAtom } from "../pages/businessPages/Business";
import { useMediaQuery } from "react-responsive";
import { BusinessPageAtom } from "../pages/businessPages/PortfolioList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faUser } from "@fortawesome/free-regular-svg-icons";
const { persistAtom } = recoilPersist();

import { recoilPersist } from "recoil-persist";
import ConfirmModal from "./ConfirmModal";
import OkModal from "./OkModal";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const HeaderFocusAtom = atom({
  key: `HeaderFocusAtom`,
  default: "businessintro",
  effects_UNSTABLE: [persistAtom],
});

const BusinessHeader = () => {
  const [authState, setAuthState] = useRecoilState(AuthStateAtom);
  const [select, setSelect] = useRecoilState(HeaderFocusAtom);

  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  // 반응형 state
  const isMobileDevice = useMediaQuery({ query: "(max-width: 767px)" });

  const ResetBizAgreeRecoil = useResetRecoilState(AgreeModalAtom);
  const ResetBusinessPageRecoil = useResetRecoilState(BusinessPageAtom);
  const ResetHeaderFocusRecoil = useResetRecoilState(HeaderFocusAtom);

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
      icon: <FontAwesomeIcon icon={faFileLines} />,
    },
    {
      ibt: "b3",
      type: "jobmanagerlist",
      title: "취업 담당자 안내",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
  ];

  const handleLogout = () => {
    setLogoutModalOpen(true);
  };
  const handleLogoutConfirm = () => {
    try {
      ResetBizAgreeRecoil();
      ResetBusinessPageRecoil();
      ResetHeaderFocusRecoil();
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
    setSelect("businessintro");
  };
  const handleColor = e => {
    setSelect(e);
    ResetBusinessPageRecoil();
  };

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);
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

export default BusinessHeader;
