import React from "react";
import { YesResumeWrap } from "../../../styles/YesResumStyle";
import NoImage from "../../../assets/NoImage.jpg";
import { useNavigate } from "react-router";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { AuthStateAtom } from "../../../recoil/atoms/AuthState";
import { userInfo } from "../../../recoil/selectors/UserInfoSelector";
import { userInfoAtom } from "../../../recoil/atoms/UserInfoState";

const YesResume = () => {
  const authState = useRecoilValue(AuthStateAtom);
  const userInfo = useRecoilValue(userInfoAtom);

  const navigate = useNavigate();
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  const handleMovePage = () => {
    navigate("/student/mypage");
  };
  return (
    <YesResumeWrap>
      <div className="contain">
        <div>
          <img
            src={`/img/student/${userInfo.std?.istudent}/${userInfo.file?.img?.img}`}
            alt="자료없음"
            onError={onImgError}
          />
        </div>
        <div>
          <div className="content">
            <div>
              <h3>{userInfo.std?.introducedLine}</h3>
              <span>{userInfo.std?.name}</span>
            </div>
            <div>
              <span>과정명</span>
              <span>{userInfo.std?.subject?.subjectName}</span>
            </div>
            <div>
              <span>수강기간</span>
              <span>
                {userInfo.std?.startedAt} ~ {userInfo.std?.endedAt}
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
