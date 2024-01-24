import { selector } from "recoil";
import { client } from "../../api/client";
import { userInfoAtom } from "../atoms/UserInfoState";

export const userInfo = selector({
  key: "userInfo",
  get: async () => {
    try {
      const res = await client(`/student`);

      const { std, file } = res.data;

      return { std, file };
    } catch (error) {
      console.log(error);
    }
  },
  set: ({ set }) => {
    set(userInfoAtom);
  },
});
