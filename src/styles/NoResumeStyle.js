import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const NoResumeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  height: 270px;
  border: 1px solid ${Maincolor.maingray};
  border-radius: 10px;
  margin-top: 40px;
  padding: 50px 0;
  > div {
    width: 100%;
    text-align: center;
    :nth-of-type(1) {
      width: 90px;
      height: 90px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    :nth-of-type(2) {
      font-size: 20px;
      font-weight: 500;
      color: #333333;
    }
    :nth-of-type(3) {
      font-size: 16px;
      font-weight: 400;
      color: ${Maincolor.btn};
    }
  }
`;
