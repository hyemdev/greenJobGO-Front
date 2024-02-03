import { Cookies } from "react-cookie";

const cookies = new Cookies();

// export const setRefreshCookie = (name, value) => {
//   return cookies.set(name, value, {
//     path: "/",
//     secure: true,
//     sameSite: "none",
//     httpOnly: false,
//   });
// };

// export const setAcessCookie = (name, value) => {
//   return cookies.set(name, value, {
//     path: "/",
//     secure: true,
//     sameSite: "none",
//     httpOnly: false,
//   });
// };
export const setCookie = (name, value) => {
  return cookies.set(name, value, {
    path: "/",
    secure: true,
    sameSite: "none",
    httpOnly: false,
    maxAge: 180,
  });
};
export const getCookie = name => {
  return cookies.get(name);
};

export const removeCookie = name => {
  return cookies.remove(name, { path: "/" });
};
