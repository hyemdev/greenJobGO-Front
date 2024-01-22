import React, { useState } from "react";
import {
  AddResumeBaseInfo,
  AddResumeItem,
  AddResumeWrap,
} from "../../styles/AddResumeStyle";
import { useRecoilValueLoadable } from "recoil";
import { userInfo } from "../../recoil/selectors/UserInfoSelector";
import { postResumeUpload, postcertificate } from "../../api/addFileAxios";
import { useNavigate } from "react-router";
import { AcceptModal } from "../../components/AcceptModal";

const AddResume = () => {
  const [certificate, setCertificate] = useState([]);
  const [resumeFile, setResumeFile] = useState("");
  const [resumeOneWord, setResumeOneWord] = useState("");
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [uploadResult, setUploadResult] = useState("");
  const userInfoData = useRecoilValueLoadable(userInfo);
  const navigate = useNavigate();
  const std =
    userInfoData.state === "hasValue" && userInfoData.contents
      ? userInfoData.contents.std
      : null;
      
  console.log(certificate);
  console.log(resumeFile);
  console.log(resumeOneWord);
  const handleResumeFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      setResumeFile(file);
    }
  };

  const handleResumeUpload = async () => {
    const istudent = std.istudent;
    const formData = new FormData();
    formData.append("file", resumeFile);

    try {
      const result = await postResumeUpload(formData, istudent, resumeOneWord);

      setUploadResult(result);

      if (result.success === true) {
        setAcceptOkModal(true);
      }
    } catch (error) {
      setAcceptOkModal(true);
    }
  };
  const handleCertificateUpload = async () => {
    const istudent = std.istudent;

    try {
      const result = await postcertificate(istudent, certificate);

      setUploadResult(result);

      if (result.success === true) {
        setAcceptOkModal(true);
      }
    } catch (error) {
      setAcceptOkModal(true);
    }
  };
  const handleCancle = () => {
    navigate("/student/myportfolio");
  };

  const handleOk = () => {
    setAcceptOkModal(false);
    navigate("/student/myportfolio");
  };
  return (
    <AddResumeWrap>
      {acceptOkModal && (
        <AcceptModal
          acceptOkModal={acceptOkModal}
          uploadResult={uploadResult}
          handleOk={handleOk}
        />
      )}
      <div className="resume-title">
        <h2>이력서 등록</h2>
      </div>
      <AddResumeBaseInfo>
        <div className="baseinfo-inner">
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
                  value={certificate}
                  onChange={e => {
                    setCertificate(e.target.value);
                  }}
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
        </div>
      </AddResumeBaseInfo>
      <AddResumeItem>
        <div className="resumeitem-inner">
          <div>
            <h2>이력서 및 자기 소개서 첨부</h2>
          </div>
          <div>
            <span>한 줄 소개</span>
            <div className="oneword">
              <input
                type="text"
                value={resumeOneWord}
                onChange={e => {
                  setResumeOneWord(e.target.value);
                }}
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
                id="resumefile"
                accept=".pdf"
                onChange={handleResumeFileChange}
              />
              <label htmlFor="resumefile">파일첨부</label>
              <input
                className="upload-name"
                value={resumeFile ? resumeFile.name : "첨부파일"}
                placeholder="첨부파일"
                readOnly
              />
            </div>
            <p>
              *이력서 및 자기소개서를 하나의 PDF 파일로 통합하여 첨부해 주세요.
            </p>
            <p>*파일 용량은 최대 50MB까지만 첨부 가능합니다.</p>
          </div>
        </div>
      </AddResumeItem>
      <div className="resume-buttons">
        <button onClick={handleCancle}>취소</button>
        <button onClick={handleResumeUpload}>등록</button>
      </div>
    </AddResumeWrap>
  );
};

export default AddResume;