import React from "react";
import { BusinessAgreesSty } from "../../styles/IndexAgreeStyle";

const StudentPrivacyProtect = () => {
  return (
    <BusinessAgreesSty>
      {" "}
      <div className="protect-wrap">
        <img
          src={`${process.env.PUBLIC_URL}/assets/LoginTitle.png`}
          alt="greenlogo"
        />
        <div className="protect-title">
          <img
            src={`${process.env.PUBLIC_URL}/assets/checkIcon.png`}
            alt="check"
          />

          <span> 개인정보 제공 동의 약관 </span>
        </div>
        <div className="content">
          <span>1.개인정보의 수집 및 이용 목적</span>
          <p>
            1.1 본인은 개인정보를 제공함에 있어, 이력서 및 자기소개서,
            훈련결과물 게시 및 열람을 위한 수집 및 이용에 동의합니다.
          </p>
          <br />
          <span>2.수집하는 개인정보의 항목</span>
          <p>
            2.1 본 동의 약관에 따라 수집되는 개인정보의 항목은 다음과 같습니다.
          </p>
          <p>
            1)성명 <br />
            2)연락처 (이메일 주소, 전화번호 등) <br />
            3)주소, 교육 및 경력사항 <br />
            4)이력서 및 자기소개서 <br />
            5)훈련결과물 관련된 필요한 정보
          </p>
          <br />
          <span>3.개인정보의 보유 및 이용 기간</span>
          <p>3.1 개인정보는 수집 목적 달성 후 즉시 파기됩니다.</p>
          <p>
            3.2 다만, 관련 법령에 따라 보존이 필요한 경우에는 해당 법령에서 정한
            기간 동안 보관됩니다.
          </p>{" "}
          <br />
          <span>4.개인정보의 제공 및 제3자 제공에 대한 동의</span>
          <p>
            4.1 본인은 수집된 개인정보가 훈련결과물 게시 및 열람을 위해 필요한
            경우 해당 정보를 제공하는 데 동의합니다.
          </p>
          <p>
            4.2 개인정보는 당사의 서비스를 제공하는 목적 이외에는 어떠한
            경우에도 제3자에게 제공되지 않습니다.
          </p>
          <br />
          <span>5.개인정보의 열람, 정정, 삭제에 대한 권리</span>
          <p>
            5.1 본인은 언제든지 제공한 개인정보를 열람, 정정, 삭제할 수 있는
            권리를 가지고 있습니다.
          </p>
          <p>
            5.2 개인정보의 열람, 정정, 삭제를 위해서는 당사에게 서면 또는
            전자우편으로 요청하여야 합니다.
          </p>
          <br />
          <span>6.개인정보의 파기 절차 및 방법</span>
          <p>6.1 개인정보의 수집 및 이용 목적이 달성된 경우 파기됩니다.</p>{" "}
          <p>
            6.2 파기된 개인정보는 기록물과 전자적 파일 형태로 모두 안전하게
            파기됩니다.
          </p>
          <br />
          <span>7.개인정보의 안전성 확보 조치</span>
          <p>
            7.1 당사는 개인정보를 안전하게 관리하기 위하여 다음과 같은 조치를
            취합니다.
          </p>
          <p>
            1)개인정보 암호화 <br />
            2)접근 권한 제한 <br />
            3)보안 프로그램 설치 및 주기적인 갱신
          </p>
          <br />
          <span>8.기타</span>
          <p>
            8.1 본 동의 약관은 관련 법령이나 정부의 정책 변경에 따라 내용이
            변경될 수 있습니다.
          </p>
          <p>
            8.2 본인은 본 동의 약관의 내용을 숙지하고 언제든지 변경된 내용에
            동의를 거부할 수 있습니다.
          </p>
          <br />
        </div>
        <div className="footer-text">
          본인은 본 동의 약관의 내용을 숙지하였으며, 동의합니다.
        </div>
      </div>
    </BusinessAgreesSty>
  );
};

export default StudentPrivacyProtect;
