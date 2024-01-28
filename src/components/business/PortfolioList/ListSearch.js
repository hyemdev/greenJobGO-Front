import React, { useState } from "react";
import { PfSearchWrap } from "../../../styles/BusinessPortfolioStyle";
import { v4 } from "uuid";
import { BtnGlobal } from "../../../styles/GlobalStyle";
import { useRecoilState } from "recoil";
import { BusinessPageAtom } from "../../../pages/businessPages/PortfolioList";

const ListSearch = ({
  handleCategoryFilter,
  handleSearch,
  searchsubj,
  setSearchSubj,
  searchname,
  setSearchname,
  categoryData,
  category,
}) => {
  const [pageState, setPageState] = useRecoilState(BusinessPageAtom);

  return (
    <PfSearchWrap>
      <ul className="student-portfolio-search">
        <li className="select-wrap">
          <label htmlFor="category-select">직종</label>
          <select
            value={category}
            id="category-select"
            onChange={handleCategoryFilter}
          >
            <option value="">전체</option>
            {categoryData?.map(item => (
              <option key={item.iclassification} value={item.iclassification}>
                {item.classification}
              </option>
            ))}
          </select>
        </li>
        <li>
          <div className="subjectname-form">
            <label htmlFor="subject-state">과정명</label>
            <input
              type="text"
              id="subject-state"
              value={searchsubj}
              onChange={e =>
                // setSearchSubj(e.target.value)
                setPageState(prev => ({ ...prev, searchsubj: e.target.value }))
              }
              onKeyDown={e => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
        </li>
        <li>
          <div className="studentname-form">
            <label htmlFor="student-state">수강생 이름</label>
            <input
              type="text"
              id="student-state"
              value={searchname}
              onChange={e =>
                // setSearchname(e.target.value)
                setPageState(prev => ({ ...prev, searchname: e.target.value }))
              }
              onKeyDown={e => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
        </li>
        <li>
          <BtnGlobal onClick={handleSearch}>조회</BtnGlobal>
        </li>
      </ul>
    </PfSearchWrap>
  );
};

export default ListSearch;
