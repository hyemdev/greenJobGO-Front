import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NoImage from "../../assets/NoImage.jpg";
import {
  DefaultInfo,
  MypageWrap,
  PortfolioInfo,
  ResumeInfo,
} from "../../styles/MypageStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfo } from "../../recoil/selectors/UserInfoSelector";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { userInfoAtom } from "../../recoil/atoms/UserInfoState";
import { getStudentInfo } from "../../api/studentAxios";
import OkModal from "../../components/OkModal";

const Mypage = () => {
  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  // const userInfo = useRecoilValue(userInfoAtom);
  const [std, setStd] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    const { std, file } = await getStudentInfo(setErrorInfo);
    setStd(std);
    setFile(file);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 돌아가기 버튼
  const handleBack = () => {
    navigate("/student/myportfolio");
  };

  useEffect(() => {
    if (errorInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorInfo]);
  return (
    <MypageWrap>
      <h2>수강생 정보</h2>
      <div className="sub-title">기본정보</div>
      <DefaultInfo>
        <div className="thumb-img">
          {file.img?.img && (
            <img
              src={`https://greenjobgo.kr/img/student/${std?.istudent}/${file.img?.img}`}
              alt="thumb-img"
              onError={onImgError}
            />
          )}
        </div>
        <div className="info">
          <ul className="text-upper">
            <li className="name">{std?.name}</li>
            <li className="age">
              {std?.gender} {std?.birthday} (만
              {std?.age}세)
            </li>
          </ul>
          <ul className="text-info">
            <li>
              <div>
                <span>과정명</span>
                <span> {std.subject?.subjectName}</span>
              </div>
              <div>
                <span>주소</span>
                <span> {std.address}</span>
              </div>
              <div>
                <span>Email</span>
                <span> {std?.email}</span>
              </div>
              <div>
                <span>자격증</span>
                <div>
                  {std.certificates?.map(item => (
                    <div key={item.icertificate}>
                      <span>{item.certificate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <div>
                <span>수강기간</span>
                <span>
                  {std?.startedAt} ~ {std?.endedAt}
                </span>
              </div>
              <div>
                <span> 휴대폰</span>
                <span> {std?.mobileNumber}</span>
              </div>
              <div>
                <span>학력</span>
                <span> {std?.education}</span>
              </div>
            </li>
          </ul>
        </div>
      </DefaultInfo>
      <div className="sub-title">이력서 및 자기소개서</div>
      <ResumeInfo>
        <div className="oneword">
          <ul>
            <li>한 줄 소개</li>
            {std && std?.introducedLine ? (
              <li>{std?.introducedLine}</li>
            ) : (
              <li>등록 된 한줄소개가 없습니다.</li>
            )}
          </ul>
        </div>
        <div className="resume-file">
          <ul>
            <li>이력서 및 자기소개서</li>
            <li>
              {file && file.resume?.resume ? (
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/ph_file.png`}
                    alt="portfolio"
                  />
                  <a
                    href={`https://greenjobgo.kr/img/student/${std?.istudent}/${file.resume?.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {file.resume?.resume}
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
        {file.portfolio?.length > 0 || file.fileLinks?.length > 0 ? (
          <>
            {file.portfolio?.length > 0 &&
              file.portfolio?.map(item => (
                <ul key={v4()} className="portfolio-list">
                  <li>
                    <div>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/ph_file.png`}
                        alt="portfolio"
                      />
                      <a
                        href={`https://greenjobgo.kr/img/student/${std?.istudent}/${item.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.file}
                      </a>
                    </div>
                    <div>
                      {item.mainYn === 1 ? (
                        <div className="main-pofol">
                          <span>
                            <FontAwesomeIcon
                              icon={faCrown}
                              style={{ color: "#fff" }}
                            />
                            대표
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                  <li>{item.oneWord}</li>
                </ul>
              ))}
            {file.fileLinks?.length > 0 &&
              file.fileLinks?.map(item => (
                <ul key={v4()} className="portfolio-list">
                  <li>
                    <div>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/ph_link.png`}
                        alt="portfolio"
                      />
                      <a
                        href={`https://greenjobgo.kr/img/student/${std?.istudent}/${item.fileLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.fileLink}
                      </a>
                    </div>
                    <div>
                      {item.mainYn === 1 ? (
                        <div className="main-pofol">
                          <span>
                            <FontAwesomeIcon
                              icon={faCrown}
                              style={{ color: "#fff" }}
                            />
                            대표
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
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
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <OkModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false);
            setErrorInfo("");
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false);
            setErrorInfo("");
          }}
        >
          <span>{errorInfo}</span>
        </OkModal>
      )}
    </MypageWrap>
  );
};

export default Mypage;
