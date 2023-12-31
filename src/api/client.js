import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";

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
    if (response && response.status === 401 && refreshToken) {
      try {
        const { data } = await client.post(`/company/refresh-token`, {
          refreshToken,
        });

        const accessToken = data;
        setCookie("accessToken", accessToken);

        if (config && config.headers && config.headers.Authorization) {
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
export const fetchLogin = async (adminId, password) => {
  try {
    const res = await client.post(`/company/sign-in`, {
      id: adminId,
      pw: password,
    });

    const { data } = res;

    const { role, refreshToken, accessToken } = await data;

    if (role && refreshToken && accessToken) {
      const cookieOptions = {
        path: "/",
        secure: true,
        sameSite: "none",
        httpOnly: true,
      };

      setCookie("refreshToken", refreshToken, cookieOptions);
      setCookie("accessToken", accessToken, cookieOptions);

      return { role, accessToken };
    } else {
      throw new Error("잘못된 응답 형식");
    }
  } catch (error) {
    console.log(error);
    throw new Error("로그인에 실패했습니다.");
  }
};

// 로그아웃 함수
export const postLogout = async (accessToken, refreshToken) => {
  try {
    const res = await client.post("/admin/sign/logout");
    removeCookie(accessToken);
    removeCookie(refreshToken);
  } catch (error) {
    console.log(error);
  }
};
