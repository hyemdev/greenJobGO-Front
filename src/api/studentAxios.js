import { client } from "../api/client";

export const getStudentInfo = async setUserData => {
  try {
    const res = await client.get(`/student`);
    console.log(res.data);
    setUserData(res.data.std);
  } catch (error) {
    console.log(error);
  }
};

export const deleteFile = async () => {
  try {
    const res = await client.delete(`/student/file?istudent=150&ifile=1`);
  } catch (error) {
    console.log(error);
  }
};
