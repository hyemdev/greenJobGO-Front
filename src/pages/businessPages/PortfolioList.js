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
import { atom, useRecoilState } from "recoil";
import { v4 } from "uuid";

export const BusinessPageAtom = atom({
  // key: "authState",
  key: `BusinessPageAtom/${v4()}`,
  default: {
    page: 1,
    count: 0,
    searchsubj: "",
    searchname: "",
    category: 0,
    render: true,
  },
  // effects_UNSTABLE: [persistAtom],
});
const PortfolioList = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [listData, setListData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  // const [searchsubj, setSearchSubj] = useState("");
  // const [searchname, setSearchname] = useState("");
  const [viewState, setViewState] = useState(true);
  const [userId, setUserId] = useState(0);
  // const [page, setPage] = useState(1);
  // const [count, setCount] = useState(0);
  // const [category, setCategory] = useState(0);

  const [pageState, setPageState] = useRecoilState(BusinessPageAtom);
  const { page, count, searchsubj, searchname, category, render } = pageState;

  // 결과값 없을때 보이는 컴포넌트
  const [nothing, setNothing] = useState(false);

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 갤러리형 수강생 목록
  // const studentGalleryData = () => {
  //   getStudentGalleryList(
  //     setGalleryData,
  //     setCount,
  //     page,
  //     category,
  //     searchsubj,
  //     searchname,
  //     setNothing,
  //   );
  // };

  // 리스트형 수강생 목록
  const studentList = () => {
    getStudentList(
      setListData,
      setPageState,
      // setCount,
      page,
      category,
      searchsubj,
      searchname,
      setNothing,
    );
  };

  useEffect(() => {
    studentList();

    // if (viewState === true) {
    //   studentGalleryData();
    // } else if (viewState === false) {
    //   studentList();
    // }
    getCategory(setCategoryData);
  }, [page, viewState]);

  // 검색버튼 클릭
  const handleSearch = async () => {
    setPageState(prev => ({
      ...prev,
      page: 1,
      category,
      searchsubj,
      searchname,
      render: false,
    }));
    await studentList();

    // if (viewState === true) {
    //   studentGalleryData();
    // } else if (viewState === false) {
    //   studentList();
    // }
    // setPage(1);
  };

  // 카테변경값 저장
  const handleCategoryFilter = e => {
    console.log("category e", e.target.value);
    setPageState(prev => ({
      ...prev,
      // page: 1,
      category: e.target.value,
      searchsubj: "",
      searchname: "",
    }));
    // setCategory(e.target.value);
    // setPage(1);
  };

  // 페이지네이션 클릭시
  const handlePageClick = e => {
    setPageState(prev => ({ ...prev, page: e }));

    window.scrollTo({ top: 0 });
    // setPage(e);
    console.log("page e", e);
  };

  useEffect(() => {
    studentList();
  }, [page, render]);

  return (
    <BusinessPortfolioWrap>
      <h2>수강생 포트폴리오</h2>
      <ListSearch
        handleCategoryFilter={handleCategoryFilter}
        handleSearch={handleSearch}
        searchsubj={searchsubj}
        // setSearchSubj={setSearchSubj}
        searchname={searchname}
        // setSearchname={setSearchname}
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
      <ListPaging
        // setPage={setPage}
        page={page}
        count={count}
        handlePageClick={handlePageClick}
      />
    </BusinessPortfolioWrap>
  );
};

export default PortfolioList;
