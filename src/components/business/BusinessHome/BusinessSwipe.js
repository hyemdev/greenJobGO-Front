import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { SwiperWrapStyle } from "../../../styles/BusinessIntroStyle";

const DummyData = [
  {
    istudent: "1",
    name: "테스트",
    subject: "과정명",
    img: "https://via.placeholder.com/300x200",
  },
  {
    istudent: "2",
    name: "테스트222",
    subject: "과정명2222",
    img: "https://via.placeholder.com/300x200",
  },
  {
    istudent: "3",
    name: "테스트333",
    subject: "과정명33333",
    img: "https://via.placeholder.com/300x200",
  },
  {
    istudent: "4",
    name: "테스트4444",
    subject: "과정명444",
    img: "https://via.placeholder.com/300x200",
  },
  {
    istudent: "5",
    name: "테스트5555",
    subject: "과정명555555",
    img: "https://via.placeholder.com/300x200",
  },
  {
    istudent: "6",
    name: "666",
    subject: "과정명6666",
    img: "https://via.placeholder.com/300x200",
  },
  {
    istudent: "7",
    name: "테스트7777",
    subject: "77777777",
    img: "https://via.placeholder.com/300x200",
  },
];
const BusinessSwipe = () => {
  return (
    <SwiperWrapStyle>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={"auto"}
        navigation
        autoplay
        spaceBetween={40}
        className={DummyData.length > 0 ? null : "active"}
      >
        {DummyData?.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            {/* <NavLink to={`/${item.productId}`}> */}
            <div className="img">
              <img
                src={`${item.img}`}
                alt={item.name}
                // onError={onImgError}
              />
            </div>
            <div className="txt">
              <p className="name">{item.name} 수강생</p>
              <p className="subject">{item.subject}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapStyle>
  );
};

export default BusinessSwipe;
