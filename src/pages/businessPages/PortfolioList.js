import React, { useEffect, useState } from "react";
import ListSearch from "../../components/business/PortfolioList/ListSearch";
import ListPortfolioContent from "../../components/business/PortfolioList/ListPortfolioContent";
import { BusinessPortfolioWrap } from "../../styles/BusinessPortfolioStyle";
import ListPaging from "../../components/business/PortfolioList/ListPaging";
import {
  getCategory,
  getStudentGalleryList,
  getStudentList,
} from "../../api/businessPortfolioAxios";
import NoImage from "../../assets/NoImage.jpg";


const PortfolioList = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [listData, setListData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [searchsubj, setSearchSubj] = useState("");
  const [searchname, setSearchname] = useState("");
  const [viewState, setViewState] = useState(true);
  const [userId, setUserId] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState(0);

  // 결과값 없을때 보이는 컴포넌트
  const [nothing, setNothing] = useState(false);

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 갤러리형 수강생 목록
  const studentGalleryData = () => {
    getStudentGalleryList(
      setGalleryData,
      setCount,
      page,
      category,
      searchsubj,
      searchname,
      setNothing,
    );
  };

  // 리스트형 수강생 목록
  const studentList = () => {
    getStudentList(
      setListData,
      setCount,
      page,
      category,
      searchsubj,
      searchname,
      setNothing,
    );
  };

  useEffect(() => {
    if (viewState === true) {
      studentGalleryData();
    } else if (viewState === false) {
      studentList();
    }
    getCategory(setCategoryData);
  }, [page, viewState]);

  // 검색버튼 클릭
  const handleSearch = () => {
    if (viewState === true) {
      studentGalleryData();
    } else if (viewState === false) {
      studentList();
    }
    setPage(1);
  };

  // 카테변경값 저장
  const handleCategoryFilter = e => {
    setCategory(e.target.value);
    setPage(1);
  };

  return (
    <BusinessPortfolioWrap>
      <h2>수강생 포트폴리오</h2>
      <ListSearch
        handleCategoryFilter={handleCategoryFilter}
        handleSearch={handleSearch}
        searchsubj={searchsubj}
        setSearchSubj={setSearchSubj}
        searchname={searchname}
        setSearchname={setSearchname}
        categoryData={categoryData}
        category={category}
      />

      <ListPortfolioContent
        listData={listData}
        count={count}
        galleryData={galleryData}
        viewState={viewState}
        setViewState={setViewState}
        onImgError={onImgError}
        nothing={nothing}
      />
      <ListPaging setPage={setPage} page={page} count={count} />
    </BusinessPortfolioWrap>
  );
};

export default PortfolioList;
