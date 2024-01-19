import React from "react";
import { ModalWarp } from "../styles/IndexAgreeStyle";
import { ModalCancelBtn, ModalOkBtn } from "../styles/GlobalStyle";

const IndexModal = ({ close, open, onConfirm, onCancel, children }) => {
  const stopPropagation = e => {
    e.stopPropagation();
  };
  return (
    <ModalWarp onClick={close}>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <div className="modal-wrapper" onClick={e => stopPropagation(e)}>
            {/* 모달내용(컴포넌트 읽어오는부분) */}
            <div className="modal-content">
              {children}
              <div className="btns">
                <ModalCancelBtn onClick={onCancel}>취소</ModalCancelBtn>
                <ModalOkBtn onClick={onConfirm}>확인</ModalOkBtn>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </ModalWarp>
  );
};

export default IndexModal;
