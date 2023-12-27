import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Student = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Student;
