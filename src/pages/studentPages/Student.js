import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import StudentHeader from "../../components/StudentHeader";
import { ContentWrap } from "../../styles/LayoutStyle";
import IndexModal from "../../components/IndexModal";
import StudentPrivacyProtect from "./StudentPrivacyProtect";
import ConfirmModal from "../../components/ConfirmModal";
import { recoilPersist } from "recoil-persist";
import { postLogout } from "../../api/client";
import { atom, selector, useRecoilState } from "recoil";
import { v4 } from "uuid";
const { persistAtom } = recoilPersist();

export const AgreeStudentModalAtom = atom({
  // key: `AgreeStudentModalAtom${v4()}`,
  key: `AgreeStudentModalAtom`,
  default: { isAgree: false },
  effects_UNSTABLE: [persistAtom],
});
// 선택된 필터정보 읽자
// export const readStudentModalTF = selector({
//   key: `readStudentModalTF`,
//   // 값을 읽겠다
//   get: ({ get }) => {
//     const result = get(AgreeStudentModalAtom);
//     return result;
//   },
// });

const Student = () => {
  const [agreeModalOpen, setAgreeModalOpen] = useState(true);
  const [cautionModalOpen, setCautionModalOpen] = useState(false);
  const [clickStudentAgree, setClickStudentAgree] = useRecoilState(
    AgreeStudentModalAtom,
  );

  console.log("clickStudentAgree", clickStudentAgree.isAgree);
  const navigate = useNavigate();

  // 비동의 클릭
  const handleDisagree = () => {
    setCautionModalOpen(true);
  };

  // 비동의 유무 재확인
  const handleDisagreeConfirm = () => {
    setCautionModalOpen(false);
    setClickStudentAgree({ isAgree: false });
    postLogout();
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
      {!clickStudentAgree.isgree && (
        <IndexModal
          close={handleDisagree}
          open={agreeModalOpen}
          onConfirm={() => {
            setClickStudentAgree({ isAgree: true }), setAgreeModalOpen(false);
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
