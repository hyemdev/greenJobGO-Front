import React, { useEffect, useRef, useState } from "react";
import BusinessSwipe from "../../components/business/BusinessHome/BusinessSwipe";
import { BusinessStyWrap } from "../../styles/BusinessIntroStyle";
import { getBigcate, getMainImgList } from "../../api/businessMainAxios";
import { Link, useNavigate } from "react-router-dom";
import BusinessPrivacyProtect from "./BusinessPrivacyProtect";
import { useRecoilState, useSetRecoilState } from "recoil";
import { HeaderFocusAtom } from "../../components/BusinessHeader";
import styled from "@emotion/styled";

const BusinessIntro = () => {
  const [category, setCategory] = useState([]);
  const [swiperData, setSwiperData] = useState([]);
  const [clickCate, setClickCate] = useState("1");
  const [noItem, setNoItem] = useState(false);

  const setSelect = useSetRecoilState(HeaderFocusAtom);

  const navigate = useNavigate();

  const handleTabBtnClick = item => {
    setClickCate(item);
   };

  const handleTotalListClick = () => {
    setSelect("portpoliolist");
    navigate("/business/portpoliolist");
  };
  useEffect(() => {
    getMainImgList({ setSwiperData, clickCate, setNoItem });
  }, [clickCate]);

  useEffect(() => {
    getBigcate(setCategory);
  }, []);

  return (
    <BusinessStyWrap>
      <h2> 수강생 포트폴리오 </h2>
      <div className="main-tab-menu">
        <ul>
          {category?.map(item => (
            <li
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
    </BusinessStyWrap>
  );
};

export default BusinessIntro;
