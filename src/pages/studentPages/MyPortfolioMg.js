import React from "react";
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
import { userInfo } from "../../recoil/selectors/UserInfoSelector";
import { useNavigate } from "react-router";
const MyPortfolioMg = () => {
  const navigate = useNavigate();
  const authState = useRecoilValue(AuthStateAtom);
  const userInfoData = useRecoilValue(userInfo);

  const handleResumeMove = () => {
    navigate("/student/addportfolio");
  };

  return (
    <div>
      <MyPortfolioWrap>
        <ul className="resume-add-inner">
          <MyPortfolioTitle>
            <h2>나의 포트폴리오 관리</h2>
          </MyPortfolioTitle>
          <MyPortfolioButton>
            <div>
              <span>수강하신&ensp;</span>
              <span>{userInfoData.std.subject.subjectName}</span>
              <span>
                의&ensp;포트폴리오를 등록하고 취업의 기회를 넓혀 보세요!
              </span>
            </div>
            <div>
              {authState.portfolioYn === 0 ? null : (
                <button onClick={handleResumeMove}>이력서 등록</button>
              )}
            </div>
          </MyPortfolioButton>
          <MyPortfolioContent>
            {authState.portfolioYn === 1 ? <YesResume /> : <NoResume />}
          </MyPortfolioContent>
        </ul>
      </MyPortfolioWrap>
    </div>
  );
};

export default MyPortfolioMg;
