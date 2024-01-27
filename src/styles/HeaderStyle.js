import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const HeaderSty = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  /* max-width: 196rem; */
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Maincolor.white};
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.12);
  & > div {
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    /* 상단로고style */
    .upper-logo-div {
      width: 256px;
      height: 20px;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    .header-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 80px;
      li {
        > a {
          position: relative;
          font-size: 16px;
          font-weight: 500;
          color: ${Maincolor.header};
          > svg {
            position: absolute;
            top: 2px;
            left: -27px;
            width: 20px;
            height: 20px;
            filter: invert(48%) sepia(6%) saturate(7%) hue-rotate(323deg)
              brightness(98%) contrast(80%);
          }
        }
      }
      .select {
        > a {
          color: ${Maincolor.black};
          > svg {
            filter: invert(6%) sepia(79%) saturate(16%) hue-rotate(349deg)
              brightness(91%) contrast(85%);
          }
        }
      }
    }
    .loguout-btn {
      font-size: 15px;
      font-weight: 500;
      > img {
        width: 17px;
        height: 17px;
        margin-left: 8px;
      }
    }
  }
`;
export const MobileHeaderSty = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  /* max-width: 196rem; */
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Maincolor.white};
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.12);
  & > div {
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    gap: 70px;
    /* 상단로고style */
    .upper-logo-div {
      width: 159px;
      height: 15px;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    .header-menu {
      a {
        position: relative;
        font-size: 12px;
        font-weight: 500;
        color: ${Maincolor.header};
        > svg {
          position: absolute;
          top: 1px;
          left: -17px;
          width: 17px;
          height: 15px;
          filter: invert(48%) sepia(6%) saturate(7%) hue-rotate(323deg)
            brightness(98%) contrast(80%);
        }
      }
    }
    /* .loguout-btn {
      font-size: 15px;
      font-weight: 500;
      > img {
        width: 17px;
        height: 17px;
        margin-left: 8px;
      }
    } */
  }
`;
