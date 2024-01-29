import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BusinessHeader from "../../components/BusinessHeader";
import { ContentWrap, LayoutStyle } from "../../styles/LayoutStyle";
import BusinessPrivacyProtect from "./BusinessPrivacyProtect";
import IndexModal from "../../components/IndexModal";
import { atom, selector, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { postLogout } from "../../api/client";
import { v4 } from "uuid";
import ConfirmModal from "../../components/ConfirmModal";
import { useMediaQuery } from "react-responsive";
const { persistAtom } = recoilPersist();

export const AgreeModalAtom = atom({
  // key: `AgreeModalAtom/${v4()}`,
  key: `AgreeModalAtom`,
  default: { isBizAgree: false },
  effects_UNSTABLE: [persistAtom],
});

const Business = () => {
  const [agreeModalOpen, setAgreeModalOpen] = useState(true);
  const [cautionModalOpen, setCautionModalOpen] = useState(false);
  const [clickAgree, setClickAgree] = useRecoilState(AgreeModalAtom);
  const isMobileDevice = useMediaQuery({ query: "(max-width: 767px)" });

  const navigate = useNavigate();

  // 비동의 클릭
  const handleDisagree = async () => {
    setCautionModalOpen(true);
  };

  // 비동의 유무 재확인
  const handleDisagreeConfirm = async () => {
    setCautionModalOpen(false);
    setClickAgree({ isBizAgree: false });
    try {
      await postLogout();
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    if (isMobileDevice) {
      navigate("/business/portpoliolist");
      setClickAgree({ isBizAgree: true });
    } else {
      navigate("/business");
    }
  }, [isMobileDevice]);

  return (
    <LayoutStyle>
      {/* 헤더 */}
      <BusinessHeader />
      {/* 컨텐츠 */}
      <ContentWrap>
        <Outlet />
      </ContentWrap>
      {/* 개인정보동의 모달 */}
      {!clickAgree.isBizAgree && (
        <IndexModal
          close={handleDisagree}
          open={agreeModalOpen}
          onConfirm={() => {
            setClickAgree({ isBizAgree: true }), setAgreeModalOpen(false);
          }}
          onCancel={handleDisagree}
        >
          <BusinessPrivacyProtect />
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
    </LayoutStyle>
  );
};

export default Business;
