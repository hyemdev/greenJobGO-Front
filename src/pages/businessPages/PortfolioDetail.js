import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";
import {
  DefaultInfo,
  ListDetailWrapSty,
  PortfolioInfo,
  ResumeInfo,
} from "../../styles/BusinessListDetail";
import NoImage from "../../assets/NoImage.jpg";
import { getStdentInfo } from "../../api/businessPortfolioAxios";
import { v4 } from "uuid";

const PortfolioDetail = () => {
  const [payload, setPayload] = useState({
    userData: {},
    certificateValue: [],
    birth: "",
    thumbNail: "",
    resume: "",
    pofolData: [],
    fileLinks: [],
  });
  const { userId } = useParams();
  const navigate = useNavigate();

  // 반응형 state
  const [isMobile, setIsMobile] = useState("");

  useEffect(() => {
    getStdentInfo(userId, setPayload);
  }, [userId]);

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 돌아가기 버튼
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <>
     
        <ListDetailWrapSty>
          <h2>수강생 정보</h2>
          <div className="sub-title">기본정보</div>
          <DefaultInfo>
            <div className="thumb-img">
              {payload.thumbNail && (
                <img
                  src={`/img/student/${userId}/${payload.thumbNail}`}
                  alt="thumb-img"
                  onError={onImgError}
                />
              )}
            </div>
            <div className="info">
              <ul className="text-upper">
                <li className="name">{payload.userData.name}</li>
                <li className="age">
                  {payload.userData.gender} {payload.birth}년생 (만
                  {payload.userData.age}세)
                </li>
              </ul>
              <ul className="text-info">
                <li>
                  <span>과정명</span>
                  <span> {payload.userData.subject}</span>
                </li>
                <li>
                  <span>주소</span>
                  <span> {payload.userData.address}</span>
                </li>
                <li>
                  <span>Email</span>
                  <span> {payload.userData.email}</span>
                </li>
                <li>
                  <span>자격증</span>
                  <span> {payload.certificateValue}</span>
                </li>
                <li>
                  <span>수강기간</span>
                  <span>
                    {payload.userData.startedAt} ~ {payload.userData.endedAt}
                  </span>
                </li>
                <li>
                  <span> 휴대폰</span>
                  <span> {payload.userData.mobileNumber}</span>
                </li>
                <li>
                  <span>학력</span>
                  <span> {payload.userData.education}</span>
                </li>
              </ul>
            </div>
          </DefaultInfo>
          <div className="sub-title">이력서 및 자기소개서</div>
          <ResumeInfo>
            <div className="oneword">
              <ul>
                <li>한 줄 소개</li>
                {payload.userData && payload.userData.introducedLine ? (
                  <li>{payload.userData.introducedLine}</li>
                ) : (
                  <li>등록 된 한줄소개가 없습니다.</li>
                )}
              </ul>
            </div>
            <div className="resume-file">
              <ul>
                <li>이력서 및 자기소개서</li>
                <li>
                  {payload.resume && payload.resume ? (
                    <div>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/ph_file.png`}
                        alt="portfolio"
                      />
                      <a
                        href={`http://112.222.157.156/img/student/${userId}/${payload.resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {payload.resume}
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
            {payload.pofolData.length > 0 || payload.fileLinks.length > 0 ? (
              <>
                {payload.pofolData?.length > 0 &&
                  payload.pofolData.map(item => (
                    <ul key={v4()} className="portfolio-list">
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/ph_file.png`}
                          alt="portfolio"
                        />
                        <a
                          href={`http://112.222.157.156/img/student/${userId}/${item.file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.file}
                        </a>
                      </li>
                      <li>{item.oneWord}</li>
                    </ul>
                  ))}
                {payload.fileLinks?.length > 0 &&
                  payload.fileLinks.map(item => (
                    <ul key={v4()} className="portfolio-list">
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/ph_link.png`}
                          alt="portfolio"
                        />
                        <a
                          href={`http://${item.file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.file}
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
        </ListDetailWrapSty>
    </>
  );
};
export default PortfolioDetail;
