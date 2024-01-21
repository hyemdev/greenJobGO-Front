import React from "react";
import { PortFolioAddWrap } from "../../../styles/AddPofolModalStyle";

const AddPofolModal = ({
  modalOpen,
  handleAddModalClose,
  fileType,
  setFileType,
  selectFile,
  setSelectFile,
  linkUrl,
  setLinkUrl,
  fileOneWord,
  setFileOneWord,
  linkOneWord,
  setLinkOneWord,
  handelFileAccept,
}) => {
  const handleDescriptionChange = e => {
    const inputText = e.target.value;

    const limitedText = inputText.slice(0, 150);
    if (fileType === 2) {
      setFileOneWord(limitedText);
    } else if (fileType === 3) {
      setLinkOneWord(limitedText);
    }
  };

  const handleSelectFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      setSelectFile(file);
    }
  };
  return (
    <PortFolioAddWrap>
      {modalOpen && (
        <div className="dim">
          <div className="add-modal-inner">
            <div className="add-modal-top">
              <div>
                <h2>포트폴리오 추가</h2>
              </div>
              <div>
                <span onClick={handleAddModalClose}>✖</span>
              </div>
            </div>
            <ul className="add-modal-btm">
              <li className="radio-box">
                <input
                  type="radio"
                  id="fileTypeFile"
                  name="fileType"
                  value={2}
                  checked={fileType === 2}
                  onChange={() => {
                    setFileType(2);
                  }}
                />
                <label htmlFor="fileTypeFile">파일추가</label>
                <input
                  type="radio"
                  id="fileTypeLink"
                  name="fileType"
                  value={3}
                  checked={fileType === 3}
                  onChange={() => setFileType(3)}
                />
                <label htmlFor="fileTypeLink">링크추가</label>
              </li>
              {fileType === 2 ? (
                <>
                  <li className="file-box">
                    <input
                      type="file"
                      id="file"
                      accept=".pdf"
                      onChange={handleSelectFileChange}
                    />
                    <label htmlFor="file">파일첨부</label>
                    <input
                      className="upload-name"
                      value={selectFile ? selectFile.name : "첨부파일"}
                      placeholder="PDF 첨부파일"
                      readOnly
                    />
                  </li>
                  <li>
                    <textarea
                      cols="30"
                      rows="5"
                      placeholder="포트폴리오 소개 내용을 작성해주세요.(최대 150자)"
                      value={fileOneWord}
                      onChange={handleDescriptionChange}
                    />
                  </li>
                  <li>
                    <span>
                      *포트폴리오 파일은 최대 5개까지 등록 가능하며, 한번에
                      1개의 파일만 등록 가능합니다.
                    </span>
                    <span>*파일 용량은 최대 50MB까지만 첨부 가능합니다.</span>
                  </li>
                </>
              ) : fileType === 3 ? (
                <>
                  <li className="file-box">
                    <input
                      className="upload-link"
                      placeholder="포트폴리오 링크주소를 입력해주세요."
                      value={linkUrl}
                      onChange={e => setLinkUrl(e.target.value)}
                    />
                  </li>
                  <li>
                    <textarea
                      cols="30"
                      rows="5"
                      placeholder="포트폴리오 소개 내용을 작성해주세요.(최대 150자)"
                      value={linkOneWord}
                      onChange={handleDescriptionChange}
                    />
                  </li>
                  <li>
                    <span>
                      *포트폴리오 링크는 최대 5개까지 등록 가능하며, 한번에
                      1개의 링크만 등록 가능합니다.
                    </span>
                  </li>
                </>
              ) : null}
              <li>
                <button onClick={() => handelFileAccept()}>등록</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </PortFolioAddWrap>
  );
};

export default AddPofolModal;
