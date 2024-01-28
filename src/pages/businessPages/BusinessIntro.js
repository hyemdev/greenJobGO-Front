import React, { useEffect, useState } from "react";
import BusinessSwipe from "../../components/business/BusinessHome/BusinessSwipe";
import { BusinessStyWrap } from "../../styles/BusinessIntroStyle";
import { getBigcate, getMainImgList } from "../../api/businessMainAxios";
import { Link, useNavigate } from "react-router-dom";
import BusinessPrivacyProtect from "./BusinessPrivacyProtect";
const BusinessIntro = () => {
  const [category, setCategory] = useState([]);
  const [swiperData, setSwiperData] = useState([]);
  const [clickCate, setClickCate] = useState("1");
  const [noItem, setNoItem] = useState(false);

  // const [agreeModalOpen, setAgreeModalOpen] = useState(true);
  // const navigate = useNavigate();

  const handleTabBtnClick = item => {
    setClickCate(item);
  };

  // // 비동의 클릭
  // const handleDisagree = () => {
  //   navigate("/");
  // };
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
              <button
                value={item.iclassification}
                className="cate-btn"
                // onClick={() => handleTabBtnClick(item.iclassification)}
              >
                {item.classification}
              </button>
            </li>
          ))}
        </ul>
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
