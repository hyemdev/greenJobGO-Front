import client from "../api/client";

export const getCategory = async (setCategoryData, setErrorApiInfo) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_CT_URL}`);
    setCategoryData(res.data);
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 401:
          setErrorApiInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }  }
};

export const getStudentList = async (
  setListData,
  // setCount,
  setPageState,
  page,
  category,
  searchsubj,
  searchname,
  setNothing,
  setErrorApiInfo,
) => {
  try {
    let apiUrl = `${process.env.REACT_APP_CS_URL}/list?page=${page}&size=6&sort=istudent%2CASC`;
    if (category) {
      apiUrl += `&icategory=${category}`;
    }

    if (searchsubj) {
      apiUrl += `&subjectName=${searchsubj}`;
    }

    if (searchname) {
      apiUrl += `&studentName=${searchname}`;
    }

    const res = await client.get(apiUrl);

    setListData(res.data.vo);
    // setCount(res.data.totalcount);
    setPageState(prev => ({ ...prev, count: res.data.totalcount }));

    setNothing(false);
    if (res.data.vo.length === 0) {
      setNothing(true);
    }
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 401:
          setErrorApiInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }  }
};

export const getStdentInfo = async (userId, setPayload, setErrorApiInfo) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_CS_URL}/${userId}`);

    const { certificates, birthday, ...vo } = res.data.vo;
    const { aboutMe, thumbnail, portfolio, fileLink } = res.data.file;

    const birthYear = birthday.split("-", 1);
    setPayload({
      userData: vo,
      certificateValue: certificates,
      birth: birthYear,
      thumbNail: thumbnail ? thumbnail.file : null,
      resume: aboutMe,
      pofolData: portfolio || [],
      fileLinks: fileLink || [],
    });
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 401:
          setErrorApiInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }  }
};
