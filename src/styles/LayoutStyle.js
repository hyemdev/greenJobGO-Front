import styled from "@emotion/styled";

export const LayoutStyle = styled.div`
  position: relative;
`;
export const ContentWrap = styled.div`
  width: 1400px;
  width: 100%;
  min-width: 280px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px 0;
  & > div {
    /* width: 1660px; */
  }
  @media all and (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const NoitemList = styled.div`
  margin: 0 auto;
  width: 1400px;
  height: 295px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  & > img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  & > P {
    font-size: 16px;
    font-weight: 500;
  }
  @media all and (max-width: 767px) {
    margin: 0 auto;
    width: 360px;
    height: 295px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    & > img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
    & > P {
      font-size: 12px;
      font-weight: 500;
    }
  }
`;
