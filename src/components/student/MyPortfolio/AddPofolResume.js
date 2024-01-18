import React from "react";
import { AddPofolResumeWrap } from "../../../styles/AddPortfolioStyle";

const AddPofolResume = () => {
  return (
    <AddPofolResumeWrap>
      <div>
        <h2>이력서 및 자기 소개서 첨부</h2>
      </div>
      <div>
        <span>한 줄 소개</span>
        <div className="oneword">
          <input
            type="text"
            placeholder="나를 소개하는 문구를 작성해주세요.(최대 50자)"
          />
          <p>내용을 입력해 주세요.</p>
        </div>
      </div>
      <div>
        <span>이력서 및 자기소개서</span>
        <div className="file-box">
          <input
            type="file"
            id="file"
            accept=".pdf"
            // onChange={handleFileChange}
          />
          <label htmlFor="file">파일첨부</label>
          <input
            className="upload-name"
            // value={selectedFile ? selectedFile.name : "첨부파일"}
            placeholder="첨부파일"
            readOnly
          />
        </div>
        <p>*이력서 및 자기소개서를 하나의 PDF 파일로 통합하여 첨부해 주세요.</p>
        <p>*파일 용량은 최대 50MB까지만 첨부 가능합니다.</p>
      </div>
    </AddPofolResumeWrap>
  );
};

export default AddPofolResume;
