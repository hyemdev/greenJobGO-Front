import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setRefresCookie = (name, value) => {
  return cookies.set(name, value, {
    path: "/",
    secure: false,
    sameSite: "none",
    httpOnly: false,
    maxAge: 180,
  });
};

export const setAcessCookie = (name, value) => {
  return cookies.set(name, value, {
    path: "/",
    secure: false,
    sameSite: "none",
    httpOnly: true,
    maxAge: 180,
  });
};

export const getCookie = name => {
  return cookies.get(name);
};

export const removeCookie = name => {
  return cookies.remove(name, { path: "/" });
};
