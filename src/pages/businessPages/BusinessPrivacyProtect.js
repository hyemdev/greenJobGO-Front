import React from "react";
import { BusinessAgreesSty } from "../../styles/IndexAgreeStyle";

const BusinessPrivacyProtect = () => {
  return (
    <BusinessAgreesSty>
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
          <span> 개인정보 보호 서약서 </span>
        </div>
        <div className="content">
          <span>1.서약 내용 및 목적</span>
          <p>
            1.1 제공받은 훈련생 개인정보를 채용 이외 다른 어떠한 경우에도 허가
            없이 사용하지 않겠음을 명시적으로 서약합니다.
          </p>
          <br />
          <span>2.개인정보 사용 제한</span>
          <p>
            2.1 채용목적 외에 사용할 경우, 사전 동의를 얻는 등 관련 법령 및
            규정을 준수할 것을 서약합니다.
          </p>{" "}
          <br />
          <span>3.개인정보의 보안 조치</span>
          <p>
            3.1 훈련생 개인정보는 안전하게 관리하고 유출을 방지하기 위하여
            적절한 보안 조치를 취하겠습니다.
          </p>
          <p>
            3.2 해당 개인정보를 열람할 권한이 있는 직원은 최소한으로 제한하고,
            엄격한 접근 제어를 시행하겠습니다.
          </p>{" "}
          <br />
          <span>4.제3자 제공 및 외부 제출 금지</span>
          <p>
            4.1 훈련생 개인정보를 어떠한 경우에도 제3자에게 제공하거나 외부로
            제출하지 않겠음을 명시적으로 서약합니다.
          </p>{" "}
          <br />
          <span>5.개인정보 파기</span>
          <p>
            5.1 훈련생 개인정보는 수집 및 이용 목적이 달성된 후 지체 없이
            파기되거나, 훈련생이 개인정보의 파기를 요청한 경우에는 즉시
            파기하겠습니다.
          </p>{" "}
          <br />
          <span>6.법령 준수</span>
          <p>
            6.1 본인은 국내 및 국제적으로 적용되는 개인정보 보호 관련 법령 및
            규정을 준수하겠습니다.
          </p>{" "}
          <br />
          <span>7.서약의 효력 및 변경</span>
          <p>
            7.1 본 서약은 서명된 시점부터 효력이 발생하며, 내용이 변경되는
            경우에는 훈련생에게 사전 통지한 후 변경될 수 있습니다.
          </p>{" "}
          <br />
          <span>8.민원 처리 및 응대 책임</span>
          <p>
            8.1 훈련생으로부터의 개인정보 관련 민원 및 문의에 신속하고 적절하게
            대응하겠습니다.
          </p>{" "}
          <br />
        </div>
        <div className="footer-text">
          본인은 본 서약의 내용을 숙지하였으며, 어떠한 경우에도 훈련생
          개인정보를 무단으로 사용하지 않겠다는 것에 동의합니다.
        </div>
      </div>
    </BusinessAgreesSty>
  );
};

export default BusinessPrivacyProtect;
