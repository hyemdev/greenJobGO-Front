import React from "react";
import { AddPofolPofolWrap } from "../../../styles/AddPortfolioStyle";

const AddPofolPofol = ({ handleAddModalOpen }) => {
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
              id="file"
              accept=".jpg, png, jpeg, gif"
              // onChange={handleFileChange}
            />
            <label htmlFor="file">파일첨부</label>
            <input
              className="upload-name"
              // value={selectedFile ? selectedFile.name : "첨부파일"}
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
            <ul>
              <li>
                <div>
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/ph_file.png`}
                      alt="portfolio"
                    />
                    <a href="">김그린_디자인_포트폴리오.PDF</a>
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
                <span>
                  그린컴퓨터아트학원 홈페이지 리디자인한 피그마
                  링크입니다.그린컴퓨터아트학원 홈페이지 리디자인한 피그마
                  링크입니다.그린컴퓨터아트학원 홈페이지 리디자인한 피그마
                  링크입니다.그린컴퓨터아트
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/ph_link.png`}
                      alt="portfolio"
                    />
                    <a
                      // href={`http://112.222.157.156/img/student/${userId}/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      그린컴퓨터아트학원 홈페이지 리디자인한 피그마 링크입니다.
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
                <span>
                  그린컴퓨터아트학원 홈페이지 리디자인한 피그마
                  링크입니다.그린컴퓨터아트학원 홈페이지 리디자인한 피그마
                  링크입니다.그린컴퓨터아트학원 홈페이지 리디자인한 피그마
                  링크입니다.그린컴퓨터아트
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AddPofolPofolWrap>
  );
};

export default AddPofolPofol;
