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

