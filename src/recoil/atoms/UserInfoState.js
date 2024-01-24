import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: {
    std: {
      istudent: 0,
      age: 0,
      gender: "",
      name: "",
      birthday: "",
      address: "",
      email: "",
      startedAt: "",
      endedAt: "",
      mobileNumber: "",
      education: "",
      introducedLine: "",
      huntJobYn: 0,
      subject: {
        icourseSubject: 0,
        subjectName: "",
      },
      certificates: [
        {
          icertificate: 0,
          certificate: "",
        },
      ],
    },
    file: {
      img: {
        ifile: 0,
        img: "",
      },
      resume: {
        ifile: 0,
        resume: "",
        oneWord: "",
      },
      portfolio: [
        {
          ifile: 0,
          file: "",
          oneWord: "",
          mainYn: 0,
        },
      ],
      fileLinks: [
        {
          ifile: 0,
          fileLink: "",
          oneWord: "",
        },
      ],
    },
    portfolioYn: 0,
    aboutMeYn: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
