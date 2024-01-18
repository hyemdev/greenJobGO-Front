import { AcceptModalWrap, CancelModalWrap } from "../styles/AcceptModalStyle";

export const AcceptModal = ({
    acceptOkModal,
    setAcceptOkModal,
    uploadResult,
  }) => {
    const handleOk = () => {
      setAcceptOkModal(false);
    };
  
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
                      : "정상적으로 등록 되지 않았습니다."}
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