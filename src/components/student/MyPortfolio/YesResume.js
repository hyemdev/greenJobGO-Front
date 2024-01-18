import React from "react";
import { YesResumeWrap } from "../../../styles/YesResumStyle";
import NoImage from "../../../assets/NoImage.jpg";

const YesResume = () => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <YesResumeWrap>
      <div>
        <img src="" alt="자료없음" onError={onImgError} />
      </div>
      <div>
        <div className="content">
          <div>
            <h3>열정적인 디자이너, 김그린입니다.</h3>
            <span>UI/UX 반응형 디자인 & 퍼블리싱 과정</span>
          </div>
          <div>
            <span>수강기간</span>
            <span>2023-06-01 ~ 2023-12-01</span>
          </div>
        </div>
        <div className="buttons">
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
    </YesResumeWrap>
  );
};

export default YesResume;
