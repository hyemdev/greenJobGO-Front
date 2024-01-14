// 컬러 ================

import styled from "@emotion/styled";

// 메인색상
export const Maincolor = {
  white: "#fff",
  black: "#222",
  grayWhite: "#F0F0F0",
  grayLight2: "#d9d9d9",
  grayMedium: "#A9A9A9",
  grayMediumDeep: "#7E7E7E",
  grayDeep: "#6D6D6D",
  blueMedium: "#228FCF",
  // 확정된 컬러바입니다
  wrapborder: "#ECF0F4",
  grayLight: "#DEDEDE",
  search: "#e6e6e6",
  maingray: "#d9d9d9",
  paginate: "#bababa",
  input: "#aaaaaa",
  sectiontitle: "#898989",
  header: "#7b7b7b",
  btn: "#6d6d6d",
  admintxt: "#228fcf",
  adminmode: "rgba(34, 143, 207, 0.10)",
  red: "#EB5757",
};

// 말줄임 ================
export const ellipsis = {
  // 한줄
  one: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

/* 공통 확인버튼 */
export const BtnGlobal = styled.button`
  /* .confirm-btn { */
  width: 150px;
  height: 50px;
  border-radius: 8px;
  border: 0;
  background: ${Maincolor.btn};
  color: ${Maincolor.white};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.24px;
  cursor: pointer;
`;
