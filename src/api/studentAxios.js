import client from "../api/client";

export const getStudentInfo = async setErrorInfo => {
  try {
    const res = await client.get(`/student`);

    const { std, file, aboutMeYn, portfolioYn } = res.data;

    console.log(res.data);
    console.log(res.data);

    return { std, file, aboutMeYn, portfolioYn };
  } catch (error) {
    await setErrorInfo(`Student Info: ${error.message}`);
  }
};
