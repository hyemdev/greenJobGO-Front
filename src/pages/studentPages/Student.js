import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import StudentHeader from "../../components/StudentHeader";
import { ContentWrap } from "../../styles/LayoutStyle";
import IndexModal from "../../components/IndexModal";
import StudentPrivacyProtect from "./StudentPrivacyProtect";
import ConfirmModal from "../../components/ConfirmModal";
import { recoilPersist } from "recoil-persist";
import { postLogout } from "../../api/client";
import { atom, useRecoilState, RecoilEnv } from "recoil";
const { persistAtom } = recoilPersist();

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const AgreeStudentModalAtom = atom({
  // key: `AgreeStudentModalAtom/${v4()}`,
  key: `AgreeStudentModalAtom`,
  default: { isStdAgree: false },
  effects_UNSTABLE: [persistAtom],
});

const Student = () => {
  const [agreeModalOpen, setAgreeModalOpen] = useState(true);
  const [cautionModalOpen, setCautionModalOpen] = useState(false);
  const [clickStudentAgree, setClickStudentAgree] = useRecoilState(
    AgreeStudentModalAtom,
  );

  const navigate = useNavigate();

  // 비동의 클릭
  const handleDisagree = async () => {
    setCautionModalOpen(true);
  };

  // 비동의 유무 재확인
  const handleDisagreeConfirm = async () => {
    setCautionModalOpen(false);
    setClickStudentAgree({ isStdAgree: false });
    try {
      await postLogout();
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
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
      {!clickStudentAgree.isStdAgree && (
        <IndexModal
          close={handleDisagree}
          open={agreeModalOpen}
          onConfirm={() => {
            setClickStudentAgree({ isStdAgree: true }),
              setAgreeModalOpen(false);
          }}
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
            setCautionModalOpen(false);
          }}
          onConfirm={handleDisagreeConfirm}
          onCancel={() => {
            setCautionModalOpen(false);
          }}
        >
          <span>동의를 하지 않는 경우 해당 사이트를 이용할 수 없습니다.</span>
        </ConfirmModal>
      )}
    </div>
  );
};

export default Student;
