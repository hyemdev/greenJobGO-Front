import styled from "@emotion/styled";

export const SwiperWrapStyle = styled.div`
  width: 1660px;
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
      font-size: 16px;
      font-weight: 500;
    }
    .subject {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
