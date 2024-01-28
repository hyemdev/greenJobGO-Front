import React from "react";
import { ListPagingSty } from "../../../styles/ListPagingStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-js-pagination";

const ListPaging = ({ setPage, page, count,handlePageClick }) => {

  return (
    <div>
      <ListPagingSty>
        <Pagination
          activePage={page}
          itemsCountPerPage={6}
          totalItemsCount={count}
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
          prevPageText={<FontAwesomeIcon icon={faChevronLeft} />}
          nextPageText={<FontAwesomeIcon icon={faChevronRight} />}
          firstPageText={""}
          lastPageText={""}
          onChange={(e) => handlePageClick(e)}
        />
      </ListPagingSty>
    </div>
  );
};

export default ListPaging;
