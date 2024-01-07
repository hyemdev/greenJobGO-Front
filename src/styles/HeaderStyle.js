import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const HeaderSty = styled.div`
  /* max-width: 196rem; */
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      > li {
        font-size: 16px;
        font-weight: 500;
        color: ${Maincolor.grayLight2};
        margin-right: 70px;
        > img {
          width: 17px;
          height: 17px;
          color: ${Maincolor.grayLight2};
          margin-right: 7px;
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
