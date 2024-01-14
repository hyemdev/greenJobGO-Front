import React from "react";
import { JobManagerBoxWrap } from "../../styles/BusinessJobmanager";
import NoImage from "../../assets/NoImage.jpg";

const dummydata = [
  {
    iemply: 4,
    oneWord: "2",
    name: "김성미",
    counselingNumber: "1",
    phoneNumber: "244",
    email: "2144",
    profilePic: "/img/employee/4/ce375ffb-8e57-49e9-8252-110b43012626.jpg",
  },
  {
    iemply: 16,
    oneWord: "ㄷㄷㄷ14",
    name: "ㄷㄷㄷ",
    counselingNumber: "ㄷㄷㄷ",
    phoneNumber: "ㄷㄷㄷ14",
    email: "ㄷㄷㄷ",
    profilePic: "/img/employee/16/85208ab6-9cf6-40a6-acd5-7b1479d4f517.png",
  },
  {
    iemply: 21,
    oneWord: "테테스트",
    name: "ㅂㅂㅂㅂ",
    counselingNumber: "ㅁㄴㅇㅁㄴㅇ",
    phoneNumber: "ㅁㄴㅇㅁㄴ111",
    email: "ㅁㄴㅇ",
    profilePic: "/img/employee/21/11ab6b9f-5729-42ba-aaff-4e3d5baedd2c.jpg",
  },
];
const JobManagerList = () => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <JobManagerBoxWrap>
      <h2>취업담당자 안내</h2>
      <div className="jobmanager-content">
        {dummydata?.map(item => (
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
      {dummydata && dummydata.length === 0 && (
        <div>취업담당자의 정보가 없습니다.</div>
      )}
    </JobManagerBoxWrap>
  );
};

export default JobManagerList;
