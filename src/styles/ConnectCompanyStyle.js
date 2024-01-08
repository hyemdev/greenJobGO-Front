import styled from "@emotion/styled";

export const ConnectCompanyWrap = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  .connect-company-inner {
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 40px;
      li {
        width: 320px;
        height: 170px;
        padding: 20px;
        border: 1px solid #d9d9d9;
        border-radius: 12px;
        h3 {
          font-size: 18px;
          margin-bottom: 20px;
        }
        .company-info {
          font-size: 15px;
          div {
            letter-spacing: 1;
            :first-of-type {
              display: flex;
              gap: 40px;
              span {
                :first-of-type {
                  font-weight: 500;
                }
              }
              margin-bottom: 10px;
            }
            :last-of-type {
              display: flex;
              gap: 10px;
              span {
                line-height: 18px;
                :first-of-type {
                  display: flex;
                  gap: 10px;
                  font-weight: 500;
                }
              }
            }
          }
        }
      }
    }
  }
`;
