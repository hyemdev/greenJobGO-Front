import React from "react";

import { useParams } from "react-router";
import {
  DefaultInfo,
  ListDetailWrapSty,
  PortfolioInfo,
  ResumeInfo,
} from "../../styles/BusinessListDetail";
import NoImage from "../../assets/NoImage.jpg";

const PortfolioDetail = () => {
  // const { istudent } = useParams();
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <ListDetailWrapSty>
      <h2>수강생 정보</h2>
      <div className="sub-title">기본정보</div>
      <DefaultInfo>
        <div className="thumb-img">
          <img src="" alt="thumb-img" onError={onImgError} />
        </div>
        <div className="info">
          <ul className="text-upper">
            <li className="name">김그린</li>
            <li className="age">여 1999 (만25세)</li>
          </ul>
          <ul className="text-info">
            <li>
              <span>과정명</span>
              <span> subject</span>
            </li>
            <li>
              <span>주소</span>
              <span> address</span>
            </li>
            <li>
              <span>Email</span>
              <span> Email</span>
            </li>
            <li>
              <span>자격증</span>
              <span> certificate</span>
            </li>
            <li>
              <span>수강기간</span>
              <span> start ~ end </span>
            </li>
            <li>
              <span> 휴대폰</span>
              <span> mobile</span>
            </li>
            <li>
              <span>학력</span>
              <span> diploma</span>
            </li>
          </ul>
        </div>
      </DefaultInfo>
      <div className="sub-title">이력서 및 자기소개서</div>
      <ResumeInfo>
        <div className="oneword">
          <ul>
            <li>한 줄 소개</li> <li>아ㅜㄹ라불라ㅏㅏㅏㅏㅏㅏㅏㅏ</li>
          </ul>
        </div>
        <div className="resume-file">
          <ul>
            <li>이력서 및 자기소개서</li>
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/ph_file.png`}
                alt="portfolio"
              />
              ggggg.pdf
            </li>
          </ul>
        </div>
      </ResumeInfo>
      <div className="sub-title">포트폴리오</div>
      <PortfolioInfo>
        <ul className="portfolio-list">
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/ph_link.png`}
              alt="portfolio"
            />
            fdfdfdf.pdf
          </li>
          <li>그린컴퓨터아트학원 홈페이지 포트폴리오 파일입니다.</li>
        </ul>
        <ul className="portfolio-list">
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/assets/ph_link.png`}
              alt="portfolio"
            />
            fdfdfdf.pdf
          </li>
          <li>그린컴퓨터아트학원 홈페이지 포트폴리오 파일입니다.</li>
        </ul>
      </PortfolioInfo>
    </ListDetailWrapSty>
  );
};
export default PortfolioDetail;
