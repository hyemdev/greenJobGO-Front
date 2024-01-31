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
import { useRecoilValue } from "recoil";
import { userInfo } from "../../recoil/selectors/UserInfoSelector";
import {
  AcceptModal,
  DeleteModal,
  MainYnModal,
} from "../../components/AcceptModal";
import { getStudentInfo } from "../../api/studentAxios";
import { useNavigate } from "react-router";
import OkModal from "../../components/OkModal";

const AddPortFolio = () => {
  // 로그인 오류 메세지 받아오는 state.
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorCancelInfo, setErrorCancelInfo] = useState("");

  const [fileType, setFileType] = useState(2);
  const [selectFile, setSelectFile] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [fileOneWord, setFileOneWord] = useState("");
  const [linkOneWord, setLinkOneWord] = useState("");
  const [uploadResult, setUploadResult] = useState("");
  const [mainYn, setMainYn] = useState(0);
  const [file, setFile] = useState([]);
  const [std, setStd] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [mainYnModal, setMainYnModal] = useState(false);
  const [deleteOkModal, setDeleteOkModal] = useState(false);
  const [mainCheck, setMainCheck] = useState("");
  const [ifile, setIfile] = useState("");
  const userData = useRecoilValue(userInfo);
  const istudent = userData?.std?.istudent;
  const navigate = useNavigate();
  const fetchData = () => {
    getStudentInfo(setFile, setStd);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImgFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
    }
  };

  const handleFileUpload = async () => {
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
      );

      setUploadResult(result);

      if (result.success === true) {
        setModalOpen(false);
        setAcceptOkModal(true);
      }
    } catch (error) {
      setAcceptOkModal(true);
    }
  };

  const handleThumbNailUpload = async () => {
    let formData = new FormData();
    formData.append("file", imgFile);
    try {
      const result = await postThumbNailUpload(istudent, formData);

      setUploadResult(result);

      if (result.success === true) {
        setModalOpen(false);
        setAcceptOkModal(true);
      }
    } catch (error) {
      setAcceptOkModal(true);
    }
  };

  const handleDeleteFile = ifile => {
    if (ifile) {
      setIfile(ifile);
      setDeleteOkModal(true);
      fetchData();
    } else {
      setErrorCancelInfo("삭제할 파일이 없습니다.");
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

  const handleMainPofolOk = () => {
    patchMainPortfolioSeleted(istudent, mainCheck, mainYn);
    setMainYnModal(false);
    fetchData();
  };

  const handleMainCancel = () => {
    setMainYnModal(false);
  };

  const handleCheckboxChange = (e, ifile) => {
    if (e.target.checked) {
      setMainCheck([ifile]);
      setMainYn(0);
      setMainYnModal(true);
      console.log(mainCheck);
    } else {
      setMainCheck([ifile]);
      setMainYn(1);
      setMainYnModal(true);
      console.log(mainCheck);
    }
    fetchData();
  };

  const handleDeleteOk = async () => {
    const istudent = std.istudent;
    await deleteFile(istudent, ifile);
    setDeleteOkModal(false);
    fetchData();
  };

  const handleDeleteCancel = () => {
    setDeleteOkModal(false);
  };

  const handleHomeMove = () => {
    navigate("/student/myportfolio");
  };

  useEffect(() => {
    if (errorCancelInfo) {
      setErrorModalOpen(true);
    } else {
      setErrorModalOpen(false);
    }

  }, [errorCancelInfo]);
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
          file={file}
          handleAddModalOpen={handleAddModalOpen}
          imgFile={imgFile}
          handleImgFileChange={handleImgFileChange}
          handleThumbNailUpload={handleThumbNailUpload}
          handleDeleteFile={handleDeleteFile}
          handleCheckboxChange={handleCheckboxChange}
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
            setErrorModalOpen(false), setErrorCancelInfo("");
          }}
          onConfirm={() => {
            setErrorModalOpen(false), setErrorCancelInfo("");
          }}
        >
          <span>{errorCancelInfo}</span>
        </OkModal>
      )}
    </AddPortfolioWrap>
  );
};

export default AddPortFolio;
