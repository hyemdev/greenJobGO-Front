import client from "../api/client";

export const getStudentInfo = async setErrorInfo => {
  try {
    const res = await client.get(`${process.env.REACT_APP_SS_URL}`);

    const { std, file, aboutMeYn, portfolioYn } = res.data;

    return { std, file, aboutMeYn, portfolioYn };
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 401:
          setErrorInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};
