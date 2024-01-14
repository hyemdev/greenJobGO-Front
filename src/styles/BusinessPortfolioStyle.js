import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const BusinessPortfolioWrap = styled.div`
  margin: 0 auto;
  width: 1400px;
  height: 100%;
  & > h2 {
    color: ${Maincolor.black};
    font-size: 24px;
    font-weight: 700;
  }
`;

// 검색바 스타일
export const PfSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 1400px;
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
    li > select {
      border: 1px solid ${Maincolor.input};
      width: 154px;
      height: 40px;
      padding: 8px 12px;
      align-items: center;
      gap: 10px;
    }
    li > div > input {
      width: 215px;
      height: 40px;
      border: 1px solid ${Maincolor.input};
      border-radius: 5px;
      padding: 8px 12px;
    }
    li > button {
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
        background: url(${process.env.PUBLIC_URL}/assets/Arrowdown.png)
          no-repeat calc(100% - 12px) 50%/11px auto;
        padding: 0 28px 0 10px;
      }
      select::-ms-expand {
        display: none;
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
    li {
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
        img {
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
        color: ${Maincolor.maingray};
        letter-spacing: -0.24px;
      }
    }
  }

  /* 게시판형 스타일 */
  .boardStyle {
    display: flex;
    justify-content: left;
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
          display: flex;
          justify-content: center;
          & > span:first-of-type {
            width: 50px;
            font-weight: 500;
          }
        }
        .date {
          margin-top: 13px;
          font-size: 14px;
          font-weight: 400;
          & > span:first-of-type {
            width: 50px;
            font-weight: 500;
          }
        }
      }
      .detail-view-btn {
        margin-left: 467px;
        & > button {
          width: 220px;
        }
      }
    }
  }
`;
