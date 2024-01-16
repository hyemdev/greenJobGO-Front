import React, { useEffect, useState } from "react";
import BusinessSwipe from "../../components/business/BusinessHome/BusinessSwipe";
import { BusinessStyWrap } from "../../styles/BusinessIntroStyle";
import { getBigcate, getMainImgList } from "../../api/businessMainAxios";
import { Link } from "react-router-dom";
const BusinessIntro = () => {
  const [category, setCategory] = useState([]);
  const [swiperData, setSwiperData] = useState([]);
  const [clickCate, setClickCate] = useState("1");
  const [noItem, setNoItem] = useState(false);

  const handleTabBtnClick = item => {
    setClickCate(item);
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
            <li key={`cate${item.iclassification}`}>
              <button
                value={item.iclassification}
                className="cate-btn"
                onClick={() => handleTabBtnClick(item.iclassification)}
              >
                {item.classification}
              </button>
            </li>
          ))}
        </ul>
        {/* <ul>
          <li value="1">it 분야</li>
          <li value="2">건축 기계 분야</li>
          <li value="3">UIUX 분야</li>
          <li value="4">빅데이터 분야</li>
          <li value="5">영상분야</li>
          <li value="6">편집디자인 분야</li>
        </ul> */}
      </div>
      <BusinessSwipe swiperData={swiperData} noItem={noItem} />
      <div className="main-portfolio-linkBtn">
        <Link to="/business/portpoliolist">
          <span> 포트폴리오 전체보기 </span>
        </Link>
      </div>
    </BusinessStyWrap>
  );
};

export default BusinessIntro;
