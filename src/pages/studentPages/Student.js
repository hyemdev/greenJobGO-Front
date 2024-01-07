import React from "react";
import { Outlet } from "react-router-dom";
import StudentHeader from "../../components/StudentHeader";
import { ContentWrap } from "../../styles/LayoutStyle";

const Student = () => {
  return (
    <div>
      {/* 헤더 */}
      <StudentHeader />
      {/* 컨텐츠 */}
        <ContentWrap>
          <Outlet />
        </ContentWrap>
    </div>
  );
};

export default Student;
