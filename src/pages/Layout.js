import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";

const Layout = () => {
  return (
    <div>
      layout start
      {/* <Login /> */}
      <Outlet />
      layout end
    </div>
  );
};

export default Layout;
