import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const AuthStateAtom = atom({
  key: "AuthStateAtom",
  default: {
    isLogin: false,
    accessToken: null,
    role: "",
    id: "",
    editableYn: "",
    portfolioYn: "",
    aboutMeYn: "",
  },
  effects_UNSTABLE: [persistAtom],
});
