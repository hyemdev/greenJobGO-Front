import client from "../api/client";

export const getCategory = async (setCategoryData, setErrorApiInfo) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_CT_URL}`);
    setCategoryData(res.data);
  } catch (error) {
    setErrorApiInfo(`Category: ${error.message}`);
  }
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
    setErrorApiInfo(`Student Portfoilo info: ${error.message}`);
  }
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
    setErrorApiInfo(`Student Info: ${error.message}`);
  }
};
