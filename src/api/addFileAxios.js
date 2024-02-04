import client from "../api/client";

export const postFileUpload = async (
  istudent,
  fileType,
  linkUrl,
  fileOneWord,
  linkOneWord,
  formData,
  setErrorInfo,
) => {
  try {
    const baseUrl = `/student/file?istudent=${istudent}&iFileCategory=${fileType}`;

    let apiUrl;

    switch (fileType) {
      case 2:
        apiUrl = `${baseUrl}&oneWord=${fileOneWord}`;
        break;
      case 3:
        apiUrl = `${baseUrl}&oneWord=${linkOneWord}&fileLink=${linkUrl}`;
        break;
    }
    const res = await client.post(apiUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("res", res);
    const result = res.status;
    if (result === 200) {
      setErrorInfo(`업로드가 완료되었습니다.`);
      return { success: true };
    }
  } catch (error) {
    console.log("err", error);
    const { status } = error.response;
    if (error.response) {
      switch (status) {
        case 452:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 453:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 454:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 456:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 457:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 458:
          setErrorInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorInfo("등록에 실패했습니다.");
      }
    } else {
      setErrorInfo("네트워크 오류 또는 서버 응답이 없습니다.");
    }
  }
};

export const postThumbNailUpload = async (istudent, formData, setErrorInfo) => {
  try {
    const res = await client.post(
      `/student/file?istudent=${istudent}&iFileCategory=4`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    console.log("res", res);
    const result = res.status;
    if (result === 200) {
      setErrorInfo(`업로드가 완료되었습니다.`);
    }
  } catch (error) {
    console.log("error", error);
    const { status } = error.response;
    if (error.response) {
      switch (status) {
        case 452:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 453:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 454:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 456:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 457:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 458:
          setErrorInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorInfo("등록에 실패했습니다.");
      }
    } else {
      setErrorInfo("네트워크 오류 또는 서버 응답이 없습니다.");
    }
  }
};

export const postResumeUpload = async (
  formData,
  istudent,
  resumeOneWord,
  setErrorInfo,
) => {
  try {
    const res = await client.post(
      `/student/file?istudent=${istudent}&iFileCategory=1&introducedLine=${resumeOneWord}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    console.log("이력서 전송 성공", res.data);
    console.log("이력서 전송 성공", res.status);
    const result = res.status;

    if (result === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    const { status } = error.response;
    if (error.response) {
      switch (status) {
        case 452:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 453:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 454:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 456:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 457:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 458:
          setErrorInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorInfo("등록에 실패했습니다.");
      }
    } else {
      setErrorInfo("네트워크 오류 또는 서버 응답이 없습니다.");
    }
  }
};

export const postcertificate = async (istudent, hashSave) => {
  try {
    const res = await client.post(
      `/student/certificate?istudent=${istudent}&certificates=${hashSave}`,
    );
    const result = res.status;

    if (result === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};

export const patchMainPortfolioSeleted = async (
  istudent,
  mainCheck,
  mainYn,
  setErrorInfo,
) => {
  try {
    const res = await client.patch(
      `/student/portfolio-main?istudent=${istudent}&ifile=${mainCheck}`,
    );
    console.log("main", res);
  } catch (error) {
    console.log("main", error);
    const { status } = error.response;
    if (error.response) {
      switch (status) {
        case 452:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 453:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 454:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 456:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 457:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 458:
          setErrorInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorInfo(`Main Portfolio Select: ${error.message}`);
      }
    } else {
      setErrorInfo(`Main Portfolio Select: ${error.message}`);
    }
  }
};

export const deleteFile = async (istudent, ifile, setErrorInfo) => {
  try {
    const res = await client.delete(
      `/student/file?istudent=${istudent}&ifile=${ifile}`,
    );
    const result = res;
    if (result.status === 200) {
      setErrorInfo("삭제가 완료되었습니다.");
      return { success: true };
    }
  } catch (error) {
    setErrorInfo(`file delete: ${error.message}`);
  }
};

export const deleteCertificate = async (istudent, icertificate) => {
  try {
    const res = await client.delete(
      `/student/certificate?istudent=${istudent}&icertificate=${icertificate}`,
    );
    const result = res;
    if (result.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};
