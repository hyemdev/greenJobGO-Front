import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BusinessHeader from "../../components/BusinessHeader";
import { ContentWrap, LayoutStyle } from "../../styles/LayoutStyle";
import BusinessPrivacyProtect from "./BusinessPrivacyProtect";
import IndexModal from "../../components/IndexModal";

const Business = () => {
  const [agreeModalOpen, setAgreeModalOpen] = useState(true);
  const navigate = useNavigate();
  // 비동의 클릭
  const handleDisagree = () => {
    setAgreeModalOpen(false);
    navigate("/");
  };
  return (
    <LayoutStyle>
      {/* 헤더 */}
      <BusinessHeader />
      {/* 컨텐츠 */}
      <ContentWrap>
        <Outlet />
      </ContentWrap>
      {/* 개인정보동의 모달 */}
      {agreeModalOpen && (
        <IndexModal
          close={handleDisagree}
          open={agreeModalOpen}
          onConfirm={() => setAgreeModalOpen(false)}
          onCancel={handleDisagree}
        >
          <BusinessPrivacyProtect />
        </IndexModal>
      )}
    </LayoutStyle>
  );
};

export default Business;
