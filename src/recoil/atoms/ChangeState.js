import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist();

export const ChangeAtom = atom({
  key: "changeState",
  default: {
    compoChange: true,
  },
  // effects_UNSTABLE: [persistAtom],
});
