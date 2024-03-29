import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const AcceptModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
  .content-wrap {
    position: absolute;
    width: 410px;
    height: 141px;
    top: 50%;
    left: 50%;
    padding: 15px 20px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background-color: ${Maincolor.white};
    transform: translate(-50%, -50%);
    animation: modal-show 0.3s;
    z-index: 1000;
    > div {
      text-align: center;
    }
    h2 {
      display: flex;
      font-size: 18px;
      width: 100%;
    }
    .header {
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      cursor: pointer;
    }
    .content {
      display: flex;
      font-size: 14px;
      font-weight: 400;
    }
    .btns {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 5px;
      button {
        width: 65px;
        height: 32px;
        line-height: 32px;
        background: #176b87;
        color: #fff;
        border: 1px solid;
        border-radius: 4px;
        cursor: pointer;
        :first-of-type {
          background: #7e7e7e;
        }
        :last-of-type {
          background: #228fcf;
        }
      }
    }
  }
`;

export const CancelModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
  .content-wrap {
    position: absolute;
    width: 410px;
    height: 141px;
    top: 50%;
    left: 50%;
    padding: 15px 20px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background-color: ${Maincolor.white};
    transform: translate(-50%, -50%);
    animation: modal-show 0.3s;
    z-index: 1000;
    > div {
      text-align: center;
    }
    .header {
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      cursor: pointer;
    }
    .content {
      display: flex;
      font-size: 14px;
      font-weight: 400;
    }
    .btns {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 5px;
      button {
        width: 65px;
        height: 32px;
        line-height: 32px;
        background: #176b87;
        color: #fff;
        border: 1px solid;
        border-radius: 4px;
        cursor: pointer;
        :first-of-type {
          background: #7e7e7e;
        }
        :last-of-type {
          background: #228fcf;
        }
      }
    }
  }
`;
