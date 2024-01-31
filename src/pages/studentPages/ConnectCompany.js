import React, { useEffect, useState } from "react";
import { ConnectCompanyWrap } from "../../styles/ConnectCompanyStyle";
import CompanyListPaging from "../../components/student/CompanyListPaging";
import { getCompanyList } from "../../api/companyListAxios";
import OkModal from "../../components/OkModal";

const ConnectCompany = () => {
  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    getCompanyList(setListData, setCount, page, setErrorApiInfo);
  }, [page]);

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);
  return (
    <ConnectCompanyWrap>
      <h2>협약 기업 목록</h2>
      <div className="connect-company-inner">
        <ul>
          {listData &&
            listData.map((item, index) => (
              <li key={item.companyCode}>
                <h3>{item.companyName}</h3>
                <div className="company-info">
                  <div>
                    <span>지역</span>
                    <span>{item.area}</span>
                  </div>
                  <div>
                    <span>홈페이지</span>
                    <span>{item.homepage}</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <CompanyListPaging page={page} setPage={setPage} count={count} />

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
    </ConnectCompanyWrap>
  );
};

export default ConnectCompany;
