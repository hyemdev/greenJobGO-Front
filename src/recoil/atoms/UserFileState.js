import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const fileInfoAtom = atom({
  key: "fileInfoAtom",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
