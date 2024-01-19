import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import StudentHeader from "../../components/StudentHeader";
import { ContentWrap } from "../../styles/LayoutStyle";
import IndexModal from "../../components/IndexModal";
import StudentPrivacyProtect from "./StudentPrivacyProtect";
import ConfirmModal from "../../components/ConfirmModal";

const Student = () => {
  const [agreeModalOpen, setAgreeModalOpen] = useState(true);
  const [cautionModalOpen, setCautionModalOpen] = useState(false);
  const navigate = useNavigate();
  // 비동의 클릭
  const handleDisagree = () => {
    setCautionModalOpen(true);
  };
  const handleSubmitConfirm = () => {
    setCautionModalOpen(false);
    navigate("/");
  };
  return (
    <div>
      {/* 헤더 */}
      <StudentHeader />
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
          <StudentPrivacyProtect />
        </IndexModal>
      )}
      {/* 비동의 확인모달 */}
      {cautionModalOpen && (
        <ConfirmModal
          header={""}
          open={cautionModalOpen}
          close={() => {
            setCautionModalOpen(false), setAgreeModalOpen(true);
          }}
          onConfirm={handleSubmitConfirm}
          onCancel={() => {
            setCautionModalOpen(false), setAgreeModalOpen(true);
          }}
        >
          <span>동의를 하지 않는 경우 해당 사이트를 이용할 수 없습니다.</span>
        </ConfirmModal>
      )}
    </div>
  );
};

export default Student;
