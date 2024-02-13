import React, { useState } from "react";
import Listgallery from "./Listgallery";
import ListBoard from "./ListBoard";
import { ReactComponent as Gallerybtn } from "../../../assets/galleryBtn.svg";
import { ReactComponent as Boardbtn } from "../../../assets/boardBtn.svg";
import {
  ContentListViewer,
  ContentListWrap,
} from "../../../styles/BusinessPortfolioStyle";
import NolistItem from "../../../pages/NolistItem";
import { BusinessPageAtom } from "../../../pages/businessPages/PortfolioList";
import { useRecoilState } from "recoil";

const ListPortfolioContent = ({
  listData,
  count,
  onImgError,
  nothing,
}) => {
  const [pageState, setPageState] = useRecoilState(BusinessPageAtom);

  return (
    <ContentListWrap>
      <ul className="content-top-line">
        <li>총 {count}건</li>
        <li>
          <Gallerybtn
            onClick={() => setPageState(prev => ({ ...prev, viewState: true }))}
          />
          <Boardbtn
            onClick={() =>
              setPageState(prev => ({ ...prev, viewState: false }))
            }
          />
        </li>
      </ul>
      {nothing && <NolistItem />}

      {pageState.viewState ? (
        <ContentListViewer>
          <Listgallery listData={listData} onImgError={onImgError} />
        </ContentListViewer>
      ) : (
        <ContentListViewer>
          <ListBoard listData={listData} onImgError={onImgError} />
        </ContentListViewer>
      )}
    </ContentListWrap>
  );
};

export default ListPortfolioContent;
