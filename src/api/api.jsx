import AxiosCall from "./Axios";

export const getQuestions = () => {
  return AxiosCall.get("query_get/");
};
