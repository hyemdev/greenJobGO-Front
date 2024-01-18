import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const PortFolioAddWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: "Pretendard", sans-serif;
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
  .add-modal-inner {
    position: absolute;
    width: 782px;
    height: 494px;
    top: 50%;
    left: 50%;
    text-align: center;
    overflow: hidden;
    border-radius: 10px;
    background-color: ${Maincolor.white};
    transform: translate(-50%, -50%);
    animation: modal-show 0.3s;
    z-index: 99;
    padding-bottom: 40px;
  }
  .add-modal-top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
    > div {
      :last-of-type {
        position: absolute;
        top: 3%.5;
        right: 3.5%;
        font-size: 21px;
        cursor: pointer;
      }
    }
  }
  .add-modal-btm {
    padding: 0px 40px;
    li {
      :nth-of-type(3) {
        padding-top: 14px;
        > textarea {
          width: 702px;
          height: 100px;
          resize: none;
          padding: 10px;
          border: 1px solid #aaa;
          border-radius: 4px;
        }
      }
      :nth-of-type(4) {
        text-align: start;
        padding-top: 14px;
        > span {
          display: block;
          font-size: 14px;
          padding-bottom: 8px;
          color: #eb5757;
        }
      }
      :last-of-type {
        padding-top: 32px;
        > button {
          width: 150px;
          height: 50px;
          font-size: 16px;
          color: #fff;
          background: #6d6d6d;
          border: 1px solid #6d6d6d;
          border-radius: 6px;
          cursor: pointer;
        }
      }
    }
    .radio-box {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 16px;
      padding: 40px 0 14px 0;
      > label {
        :first-of-type {
          margin-right: 18px;
        }
      }
      > input {
        width: 16px;
        height: 16px;
        line-height: 16px;
      }
    }
    .file-box {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 10px;
      .upload-link {
        width: 702px;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #a4a4a4;
        border-radius: 6px;
      }
      .upload-name {
        display: inline-block;
        width: 584px;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border: 1px solid #a4a4a4;
        border-radius: 6px;
        color: #6d6d6d;
      }
      label {
        display: inline-block;
        height: 40px;
        color: #fff;
        border-radius: 6px;
        padding: 10px 30px;
        vertical-align: middle;
        background-color: #6d6d6d;
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
    }
  }
`;