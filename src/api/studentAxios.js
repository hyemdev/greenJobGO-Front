import { client } from "../api/client";

export const getStudentInfo = async setErrorInfo => {
  try {
    const res = await client.get(`/student`);

    const { std, file } = res.data;

    console.log(res.data);
    console.log(res.data);

    return { std, file };
  } catch (error) {
    setErrorInfo(`Student Info: ${error.message}`);
  }
};
