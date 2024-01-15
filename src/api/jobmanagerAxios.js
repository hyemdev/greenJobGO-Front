import { client } from "./client";

export const getJobManagerInfo = async setmngProflieData => {
  try {
    const res = await client.get(`/company/employee`);
    const result = await res.data;

    console.log("job mng 정보 들어옴", result);
    setmngProflieData(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
