import React, { useEffect, useState } from "react";
import {
  deleteFile,
  postFileUpload,
  postMainPortfolioSeleted,
  postThumbNailUpload,
} from "../../api/addFileAxios";
import { AddPortfolioWrap } from "../../styles/AddPortfolioStyle";
import AddPofolPofol from "../../components/student/MyPortfolio/AddPofolPofol";
import AddPofolModal from "../../components/student/MyPortfolio/AddPofolModal";
import { useRecoilValueLoadable } from "recoil";
import { userInfo } from "../../recoil/selectors/UserInfoSelector";
import { PostModal } from "../../components/AcceptModal";
const AddPortFolio = () => {
  const [fileType, setFileType] = useState(2);
  const [selectFile, setSelectFile] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [fileOneWord, setFileOneWord] = useState("");
  const [linkOneWord, setLinkOneWord] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [fileData, setFileData] = useState([]);
  const userData = useRecoilValueLoadable(userInfo);
  const [mainCheck, setMainCheck] = useState("");

  const std =
    userData.state === "hasValue" ? userData.contents.std.istudent : null;

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
  };

  const handleThumbNailUpload = () => {
    const istudent = std;
    console.log("is클릭?");
    let formData = new FormData();
    formData.append("file", imgFile);
    console.log("is클릭?", formData);
    postThumbNailUpload(istudent, formData);
    console.log("전송");
  };
  const handleDeleteFile = ifile => {
    const istudent = std;
    deleteFile(istudent, ifile);
  };
  const handleAddModalOpen = () => {
    setModalOpen(true);
  };

  const handleAddModalClose = () => {
    setModalOpen(false);
  };

  const handleOk = () => {
    const istudent = std;
    postMainPortfolioSeleted(istudent, mainCheck);
    setAcceptOkModal(false);
  };

  const handleCheckboxChange = (checked, ifile) => {
    if (checked) {
      setMainCheck([ifile]);
      setAcceptOkModal(true);
      console.log(mainCheck);
    } else if (!checked) {
      setMainCheck([]);
      console.log(mainCheck);
    }
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
        <PostModal acceptOkModal={acceptOkModal} handleOk={handleOk} />
      )}
      <div className="addpofol-title">
        <h2>포트폴리오 등록</h2>
      </div>
      <div className="addpofol-content">
        <AddPofolPofol
          handleAddModalOpen={handleAddModalOpen}
          imgFile={imgFile}
          handleImgFileChange={handleImgFileChange}
          fileData={fileData}
          handleThumbNailUpload={handleThumbNailUpload}
          handleDeleteFile={handleDeleteFile}
          mainCheck={mainCheck}
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
