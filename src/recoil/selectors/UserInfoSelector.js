import { selector } from "recoil";
import { client } from "../../api/client";

export const userInfo = selector({
  key: "userInfo",
  get: async ({ get }) => {
    try {
      const res = await client(`/student`);

      const { std, file } = res.data;

      return { std, file };
    } catch (error) {
      console.log(error);
    }
  },
});