import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const AddPortfolioWrap = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 750px;
  padding-bottom: 80px;
  > div {
    padding: 0 0 40px 0;
    :first-of-type {
      h2 {
        font-size: 24px;
        font-weight: 700;
        color: ${Maincolor.black};
      }
    }
    :last-of-type {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      > button {
        width: 150px;
        height: 50px;
        color: ${Maincolor.white};
        background: ${Maincolor.admintxt};
        border: none;
        border-radius: 6px;
        cursor: pointer;
        :first-of-type {
          width: 150px;
          height: 50px;
          color: ${Maincolor.white};
          background: ${Maincolor.btn};
        }
      }
    }
  }
`;

export const AddPortfolioContent = styled.ul`
  > li {
    width: 100%;
    height: 100%;
    border: 1px solid ${Maincolor.maingray};
    border-radius: 12px;
    :nth-of-type(1) {
      height: 390px;
      margin-bottom: 40px;
      > div {
        :first-of-type {
          display: flex;
          align-items: center;
          width: 100%;
          height: 70px;
          font-size: 20px;
          font-weight: 500;
          color: ${Maincolor.white};
          border-radius: 12px 12px 0 0;
          background: ${Maincolor.sectiontitle};
          padding: 20px 40px;
        }
        :last-of-type {
          width: 100%;
          padding: 40px;
          .name {
            font-size: 20px;
            font-weight: 500;
            color: ${Maincolor.black};
          }
          .age {
            font-size: 16px;
            font-weight: 500;
            color: ${Maincolor.grayDeep};
          }
        }
      }
      .info {
        display: flex;
        padding: 0 40px;
        > li {
          width: 50%;
          :first-of-type {
            > div {
              margin-bottom: 24px;
              span {
                font-size: 16px;
                font-weight: 400;
                color: ${Maincolor.black};
                padding-right: 18px;
                :first-of-type {
                  font-weight: 700;
                }
              }
              :nth-of-type(2) {
                > span {
                  margin-right: 15px;
                }
              }
              :nth-of-type(4) {
                > input {
                  width: 570px;
                  height: 40px;
                  border: 1px solid ${Maincolor.input};
                  border-radius: 4px;
                  padding: 0 10px;
                }
                > p {
                  color: ${Maincolor.red};
                  padding: 8px 0 0 70px;
                }
              }
            }
          }
          :last-of-type {
            > div {
              margin-bottom: 23px;
              span {
                font-size: 16px;
                font-weight: 400;
                color: ${Maincolor.black};
                padding-right: 18px;
                :first-of-type {
                  font-weight: 700;
                }
              }
              :nth-of-type(3) {
                > span {
                  margin-right: 30px;
                }
              }
            }
          }
        }
      }
    }
    :nth-of-type(2) {
      height: 410px;
      margin-bottom: 40px;
    }
    :nth-of-type(3) {
      max-height: 750px;
      margin-bottom: 40px;
    }
  }
`;

export const AddPofolResumeWrap = styled.div`
  > div {
    height: 100%;
    padding: 0 40px;
    :nth-of-type(1) {
      height: 70px;
      line-height: 70px;
      border-radius: 12px 12px 0 0;
      background: ${Maincolor.sectiontitle};
      padding: 0 40px;
      > h2 {
        font-size: 20px;
        font-weight: 500;
        color: ${Maincolor.white};
      }
    }
    :nth-of-type(2) {
      padding-top: 40px;
      > span {
        font-size: 18px;
        font-weight: 500;
        color: ${Maincolor.black};
      }
      .oneword {
        padding-top: 14px;
        > input {
          width: 690px;
          height: 40px;
          border: 1px solid ${Maincolor.input};
          padding: 0 10px;
          border-radius: 4px;
        }
        > p {
          color: ${Maincolor.red};
          padding: 8px 0 0 4px;
        }
      }
    }
    :nth-of-type(3) {
      padding-top: 20px;
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
      }
      > p {
        color: ${Maincolor.red};
        padding: 8px 0 0 4px;
      }
    }
  }
`;

export const AddPofolPofolWrap = styled.div`
  .title {
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
  .inner {
    overflow-y: auto;
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
        }
        > p {
          color: ${Maincolor.red};
          padding: 8px 0 0 4px;
        }
      }
      :last-of-type {
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
                        gap: 5px;
                        padding: 0 13px 0 13px;
                        :last-of-type {
                          img {
                            cursor: pointer;
                          }
                        }
                        a {
                          font-size: 14px;
                          font-weight: 400;
                          color: ${Maincolor.black};
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
