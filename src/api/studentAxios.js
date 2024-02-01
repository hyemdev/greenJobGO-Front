import { client } from "../api/client";

export const getStudentInfo = async setUserInfo => {
  try {
    const res = await client.get(`/student`);

    const { std, file } = res.data;

    return { std, file };
  } catch (error) {
    console.log(error);
  }
};
