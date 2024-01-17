import React from "react";
import { v4 } from "uuid";
import NoImage from "../../../assets/NoImage.jpg";
import { BtnGlobal } from "../../../styles/GlobalStyle";
import { Link } from "react-router-dom";

const ListBoard = ({ listData, onImgError }) => {
  return (
    <div className="boardStyle">
      {listData &&
        listData?.map(item => (
          <div className="boardbox" key={item.istudent}>
            <div className="thumb-img">
              <img
                src={`http://112.222.157.156${item.img}`}
                alt="thumb-img"
                onError={onImgError}
              />
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
            <div className="detail-view-btn">
              <Link to={`/business/portfoliodetail/${item.istudent}`}>
                <BtnGlobal>포트폴리오 상세보기</BtnGlobal>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListBoard;
