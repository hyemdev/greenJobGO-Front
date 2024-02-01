import React, { useEffect } from "react";
import NoResume from "../../components/student/MyPortfolio/NoResume";
import YesResume from "../../components/student/MyPortfolio/YesResume";
import {
  MyPortfolioButton,
  MyPortfolioContent,
  MyPortfolioTitle,
  MyPortfolioWrap,
} from "../../styles/MyPofolMgStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { AuthStateAtom } from "../../recoil/atoms/AuthState";
import { useNavigate } from "react-router";
import { getStudentInfo } from "../../api/studentAxios";
import { userInfoAtom } from "../../recoil/atoms/UserInfoState";
const MyPortfolioMg = () => {
  const authState = useRecoilValue(AuthStateAtom);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { std, file } = await getStudentInfo();
      setUserInfo({ std, file });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleResumeMove = () => {
    navigate("/student/addresume");
  };

  const handlePortfolioMove = () => {
    navigate("/student/addportfolio");
  };
  console.log("get:", userInfo.std);
  console.log("get:", userInfo.file);
  return (
    <MyPortfolioWrap>
      <ul>
        <MyPortfolioTitle>
          <h2>나의 포트폴리오 관리</h2>
        </MyPortfolioTitle>
        <MyPortfolioButton>
          <div>
            <span>수강하신&ensp;</span>
            <span>{userInfo.std?.subject?.subjectName}</span>
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
          {authState?.portfolioYn === 1 && authState?.aboutMeYn === 1 ? (
            <YesResume />
          ) : (
            <NoResume />
          )}
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
