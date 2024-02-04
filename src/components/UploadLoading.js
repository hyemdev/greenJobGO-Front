import React from "react";
import { HashLoader } from "react-spinners";
import { Maincolor } from "../styles/GlobalStyle";

const UploadLoading = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        top: "0",
        // width: "100vw",
        // height: "100vh",
        width: "782px",
        height: "494px",
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(2px)",
        zIndex: "9999",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
        }}
      >
        <HashLoader color="#228fcf" />
        <h3 style={{ color: `${Maincolor.white}` }}>잠시만 기다려주세요.</h3>
      </div>
    </div>
  );
};

export default UploadLoading;
