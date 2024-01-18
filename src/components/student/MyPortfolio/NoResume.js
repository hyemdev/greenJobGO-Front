import React from "react";
import { NoResumeWrap } from "../../../styles/NoResumeStyle";

const NoResume = () => {
  return (
    <NoResumeWrap>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/no_resume.png`}
          alt="자료없음"
        />
      </div>
      <div>
        <span>아직 이력서를 등록하지 않으셨네요.</span>
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
