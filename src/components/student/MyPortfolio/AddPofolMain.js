import React, { useState } from "react";
import {
  AddPortfolioContent,
  AddPortfolioWrap,
} from "../../../styles/AddPortfolioStyle";
import AddPofolPofol from "./AddPofolPofol";
import AddPofolResume from "./AddPofolResume";
import AddPofolModal from "./AddPofolModal";
import { ChangeAtom } from "../../../recoil/atoms/ChangeState";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { userInfo } from "../../../recoil/selectors/UserInfoSelector";

const AddPortfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [changeState, setChangeState] = useRecoilState(ChangeAtom);
  const userInfoData = useRecoilValueLoadable(userInfo);

  const std =
    userInfoData.state === "hasValue" ? userInfoData.contents.std : null;
    
  const handleAddModalOpen = () => {
    setModalOpen(true);
  };
  const handleAddModalClose = () => {
    setModalOpen(false);
  };
  const handleFileUpload = () => {
    setModalOpen(false);
  };
  console.log(changeState);
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
            {std && (
              <>
                <span className="name">{std.name}</span>
                <span className="age">
                  {std.gender} {std.birthday} (만 {std.age}세)
                </span>
              </>
            )}
          </div>
          <ul className="info">
            <li>
              <div>
                <span>과정명</span>
                <span> {std.subject && std.subject.subjectName}</span>
              </div>
              <div>
                <span>주소</span>
                <span> {std && std.address}</span>
              </div>
              <div>
                <span>Email</span>
                <span> {std && std.email}</span>
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
                <span>
                  {" "}
                  {std && std.startedAt} ~ {std && std.endedAt}
                </span>
              </div>
              <div>
                <span> 전화번호</span>
                <span> {std && std.mobileNumber}</span>
              </div>
              <div>
                <span>학력</span>
                <span> {std && std.education}</span>
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
        <button
          onClick={() => {
            setChangeState(true);
          }}
        >
          취소
        </button>
        <button>등록</button>
      </div>
    </AddPortfolioWrap>
  );
};

export default AddPortfolio;
