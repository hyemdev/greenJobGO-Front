import React from "react";
import {
  ConfirmModalWarp,
  ModalCancelBtn,
  ModalOkBtn,
} from "../styles/GlobalStyle";

const ConfirmModal = ({
  header,
  open,
  close,
  onConfirm,
  onCancel,
  children,
}) => {
  const stopPropagation = e => {
    e.stopPropagation();
  };
  return (
    <ConfirmModalWarp onClick={close}>
      <div className={open ? "openConfirmModal Confimmodal" : "Confirmmodal"}>
        {open && (
          <div
            className="modalConfirm-wrapper"
            onClick={e => stopPropagation(e)}
          >
            {/* 헤더내용 */}
            <div className="modal-header">
              {header}
              <p className="close" onClick={close}>

              </p>
            </div>
            {/* 모달내용(컴포넌트 읽어오는부분) */}
            <div className="modalConfirm-content">
              {children}
              <div>
                <ModalCancelBtn onClick={onCancel}>취소</ModalCancelBtn>
                <ModalOkBtn onClick={onConfirm}>확인</ModalOkBtn>
              </div>
            </div>
          </div>
        )}
      </div>
    </ConfirmModalWarp>
  );
};

export default ConfirmModal;
