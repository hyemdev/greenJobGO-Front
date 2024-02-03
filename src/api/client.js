import axios from "axios";
import {
  getCookie,
  removeCookie,
  setAcessCookie,
  setRefreshCookie,
  setCookie,
} from "./cookie";

// axios 인스턴스 생성
export const client = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 설정
client.interceptors.request.use(
  async config => {
    const token = getCookie("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터 설정
client.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const { config, response } = error;
    const refreshToken = getCookie("refreshToken");
    if (response.status === 401 && refreshToken) {
      try {
        const { data } = await client.post(`/sign/refresh-token`, {
          refreshToken,
        });
        const accessToken = data;
        setCookie("accessToken", accessToken);
        if (config.headers && config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
          const retryResponse = await client(config);
          return retryResponse;
        }
      } catch (error) {
        console.log("토큰 갱신 실패:", error);
      }
    }
    console.error("요청 실패:", error);
    return Promise.reject(error);
  },
);

// 로그인 함수
export const fetchLogin = async (userId, password, setErrorCancelInfo) => {
  try {
    const res = await client.post(`/sign/sign-in`, {
      email: userId,
      pw: password,
    });

    const { role, refreshToken, accessToken, vo, accessTokenTime } =
      await res.data;

    console.log(res.data);
    if (role && refreshToken && accessToken) {
      setCookie("refreshToken", refreshToken);
      setCookie("accessToken", accessToken);

      setErrorCancelInfo("");

      if (role === "ROLE_USER") {
        return { role, accessToken, refreshToken, vo };
      } else if (role === "ROLE_COMPANY") {
        return {
          role,
          accessToken,
          refreshToken,
          vo,
          accessTokenTime,
        };
      }
    } else {
      throw new Error("잘못된 응답 형식");
    }
  } catch (error) {
    if (error.response.status === 432) {
      setErrorCancelInfo("아이디를 확인 해 주세요");
    }
    if (error.response.status === 434) {
      setErrorCancelInfo("비밀번호를 확인 해 주세요");
    }
    if (error.response.status === 435) {
      setErrorCancelInfo("권한이 없습니다. 담당자에게 문의 바랍니다.");
    }
    if (error.response.status === 500) {
      setErrorCancelInfo("서버 오류 입니다.");
    }
    throw new Error("로그인에 실패했습니다.");
  }
};

// 로그아웃 함수
export const postLogout = async (accessToken, refreshToken) => {
  try {
    const res = await client.post("/sign/logout");
    removeCookie(accessToken);
    removeCookie(refreshToken);
  } catch (error) {
    console.log(error);
  }
};
