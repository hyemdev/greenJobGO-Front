import { client } from "../api/client";

export const postFileUpload = async (
  studentId,
  iFile,
  description,
  linkUrl,
  formData,
) => {
  try {
    let res;
    if (iFile === 1) {
      res = await client.post(
        `/student/file?istudent=${studentId}&iFileCategory=${iFile}&introducedLine=${description}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
    } else if (iFile === 2) {
      res = await client.post(
        `/student/file?istudent=${studentId}&iFileCategory=${iFile}&oneWord=${description}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
    } else if (iFile === 3) {
      res = await client.post(
        `/student/file?istudent=${studentId}&iFileCategory=${iFile}&oneWord=${description}&fileLink=${linkUrl}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
    } else if (iFile === 4) {
      res = await client.post(
        `/student/file?istudent=${studentId}&iFileCategory=${iFile}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
    }
    if (res.data.res.ifile) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};
