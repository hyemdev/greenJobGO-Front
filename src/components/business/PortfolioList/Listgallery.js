import React from "react";
import { v4 } from "uuid";
import NoImage from "../../../assets/NoImage.jpg";

const Listgallery = ({ galleryData }) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <div className="galleryStyle">
      {galleryData &&
        galleryData?.map(item => (
          <ul className="gallerybox" key={item.istudent}>
            <li className="thumb-img">
              <img src={`${item.img}`} alt="thumb-img" onError={onImgError} />
            </li>
            <li className="student-name">{item.studentName}</li>
            <li className="subject-name">{item.subjectName}</li>
          </ul>
        ))}
    </div>
  );
};

export default Listgallery;
