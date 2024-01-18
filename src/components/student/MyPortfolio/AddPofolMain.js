import React, { useState } from "react";
import {
  AddPortfolioContent,
  AddPortfolioWrap,
} from "../../../styles/AddPortfolioStyle";
import AddPofolPofol from "./AddPofolPofol";
import AddPofolResume from "./AddPofolResume";
import AddPofolModal from "./AddPofolModal";

const AddPortfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddModalOpen = () => {
    setModalOpen(true);
  };
  const handleAddModalClose = () => {
    setModalOpen(false);
  };
  const handleFileUpload = () => {
    setModalOpen(false);
  };
  return (
    <AddPortfolioWrap>
      {modalOpen && (
        <AddPofolModal
          modalOpen={modalOpen}
          handleAddModalClose={handleAddModalClose}
          handleFileUpload={handleFileUpload}
        />
      )}
      <div>
        <h2>이력서 등록</h2>
      </div>
      <AddPortfolioContent>
        <li>
          <div>
            <h3>기본 정보</h3>
          </div>
          <div>
            <span className="name">김그린</span>
            <span className="age"> 여 1999년생 (만 25세)</span>
          </div>
          <ul className="info">
            <li>
              <div>
                <span>과정명</span>
                <span> UI/UX 반응형 디자인&퍼블리싱 과정</span>
              </div>
              <div>
                <span>주소</span>
                <span> 대구 중구</span>
              </div>
              <div>
                <span>Email</span>
                <span> TEST@NAVER.COM</span>
              </div>
              <div>
                <span>자격증 </span>
                <input
                  type="text"
                  placeholder="자격증을 입력해주세요. ex)정보처리기사, 운전면허 2종 보통"
                />
                <p>내용을 입력해 주세요.</p>
              </div>
            </li>
            <li>
              <div>
                <span>수강기간</span>
                <span> 2024-01-08 ~ 2024-01-31</span>
              </div>
              <div>
                <span> 전화번호</span>
                <span> 010-1234-1234</span>
              </div>
              <div>
                <span>학력</span>
                <span> 4년제 졸업</span>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <AddPofolResume />
        </li>
        <li>
          <AddPofolPofol handleAddModalOpen={handleAddModalOpen} />
        </li>
      </AddPortfolioContent>
      <div>
        <button>취소</button>
        <button>등록</button>
      </div>
    </AddPortfolioWrap>
  );
};

export default AddPortfolio;
