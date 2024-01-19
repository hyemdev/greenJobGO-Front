import React, { useEffect, useState } from "react";
import { getStudentInfo } from "../../api/studentAxios";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { ChangeAtom } from "../../recoil/atoms/ChangeState";
import AddPortfolio from "../../components/student/MyPortfolio/AddPofolMain";
import MyPortfolioMain from "../../components/student/MyPortfolioMain";
import { userInfoAtom } from "../../recoil/atoms/UserInfoState";
import { fileInfoAtom } from "../../recoil/atoms/UserFileState";
import { userInfo } from "../../recoil/selectors/UserInfoSelector";

const MyPortfolioMg = () => {
  const changeState = useRecoilValue(ChangeAtom);
  const userInfoData = useRecoilValue(userInfo);

  useEffect(() => {
    console.log(userInfoData.std);
  }, []);

  console.log("컴포 교체가 되야해 ㅠㅠ 잘들어오니?", changeState);
  return <>{changeState ? <MyPortfolioMain /> : <AddPortfolio />}</>;
};

export default MyPortfolioMg;
