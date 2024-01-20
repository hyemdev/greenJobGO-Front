import React from "react";
import { PagiWrap } from "../../styles/PagingStyle";
import Pagination from "react-js-pagination";
import { ListPagingSty } from "../../styles/ListPagingStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CompanyListPaging = ({ page, setPage, count }) => {
  return (
    //  <PagiWrap>
    //   <Pagination
    //     activePage={page}
    //     itemsCountPerPage={12}
    //     totalItemsCount={count}
    //     pageRangeDisplayed={10}
    //     marginPagesDisplayed={0}
    //     prevPageText={"‹"}
    //     nextPageText={"›"}
    //     onChange={setPage}
    //   /> 
    //    </PagiWrap>
    <ListPagingSty>
      <Pagination
        activePage={page}
        itemsCountPerPage={12}
        totalItemsCount={count}
        pageRangeDisplayed={10}
        marginPagesDisplayed={0}
        prevPageText={<FontAwesomeIcon icon={faChevronLeft} />}
        nextPageText={<FontAwesomeIcon icon={faChevronRight} />}
        firstPageText={""}
        lastPageText={""}
        onChange={setPage}
      />
    </ListPagingSty>
  );
};

export default CompanyListPaging;
