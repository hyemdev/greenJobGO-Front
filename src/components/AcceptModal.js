import { AcceptModalWrap, CancelModalWrap } from "../styles/AcceptModalStyle";

export const AcceptModal = ({ acceptOkModal, uploadResult, handleOk }) => {
  return (
    <>
      {acceptOkModal && (
        <AcceptModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span>✖</span>
              </div>
              <div className="content">
                <span>
                  {uploadResult
                    ? "등록이 완료되었습니다."
                    : "등록 실패 : 다시 시도해주세요."}
                </span>
              </div>
              <div className="btns">
                <button onClick={handleOk}>확인</button>
              </div>
            </div>
          </div>
        </AcceptModalWrap>
      )}
    </>
  );
};

export const PostModal = ({
  acceptOkModal,
  handleOk,
  handleCancel,
  mainYn,
}) => {
  return (
    <>
      {acceptOkModal && (
        <AcceptModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span>✖</span>
              </div>
              {mainYn === 0 ? (
                <div className="content">
                  <span>대표 포트폴리오로 등록하시겠습니까?</span>
                </div>
              ) : (
                <div className="content">
                  <span>대표 포트폴리오 등록을 취소하시겠습니까?</span>
                </div>
              )}

              <div className="btns">
                <button onClick={handleOk}>확인</button>
                <button onClick={handleCancel}>취소</button>
              </div>
            </div>
          </div>
        </AcceptModalWrap>
      )}
    </>
  );
};

export const CancelModal = ({
  deleteOkModalOpen,
  setDeleteOkModalOpen,
  handleDeleteCategory,
  categoryId,
  setEnrollModalOpen,
}) => {
  const handleOk = async () => {
    await handleDeleteCategory(categoryId);
    setDeleteOkModalOpen(false);
    setEnrollModalOpen(false);
  };

  const closeModal = () => {
    setDeleteOkModalOpen(false);
  };

  return (
    <>
      {deleteOkModalOpen && (
        <CancelModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span onClick={closeModal}>✖</span>
              </div>
              <div className="content">
                <span>해당 항목을 삭제 하시겠습니까?</span>
              </div>
              <div className="btns">
                <button onClick={closeModal}>취소</button>
                <button onClick={handleOk}>확인</button>
              </div>
            </div>
          </div>
        </CancelModalWrap>
      )}
    </>
  );
};
