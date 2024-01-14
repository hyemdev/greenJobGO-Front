import styled from "@emotion/styled";

export const PagiWrap = styled.div`
  position: fixed;
  left: 40.5%;
  bottom: 30px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    li {
      display: inline-block;
      width: 25px;
      height: 25px;
      line-height: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #000;
        font-size: 15px;
        line-height: 15px;
      }
    }
    .active a {
      color: #fff;
    }
    .active {
      background-color: #228fcf;
    }
  }
`;
