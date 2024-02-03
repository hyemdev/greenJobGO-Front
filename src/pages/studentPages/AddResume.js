import React, { useEffect, useState } from "react";
import {
  AddResumeBaseInfo,
  AddResumeItem,
  AddResumeWrap,
} from "../../styles/AddResumeStyle";
import {
  deleteCertificate,
  deleteFile,
  postResumeUpload,
  postcertificate,
} from "../../api/addFileAxios";
import { useNavigate } from "react-router";
import { AcceptModal, DeleteModal } from "../../components/AcceptModal";
import { getStudentInfo } from "../../api/studentAxios";
import HashTag from "../../components/student/MyPortfolio/HashTag";
import OkModal from "../../components/OkModal";

const AddResume = () => {
  // api 오류 메세지 받아오는 state.
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  const [std, setStd] = useState("");
  const [file, setFile] = useState("");
  const [hashTag, setHashTag] = useState("");
  const [hashSave, setHashSave] = useState([]);
  // const [certificate, setCertificate] = useState("");
  const [resumeFile, setResumeFile] = useState("");
  const [resumeOneWord, setResumeOneWord] = useState("");
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [deleteOkModal, setDeleteOkModal] = useState(false);
  const [uploadResult, setUploadResult] = useState("");

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { std, file } = await getStudentInfo(setErrorInfo);
      setHashSave(std.certificates);
      setStd(std);
      setFile(file);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("get:", std);
  console.log("get:", file);

  const istudent = std?.istudent;

  const handleResumeFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      setResumeFile(file);
    }
  };

  const handleResumeUpload = async () => {
    const formData = new FormData();
    formData.append("file", resumeFile);

    try {
      const result = await postResumeUpload(
        formData,
        istudent,
        resumeOneWord,
        setErrorInfo,
      );

      setUploadResult(result);

      if (result.success === true) {
        setAcceptOkModal(true);
      }
    } catch (error) {
      setAcceptOkModal(true);
    }
  };

  const handleDeleteFile = () => {
    setDeleteOkModal(true);
  };

  const handleCancle = () => {
    navigate("/student/myportfolio");
  };

  const handleOk = () => {
    setAcceptOkModal(false);
    navigate("/student/myportfolio");
  };

  const handleDeleteOk = async () => {
    const ifile = file?.resume?.ifile;
    await deleteFile(istudent, ifile, setErrorInfo);
    setDeleteOkModal(false);
    fetchData();
  };

  const handleRemoveHashTag = async icertificate => {
    await deleteCertificate(istudent, icertificate);
    fetchData();
  };

  const handleDeleteCancel = () => {
    setDeleteOkModal(false);
  };

  const handleAddHashTag = async e => {
    const command = ["Comma", "Enter", "NumpadEnter"];
    if (!command.includes(e.code)) return;

    const inputValue = e.target.value?.trim();

    if (!inputValue || inputValue === "") {
      setHashTag("");
      return;
    }

    let newHashTag = inputValue;

    const regExp = /[{}[\].;:|)*~`!^_+<>@#$%&\\=('"]/g;

    if (regExp.test(newHashTag)) {
      newHashTag = newHashTag.replace(regExp, "");
    }

    if (newHashTag.includes(",")) {
      newHashTag = newHashTag.split(",").join("");
    }

    if (newHashTag === "") return;

    if (hashSave.length >= 9) {
      setHashTag("");
      return;
    }

    if (!hashSave.includes(newHashTag)) {
      try {
        setHashSave(prevHashTags => [...prevHashTags, newHashTag]);
        await postcertificate(istudent, newHashTag);
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }

    setHashTag("");
  };

  const handleKeyDown = e => {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") return;
    e.preventDefault();

    const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
    if (!regExp.test(e.currentTarget.value)) {
      setHashTag("");
    }
  };

  const handleHashChange = e => {
    setHashTag(e.target.value);
  };

  useEffect(() => {
    if (errorInfo) {
      setErrorModalOpen(true);
    } else {
      setErrorModalOpen(false);
    }
  }, [errorInfo]);

  return (
    <AddResumeWrap>
      {acceptOkModal && (
        <AcceptModal
          acceptOkModal={acceptOkModal}
          uploadResult={uploadResult}
          handleOk={handleOk}
        />
      )}
      {deleteOkModal && (
        <DeleteModal
          deleteOkModal={deleteOkModal}
          handleDeleteOk={handleDeleteOk}
          handleDeleteCancel={handleDeleteCancel}
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
                <span className="name">{std?.name}</span>
                <span className="age">
                  {std?.gender} {std?.birthday} (만 {std?.age}세)
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
                <div>
                  <span>자격증</span>
                  <HashTag
                    hashTag={hashTag}
                    hashSave={hashSave}
                    handleAddHashTag={handleAddHashTag}
                    handleRemoveHashTag={handleRemoveHashTag}
                    handleHashChange={handleHashChange}
                    handleKeyDown={handleKeyDown}
                  />
                </div>
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
                value={
                  file?.resume?.ifile ? std?.introducedLine : resumeOneWord
                }
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
                value={
                  file?.resume?.ifile
                    ? file?.resume?.resume
                    : resumeFile
                      ? resumeFile.name
                      : "첨부파일"
                }
                readOnly
              />
              <div>
                <button onClick={handleResumeUpload}>저장</button>
                <button onClick={handleDeleteFile}>삭제</button>
              </div>
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
      </div>
      {/* api 에러 확인모달 */}
      {errorModalOpen && (
        <OkModal
          header={""}
          open={errorModalOpen}
          close={() => {
            setErrorModalOpen(false);
            setErrorInfo("");
          }}
          onConfirm={() => {
            setErrorModalOpen(false);
            setErrorInfo("");
          }}
        >
          <span>{errorInfo}</span>
        </OkModal>
      )}
    </AddResumeWrap>
  );
};

export default AddResume;
