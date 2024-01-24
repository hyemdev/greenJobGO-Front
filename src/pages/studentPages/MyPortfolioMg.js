import React from "react";
import NoResume from "../../components/student/MyPortfolio/NoResume";
import YesResume from "../../components/student/MyPortfolio/YesResume";
import {
  MyPortfolioButton,
  MyPortfolioContent,
  MyPortfolioTitle,
  MyPortfolioWrap,
} from "../../styles/MyPofolMgStyle";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { AuthStateAtom } from "../../recoil/atoms/AuthState";
import { userInfo } from "../../recoil/selectors/UserInfoSelector";
import { useNavigate } from "react-router";
const MyPortfolioMg = () => {
  const navigate = useNavigate();
  const authState = useRecoilValue(AuthStateAtom);
  const subjectData = useRecoilValueLoadable(userInfo);
  const subject =
    subjectData.state === "hasValue" && subjectData.contents.std.subject
      ? subjectData.contents.std.subject
      : null;

  const handleResumeMove = () => {
    navigate("/student/addresume");
  };

  const handlePortfolioMove = () => {
    navigate("/student/addportfolio");
  };
  console.log(authState.portfolioYn);
  return (
    <MyPortfolioWrap>
      <ul>
        <MyPortfolioTitle>
          <h2>나의 포트폴리오 관리</h2>
        </MyPortfolioTitle>
        <MyPortfolioButton>
          <div>
            <span>수강하신&ensp;</span>
            <span>{subject?.subjectName}</span>
            <span>
              의&ensp;포트폴리오를 등록하고 취업의 기회를 넓혀 보세요!
            </span>
          </div>
          <div>
            {authState.editableYn === 1 && authState.aboutMeYn === 0 ? (
              <button onClick={handleResumeMove}>이력서 등록</button>
            ) : (
              ""
            )}
            {authState.editableYn === 1 &&
            authState.aboutMeYn === 1 &&
            authState.portfolioYn === 0 ? (
              <button onClick={handlePortfolioMove}>포트폴리오 등록</button>
            ) : (
              ""
            )}
          </div>
        </MyPortfolioButton>
        <MyPortfolioContent>
          {authState.portfolioYn === 1 ? <YesResume /> : <NoResume />}
        </MyPortfolioContent>
        <div className="btm-buttons">
          {authState.editableYn === 1 &&
          authState.portfolioYn === 1 &&
          authState.aboutMeYn === 1 ? (
            <>
              <button onClick={handleResumeMove}>이력서 수정</button>
              <button onClick={handlePortfolioMove}>포트폴리오 수정</button>
            </>
          ) : (
            ""
          )}
        </div>
      </ul>
    </MyPortfolioWrap>
  );
};

export default MyPortfolioMg;
