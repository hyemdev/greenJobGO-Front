import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const MyPortfolioWrap = styled.div`
  width: 1400px;
  height: 100%;
  .btm-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding-top: 40px;
    > button {
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 500;
      color: ${Maincolor.white};
      border: none;
      border-radius: 6px;
      cursor: pointer;
      background: ${Maincolor.btn};
    }
  }
`;

export const MyPortfolioTitle = styled.li`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  padding: 20px 0 40px 0;
`;
export const MyPortfolioButton = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  background: ${Maincolor.search};
  padding: 0 30px 0 40px;
  div {
    > span {
      :nth-of-type(2) {
        font-size: 18px;
      }
      :not(:nth-of-type(2)) {
        font-weight: 400;
      }
    }
    > button {
      width: 180px;
      height: 50px;
      border: none;
      border-radius: 6px;
      color: ${Maincolor.white};
      background: ${Maincolor.btn};
      cursor: pointer;
    }
  }
`;
export const MyPortfolioContent = styled.li`
  margin-top: 40px;
`;
