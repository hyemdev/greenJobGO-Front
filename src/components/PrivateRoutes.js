import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { useRecoilValue } from "recoil";

export const PrivateRoutes = ({ element }) => {
  const navigate = useNavigate();
  const { isLogin } = useRecoilValue(AuthStateAtom);

  console.log("isLogin 잘들어오니?", isLogin);
  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return isLogin ? element : null;
};
