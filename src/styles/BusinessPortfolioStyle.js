import styled from "@emotion/styled";
import { Maincolor, ellipsis } from "./GlobalStyle";

export const BusinessPortfolioWrap = styled.div`
  margin: 0 auto;
  width: 1400px;
  height: 100%;
  & > h2 {
    color: ${Maincolor.black};
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
  }
  @media all and (max-width: 767px) {
    width: 360px;
    height: 150px;
    & > h2 {
      color: ${Maincolor.black};
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

// 검색바 스타일
export const PfSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background: ${Maincolor.search};
  margin-top: 40px;
  .student-portfolio-search {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 30px 0;
    label {
      font-size: 16px;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: -0.64px;
      margin-right: 16px;
      margin-left: 30px;
    }
    & li > select {
      border: 1px solid ${Maincolor.input};
      width: 154px;
      height: 40px;
      padding: 8px 12px;
      align-items: center;
      gap: 10px;
    }
    & li > div > input {
      width: 215px;
      height: 40px;
      border: 1px solid ${Maincolor.input};
      border-radius: 5px;
      padding: 8px 12px;
    }
    & li > button {
      margin-left: 270px;
      width: 180px;
      height: 50px;
    }
    /* select창 화살표 커스텀 */
    .select-wrap {
      background: linear-gradient(
        to right,
        ${Maincolor.search} 33.5%,
        ${Maincolor.white} 33.5%
      );
      select {
        -o-appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0;
        background: url(${process.env.PUBLIC_URL}/assets/Arrowdown.png)
          no-repeat calc(100% - 12px) 50%/11px auto;
        padding: 0 28px 0 10px;
      }
      select::-ms-expand {
        display: none;
      }
    }
  }
  @media all and (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 150px;
    background: ${Maincolor.search};
    margin-top: 20px;
    .student-portfolio-search {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 10px 20px;
      gap: 10px;
      margin: 10px 0;
      height: 150px;
      > li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        > label {
          margin-right: 39px;
        }
        .subjectname-form {
          > label {
            margin-right: 28px;
          }
        }
        .studentname-form {
          > label {
            margin-right: 5px;
          }
        }
      }
      label {
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        letter-spacing: -0.4px;
        margin-right: 0;
        margin-left: 0;
      }
      & li > select {
        border: 1px solid ${Maincolor.input};
        width: 250px;
        height: 25px;
        padding: 8px 12px;
        align-items: center;
        gap: 10px;
      }
      & li > div > input {
        width: 250px;
        height: 25px;
        border: 1px solid ${Maincolor.input};
        border-radius: 4px;
        padding: 8px 10px;
      }
      & li > button {
        font-size: 10px;
        margin-left: 270px;
        width: 50px;
        height: 25px;
        border: none;
        border-radius: 4px;
      }
      /* select창 화살표 커스텀 */
      .select-wrap {
        background: linear-gradient(
          to right,
          ${Maincolor.search} 20%,
          ${Maincolor.white} 20%
        );
        select {
          -o-appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border-radius: 0;
          background: url(${process.env.PUBLIC_URL}/assets/Arrowdown.png)
            no-repeat calc(100% - 12px) 50%/-1px auto;
          padding: 0 28px 0 10px;
        }
        select::-ms-expand {
          display: none;
        }
      }
    }
  }
`;

export const ContentListWrap = styled.div`
  width: 1400px;
  margin: 0 auto;
  .content-top-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid ${Maincolor.maingray};
    margin-top: 30px;
    & > li {
      color: ${Maincolor.black};
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      & svg {
        width: 24px;
        height: 24px;
        cursor: pointer;
        margin-left: 20px;
      }
    }
  }
  @media all and (max-width: 767px) {
    width: 360px;
    margin: 0 auto;
    .content-top-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 0;
      border-bottom: 1px solid ${Maincolor.maingray};
      margin-top: 30px;
      & > li {
        color: ${Maincolor.black};
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        & svg {
          width: 24px;
          height: 24px;
          cursor: pointer;
          margin-left: 20px;
        }
      }
    }
  }
`;

export const ContentListViewer = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  width: 1400px;
  overflow: auto;
  /* 갤러리형 스타일 */
  .galleryStyle {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    gap: 40px;
    padding: 30px 0;
    .gallerybox {
      width: 440px;
      height: 382px;
      border-radius: 10px;
      border: 1px solid ${Maincolor.maingray};
      padding: 40px;
      display: flex;
      justify-content: left;
      flex-direction: column;
      .thumb-img {
        width: 360px;
        height: 230px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .student-name {
        margin-top: 15px;
        font-size: 16px;
        font-weight: 500;
        color: ${Maincolor.black};
        letter-spacing: -0.24px;
      }
      .subject-name {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 400;
        color: ${Maincolor.btn};
        letter-spacing: -0.24px;
      }
    }
  }

  /* 게시판형 스타일 */
  .boardStyle {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 30px 0;
    .boardbox {
      width: 1400px;
      height: 270px;
      border-radius: 10px;
      border: 1px solid ${Maincolor.maingray};
      padding: 30px 40px;
      display: flex;
      justify-content: left;
      align-items: center;
      .thumb-img {
        width: 295px;
        height: 210px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .board-list {
        display: flex;
        justify-content: left;
        flex-direction: column;
        width: 600px;
        margin-left: 60px;
        color: ${Maincolor.black};

        .oneword {
          font-size: 20px;
          font-weight: 500;
        }
        .student-name {
          margin-top: 14px;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: -0.24px;
        }
        .subject-name {
          margin-top: 52px;
          font-size: 14px;
          font-weight: 400;
          ${ellipsis}
          & > span:first-of-type {
            display: inline-block;
            width: 70px;
            font-weight: 500;
            /* margin-right: 10px; */
          }
        }
        .date {
          margin-top: 13px;
          font-size: 14px;
          font-weight: 400;
          & > span:first-of-type {
            display: inline-block;
            width: 70px;
            font-weight: 500;
            /* margin-right: 10px; */
          }
        }
      }
      .detail-view-btn {
        width: 220px;
        margin-left: 167px;
        & button {
          width: 220px;
        }
      }
    }
  }
  @media all and (max-width: 767px) {
    margin: 0 auto;
    padding: 10px 0;
    width: 360px;
    overflow: auto;
    .boardStyle {
      display: flex;
      justify-content: flex-start;
      gap: 5px;
      padding: 10px 0;
      .boardbox {
        width: 360px;
        height: 108px;
        border-radius: 10px;
        border: 1px solid ${Maincolor.maingray};
        padding: 5px 10px;
        display: flex;
        justify-content: left;
        align-items: center;
        .thumb-img {
          width: 86px;
          height: 62px;
          & > img {
            width: 86px;
            height: 62px;
          }
        }
        .board-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 4px;
          color: ${Maincolor.black};

          .oneword {
            font-size: 9px;
            font-weight: 500;
          }
          .student-name {
            width: 100%;
            margin-top: 8px;
            font-size: 8px;
            font-weight: 500;
            letter-spacing: -0.24px;
          }
          .subject-name {
            width: 150px;
            margin-top: 10px;
            font-size: 8px;
            font-weight: 400;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            & > span:first-of-type {
              display: inline-block;
              width: 34px;
              font-weight: 500;
              margin-right: 1px;
            }
          }
          .date {
            width: 150px;
            margin-top: 5px;
            font-size: 8px;
            font-weight: 400;
            & > span:first-of-type {
              display: inline-block;
              width: 34px;
              font-weight: 500;
              margin-right: 1px;
            }
          }
        }
        .detail-view-btn {
          width: 76px;
          margin-left: 7px;
          & button {
            font-size: 6px;
            width: 76px;
            height: 18px;
            border: none;
            border-radius: 2px;
            background: ${Maincolor.admintxt};
          }
        }
      }
    }
  }
  @media all and (max-width: 767px) {
    .galleryStyle {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      padding: 10px 0;

      .gallerybox {
        width: 335px;
        height: 250px;
        border-radius: 10px;
        border: 1px solid ${Maincolor.maingray};
        padding: 15px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .thumb-img {
          width: 300px;
          height: 150px;
          & > img {
            width: 300px;
            height: 150px;
            object-fit: fill;
          }
        }
        .student-name {
          margin-top: 15px;
          font-size: 12px;
          font-weight: 500;
          color: ${Maincolor.black};
          letter-spacing: -0.24px;
        }
        .subject-name {
          margin-top: 8px;
          font-size: 11px;
          font-weight: 400;
          color: ${Maincolor.btn};
          letter-spacing: -0.24px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;
