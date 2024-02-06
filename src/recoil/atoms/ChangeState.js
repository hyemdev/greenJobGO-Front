import { atom } from "recoil";

export const ChangeAtom = atom({
  key: "changeState",
  default: {
    compoChange: true,
  },
});
