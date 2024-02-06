import React from "react";
import { YesResumeWrap } from "../../../styles/YesResumStyle";
import NoImage from "../../../assets/NoImage.jpg";
import { useNavigate } from "react-router";

const YesResume = ({ std, file }) => {
  const navigate = useNavigate();
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  const handleMovePage = () => {
    navigate("/student/mypage");
  };
  console.log(std.istudent);
  console.log(file?.img?.img);
  return (
    <YesResumeWrap>
      <div className="contain">
        <div>
          <img
            src={`${process.env.REACT_APP_BASEFILE_URL}/${std?.istudent}/${file?.img?.img}`}
            alt="자료없음"
            onError={onImgError}
          />
        </div>
        <div>
          <div className="content">
            <div>
              <h3>{std?.introducedLine}</h3>
              <span>{std?.name}</span>
            </div>
            <div>
              <span>과정명</span>
              <span>{std?.subject?.subjectName}</span>
            </div>
            <div>
              <span>수강기간</span>
              <span>
                {std?.startedAt} ~ {std?.endedAt}
              </span>
            </div>
          </div>
          <div className="move-button">
            <button onClick={handleMovePage}>포트폴리오 상세보기</button>
          </div>
        </div>
      </div>
    </YesResumeWrap>
  );
};

export default YesResume;
