import React, { useEffect, useRef, useState } from "react";
import BusinessSwipe from "../../components/business/BusinessHome/BusinessSwipe";
import { BusinessStyWrap } from "../../styles/BusinessIntroStyle";
import { getBigcate, getMainImgList } from "../../api/businessMainAxios";
import { useNavigate } from "react-router-dom";

import OkModal from "../../components/OkModal";

const BusinessIntro = () => {
  const [category, setCategory] = useState([]);
  const [swiperData, setSwiperData] = useState([]);
  const [clickCate, setClickCate] = useState("1");
  const [noItem, setNoItem] = useState(false);

  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  const navigate = useNavigate();

  const handleTabBtnClick = item => {
    setClickCate(item);
  };

  const handleTotalListClick = () => {
    navigate("/business/portpoliolist");
  };

  useEffect(() => {
    if (clickCate) {
      getMainImgList({ setSwiperData, clickCate, setNoItem, setErrorApiInfo });
    }
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [clickCate, errorApiInfo]);

  useEffect(() => {
    getBigcate(setCategory, setErrorApiInfo);
  }, []);

  useEffect(() => {
    if (category.length > 0 && clickCate === "1") {
      const targetCate = category[0];
      setClickCate(targetCate.iclassification);
    }
  }, [category]);
  return (
    <BusinessStyWrap>
      <h2> 수강생 포트폴리오 </h2>
      <div className="main-tab-menu">
        <ul>
          {category?.map(item => (
            <li
              className={
                clickCate === item.iclassification ? "active-name" : "cate-name"
              }
              key={`cate${item.iclassification}`}
              onClick={() => handleTabBtnClick(item.iclassification)}
            >
              <button value={item.iclassification} className="cate-btn">
                {item.classification}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <BusinessSwipe swiperData={swiperData} noItem={noItem} />
      <div className="main-portfolio-linkBtn" onClick={handleTotalListClick}>
        <span> 포트폴리오 전체보기 </span>
      </div>
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <OkModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false);
            setErrorApiInfo("");
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false);
            setErrorApiInfo("");
          }}
        >
          <span>{errorApiInfo}</span>
        </OkModal>
      )}
    </BusinessStyWrap>
  );
};

export default BusinessIntro;
