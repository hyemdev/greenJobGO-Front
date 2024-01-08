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
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        letter-spacing: -0.24px;
        cursor: pointer;
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
`;

export const SwiperWrapStyle = styled.div`
  width: 1660px;
  margin-top: 10px;

  .swiper-button-prev {
    position: absolute;
    top: calc(50% - 15px);
    left: -0px;
    z-index: 99;
    cursor: pointer;
  }

  .swiper-button-next {
    position: absolute;
    top: 50%;
    top: calc(50% - 15px);
    z-index: 99;
    cursor: pointer;
  }
  .swiper-slide {
    width: 300px;
    text-align: center;
    img {
      width: 300px;
      height: 200px;
      display: block;
      width: 100%;
    }
    .name {
      margin-top: 15px;
      font-size: 16px;
      font-weight: 500;
    }
    .subject {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
