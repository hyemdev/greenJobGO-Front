import React, { useState } from "react";
import {
  AddPortfolioContent,
  AddPortfolioWrap,
} from "../../styles/AddPortfolioStyle";
import AddPofolPofol from "../../components/student/MyPortfolio/AddPofolPofol";
import AddPofolResume from "../../components/student/MyPortfolio/AddPofolResume";
import { useRecoilValueLoadable } from "recoil";
import { userInfo } from "../../recoil/selectors/UserInfoSelector";
import AddPofolModal from "../../components/student/MyPortfolio/AddPofolModal";

const AddPortFolio = () => {
  const [fileType, setFileType] = useState(2);
  const [selectFile, setSelectFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [fileOneWord, setFileOneWord] = useState("");
  const [linkOneWord, setLinkOneWord] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const userInfoData = useRecoilValueLoadable(userInfo);
  const [fileData, setFileData] = useState([]);

  const std =
    userInfoData.state === "hasValue" ? userInfoData.contents.std : null;

  const handleResumeFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      setResumeFile(file);
    }
  };

  const handleImgFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      setImgFile(file);
    }
  };
  const handelFileAccept = () => {
    setModalOpen(false);
    setFileData(prevData => [
      ...prevData,
      {
        fileType,
        file: fileType === 2 ? selectFile.name : "",
        oneWord:
          fileType === 2 ? fileOneWord : fileType === 3 ? linkOneWord : "",
        fileLink: fileType === 3 ? linkUrl : "",
      },
    ]);
    // console.log(fileData);
  };
  const handleAddModalOpen = () => {
    setModalOpen(true);
  };

  const handleAddModalClose = () => {
    setModalOpen(false);
  };

  return (
    <AddPortfolioWrap>
      {modalOpen && (
        <AddPofolModal
          modalOpen={modalOpen}
          handleAddModalClose={handleAddModalClose}
          fileType={fileType}
          setFileType={setFileType}
          selectFile={selectFile}
          setSelectFile={setSelectFile}
          linkUrl={linkUrl}
          setLinkUrl={setLinkUrl}
          fileOneWord={fileOneWord}
          setFileOneWord={setFileOneWord}
          linkOneWord={linkOneWord}
          setLinkOneWord={setLinkOneWord}
          handelFileAccept={handelFileAccept}
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
                <span> {std?.subject?.subjectName}</span>
              </div>
              <div>
                <span>주소</span>
                <span> {std?.address}</span>
              </div>
              <div>
                <span>Email</span>
                <span> {std?.email}</span>
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
                  {std?.startedAt} ~ {std?.endedAt}
                </span>
              </div>
              <div>
                <span> 전화번호</span>
                <span> {std?.mobileNumber}</span>
              </div>
              <div>
                <span>학력</span>
                <span> {std?.education}</span>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <AddPofolResume
            handleResumeFileChange={handleResumeFileChange}
            resumeFile={resumeFile}
          />
        </li>
        <li>
          <AddPofolPofol
            handleAddModalOpen={handleAddModalOpen}
            imgFile={imgFile}
            handleImgFileChange={handleImgFileChange}
            fileData={fileData}
          />
        </li>
      </AddPortfolioContent>
      <div>
        <button>취소</button>
        <button>등록</button>
      </div>
    </AddPortfolioWrap>
  );
};

export default AddPortFolio;
