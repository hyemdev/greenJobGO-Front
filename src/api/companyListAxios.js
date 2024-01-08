import { client } from "./client";

export const getCompanyList = async (setListData, setCount, page) => {
  try {
    const res = await client.get(``);
  } catch (error) {
    console.log(error);
  }
};
