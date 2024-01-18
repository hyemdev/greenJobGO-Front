import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";
export const ListDetailWrapSty = styled.div`
  margin: 0 auto;
  width: 1400px;
  & > h2 {
    color: ${Maincolor.black};
    font-size: 24px;
    font-weight: 700;
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
`;

export const DefaultInfo = styled.div`
  margin: 0 auto;
  height: 320px;
  border-radius: 10px;
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
        color: ${Maincolor.maingray};
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.24px;
        line-height: 2.2;
      }
    }
    .text-info {
      height: 164px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 24px 0;
      & > li > span:first-of-type {
        display: inline-block;
        width: 60px;
        margin-right: 18px;
        font-weight: 700;
      }
      & > li > span:nth-of-type(2) {
        display: inline-block;
        width: 414px;
      }
    }
  }
`;

export const ResumeInfo = styled.div`
  margin: 0 auto;
  height: 263px;
  border-radius: 10px;
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
`;

export const PortfolioInfo = styled.div`
  margin: 0 auto;
  max-height: 408px;
  border-radius: 10px;
  border: 1px solid ${Maincolor.maingray};
  margin-bottom: 40px;
  padding: 40px;
  color: ${Maincolor.black};
  overflow-y: auto;

  .portfolio-list {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 14px;
    & > li:first-of-type {
      width: 690px;
      height: 40px;
      border-radius: 6px 6px 0px 0px;
      background: ${Maincolor.maingray};
      padding: 10px;
      & > img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        margin-right: 8px;
      }
    }
    & > li:nth-of-type(2) {
      width: 690px;
      height: 60px;
      border-radius: 0px 0px 6px 6px;
      border: 1px solid ${Maincolor.maingray};
      padding: 10px;
    }
  }
`;
