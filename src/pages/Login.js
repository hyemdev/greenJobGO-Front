import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin } from "../api/client";
import { LoginInner, LoginWrap } from "../styles/LoginStyle";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("ROLE_USER");
  const navigate = useNavigate();

  const handleLoginId = e => {
    setUserId(e.target.value);
  };

  const handleLoginPass = e => {
    setPassword(e.target.value);
  };

  const handleUserTypeChange = e => {
    setUserType(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const role = await fetchLogin(userId, password);
    if (role === "ROLE_USER") {
      navigate("/student");
    } else if (role === "ROLE_COMPANY") {
      navigate("/business");
    }
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
          <div className="login-radio">
            <input
              type="radio"
              id="student"
              name="role"
              value="ROLE_USER"
              checked={userType === "ROLE_USER"}
              onChange={handleUserTypeChange}
            />
            <label htmlFor="student">수강생 로그인</label>
            <input
              type="radio"
              id="company"
              name="role"
              value="ROLE_COMPANY"
              checked={userType === "ROLE_COMPANY"}
              onChange={handleUserTypeChange}
            />
            <label htmlFor="company">기업 로그인</label>
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
    // <div>
    //   Login
    //   {/* 임시 접속 버튼 */}
    //   <Link to="/student">
    //     <button>수강생 접속</button>
    //   </Link>
    //   <Link to="/business">
    //     <button>기업 접속</button>
    //   </Link>
    // </div>
  );
};
export default Login;
