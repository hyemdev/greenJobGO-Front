import styled from "@emotion/styled";

export const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const LoginInner = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    :first-of-type {
      width: 50%;
      img {
        width: 100%;
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
      .login-radio {
        padding: 20px 0 10px 65px;
        > input[type="radio"] {
          display: none;
        }
        > input[type="radio"] + label {
          display: inline-block;
          cursor: pointer;
          height: 45px;
          width: 160px;
          border: 1px solid #d9d9d9;
          line-height: 45px;
          text-align: center;
          font-size: 18px;
        }
        > input[type="radio"] + label {
          background-color: #fff;
          color: #d9d9d9;
        }
        > input[type="radio"]:checked + label {
          background-color: #d9d9d9;
          color: #333;
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
          input {
            width: 440px;
            height: 40px;
            border: 1px solid black;
            border-radius: 6px;
            padding: 0 5px;
          }
          button {
            width: 440px;
            height: 50px;
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            background: #6d6d6d;
            border: 1px solid;
            border-radius: 6px;
          }
        }
      }
    }
  }
`;
