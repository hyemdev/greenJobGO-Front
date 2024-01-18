import React from "react";
import { v4 } from "uuid";
import NoImage from "../../../assets/NoImage.jpg";
import { Link } from "react-router-dom";

const Listgallery = ({ galleryData, onImgError }) => {
  return (
    <div className="galleryStyle">
      {galleryData &&
        galleryData?.map(item => (
          <Link
            key={item.istudent}
            to={`/business/portfoliodetail/${item.istudent}`}
          >
            <ul className="gallerybox">
              <li className="thumb-img">
                <img
                  src={`http://112.222.157.156${item.img}`}
                  alt="thumb-img"
                  onError={onImgError}
                />
              </li>
              <li className="student-name">{item.studentName}</li>
              <li className="subject-name">{item.subjectName}</li>
            </ul>
          </Link>
        ))}
    </div>
  );
};

export default Listgallery;
