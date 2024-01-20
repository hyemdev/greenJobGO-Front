import React, { useState } from "react";
import { AddPofolPofolWrap } from "../../../styles/AddPortfolioStyle";
import { useRecoilValueLoadable } from "recoil";
import { userInfo } from "../../../recoil/selectors/UserInfoSelector";

const AddPofolPofol = ({
  handleAddModalOpen,
  imgFile,
  handleImgFileChange,
  fileData = [],
}) => {
  const userData = useRecoilValueLoadable(userInfo);
  const std =
    userData.state === "hasValue" ? userData.contents.std.istudent : null;
  const file =
    userData.state === "hasValue"
      ? userData.contents.file
      : { portfolio: [], fileLinks: [] };

  return (
    <AddPofolPofolWrap>
      <div className="title">
        <h2>포트폴리오 첨부</h2>
      </div>
      <div className="inner">
        <div>
          <span>포트폴리오 대표 이미지</span>
          <div className="file-box">
            <input
              type="file"
              id="imgfile"
              accept=".jpg, png, jpeg, gif"
              onChange={handleImgFileChange}
            />
            <label htmlFor="imgfile">파일첨부</label>
            <input
              className="upload-name"
              value={imgFile ? imgFile.name : "첨부파일"}
              placeholder="첨부파일"
              readOnly
            />
          </div>
          <p>*본 이력서의 썸네일로 사용할 이미지를 첨부해 주세요.</p>
        </div>
        <div>
          <div>
            <span>포트폴리오</span>
            <p>
              *대표 이미지에 해당하는 포트폴리오는 제일 처음에 첨부해주세요.
            </p>
          </div>
          <div>
            <button onClick={handleAddModalOpen}>
              + 포트폴리오 파일 또는 링크 추가
            </button>
          </div>
          <div>
            {file.portfolio?.length > 0 &&
              [
                ...file.portfolio,
                ...fileData.filter(item => item.fileType === 2),
              ].map(item => (
                <ul key={item.ifile}>
                  <li>
                    <div>
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/ph_file.png`}
                          alt="portfolio"
                        />
                        <a
                          href={`http://112.222.157.156/img/student/${std}/${item.file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.file}
                        </a>
                      </div>
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/ph_x-bold.png`}
                          alt="portfolio"
                        />
                      </div>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="">대표 포트폴리오로 설정</label>
                    </div>
                  </li>
                  <li>
                    <span>{item.oneWord}</span>
                  </li>
                </ul>
              ))}
            {file.fileLinks?.length > 0 &&
              [
                ...file.fileLinks,
                ...fileData.filter(item => item.fileType === 3),
              ].map(item => (
                <ul key={item.ifile}>
                  <li>
                    <div>
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/ph_link.png`}
                          alt="portfolio"
                        />
                        <a
                          href={`http://112.222.157.156/img/student/${std}/${item.fileLink}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.fileLink}
                        </a>
                      </div>
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/ph_x-bold.png`}
                          alt="portfolio"
                        />
                      </div>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="">대표 포트폴리오로 설정</label>
                    </div>
                  </li>
                  <li>
                    <span>{item.oneWord}</span>
                  </li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </AddPofolPofolWrap>
  );
};

export default AddPofolPofol;
