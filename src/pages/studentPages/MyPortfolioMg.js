import React, { useEffect } from "react";
import {
  useRecoilValue,
} from "recoil";
import { ChangeAtom } from "../../recoil/atoms/ChangeState";
import AddPortfolio from "../../components/student/MyPortfolio/AddPofolMain";
import MyPortfolioMain from "../../components/student/MyPortfolioMain";
import { userInfo } from "../../recoil/selectors/UserInfoSelector";

const MyPortfolioMg = () => {
  const changeState = useRecoilValue(ChangeAtom);

  return <>{changeState ? <MyPortfolioMain /> : <AddPortfolio />}</>;
};

export default MyPortfolioMg;
