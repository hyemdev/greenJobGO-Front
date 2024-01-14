import React, { useState } from "react";
import Listgallery from "./Listgallery";
import ListBoard from "./ListBoard";
import { ReactComponent as Gallerybtn } from "../../../assets/galleryBtn.svg";
import { ReactComponent as Boardbtn } from "../../../assets/boardBtn.svg";
import { ContentListViewer, ContentListWrap } from "../../../styles/BusinessPortfolioStyle";

const ListPortfolioContent = ({ dummydata }) => {
  const [viewState, setViewState] = useState(true);
  return (
    <ContentListWrap>
      <ul className="content-top-line">
        <li>총 {dummydata.length}건</li>
        <li>
          <Gallerybtn onClick={() => setViewState(true)} />
          <Boardbtn onClick={() => setViewState(false)} />
        </li>
      </ul>
      {viewState ? (
        <ContentListViewer>
          <Listgallery dummydata={dummydata} />
        </ContentListViewer>
      ) : (
        <ContentListViewer>
          <ListBoard dummydata={dummydata} />
        </ContentListViewer>
      )}
    </ContentListWrap>
  );
};

export default ListPortfolioContent;
