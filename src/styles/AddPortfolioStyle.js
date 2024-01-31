import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const AddPortfolioWrap = styled.div`
  padding-top: 30px;
  width: 1400px;
  .addpofol-title {
    padding: 0 0 40px 0;
    h2 {
      font-size: 24px;
      font-weight: 700;
      color: ${Maincolor.black};
    }
  }
  .addpofol-content {
    border: 1px solid ${Maincolor.maingray};
    border-radius: 12px;
  }
  .addpofol-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px 0 20px 0;
    > button {
      width: 150px;
      height: 50px;
      color: ${Maincolor.white};
      border: none;
      border-radius: 6px;
      cursor: pointer;
      background: ${Maincolor.btn};
    }
  }
`;

export const AddPofolPofolWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 750px;
  .addpofol-header {
    width: 100%;
    height: 70px;
    border-radius: 12px 12px 0 0;
    background: ${Maincolor.sectiontitle};
    padding: 0 40px;
    > h2 {
      font-size: 20px;
      font-weight: 500;
      line-height: 70px;
      color: ${Maincolor.white};
    }
  }
  .addpofol-inner {
    overflow-y: auto;
    max-height: 100%;
    > div {
      padding: 0 40px;
      :first-of-type {
        padding-top: 40px;
        > span {
          font-size: 18px;
          font-weight: 500;
          color: ${Maincolor.black};
        }
        .file-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 14px;
          .upload-name {
            display: inline-block;
            width: 570px;
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
            border: 1px solid ${Maincolor.input};
            border-radius: 4px;
            color: ${Maincolor.input};
          }
          label {
            display: inline-block;
            width: 110px;
            height: 40px;
            line-height: 40px;
            color: ${Maincolor.white};
            border-radius: 6px;
            text-align: center;
            background-color: ${Maincolor.grayDeep};
            cursor: pointer;
          }
          input[type="file"] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
          }
          > div {
            display: flex;
            padding-left: 10px;
            gap: 5px;
            button {
              width: 85px;
              height: 40px;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              :first-of-type {
                color: ${Maincolor.white};
                background: ${Maincolor.sectiontitle};
              }
              :last-of-type {
                color: ${Maincolor.sectiontitle};
                background: ${Maincolor.white};
                border: 1px solid ${Maincolor.sectiontitle};
              }
            }
          }
        }
        > p {
          color: ${Maincolor.red};
          padding: 8px 0 0 4px;
        }
      }
      :last-of-type {
        max-height: 100%;
        padding-top: 46px;
        div {
          :nth-of-type(1) {
            display: flex;
            align-items: center;
            gap: 18px;
            font-size: 18px;
            font-weight: 500;
            color: ${Maincolor.black};
            > p {
              font-size: 14px;
              font-weight: 400;
              color: ${Maincolor.red};
            }
          }
          :nth-of-type(2) {
            padding: 14px 0;
            > button {
              width: 690px;
              height: 40px;
              color: ${Maincolor.white};
              background: ${Maincolor.grayDeep};
              border: none;
              border-radius: 6px;
              cursor: pointer;
            }
          }
          :nth-of-type(3) {
            display: flex;
            flex-direction: column;
            gap: 14px;
            padding-bottom: 40px;
            > ul {
              display: flex;
              flex-direction: column;
              gap: 5px;
              li {
                :first-of-type {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  > div {
                    :nth-of-type(1) {
                      display: flex;
                      justify-content: space-between;
                      width: 690px;
                      height: 40px;
                      border-radius: 6px;
                      background: ${Maincolor.search};
                      > div {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 0 13px 0 13px;
                        a {
                          font-size: 14px;
                          font-weight: 400;
                          color: ${Maincolor.black};
                        }
                      }
                      .main-pofol {
                        font-size: 14px;
                        background: ${Maincolor.admintxt};
                        border-radius: 4px;
                        > span {
                          width: 70px;
                          height: 28px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          gap: 5px;
                          color: ${Maincolor.white};
                        }
                      }
                      .delete-file {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img {
                          cursor: pointer;
                        }
                      }
                    }
                    :nth-of-type(2) {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      gap: 8px;
                      padding-left: 16px;
                    }
                  }
                }
                :last-of-type {
                  width: 690px;
                  height: 60px;
                  line-height: 18px;
                  padding: 10px;
                  border: 1px solid ${Maincolor.input};
                  border-radius: 6px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
