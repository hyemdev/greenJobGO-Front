import React, { useEffect, useState } from "react";
import { JobManagerBoxWrap } from "../../styles/BusinessJobmanager";
import NoImage from "../../assets/NoImage.jpg";
import { getJobManagerInfo } from "../../api/jobmanagerAxios";

const JobManagerList = () => {
  const [mngProfiledata, setmngProflieData] = useState([]);
  const [nothing, setNothing] = useState(false);
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  useEffect(() => {
    getJobManagerInfo({ setmngProflieData, setNothing });
  }, []);
  return (
    <JobManagerBoxWrap>
      <h2>취업담당자 안내</h2>
      <div className="jobmanager-content">
        {mngProfiledata?.map(item => (
          <div className="manager-profile" key={item.iemply}>
            <img
              // src={`/home/download/Employee/${item.iemply}/${item.profilePic}`}
              src={`${item.profilePic}`}
              alt="job manager"
              onError={onImgError}
              className="manager-img"
            />
            <div className="manager-details">
              <p className="manager-word">{item.oneWord}</p>
              <p className="manager-name">{item.name} 취업지원실장</p>
              <ul className="manager-contact">
                <li>
                  <span>상담전화</span>
                  <span>{item.counselingNumber}</span>
                </li>
                <li>
                  <span>모바일</span>
                  <span>{item.phoneNumber}</span>
                </li>
                <li>
                  <span>이메일</span>
                  <span>{item.email}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {nothing && <div>취업담당자의 정보가 없습니다.</div>}
    </JobManagerBoxWrap>
  );
};

export default JobManagerList;
