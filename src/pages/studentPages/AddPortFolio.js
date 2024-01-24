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
import { useRecoilValueLoadable } from "recoil";
import { userInfo } from "../../recoil/selectors/UserInfoSelector";
import { PostModal } from "../../components/AcceptModal";
import { FadeLoader } from "react-spinners";
import { getStudentInfo } from "../../api/studentAxios";
const AddPortFolio = () => {
  const [fileType, setFileType] = useState(2);
  const [selectFile, setSelectFile] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [fileOneWord, setFileOneWord] = useState("");
  const [linkOneWord, setLinkOneWord] = useState("");
  const [mainYn, setMainYn] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [file, setFile] = useState([]);
  const [std, setStd] = useState([]);
  const userData = useRecoilValueLoadable(userInfo);
  const [mainCheck, setMainCheck] = useState("");

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

  const handleFileUpload = () => {
    const istudent = std;
    let formData = new FormData();
    formData.append("file", selectFile);
    postFileUpload(
      istudent,
      fileType,
      linkUrl,
      fileOneWord,
      linkOneWord,
      formData,
    );
    setModalOpen(false);
    fetchData();
  };

  const handleThumbNailUpload = () => {
    const istudent = std;
    let formData = new FormData();
    formData.append("file", imgFile);
    postThumbNailUpload(istudent, formData);
    fetchData();
  };

  const handleDeleteFile = ifile => {
    const istudent = std;
    deleteFile(istudent, ifile);
    fetchData();
  };
  const handleAddModalOpen = () => {
    setModalOpen(true);
  };

  const handleAddModalClose = () => {
    setModalOpen(false);
  };

  const handleOk = () => {
    const istudent = std;
    patchMainPortfolioSeleted(istudent, mainCheck, mainYn);
    setAcceptOkModal(false);
    fetchData();
  };
  const handleCancel = () => {
    setAcceptOkModal(false);
  };
  const handleCheckboxChange = (e, ifile) => {
    if (e.target.checked) {
      setMainCheck([ifile]);
      setMainYn(0);
      setAcceptOkModal(true);
      console.log(mainCheck);
    } else {
      setMainCheck([ifile]);
      setMainYn(1);
      setAcceptOkModal(true);
      console.log(mainCheck);
    }
    fetchData();
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
          handleFileUpload={handleFileUpload}
        />
      )}
      {acceptOkModal && (
        <PostModal
          acceptOkModal={acceptOkModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          mainYn={mainYn}
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
        <button>취소</button>
        <button>등록</button>
      </div>
    </AddPortfolioWrap>
  );
};

export default AddPortFolio;
