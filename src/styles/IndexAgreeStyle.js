import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

// 개인정보동의 모달 sty
export const ModalWarp = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modal-wrapper {
    width: 784px;
    height: 796px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: ${Maincolor.white};
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
  }

  /* 모달 내용 */
  .modal-content {
    position: relative;
    height: 100%;
    /* padding: 16px; */
    .btns {
      display: flex;
      justify-content: center;
      gap: 20px;
      position: absolute;
      left: calc(50% - 200px);
      bottom: 40px;
      z-index: 99999;
      > button {
        width: 180px;
        height: 50px;
      }
    }
  }

  .modal.openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.1s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// 기업용 정보동의
export const BusinessAgreesSty = styled.div`
  .protect-wrap {
    width: 784px;
    height: 796px;
    margin: 0 auto;
    padding: 40px;
    > img {
      /* width: 384px; */
      width: 100%;
      height: 30px;
      padding: 0 150px;
      object-fit: contain;
      /* margin: 40px; */
      margin-bottom: 70px;
    }
    .protect-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 20px;
      > img {
        width: 26px;
        height: 26px;
        object-fit: contain;
      }
      > span {
        color: ${Maincolor.black};
        font-size: 24px;
        font-weight: 500;
        letter-spacing: -0.36px;
      }
    }
    .content {
      overflow: auto;
      width: 704px;
      height: 463px;
      border: 1px solid ${Maincolor.maingray};
      color: ${Maincolor.black};
      font-size: 14px;
      letter-spacing: -0.21px;
      padding: 20px;
      line-height: 1.6;
      > span {
        font-weight: 500;
      }
      > p {
        font-weight: 400;
      }
    }
    .footer-text {
      padding: 10px;
      /* margin-top: 10px; */
      font-size: 14px;
      font-weight: 500;
      line-height: 1.5;
    }
  }
`;
