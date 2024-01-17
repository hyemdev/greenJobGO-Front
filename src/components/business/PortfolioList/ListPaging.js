import React from "react";
import { ListPagingSty } from "../../../styles/ListPagingStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-js-pagination";

const ListPaging = ({ setPage, page, count }) => {
  return (
    <div>
      <ListPagingSty>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={count}
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
          prevPageText={<FontAwesomeIcon icon={faChevronLeft} />}
          nextPageText={<FontAwesomeIcon icon={faChevronRight} />}
          firstPageText={""}
          lastPageText={""}
          onChange={setPage}
        />
      </ListPagingSty>
    </div>
  );
};

export default ListPaging;
