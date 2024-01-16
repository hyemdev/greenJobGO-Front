import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const JobManagerBoxWrap = styled.div`
  /* padding: 40px; */
  & > h2 {
    color: ${Maincolor.black};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
    margin-top: 20px;
  }
  .jobmanager-content {
    width: 1400px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    .manager-profile {
      width: 440px;
      height: 543px;
      border-radius: 12px;
      border: 1px ${Maincolor.grayLight2} solid;
      padding: 40px;
      .manager-img {
        width: 170px;
        height: 226px;
        object-fit: contain;
        margin-bottom: 25px;
      }

      .manager-details {
        /* 담당자 한마디 */
        font-weight: 500;
        .manager-word {
          font-size: 20px;
          color: ${Maincolor.black};
          margin-bottom: 14px;
        }
        /* 담당자 이름 */
        .manager-name {
          font-size: 16px;
          margin-top: 14px;
        }
        /* 담당자 연락처 */
        .manager-contact {
          margin-top: 52px;
          li {
            display: flex;
            justify-content: left;
            align-items: center;
            margin-top: 16px;
            span:nth-of-type(1) {
              width: 60px;
              font-size: 14px;
              font-weight: 700;
              margin-right: 10px;
            }
            span:nth-of-type(2) {
              font-weight: 400;
              font-size: 16px;
              letter-spacing: -0.24px;
            }
          }
        }
      }
    }
  }
`;
