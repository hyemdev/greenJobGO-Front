import { client } from "./client";

export const getJobManagerInfo = async ({ setmngProflieData, setNothing }) => {
  try {
    const res = await client.get(`/company/employee`);
    const result = await res.data;

    console.log("job mng 정보 들어옴", result);
    setmngProflieData(result);
    setNothing(false);
    if (result.length === 0) {
      setNothing(true);
      console.log("결과 없어요");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};
