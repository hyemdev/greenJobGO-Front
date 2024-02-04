import React, { Suspense, useEffect, useState } from "react";
import NoResume from "../../components/student/MyPortfolio/NoResume";
import YesResume from "../../components/student/MyPortfolio/YesResume";
import {
  MyPortfolioButton,
  MyPortfolioContent,
  MyPortfolioTitle,
  MyPortfolioWrap,
} from "../../styles/MyPofolMgStyle";
import { useRecoilValue } from "recoil";
import { AuthStateAtom } from "../../recoil/atoms/AuthState";
import { useNavigate } from "react-router";
import { getStudentInfo } from "../../api/studentAxios";
import OkModal from "../../components/OkModal";
import Loading from "../../components/Loading";
const MyPortfolioMg = () => {
  // 오류 메세지 받아오는 state.
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  const authState = useRecoilValue(AuthStateAtom);
  const [std, setStd] = useState("");
  const [file, setFile] = useState("");
  const [resumeYn, setResumeYn] = useState("");
  const [pofolYn, setPofolYn] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { std, file, aboutMeYn, portfolioYn } =
        await getStudentInfo(setErrorInfo);
      setStd(std);
      setFile(file);
      setResumeYn(aboutMeYn);
      setPofolYn(portfolioYn);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResumeMove = () => {
    navigate("/student/addresume");
  };

  const handlePortfolioMove = () => {
    navigate("/student/addportfolio");
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (errorInfo) {
      setErrorModalOpen(true);
    } else {
      setErrorModalOpen(false);
    }
  }, [errorInfo]);
  return (
    <MyPortfolioWrap>
      <ul>
        <MyPortfolioTitle>
          <h2>나의 포트폴리오 관리</h2>
        </MyPortfolioTitle>
        <MyPortfolioButton>
          <div>
            <span>수강하신&ensp;</span>
            <span>{std?.subject?.subjectName}</span>
            <span>
              의&ensp;포트폴리오를 등록하고 취업의 기회를 넓혀 보세요!
            </span>
          </div>
          <div>
            {authState.editableYn === 1 && resumeYn === 0 ? (
              <button onClick={handleResumeMove}>이력서 등록</button>
            ) : (
              ""
            )}
            {authState.editableYn === 1 && resumeYn === 1 && pofolYn === 0 ? (
              <button onClick={handlePortfolioMove}>포트폴리오 등록</button>
            ) : (
              ""
            )}
          </div>
        </MyPortfolioButton>
        <Suspense fallback={<Loading />}>
          <MyPortfolioContent>
            {pofolYn === 1 && resumeYn === 1 ? (
              <YesResume std={std} file={file} />
            ) : (
              <NoResume />
            )}
          </MyPortfolioContent>
        </Suspense>
        <div className="btm-buttons">
          {authState.editableYn === 1 && pofolYn === 1 && resumeYn === 1 ? (
            <>
              <button onClick={handleResumeMove}>이력서 수정</button>
              <button onClick={handlePortfolioMove}>포트폴리오 수정</button>
            </>
          ) : (
            ""
          )}
        </div>
      </ul>
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
    </MyPortfolioWrap>
  );
};

export default MyPortfolioMg;
