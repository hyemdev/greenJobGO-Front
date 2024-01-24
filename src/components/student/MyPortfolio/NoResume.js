import React from "react";
import { NoResumeWrap } from "../../../styles/NoResumeStyle";
import { AuthStateAtom } from "../../../recoil/atoms/AuthState";
import { useRecoilValue } from "recoil";

const NoResume = () => {
  const authState = useRecoilValue(AuthStateAtom);

  return (
    <NoResumeWrap>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/no_resume.png`}
          alt="자료없음"
        />
      </div>
      <div>
        {authState.aboutMeYn === 0 && authState.portfolioYn === 1 && (
          <span>아직 이력서를 등록하지 않으셨네요.</span>
        )}
        {authState.portfolioYn === 0 && authState.aboutMeYn === 1 && (
          <span>아직 포트폴리오를 등록하지 않으셨네요.</span>
        )}
        {authState.aboutMeYn === 0 && authState.portfolioYn === 0 && (
          <span>아직 이력서와 포트폴리오를 등록하지 않으셨네요.</span>
        )}
      </div>
      <div>
        <span>
          수강하신 과정의 이력서와 포트폴리오를 등록하시면 채용을 희망하는
          기업에 공개되어 취업 가능성이 높아져요.
        </span>
      </div>
    </NoResumeWrap>
  );
};

export default NoResume;
