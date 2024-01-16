import React from "react";
import { Outlet } from "react-router-dom";
import BusinessHeader from "../../components/BusinessHeader";
import { ContentWrap, LayoutStyle } from "../../styles/LayoutStyle";

const Business = () => {
  return (
    <LayoutStyle>
      {/* 헤더 */}
      <BusinessHeader />
      {/* 컨텐츠 */}
      <ContentWrap>
        <Outlet />
      </ContentWrap>
    </LayoutStyle>
  );
};

export default Business;
