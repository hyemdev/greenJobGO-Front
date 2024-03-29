import styled from "@emotion/styled";

export const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  @media all and (max-width: 767px) {
    width: 100%;
    height: 100vh;
  }
`;

export const LoginInner = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    :first-of-type {
      width: 50%;
      height: 100vh;
      img {
        width: 100%;
        height: 100vh;
      }
    }
    :last-of-type {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      margin-right: 12.5%;
      .login-title {
        padding-left: 65px;
      }
      form {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        gap: 25px;
        div {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 20px;
          font-size: 16px;
          font-weight: 600;
          input {
            width: 440px;
            height: 40px;
            border: 1px solid #aaa;
            border-radius: 4px;
            padding: 0 5px;
          }
          button {
            width: 440px;
            height: 50px;
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            background: #228fcf;
            border: none;
            border-radius: 6px;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media all and (max-width: 767px) {
    width: 100%;
    height: 100%;
    padding-top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    li {
      :first-of-type {
        display: none;
        img {
          display: none;
        }
      }
      :last-of-type {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        margin-right: 0;
        .login-title {
          padding-left: 0;
          img {
            width: 235px;
            height: 20px;
          }
        }
        form {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-direction: column;
          gap: 25px;
          div {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 20px;
            font-size: 16px;
            font-weight: 600;
            label {
              display: none;
            }
            input {
              width: 250px;
              height: 35px;
              border: 1px solid #aaa;
              border-radius: 4px;
              padding: 0 5px;
            }
            button {
              width: 250px;
              height: 40px;
              font-size: 14px;
              font-weight: 600;
              color: #fff;
              background: #228fcf;
              border: none;
              border-radius: 6px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
