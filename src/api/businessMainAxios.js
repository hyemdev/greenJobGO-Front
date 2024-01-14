import { client } from "./client";

//  대분류 카테고리 불러오기
export const getBigcate = async setCategory => {
  console.log("카테정보 불러옵니다");

  try {
    const res = await client.get(`/admin/category`);
    const result = await res.data;
    setCategory(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};