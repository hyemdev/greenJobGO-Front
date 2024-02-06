import React, { useEffect, useState } from "react";
import ListSearch from "../../components/business/PortfolioList/ListSearch";
import ListPortfolioContent from "../../components/business/PortfolioList/ListPortfolioContent";
import { BusinessPortfolioWrap } from "../../styles/BusinessPortfolioStyle";
import ListPaging from "../../components/business/PortfolioList/ListPaging";
import {
  getCategory,
  getStudentList,
} from "../../api/businessPortfolioAxios";
import NoImage from "../../assets/NoImage.jpg";
import OkModal from "../../components/OkModal";

import { atom, useRecoilState, RecoilEnv } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const BusinessPageAtom = atom({
  key: `BusinessPageAtom`,
  default: {
    page: 1,
    count: 0,
    searchsubj: "",
    searchname: "",
    category: 0,
    render: true,
    viewState: true,
  },
  effects_UNSTABLE: [persistAtom],
});
const PortfolioList = () => {
  const [listData, setListData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [pageState, setPageState] = useRecoilState(BusinessPageAtom);
  const { page, count, searchsubj, searchname, category, render, viewState } =
    pageState;

  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  // 결과값 없을때 보이는 컴포넌트
  const [nothing, setNothing] = useState(false);

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

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
      setErrorApiInfo
    );
  };

  useEffect(() => {
    studentList();

    getCategory(setCategoryData, setErrorApiInfo);
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

  };

  // 카테변경값 저장
  const handleCategoryFilter = e => {
    setPageState(prev => ({
      ...prev,
      // page: 1,
      category: e.target.value,
      searchsubj: "",
      searchname: "",
    }));
  };

  // 페이지네이션 클릭시
  const handlePageClick = e => {
    setPageState(prev => ({ ...prev, page: e }));

    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);

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
        // galleryData={galleryData}
        // viewState={viewState}
        // setViewState={setViewState}
        onImgError={onImgError}
        nothing={nothing}
      />
      <ListPaging
        // setPage={setPage}
        page={page}
        count={count}
        handlePageClick={handlePageClick}
      />
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <OkModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false);
            setErrorApiInfo("");
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false);
            setErrorApiInfo("");
          }}
        >
          <span>{errorApiInfo}</span>
        </OkModal>
      )}
    </BusinessPortfolioWrap>
  );
};

export default PortfolioList;
