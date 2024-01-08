import React, { useEffect, useState } from "react";
import { ConnectCompanyWrap } from "../../styles/ConnectCompanyStyle";
import CompanyListPaging from "../../components/student/CompanyListPaging";
import { getCompanyList } from "../../api/companyListAxios";

const data = [
  {
    companyCode: "1",
    companyName: "그린",
    area: "대구",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
  {
    companyCode: "2",
    companyName: "블루",
    area: "부산",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
  {
    companyCode: "3",
    companyName: "레드",
    area: "서울",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
  {
    companyCode: "4",
    companyName: "블랙",
    area: "대전",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
  {
    companyCode: "5",
    companyName: "그레이",
    area: "광주",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
  {
    companyCode: "6",
    companyName: "옐로우",
    area: "울산",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
  {
    companyCode: "7",
    companyName: "실버",
    area: "포항",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
  {
    companyCode: "8",
    companyName: "골드",
    area: "제주",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
  {
    companyCode: "9",
    companyName: "핑크",
    area: "경주",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
  {
    companyCode: "10",
    companyName: "시안",
    area: "인천",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
  {
    companyCode: "11",
    companyName: "춘천",
    area: "퍼플",
    jobField: "프론트엔드, UI/UX, 웹디자인, 백엔드",
  },
];

const ConnectCompany = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    getCompanyList(setListData, setCount, page);
  }, []);
  return (
    <ConnectCompanyWrap>
      <h2>협약 기업 목록</h2>
      <div className="connect-company-inner">
        <ul>
          {data.map((item, index) => (
            <li key={item.companyCode}>
              <h3>{item.companyName}</h3>
              <div className="company-info">
                <div>
                  <span>지역</span>
                  <span>{item.area}</span>
                </div>
                <div>
                  <span>채용분야</span>
                  <span>{item.jobField}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CompanyListPaging page={page} setPage={setPage} count={count} />
    </ConnectCompanyWrap>
  );
};

export default ConnectCompany;
