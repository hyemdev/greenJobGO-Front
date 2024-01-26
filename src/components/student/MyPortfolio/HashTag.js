import React from "react";
import { HashTagInner, HashTagWrap } from "../../../styles/HashTagStyle";
const HashTag = ({
  hashTag,
  hashSave,
  handleAddHashTag,
  handleRemoveHashTag,
  handleHashChange,
  handleKeyDown,
}) => {
  return (
    <HashTagWrap>
      <HashTagInner>
        {hashSave.length > 0 &&
          hashSave.map(item => {
            return (
              <div className="tags" key={item.icertificate}>
                <p>{item.certificate}</p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/ph_x-bold.png`}
                  alt="cancel"
                  onClick={() => {
                    handleRemoveHashTag(item.icertificate);
                  }}
                />
              </div>
            );
          })}
        <input
          type="text"
          id="hash-input"
          name="hash-tag"
          value={hashTag}
          onChange={handleHashChange}
          onKeyUp={handleAddHashTag}
          onKeyDown={handleKeyDown}
          placeholder="자격증을 입력해주세요."
        />
      </HashTagInner>
    </HashTagWrap>
  );
};

export default HashTag;
