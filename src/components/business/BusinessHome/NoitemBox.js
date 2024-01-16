import React from "react";
import { NoitemList } from "../../../styles/LayoutStyle";

const NoitemBox = () => {
  return (
    <NoitemList>
      <img src={`${process.env.PUBLIC_URL}/assets/noList.png`} alt="nolist" />
      <p>지정된 메인 포트폴리오가 없습니다.</p>
    </NoitemList>
  );
};

export default NoitemBox;
