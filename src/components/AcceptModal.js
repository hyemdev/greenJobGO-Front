import { AcceptModalWrap, CancelModalWrap } from "../styles/AcceptModalStyle";

export const AcceptModal = ({ acceptOkModal, uploadResult, handleOk }) => {
  return (
    <>
      {acceptOkModal && (
        <AcceptModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span onClick={handleOk}>✖</span>
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

export const MainYnModal = ({
  mainYnModal,
  handleMainPofolOk,
  handleMainCancel,
  mainYn,
  mainCheck,
}) => {
  console.log(mainCheck);
  console.log(mainYn);
  return (
    <>
      {mainYnModal && (
        <AcceptModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span>✖</span>
              </div>
              {mainYn === 0 && mainCheck.length === 0 && (
                <div className="content">
                  <span>대표 포트폴리오로 등록 하시겠습니까?</span>
                </div>
              )}
              {mainYn === 1 && mainCheck.length === 1 && (
                <div className="content">
                  <span>대표 포트폴리오 등록을 취소 하시겠습니까?</span>
                </div>
              )}
              {mainYn === 0 && mainCheck.length === 1 && (
                <div className="content">
                  <span>이미 대표 포트폴리오가 등록 되어있습니다.</span>
                </div>
              )}
              <div className="btns">
                <button onClick={handleMainCancel}>취소</button>
                <button onClick={handleMainPofolOk}>확인</button>
              </div>
            </div>
          </div>
        </AcceptModalWrap>
      )}
    </>
  );
};

export const DeleteModal = ({
  deleteOkModal,
  handleDeleteOk,
  handleDeleteCancel,
}) => {
  return (
    <>
      {deleteOkModal && (
        <CancelModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span onClick={handleDeleteCancel}>✖</span>
              </div>
              <div className="content">
                <span>해당 항목을 삭제 하시겠습니까?</span>
              </div>
              <div className="btns">
                <button onClick={handleDeleteCancel}>취소</button>
                <button onClick={handleDeleteOk}>확인</button>
              </div>
            </div>
          </div>
        </CancelModalWrap>
      )}
    </>
  );
};
