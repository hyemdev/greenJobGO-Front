import React, { useEffect, useState } from "react";
import {
  deleteFile,
  patchMainPortfolioSeleted,
  postFileUpload,
  postThumbNailUpload,
} from "../../api/addFileAxios";
import { AddPortfolioWrap } from "../../styles/AddPortfolioStyle";
import AddPofolPofol from "../../components/student/MyPortfolio/AddPofolPofol";
import AddPofolModal from "../../components/student/MyPortfolio/AddPofolModal";
import {
  AcceptModal,
  DeleteModal,
  MainYnModal,
} from "../../components/AcceptModal";
import { getStudentInfo } from "../../api/studentAxios";
import { useNavigate } from "react-router";
import OkModal from "../../components/OkModal";

const AddPortFolio = () => {
  // 오류 메세지 받아오는 state.
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  const [fileType, setFileType] = useState(2);
  const [selectFile, setSelectFile] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [fileOneWord, setFileOneWord] = useState("");
  const [linkOneWord, setLinkOneWord] = useState("");
  const [uploadResult, setUploadResult] = useState("");
  const [mainYn, setMainYn] = useState(0);
  const [file, setFile] = useState("");
  const [std, setStd] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [mainYnModal, setMainYnModal] = useState(false);
  const [deleteOkModal, setDeleteOkModal] = useState(false);
  const [mainCheck, setMainCheck] = useState("");
  const [ifile, setIfile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    const { std, file } = await getStudentInfo(setErrorInfo);
    setFile(file);
    setStd(std);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const istudent = std?.istudent;

  // 파일 이름 표시
  const handleImgFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
    }
  };

  // 포트폴리오 파일 업로드
  const handleFileUpload = async () => {
    setIsLoading(true);
    let formData = new FormData();
    formData.append("file", selectFile);
    try {
      const result = await postFileUpload(
        istudent,
        fileType,
        linkUrl,
        fileOneWord,
        linkOneWord,
        formData,
        setErrorInfo,
      );

      setIsLoading(false);

      if (result.success === true) {
        setModalOpen(false);
        setFileOneWord("");
        setLinkOneWord("");
        setLinkUrl("");
        setSelectFile("");
        fetchData();
      }
    } catch (error) {
      // setAcceptOkModal(true);
    }
  };

  // 포폴 대표이미지 업로드
  const handleThumbNailUpload = async e => {
    let formData = new FormData();
    formData.append("file", imgFile);
    try {
      const result = await postThumbNailUpload(
        istudent,
        formData,
        setErrorInfo,
      );
      fetchData();
    } catch (error) {
      // setAcceptOkModal(true);
    }
  };

  // 파일 삭제 모달
  const handleDeleteFile = ifile => {
    if (ifile) {
      setIfile(ifile);
      setDeleteOkModal(true);
      fetchData();
    } else {
      setErrorInfo("삭제할 파일이 없습니다.");
    }
  };

  const handleAddModalOpen = () => {
    setModalOpen(true);
  };

  const handleAddModalClose = () => {
    setModalOpen(false);
  };

  const handleOk = () => {
    setAcceptOkModal(false);
    fetchData();
  };

  const handleMainPofolOk = async () => {
    await patchMainPortfolioSeleted(istudent, mainCheck, mainYn, setErrorInfo);
    setMainYnModal(false);
    fetchData();
  };

  const handleMainCancel = () => {
    setMainYnModal(false);
  };

  // 대표 포트폴리오 선택 체크박스
  const handleCheckboxChange = (e, ifile) => {
    if (e.target.checked) {
      setMainCheck([ifile]);
      setMainYn(0);
      setMainYnModal(true);
    } else {
      setMainCheck([ifile]);
      setMainYn(1);
      setMainYnModal(true);
    }
    fetchData();
  };

  // 파일 삭제
  const handleDeleteOk = async () => {
    const istudent = std.istudent;
    try {
      const result = await deleteFile(istudent, ifile, setErrorInfo);
      setDeleteOkModal(false);
      setIfile("");
      fetchData();
    } catch (error) {
      // console.log(error);
    }

  };

  const handleDeleteCancel = () => {
    setDeleteOkModal(false);
  };

  const handleHomeMove = () => {
    navigate("/student/myportfolio");
  };

  useEffect(() => {
    if (errorInfo) {
      setErrorModalOpen(true);
    } else {
      setErrorModalOpen(false);
    }
  }, [errorInfo]);

  useEffect(() => {
    fetchData();
  }, []);
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
          handleFileUpload={handleFileUpload}
          isLoading={isLoading}
        />
      )}
      {acceptOkModal && (
        <AcceptModal
          acceptOkModal={acceptOkModal}
          uploadResult={uploadResult}
          handleOk={handleOk}
        />
      )}
      {mainYnModal && (
        <MainYnModal
          mainYnModal={mainYnModal}
          handleMainPofolOk={handleMainPofolOk}
          handleMainCancel={handleMainCancel}
          mainYn={mainYn}
          mainCheck={mainCheck}
        />
      )}
      {deleteOkModal && (
        <DeleteModal
          deleteOkModal={deleteOkModal}
          handleDeleteOk={handleDeleteOk}
          handleDeleteCancel={handleDeleteCancel}
        />
      )}
      <div className="addpofol-title">
        <h2>포트폴리오 등록</h2>
      </div>
      <div className="addpofol-content">
        <AddPofolPofol
          std={std}
          file={file}
          handleAddModalOpen={handleAddModalOpen}
          imgFile={imgFile}
          handleImgFileChange={handleImgFileChange}
          handleThumbNailUpload={handleThumbNailUpload}
          handleDeleteFile={handleDeleteFile}
          handleCheckboxChange={handleCheckboxChange}
          isLoading={isLoading}
        />
      </div>
      <div className="addpofol-buttons">
        <button onClick={handleHomeMove}>메인으로 돌아가기</button>
      </div>
      {/* api 에러 확인모달 */}
      {errorModalOpen && (
        <OkModal
          header={""}
          open={errorModalOpen}
          close={() => {
            setErrorModalOpen(false), setErrorInfo("");
          }}
          onConfirm={() => {
            setErrorModalOpen(false), setErrorInfo("");
          }}
        >
          <span>{errorInfo}</span>
        </OkModal>
      )}
    </AddPortfolioWrap>
  );
};

export default AddPortFolio;
