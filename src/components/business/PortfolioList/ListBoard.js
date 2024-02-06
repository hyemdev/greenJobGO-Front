import React from "react";
import { BtnGlobal } from "../../../styles/GlobalStyle";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const ListBoard = ({ listData, onImgError }) => {
  const navigate = useNavigate();
  const isMobileDevice = useMediaQuery({ query: "(max-width: 767px)" });

  const handleListClick = e => {
    navigate(`/business/portfoliodetail/${e}`);
  };
  return (
    <div className="boardStyle">
      {listData &&
        listData?.map(item =>
          isMobileDevice ? (
            <div
              className="boardbox"
              key={item.istudent}
              onClick={() => handleListClick(item.istudent)}
            >
              <div className="thumb-img">
                <img src={`${item.img}`} alt="thumb-img" onError={onImgError} />
              </div>
              <ul className="board-list">
                <li className="oneword">{item.introducedLine}</li>
                <li className="student-name">{item.studentName}</li>
                <li className="subject-name">
                  <span className="label">과정명</span>
                  <span>{item.subjectName}</span>
                </li>
                <li className="date">
                  <span className="label">수강기간</span>{" "}
                  <span>
                    {item.startedAt} ~ {item.endedAt}
                  </span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="boardbox" key={item.istudent}>
              <div className="thumb-img">
                <img src={`${item.img}`} alt="thumb-img" onError={onImgError} />
              </div>{" "}
              <ul className="board-list">
                <li className="oneword">{item.introducedLine}</li>
                <li className="student-name">{item.studentName}</li>
                <li className="subject-name">
                  <span className="label">과정명</span>
                  <span>{item.subjectName}</span>
                </li>
                <li className="date">
                  <span className="label">수강기간</span>{" "}
                  <span>
                    {item.startedAt} ~ {item.endedAt}
                  </span>
                </li>
              </ul>
              <div className="detail-view-btn">
                <Link to={`/business/portfoliodetail/${item.istudent}`}>
                  <BtnGlobal>포트폴리오 상세보기</BtnGlobal>
                </Link>
              </div>
            </div>
          ),
        )}
    </div>
  );
};

export default ListBoard;
