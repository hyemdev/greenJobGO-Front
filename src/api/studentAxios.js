import client from "../api/client";

export const getStudentInfo = async setErrorInfo => {
  try {
    const res = await client.get(`${process.env.REACT_APP_SS_URL}`);

    const { std, file, aboutMeYn, portfolioYn } = res.data;

    return { std, file, aboutMeYn, portfolioYn };
  } catch (error) {
    await setErrorInfo(`Student Info: ${error.message}`);
  }
};
