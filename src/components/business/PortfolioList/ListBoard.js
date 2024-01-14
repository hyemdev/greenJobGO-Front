import React from "react";
import { v4 } from "uuid";
import NoImage from "../../../assets/NoImage.jpg";
import { BtnGlobal } from "../../../styles/GlobalStyle";

const ListBoard = ({ dummydata }) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <div className="boardStyle">
      {dummydata &&
        dummydata?.map(item => (
          <div className="boardbox" key={v4()}>
            <div className="thumb-img">
              <img src={`${item}`} alt="thumb-img" onError={onImgError} />
            </div>
            <ul className="board-list">
              <li className="oneword">{item.oneword}</li>
              <li className="student-name">{item.name}</li>
              <li className="subject-name">
                <span>과정명</span>
                <span>{item.subjectName}</span>
              </li>
              <li className="date">
                <span>수강기간</span>{" "}
                <span>
                  {item.startedAt} ~ {item.endedAt}
                </span>
              </li>
            </ul>
            <div className="detail-view-btn">
              <BtnGlobal>포트폴리오 상세보기</BtnGlobal>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListBoard;
