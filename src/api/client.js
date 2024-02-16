import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";
import { useEffect } from "react";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const Interceptor = ({ children }) => {
  const requestInterceptor = client.interceptors.request.use(
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
  const responseInterceptor = client.interceptors.response.use(
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
          console.log("관리자에게 문의해주세요.");
        }
      }
      return Promise.reject(error);
    },
  );

  useEffect(() => {
    return () => {
      client.interceptors.request.eject(requestInterceptor);
      client.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);

  return children;
};

// 요청 인터셉터 설정
// client.interceptors.request.use(
//   async config => {
//     const accessToken = getCookie("accessToken");
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//       if (!config.headers) {
//         config.headers = {};
//       }
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

// 응답 인터셉터 설정
// client.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async error => {
//     const { config, response } = error;
//     const refreshToken = getCookie("refreshToken");
//     if (response?.status === 401 && refreshToken) {
//       try {
//         const { data } = await client.post(`/sign/refresh-token`, {
//           refreshToken,
//         });
//         const accessToken = data;
//         setCookie("accessToken", accessToken);
//         if (config?.headers && config.headers?.Authorization) {
//           config.headers.Authorization = `Bearer ${accessToken}`;
//           const retryResponse = await client(config);
//           return retryResponse;
//         }
//       } catch (error) {
//         console.log("관리자에게 문의해주세요.");
//       }
//     }
//     return Promise.reject(error);
//   },
// );

// 로그인 함수
const fetchLogin = async (userId, password, setErrorCancelInfo) => {
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

// 로그아웃 함수
const postLogout = async () => {
  try {
    await client.post("/sign/logout");
    removeCookie("accessToken");
    removeCookie("refreshToken");
  } catch (error) {
    console.error("로그아웃 실패");
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
export { Interceptor, fetchLogin, postLogout };
