import { client } from "./client";

export const getCategory = async setCategoryData => {
  try {
    const res = await client.get(`/admin/category`);
    setCategoryData(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getStudentGalleryList = async (
  setGalleryData,
  setCount,
  page,
  category,
  searchsubj,
  searchname,
) => {
  try {
    let apiUrl = `/company/student?page=${page}&size=10&sort=istudent%2CASC`;
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

    setCount(res.data.totalcount);
    setGalleryData(res.data.vo);
  } catch (error) {
    console.log(error);
  }
};

export const getStudentList = async (
  setListData,
  setCount,
  page,
  category,
  searchsubj,
  searchname,
) => {
  try {
    let apiUrl = `/company/student/list?page=${page}&size=10&sort=istudent%2CASC`;
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
    setCount(res.data.totalcount);
  } catch (error) {
    console.log(error);
  }
};
