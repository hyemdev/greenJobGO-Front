import React from "react";
import { Outlet } from "react-router-dom";
import BusinessHeader from "../../components/BusinessHeader";
import { ContentWrap } from "../../styles/LayoutStyle";

const Business = () => {
  return (
    <div>
      {/* 헤더 */}
      <BusinessHeader />
      {/* 컨텐츠 */}
      <ContentWrap>
        <Outlet />
      </ContentWrap>
    </div>
  );
};

export default Business;
