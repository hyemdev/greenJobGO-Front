import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const AddResumeWrap = styled.div`
  padding-top: 30px;
  width: 1400px;
  .resume-title {
    padding: 0 0 40px 0;
    h2 {
      font-size: 24px;
      font-weight: 700;
      color: ${Maincolor.black};
    }
  }
  .resume-buttons {
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

export const AddResumeBaseInfo = styled.ul`
  border: 1px solid ${Maincolor.maingray};
  border-radius: 12px;
  margin-bottom: 40px;
  .baseinfo-inner {
    width: 100%;
    height: 100%;
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
          margin-right: 14px;
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
              display: flex;
              width: 900px;
              > div {
                :first-of-type {
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
                :last-of-type {
                  display: flex;
                  gap: 5px;
                  padding-left: 20px;
                  > button {
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
            }
          }
        }
        :last-of-type {
          height: 110px;
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
`;

export const AddResumeItem = styled.div`
  border: 1px solid ${Maincolor.maingray};
  border-radius: 12px;
  .resumeitem-inner {
    width: 100%;
    height: 100%;
    > div {
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
        padding: 40px 40px 25px 40px;
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
        padding: 0 40px 45px 40px;
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
            gap: 5px;
            padding-left: 10px;
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
    }
  }
`;
