import { client } from "./client";

export const getCompanyList = async (
  setListData,
  setCount,
  page,
  setErrorApiInfo,
) => {
  try {
    const res = await client.get(`/student/company?page=${page}&size=12`);
    setListData(res.data.list);
    setCount(res.data.page.idx);
  } catch (error) {
    setErrorApiInfo(`Company List : ${error.message}`);
  }
};
