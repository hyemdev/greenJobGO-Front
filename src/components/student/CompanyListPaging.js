import React from "react";
import { PagiWrap } from "../../styles/PagingStyle";
import Pagination from "react-js-pagination";

const CompanyListPaging = ({ page, setPage, count }) => {
  return (
    <PagiWrap>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={count}
        pageRangeDisplayed={10}
        marginPagesDisplayed={0}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={setPage}
      />
    </PagiWrap>
  );
};

export default CompanyListPaging;
