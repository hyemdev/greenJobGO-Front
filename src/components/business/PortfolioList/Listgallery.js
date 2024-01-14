import React from "react";
import { v4 } from "uuid";
import NoImage from "../../../assets/NoImage.jpg";


const Listgallery = ({ dummydata }) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <div className="galleryStyle">
      {dummydata &&
        dummydata?.map(item => (
          <ul className="gallerybox" key={v4()}>
            <li className="thumb-img">
              <img src={`${item}`} alt="thumb-img" onError={onImgError} />
            </li>
            <li className="student-name">{item.name}</li>
            <li className="subject-name">{item.subjectName}</li>
          </ul>
        ))}
    </div>
  );
};

export default Listgallery;
