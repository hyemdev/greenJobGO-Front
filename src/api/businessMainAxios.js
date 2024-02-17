import client from "../api/client";

//  대분류 카테고리 불러오기
export const getBigcate = async (setCategory, setErrorApiInfo) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_CT_URL}`);
    const result = await res.data;
    setCategory(result);
    return result;
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 401:
          setErrorApiInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};

//  메인 포트폴리오 불러오기
export const getMainImgList = async ({
  setSwiperData,
  clickCate,
  setNoItem,
  setErrorApiInfo,
}) => {
  try {
    const res = await client.get(
      `${process.env.REACT_APP_CM_URL}icategory=${clickCate}`,
    );
    const result = await res.data.list;
    setSwiperData(result);
    {
      result.length === 0 ? setNoItem(true) : setNoItem(false);
    }
    return result;
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 401:
          setErrorApiInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};
