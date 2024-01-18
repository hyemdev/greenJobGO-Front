import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin } from "../api/client";
import { LoginInner, LoginWrap } from "../styles/LoginStyle";
import { useRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [authState, setAuthState] = useRecoilState(AuthStateAtom);

  const navigate = useNavigate();

  const handleLoginId = e => {
    setUserId(e.target.value);
    console.log(e.target.value);
  };

  const handleLoginPass = e => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { role, accessToken } = await fetchLogin(userId, password);

    if (role === "ROLE_USER" && accessToken) {
      setAuthState({
        isLogin: true,
        accessToken: accessToken,
        role: role,
      });
      navigate("/student");
    } else if (role === "ROLE_COMPANY" && accessToken) {
      setAuthState({
        isLogin: true,
        accessToken: accessToken,
        role: role,
      });
      navigate("/business");
    }

    console.log(authState.isLogin);
    console.log(authState.role);
  };

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
              />
            </div>
            <div>
              <button onClick={handleSubmit}>로그인</button>
            </div>
          </form>
        </li>
      </LoginInner>
    </LoginWrap>
  );
};
export default Login;
