import React from "react";
import ListSearch from "../../components/business/PortfolioList/ListSearch";
import ListPortfolioContent from "../../components/business/PortfolioList/ListPortfolioContent";
import { BusinessPortfolioWrap } from "../../styles/BusinessPortfolioStyle";
import ListPaging from "../../components/business/PortfolioList/ListPaging";

const dummydata = [
  {
    istudent: 1,
    classification: "IT 분야",
    subjectName:
      "기업요구를 반영한 프로젝트 중심 JAVA 백엔드 테스트 주도 개발자 양성과정",
    startedAt: "2023-12-31",
    endedAt: "2023-12-31",
    name: "김두루루",
    gender: "여",
    address: "서울동작구여라",
    mobileNumber: "010-1234-1111",
    education: "고졸",
    certificate: 3,
    file: 2,
    oneword: "울라불라울라불라울라불라울라",
  },
  {
    istudent: 2,
    classification: "IT 분야",
    subjectName: "전산회계세무(전산회계1급 전산세무2급)자격증취득과정",
    startedAt: "2023-12-31",
    endedAt: "2023-12-31",
    name: "김두루",
    gender: "남",
    address: "서울 동작구",
    mobileNumber: "010-1234-1234",
    education: "대졸4년",
    certificate: 3,
    file: 10,
    oneword: "울라불라울라불라울라불라울라",
  },
  {
    istudent: 3,
    classification: "IT 분야",
    subjectName:
      "기업요구를 반영한 프로젝트 중심 JAVA 백엔드 테스트 주도 개발자 양성과정",
    startedAt: "2023-12-31",
    endedAt: "2023-12-31",
    name: "이름변경",
    gender: "여",
    address: "대구 남구",
    mobileNumber: "010-1234-1234",
    education: "대졸",
    certificate: 0,
    file: 0,
    oneword: "울라불라울라불라울라불라울라",
  },
  {
    istudent: 4,
    classification: "IT 분야",
    subjectName: "전산회계세무(전산회계1급 전산세무2급)자격증취득과정",
    startedAt: "2023-12-31",
    endedAt: "2023-12-31",
    name: "테스트2",
    gender: "남",
    address: "대구시 수성구",
    mobileNumber: "010-0000-0001",
    education: "대졸",
    certificate: 0,
    file: 0,
    oneword: "울라불라울라불라울라불라울라",
  },
  {
    istudent: 5,
    classification: "IT 분야",
    subjectName:
      "기업요구를 반영한 프로젝트 중심 JAVA 백엔드 테스트 주도 개발자 양성과정",
    startedAt: "2023-12-31",
    endedAt: "2023-12-31",
    name: "테스트3",
    gender: "여",
    address: "대구시 남구",
    mobileNumber: "010-0000-0000",
    education: "대졸",
    certificate: 0,
    file: 0,
    oneword: "울라불라울라불라울라불라울라",
  },
];

const PortfolioList = () => {
  return (
    <BusinessPortfolioWrap>
      <h2>수강생 포트폴리오</h2>
      <ListSearch />
      <ListPortfolioContent dummydata={dummydata} />
      <ListPaging />
    </BusinessPortfolioWrap>
  );
};

export default PortfolioList;
