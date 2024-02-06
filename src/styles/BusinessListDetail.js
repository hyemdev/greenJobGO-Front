import styled from "@emotion/styled";
import { Maincolor, ellipsis } from "./GlobalStyle";

export const ListDetailWrapSty = styled.div`
  margin: 0 auto;
  width: 1400px;
  & > h2 {
    color: ${Maincolor.black};
    font-size: 24px;
    font-weight: 700;
    /* margin-top: 20px; */
    margin-bottom: 40px;
  }
  .sub-title {
    width: 1400px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 12px 12px 0px 0px;
    background: ${Maincolor.sectiontitle};
    color: ${Maincolor.white};
    padding: 20px 40px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.3px;
    line-height: 1.5;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    > button {
      width: 180px;
      height: 50px;
      color: ${Maincolor.white};
      background: ${Maincolor.grayDeep};
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  @media all and (max-width: 767px) {
    margin: 0 auto;
    /* width: 100vw; */
    width: 360px;
    /* min-width: 340px; */
    min-width: 350px;
    padding: 20px 5px;
    & > h2 {
      color: ${Maincolor.black};
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .sub-title {
      width: 350px;
      height: 42px;
      flex-shrink: 0;
      border-radius: 12px 12px 0px 0px;
      background: ${Maincolor.sectiontitle};
      color: ${Maincolor.white};
      padding: 11px 20px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.3px;
      line-height: 1.5;
    }
  }
`;

export const DefaultInfo = styled.div`
  margin: 0 auto;
  height: 320px;
  border-radius: 0 0 10px 10px;
  border: 1px solid ${Maincolor.maingray};
  margin-bottom: 40px;
  padding: 40px;
  display: flex;
  justify-content: flex-start;
  .thumb-img {
    width: 295px;
    height: 240px;
    margin-right: 40px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .info {
    color: ${Maincolor.black};
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.3px;

    .text-upper {
      margin-bottom: 40px;
      display: flex;
      justify-content: flex-start;
      text-align: center;
      .name {
        font-size: 20px;
        font-weight: 500;
        margin-right: 8px;
        line-height: 1.6;
      }
      .age {
        color: ${Maincolor.grayDeep};
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.24px;
        line-height: 2.2;
      }
    }
    .text-info {
      height: 164px;
      display: flex;
      gap: 24px;
      > ul {
        display: flex;
        flex-direction: column;
        gap: 24px;
        :first-of-type {
          width: 550px;
          > li {
            display: flex;
            gap: 18px;
            :nth-of-type(1) {
              display: inline-block;
              width: 560px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              > span {
                :last-of-type {
                  padding-left: 18px;
                }
              }
            }
            :nth-of-type(2) {
              > span {
                :last-of-type {
                  padding-left: 16px;
                }
              }
            }
            :nth-of-type(4) {
              width: 1022px;
              height: 26px;
              > span {
                line-height: 26px;
              }
              > div {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 10px;
                > div {
                  display: flex;
                  align-items: center;
                  color: ${Maincolor.black};
                  background: ${Maincolor.search};
                  border-radius: 6px;
                  padding: 5px 10px;
                  > span {
                    font-size: 16px;
                    font-weight: 400;
                  }
                }
              }
            }
            > span {
              font-size: 16px;
              font-weight: 400;
              :first-of-type {
                font-weight: 700;
              }
            }
          }
        }

        :last-of-type {
          width: 50%;
          height: 110px;
          li > span {
            font-size: 16px;
            :first-of-type {
              font-weight: 700;
            }
            :last-of-type {
              font-weight: 400;
              padding-left: 16px;
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 767px) {
    min-width: 350px;
    height: auto;
    /* max-height: 800px; */
    margin: 0 auto;
    border-radius: 0 0 10px 10px;
    border: 1px solid ${Maincolor.maingray};
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    .thumb-img {
      > img {
        width: 310px;
        height: 250px;
        object-fit: contain;
      }
    }
    .info {
      color: ${Maincolor.black};
      letter-spacing: -0.3px;
      margin-top: 20px;
      height: auto;

      .text-upper {
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-start;
        text-align: center;
        .name {
          font-size: 14px;
          font-weight: 500;
          margin-right: 8px;
          line-height: 1.6;
        }
        .age {
          color: ${Maincolor.maingray};
          font-size: 12px;
          font-weight: 500;
          letter-spacing: -0.24px;
          line-height: 2.2;
        }
      }
      .text-info {
        width: 320px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
        ul {
          :first-of-type {
            width: 320px;
            gap: 20px;
            & li {
              display: flex;
              > span {
                :first-of-type {
                  font-size: 12px;
                }
                :last-of-type {
                  padding-left: 8px;
                  font-size: 12px;
                }
              }
              /* 과정명 */
              :nth-of-type(1) {
                display: block;
                width: 320px;
                /* white-space: wrap; */
              }
              /* 주소 */
              :nth-of-type(2) {
                display: block;
              }
              /* 이메일 */
              :nth-of-type(3) {
                display: block;
              }
              /* 자격증 */
              :nth-of-type(4) {
                width: 300px;
                height: auto;
                > span {
                  font-size: 12px;
                  line-height: 16px;
                  padding-left: 0;
                }
                > div {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 5px;
                  > div {
                    display: flex;
                    /* align-items: center; */
                    color: ${Maincolor.black};
                    background: ${Maincolor.search};
                    border-radius: 6px;
                    padding: 3px 5px;
                    > span {
                      font-size: 12px;
                      font-weight: 400;
                    }
                  }
                }
              }
            }
          }
        }

        /* 수강기간 */
        ul {
          :last-of-type {
            height: 100px;
            margin-top: 10px;
            width: 320px;
            li > span {
              :first-of-type {
                width: 50px;
                font-size: 12px;
              }
              :last-of-type {
                padding-left: 8px;
                width: 250px;
                font-size: 12px;
              }
            }
            li {
              font-size: 12px;
              > span {
                :first-of-type {
                  font-weight: 700;
                }
                :last-of-type {
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ResumeInfo = styled.div`
  margin: 0 auto;
  height: 263px;
  border-radius: 0 0 10px 10px;
  border: 1px solid ${Maincolor.maingray};
  margin-bottom: 40px;
  padding: 40px;
  color: ${Maincolor.black};
  .oneword {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.27px;
    margin-bottom: 40px;
    line-height: 1.4;
    & > ul > li:first-of-type {
      margin-bottom: 14px;
    }
    & > ul > li:nth-of-type(2) {
      font-size: 16px;
    }
  }
  .resume-file {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.27px;
    line-height: 1.4;

    & > ul > li:first-of-type {
      margin-bottom: 14px;
    }
    & > ul > li:nth-of-type(2) {
      width: 690px;
      height: 40px;
      font-weight: 400;
      font-size: 14px;
      border-radius: 6px;
      background: ${Maincolor.search};
      padding: 10px;
      & > img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        margin-right: 8px;
      }
    }
  }
  @media all and (max-width: 767px) {
    min-width: 350px;
    margin: 0 auto;
    height: 190px;
    border-radius: 0 0 10px 10px;
    border: 1px solid ${Maincolor.maingray};
    margin-bottom: 20px;
    padding: 20px;
    color: ${Maincolor.black};
    .oneword {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: -0.27px;
      line-height: 1.4;
      margin-bottom: 20px;

      & > ul > li:first-of-type {
        font-weight: 700;
        margin-bottom: 10px;
      }
      & > ul > li:nth-of-type(2) {
        font-size: 12px;
        font-weight: 400;
      }
    }
    .resume-file {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: -0.27px;
      line-height: 1.4;

      & > ul > li:first-of-type {
        margin-bottom: 10px;
      }
      & > ul > li:nth-of-type(2) {
        width: 305px;
        height: 27px;
        font-weight: 400;
        font-size: 12px;
        border-radius: 6px;
        background: ${Maincolor.search};
        padding: 5px;
        ${ellipsis.one}
        & > img {
          width: 20px;
          height: 20px;
          object-fit: contain;
          margin-right: 8px;
        }
      }
    }
  }
`;

export const PortfolioInfo = styled.div`
  margin: 0 auto;
  max-height: 408px;
  border-radius: 0 0 10px 10px;
  border: 1px solid ${Maincolor.maingray};
  margin-bottom: 40px;
  padding: 40px;
  color: ${Maincolor.black};
  overflow-y: auto;

  .portfolio-file-list {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 14px;
    > li:first-of-type {
      width: 690px;
      height: 40px;
      border-radius: 6px 6px 0px 0px;
      background: ${Maincolor.maingray};
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        margin-right: 8px;
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
    }
    > li:last-of-type {
      width: 690px;
      height: 60px;
      border-radius: 0px 0px 6px 6px;
      border: 1px solid ${Maincolor.maingray};
      padding: 10px;
    }
  }
  .portfolio-link-list {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 14px;
    > li:first-of-type {
      width: 690px;
      height: 40px;
      border-radius: 6px 6px 0px 0px;
      background: ${Maincolor.maingray};
      padding: 10px;
      > img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        margin-right: 8px;
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
    }
    > li:last-of-type {
      width: 690px;
      height: 60px;
      border-radius: 0px 0px 6px 6px;
      border: 1px solid ${Maincolor.maingray};
      padding: 10px;
    }
  }

  @media all and (max-width: 767px) {
    min-width: 350px;
    max-height: 100%;
    margin: 0 auto;
    border-radius: 0 0 10px 10px;
    border: 1px solid ${Maincolor.maingray};
    margin-bottom: 20px;
    padding: 20px;
    color: ${Maincolor.black};
    /* overflow-y: auto; */

    .portfolio-file-list {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 12px;
      & > li:first-of-type {
        width: 305px;
        height: 27px;
        border-radius: 6px 6px 0px 0px;
        background: ${Maincolor.maingray};
        padding: 5px;
        ${ellipsis.one}

        & > img {
          width: 15px;
          height: 15px;
          margin-bottom: 3px;
          object-fit: contain;
          margin-right: 5px;
        }
        .main-pofol {
          font-size: 12px;
          background: ${Maincolor.admintxt};
          border-radius: 4px;
          > span {
            width: 50px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            color: ${Maincolor.white};
          }
        }
      }
      & > li:nth-of-type(2) {
        ${ellipsis.one}
        width: 305px;
        height: 60px;
        border-radius: 0px 0px 6px 6px;
        border: 1px solid ${Maincolor.maingray};
        padding: 5px;
      }
    }
    .portfolio-link-list {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 12px;
      & > li:first-of-type {
        width: 305px;
        height: 27px;
        border-radius: 6px 6px 0px 0px;
        background: ${Maincolor.maingray};
        padding: 5px;
        ${ellipsis.one}

        & > img {
          width: 15px;
          height: 15px;
          margin-bottom: 3px;
          object-fit: contain;
          margin-right: 5px;
        }
        .main-pofol {
          font-size: 12px;
          background: ${Maincolor.admintxt};
          border-radius: 4px;
          > span {
            width: 50px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            color: ${Maincolor.white};
          }
        }
      }
      & > li:nth-of-type(2) {
        ${ellipsis.one}
        width: 305px;
        height: 60px;
        border-radius: 0px 0px 6px 6px;
        border: 1px solid ${Maincolor.maingray};
        padding: 5px;
      }
    }
  }
`;
