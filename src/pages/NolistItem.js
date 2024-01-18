import React from "react";
import { NoitemList } from "../styles/LayoutStyle";
const NolistItem = () => {
  return (
    <NoitemList>
      <img src={`${process.env.PUBLIC_URL}/assets/noList.png`} alt="nolist" />
      <p>검색 결과가 없습니다.</p>
    </NoitemList>
  );
};

export default NolistItem;
