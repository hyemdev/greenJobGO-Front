import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const BusinessStyWrap = styled.div`
  margin-top: 130px;
  h2 {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  /* 메인 스와이퍼 탭메뉴 */
  .main-tab-menu {
    & > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin: 40px 0;
      & > li {
        border-radius: 20px;
        border: 1px solid ${Maincolor.grayLight2};
        padding: 9px 26px;
        cursor: pointer;
        .cate-btn {
          cursor: pointer;
          border: none;
          background: none;
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          letter-spacing: -0.24px;
          font-family: "Noto Sans KR";
          /* line-height: 1.2; */
        }
      }
    }
  }
  .main-portfolio-linkBtn {
    margin-top: 80px;
    text-align: center;

    span {
      width: 186px;
      border-radius: 20px;
      border: 1px solid ${Maincolor.grayLight2};
      padding: 9px 26px;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      letter-spacing: -0.24px;
      cursor: pointer;
    }
  }

  @media all and (max-width: 767px) {
    margin-top: 50px;
    width: 360px;
    h2 {
      text-align: center;
      font-size: 21px;
      font-weight: 700;
      margin-bottom: 40px;
    }
    /* 메인 스와이퍼 탭메뉴 */
    .main-tab-menu {
      & > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        margin: 30px 0;
        & > li {
          border-radius: 20px;
          border: 1px solid ${Maincolor.grayLight2};
          padding: 8px 18px;
          cursor: pointer;
          .cate-btn {
            cursor: pointer;
            border: none;
            background: none;
            font-size: 13px;
            font-weight: 500;
            text-align: center;
            letter-spacing: -0.24px;
            font-family: "Noto Sans KR";
            /* line-height: 1.2; */
          }
        }
      }
    }
    .main-portfolio-linkBtn {
      margin-top: 70px;
      text-align: center;

      span {
        width: 186px;
        border-radius: 20px;
        border: 1px solid ${Maincolor.grayLight2};
        padding: 10px 22px;
        font-size: 13px;
        font-weight: 500;
        text-align: center;
        letter-spacing: -0.24px;
        cursor: pointer;
      }
    }
  }
`;

export const SwiperWrapStyle = styled.div`
  width: 1660px;
  margin-top: 10px;
  margin-bottom: 80px;
  position: relative;
  .prev-btn,
  .next-btn {
    border-radius: 50%;
    border: 1px solid ${Maincolor.maingray};
    width: 40px;
    height: 40px;
    background: ${Maincolor.white};
    cursor: pointer;
    & > svg {
      font-size: 25px;
      color: ${Maincolor.btn};
    }
  }
  .prev-btn {
    position: absolute;
    top: 85px;
    left: -20px;
    z-index: 9;
  }
  .next-btn {
    position: absolute;
    top: 85px;
    right: -20px;
    z-index: 9;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  /* .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  } */
  .swiper-slide {
    width: 300px;
    text-align: center;
    img {
      width: 300px;
      height: 204px;
      display: block;
      width: 100%;
    }
    .txt {
      width: 300px;
      text-align: left;
      .name {
        margin-top: 15px;
        font-size: 16px;
        font-weight: 500;
        color: ${Maincolor.black};
      }
      .subject {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 400;
        color: ${Maincolor.btn};
        line-height: 1.2;
      }
    }
  }
  @media all and (max-width: 767px) {
    width: 360px;
    margin-top: 30px;
    margin-bottom: 60px;
    position: relative;
    .prev-btn,
    .next-btn {
      border-radius: 50%;
      border: 1px solid ${Maincolor.maingray};
      width: 30px;
      height: 30px;
      background: ${Maincolor.white};
      cursor: pointer;
      & > svg {
        font-size: 25px;
        color: ${Maincolor.btn};
      }
    }
    .prev-btn {
      position: absolute;
      top: 60px;
      left: -21px;
      z-index: 9;
    }
    .next-btn {
      position: absolute;
      top: 60px;
      right: -21px;
      z-index: 9;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
    /* .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  } */
    .swiper-slide {
      text-align: center;
      img {
        width: 100%;
        height: 120px;
        display: block;
      }
      .txt {
        width: 300px;
        text-align: left;
        .name {
          width: 100%;
          margin-top: 15px;
          font-size: 11px;
          font-weight: 500;
          color: ${Maincolor.black};
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .subject {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 130px;
          margin-top: 8px;
          font-size: 11px;
          font-weight: 400;
          color: ${Maincolor.btn};
          line-height: 1.2;
        }
      }
    }
  }
`;
