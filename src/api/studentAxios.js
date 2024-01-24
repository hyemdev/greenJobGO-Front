import { client } from "../api/client";

export const getStudentInfo = async (setFile, setStd) => {
  try {
    const res = await client.get(`/student`);

    const { std, file } = res.data;
    setStd(std);
    setFile(file);
  } catch (error) {
    console.log(error);
  }
};
