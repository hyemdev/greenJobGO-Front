import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// const setAuthHeader = () => {
//   const accessToken = getCookie("accessToken");
//   if (accessToken) {
//     client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//   } else {
//     delete client.defaults.headers.common["Authorization"];
//   }
// };

// 요청 인터셉터 설정
client.interceptors.request.use(
  async config => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      if (!config.headers) {
        config.headers = {};
      }
    }
    return config;
  },
  error => {
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
    if (response?.status === 401 && refreshToken) {
      try {
        const { data } = await client.post(`/sign/refresh-token`, {
          refreshToken,
        });
        const accessToken = data;
        setCookie("accessToken", accessToken);
        if (config?.headers && config.headers?.Authorization) {
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
// client.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async error => {
//     const originalRequest = error.config;
//     const refreshToken = getCookie("refreshToken");
//     if (error.response.status === 401 && refreshToken) {
//       try {
//         const response = await client.post(`/sign/refresh-token`, {
//           refreshToken,
//         });
//         const accessToken = response.data;
//         setCookie("accessToken", accessToken);
//         setAuthHeader();
//         return client(originalRequest);
//       } catch (error) {
//         console.error("토큰 갱신 실패:", error);
//         removeAuth();
//         return Promise.reject(error);
//       }
//     }
//     console.error("요청 실패:", error);
//     return Promise.reject(error);
//   },
// );

// 로그인 함수
export const fetchLogin = async (userId, password, setErrorCancelInfo) => {
  try {
    const res = await client.post(`/sign/sign-in`, {
      email: userId,
      pw: password,
    });
    const { role, refreshToken, accessToken, vo, accessTokenTime } =
      await res.data;
    if (role && refreshToken && accessToken) {
      setCookie("refreshToken", refreshToken);
      setCookie("accessToken", accessToken);
      setErrorCancelInfo("");
      return { role, accessToken, refreshToken, vo, accessTokenTime };
    } else {
      throw new Error("잘못된 응답 형식");
    }
  } catch (error) {
    handleLoginError(error, setErrorCancelInfo);
  }
};

// 토큰삭제 함수
const removeAuth = () => {
  removeCookie("accessToken");
  removeCookie("refreshToken");
  delete client.defaults.headers.common["Authorization"];
};

// 로그아웃 함수
export const postLogout = async () => {
  try {
    await client.post("/sign/logout");
    removeAuth();
  } catch (error) {
    console.error("로그아웃 실패:", error);
  }
};

// 예외처리 함수
const handleLoginError = (error, setErrorCancelInfo) => {
  if (error.response.status === 432) {
    setErrorCancelInfo("아이디를 확인 해 주세요");
  } else if (error.response.status === 434) {
    setErrorCancelInfo("비밀번호를 확인 해 주세요");
  } else if (error.response.status === 435) {
    setErrorCancelInfo("권한이 없습니다. 담당자에게 문의 바랍니다.");
  } else if (error.response.status === 500) {
    setErrorCancelInfo("서버 오류 입니다.");
  }
  throw new Error("로그인에 실패했습니다.");
};

export default client;
