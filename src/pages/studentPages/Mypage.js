import React from "react";
import { useNavigate } from "react-router";
import NoImage from "../../assets/NoImage.jpg";
import {
  DefaultInfo,
  MypageWrap,
  PortfolioInfo,
  ResumeInfo,
} from "../../styles/MypageStyle";
import { useRecoilValue } from "recoil";
import { userInfo } from "../../recoil/selectors/UserInfoSelector";
import { v4 } from "uuid";

const Mypage = () => {
  const userInfoData = useRecoilValue(userInfo);
  const navigate = useNavigate();

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 돌아가기 버튼
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <MypageWrap>
      <h2>수강생 정보</h2>
      <div className="sub-title">기본정보</div>
      <DefaultInfo>
        <div className="thumb-img">
          {userInfoData?.file?.img?.img && (
            <img
              src={`http://112.222.157.156/img/student/${userInfoData.std.istudent}/${userInfoData.file.img.img}`}
              alt="thumb-img"
              onError={onImgError}
            />
          )}
        </div>
        <div className="info">
          <ul className="text-upper">
            <li className="name">{userInfoData?.std?.name}</li>
            <li className="age">
              {userInfoData?.std?.gender} {userInfoData?.std?.birthday} (만
              {userInfoData?.std?.age}세)
            </li>
          </ul>
          <ul className="text-info">
            <li>
              <span>과정명</span>
              <span> {userInfoData?.std?.subject?.subjectName}</span>
            </li>
            <li>
              <span>주소</span>
              <span> {userInfoData?.std?.address}</span>
            </li>
            <li>
              <span>Email</span>
              <span> {userInfoData?.std?.email}</span>
            </li>
            <li>
              <span>자격증</span>
                {userInfoData?.std?.certificates.map(item => (
                  <div key={item.icertificate}>
                    <span>{item.certificate}</span>
                  </div>
                ))}
            </li>
            <li>
              <span>수강기간</span>
              <span>
                {userInfoData?.std?.startedAt} ~ {userInfoData?.std?.endedAt}
              </span>
            </li>
            <li>
              <span> 휴대폰</span>
              <span> {userInfoData?.std?.mobileNumber}</span>
            </li>
            <li>
              <span>학력</span>
              <span> {userInfoData?.std?.education}</span>
            </li>
          </ul>
        </div>
      </DefaultInfo>
      <div className="sub-title">이력서 및 자기소개서</div>
      <ResumeInfo>
        <div className="oneword">
          <ul>
            <li>한 줄 소개</li>
            {userInfoData.std && userInfoData?.std?.introducedLine ? (
              <li>{userInfoData?.std?.introducedLine}</li>
            ) : (
              <li>등록 된 한줄소개가 없습니다.</li>
            )}
          </ul>
        </div>
        <div className="resume-file">
          <ul>
            <li>이력서 및 자기소개서</li>
            <li>
              {userInfoData?.file && userInfoData?.file?.resume?.resume ? (
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/ph_file.png`}
                    alt="portfolio"
                  />
                  <a
                    href={`http://112.222.157.156/img/student/${userInfoData.std.istudent}/${userInfoData.file.resume.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userInfoData?.file?.resume?.resume}
                  </a>
                </div>
              ) : (
                <span>등록된 이력서가 없습니다.</span>
              )}
            </li>
          </ul>
        </div>
      </ResumeInfo>
      <div className="sub-title">포트폴리오</div>
      <PortfolioInfo>
        {userInfoData?.file?.portfolio.length > 0 ||
        userInfoData?.file?.fileLinks.length > 0 ? (
          <>
            {userInfoData.file.portfolio?.length > 0 &&
              userInfoData.file.portfolio.map(item => (
                <ul key={v4()} className="portfolio-list">
                  <li>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/ph_file.png`}
                      alt="portfolio"
                    />
                    <a
                      href={`http://112.222.157.156/img/student/${userInfoData.std.istudent}/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.file}
                    </a>
                  </li>
                  <li>{item.oneWord}</li>
                </ul>
              ))}
            {userInfoData?.file?.fileLinks?.length > 0 &&
              userInfoData?.file?.fileLinks.map(item => (
                <ul key={v4()} className="portfolio-list">
                  <li>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/ph_link.png`}
                      alt="portfolio"
                    />
                    <a
                      href={`http://112.222.157.156/img/student/${userInfoData.std.istudent}/${item.fileLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.fileLink}
                    </a>
                  </li>
                  <li>{item.oneWord}</li>
                </ul>
              ))}
          </>
        ) : (
          <>
            <span>등록된 포트폴리오가 없습니다.</span>
          </>
        )}
      </PortfolioInfo>
      <div className="buttons">
        <button onClick={handleBack}>돌아가기</button>
      </div>
    </MypageWrap>
  );
};

export default Mypage;
