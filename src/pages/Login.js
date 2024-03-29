import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLogin, postLogout } from "../api/client";
import { LoginInner, LoginWrap } from "../styles/LoginStyle";
import { useRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import OkModal from "../components/OkModal";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [authState, setAuthState] = useRecoilState(AuthStateAtom);

  // 로그인 오류 메세지 받아오는 state.
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorCancelInfo, setErrorCancelInfo] = useState("");

  const navigate = useNavigate();

  const handleLoginId = e => {
    setUserId(e.target.value);
  };

  const handleLoginPass = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!userId) {
      setErrorCancelInfo("아이디를 입력해 주세요.");
      return;
    } else if (!password) {
      setErrorCancelInfo("비밀번호를 입력해 주세요.");
      return;
    } else {
      try {
        const { role, accessToken, refreshToken, vo, accessTokenTime } =
          await fetchLogin(userId, password, setErrorCancelInfo);
        if (role === "ROLE_USER" && accessToken) {
          setAuthState({
            isLogin: true,
            role: role,
            accessToken: accessToken,
            editableYn: vo?.editableYn,
            portfolioYn: vo?.portfolioYn,
            aboutMeYn: vo?.aboutMeYn,
          });
          navigate("/student");
        } else if (role === "ROLE_COMPANY" && accessToken) {
          setAuthState({
            isLogin: true,
            role: role,
            accessToken: accessToken,
          });
          navigate("/business");

          setTimeout(() => {
            if (role === "ROLE_COMPANY") {
              postLogout(accessToken, refreshToken);
              setAuthState({
                isLogin: false,
                accessToken: null,
                role: "",
              });
              navigate("/");
            }
          }, accessTokenTime);
        } else {
          navigate("/");
        }
      } catch (error) {
        // console.log("errorrrrrrrr", error);
      }
    }
  };
  useEffect(() => {
    if (errorCancelInfo) {
      setErrorModalOpen(true);
    } else {
      setErrorModalOpen(false);
    }
  }, [errorCancelInfo]);

  return (
    <LoginWrap>
      <LoginInner>
        <li>
          <img src="../../assets/Login.png" alt="LoginImage" />
        </li>
        <li>
          <div className="login-title">
            <img src="../../assets/LoginTitle.png" alt="LoginTitle" />
          </div>
          <form>
            <div>
              <label htmlFor="login-id">아이디</label>
              <input
                type="text"
                id="login-id"
                placeholder="아이디를 입력해주세요."
                value={userId}
                onChange={e => handleLoginId(e)}
                autoComplete="username"
              />
            </div>
            <div>
              <label htmlFor="login-password">비밀번호</label>
              <input
                type="password"
                id="login-password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={e => handleLoginPass(e)}
                autoComplete="current-password"
              />
            </div>
            <div>
              <button onClick={handleSubmit}>로그인</button>
            </div>
          </form>
        </li>
      </LoginInner>
      {/* api 에러 확인모달 */}
      {errorModalOpen && (
        <OkModal
          header={""}
          open={errorModalOpen}
          close={() => {
            setErrorModalOpen(false), setErrorCancelInfo("");
          }}
          onConfirm={() => {
            setErrorModalOpen(false), setErrorCancelInfo("");
          }}
        >
          <span>{errorCancelInfo}</span>
        </OkModal>
      )}
    </LoginWrap>
  );
};
export default Login;
