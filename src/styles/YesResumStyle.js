import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const YesResumeWrap = styled.div`
  .contain {
    display: flex;
    align-items: center;
    width: 100%;
    height: 270px;
    border: 1px solid ${Maincolor.maingray};
    border-radius: 10px;
    padding: 30px 40px;
    > div {
      width: 100%;
      :nth-of-type(1) {
        width: 295px;
        height: 210px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      :nth-of-type(2) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        .content {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding: 15px 0 0 60px;
          > div {
            width: 100%;
            :nth-of-type(1) {
              margin-bottom: 52px;
              > h3 {
                font-size: 20px;
                font-weight: 500;
                color: ${Maincolor.black};
                margin-bottom: 14px;
              }
              > span {
                font-size: 16px;
                font-weight: 500;
                color: ${Maincolor.black};
              }
            }
            :nth-of-type(2) {
              padding-bottom: 16px;
              > span {
                margin-right: 34px;
              }
            }
            :nth-of-type(3) {
              > span {
                margin-right: 21px;
              }
            }
            :not(:first-of-type) {
              > span {
                :first-of-type {
                  font-size: 16px;
                  font-weight: 500;
                  color: ${Maincolor.black};
                }
                :last-of-type {
                  font-size: 14px;
                  font-weight: 400;
                  color: ${Maincolor.btn};
                }
              }
            }
          }
        }
        .move-button {
          > button {
            width: 220px;
            height: 50px;
            border: none;
            border-radius: 6px;
            color: ${Maincolor.white};
            background: ${Maincolor.admintxt};
            cursor: pointer;
          }
        }
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding-top: 40px;
    > button {
      width: 150px;
      height: 50px;
      color: ${Maincolor.white};
      border: none;
      border-radius: 6px;
      cursor: pointer;
      :first-of-type {
        background: ${Maincolor.input};
      }
      :last-of-type {
        background: ${Maincolor.grayDeep};
      }
    }
  }
`;
