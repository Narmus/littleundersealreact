import AxiosCall from "./Axios";

export const getQuestions = () => {
  return AxiosCall.get("query_get/");
};

export const getSpecificQuestion = (id) => {
  return AxiosCall.get(`query_get/${id}`);
};

export const getCommentsForAnswers = (idsOfAnswers) => {
  return AxiosCall.get(`comments_get/${idsOfAnswers}`);
};
