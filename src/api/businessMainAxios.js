import client from "../api/client";

//  대분류 카테고리 불러오기
export const getBigcate = async (setCategory, setErrorApiInfo) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_CT_URL}`);
    const result = await res.data;
    setCategory(result);
    return result;
  } catch (error) {
    setErrorApiInfo(`Category: ${error.message}`);
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
    const res = await client.get(`${process.env.REACT_APP_CM_URL}icategory=${clickCate}`);
    const result = await res.data.list;
    // console.log("스와이퍼용 데이터", result);
    setSwiperData(result);
    {
      result.length === 0 ? setNoItem(true) : setNoItem(false);
    }
    return result;
  } catch (error) {
    setErrorApiInfo(`MainPortfolio List: ${error.message}`);
  }
};
