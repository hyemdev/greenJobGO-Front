import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import NoImage from "../../../assets/NoImage.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { SwiperWrapStyle } from "../../../styles/BusinessIntroStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import NoitemBox from "./NoitemBox";
import { useNavigate } from "react-router-dom";

const BusinessSwipe = ({ swiperData, noItem }) => {
  const navigate = useNavigate();

  const [swipe, setSwipe] = useState();
  const [isMobile, setIsMobile] = useState(false);
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  const handelClickPf = e => {
    navigate(`/business/portfoliodetail/${e}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1600px)").matches);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <SwiperWrapStyle>
      <button onClick={() => swipe?.slidePrev()} className="prev-btn">
        <FontAwesomeIcon icon={faAngleLeft} />{" "}
      </button>
      <Swiper
        onBeforeInit={swipper => setSwipe(swipper)}
        modules={[Navigation, Autoplay]}
        slidesPerView={isMobile ? 3 : "auto"}
        navigation
        autoplay
        // loop={true}
        spaceBetween={40}
        className={swiperData.length > 0 ? null : "active"}
      >
        {swiperData?.map((item, index) => (
          <SwiperSlide
            key={item.istudent}
            className="swiper-slide"
            onClick={() => handelClickPf(item.istudent)}
          >
            <div className="img">
              <img src={`${item.img}`} alt={item.name} onError={onImgError} />
            </div>
            <div className="txt">
              <p className="name">{item.name} 수강생</p>
              <p className="subject">{item.subjectName}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
      <button onClick={() => swipe?.slideNext()} className="next-btn">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      {noItem && <NoitemBox />}
    </SwiperWrapStyle>
  );
};

export default BusinessSwipe;
