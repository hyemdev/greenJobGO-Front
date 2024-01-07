import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      Login
      {/* 임시 접속 버튼 */}
      <Link to="/student">
        <button>수강생 접속</button>
      </Link>
      <Link to="/business">
        <button>기업 접속</button>
      </Link>
    </div>
  );
};
export default Login;
