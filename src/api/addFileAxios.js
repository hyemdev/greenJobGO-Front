import { client } from "./client";

export const postFileUpload = async (
  istudent,
  fileType,
  linkUrl,
  fileOneWord,
  linkOneWord,
  formData,
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
  } catch (error) {
    console.log(error);
  }
};

export const postThumbNailUpload = async (istudent, formData) => {
  try {
    const res = await client.post(
      `/student/file?istudent=${istudent}&iFileCategory=4`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    console.log("전송성공?", res.data);
  } catch (error) {
    console.log(error);
  }
};

export const postResumeUpload = async (formData, istudent, resumeOneWord) => {
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
    console.log(error);
  }
};

export const postcertificate = async (istudent, certificate) => {
  try {
    const res = await client.post(
      `/student/certificate?istudent=${istudent}&certificates=${certificate}`,
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

export const patchMainPortfolioSeleted = async (istudent, mainCheck) => {
  try {
    const res = await client.patch(
      `/student/portfolio-main?istudent=${istudent}&ifile=${mainCheck}&mainYn=1`,
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteFile = async (istudent, ifile) => {
  try {
    const res = await client.delete(
      `/student/file?istudent=${istudent}&ifile=${ifile}`,
    );
  } catch (error) {
    console.log(error);
  }
};

export const certificate = async (istudent, ifile) => {
  try {
    const res = await client.delete(
      `/student/file?istudent=${istudent}&icertificate=${ifile}`,
    );
  } catch (error) {
    console.log(error);
  }
};
