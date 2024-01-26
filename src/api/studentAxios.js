import { client } from "../api/client";

export const getStudentInfo = async (setFile, setStd, setHashSave) => {
  try {
    const res = await client.get(`/student`);

    const { std, file } = res.data;
    setStd(std);
    setFile(file);
    setHashSave(std.certificates);
  } catch (error) {
    console.log(error);
  }
};
