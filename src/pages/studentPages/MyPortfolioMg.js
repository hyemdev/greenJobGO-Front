import React from "react";
import NoResume from "../../components/student/MyPortfolio/NoResume";
import YesResume from "../../components/student/MyPortfolio/YesResume";
import {
  MyPortfolioButton,
  MyPortfolioContent,
  MyPortfolioTitle,
  MyPortfolioWrap,
} from "../../styles/MyPofolMgStyle";
import { element } from "prop-types";
import AddPortfolio from "../../components/student/MyPortfolio/AddPofolMain";

const MyPortfolioMg = () => {
  return (
    <>
      <AddPortfolio />
      {/* <MyPortfolioWrap>
        <ul className="resume-add-inner">
          <MyPortfolioTitle>
            <h2>나의 포트폴리오 관리</h2>
          </MyPortfolioTitle>
          <MyPortfolioButton>
            <div>
              <span>수강하신&ensp;</span>
              <span>UI/UX 디자인 & 퍼블리싱 과정</span>
              <span>
                의&ensp;포트폴리오를 등록하고 취업의 기회를 넓혀 보세요!
              </span>
            </div>
            <div>
              이력서 있거나 없거나 처리하기
              <button>이력서 등록</button>
            </div>
          </MyPortfolioButton>
          <MyPortfolioContent>
            이력서 있거나 없거나 처리하기
            <YesResume />
            <NoResume />
          </MyPortfolioContent>
        </ul>
      </MyPortfolioWrap>
      <div></div> */}
    </>
  );
};

export default MyPortfolioMg;
