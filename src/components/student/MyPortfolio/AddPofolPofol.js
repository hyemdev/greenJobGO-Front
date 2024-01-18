import React from 'react'
import { AddPofolPofolWrap } from '../../../styles/AddPortfolioStyle'

const AddPofolPofol = () => {
  return (
    <AddPofolPofolWrap>
      <div>
        <h2>포트폴리오 첨부</h2>
      </div>
      <div>
        <span>포트폴리오 대표 이미지</span>
        <div className="file-box">
          <input
            type="file"
            id="file"
            accept=".jpg, png, jpeg, gif"
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
        <p>*본 이력서의 썸네일로 사용할 이미지를 첨부해 주세요.</p>
      </div>
    </AddPofolPofolWrap>
  )
}

export default AddPofolPofol