import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  getSpecificQueryController,
  getCommentsController,
} from "./DetailsPageController";

export const DetailsPageContext = createContext({});
export const DetailsPageContextProvider = ({ children }) => {
  const location = useLocation();

  const [question, setQuestion] = useState();
  const [description, setDescription] = useState();
  const [answers, setAnswers] = useState([]);
  const [comments, setComments] = useState([]);
  const [answerIds, setAnswerIds] = useState([]);

  const getSpecificQueryView = async (id) => {
    const response = await getSpecificQueryController(id);
    setQuestion(response?.data?.query_question);
    setDescription(response?.data?.query_description);
    setAnswers(response?.data?.answers);
    const arrayOfAnswersIds = response?.data?.answers?.map((item) => {
      return item?.answer_id;
    });
    setAnswerIds(arrayOfAnswersIds);
  };

  const getCommentsView = async (idsOfAnswers) => {
    const response = await getCommentsController(idsOfAnswers);
    setComments(response);
  };

  useEffect(() => {
    getSpecificQueryView(location?.state);
  }, []);

  useEffect(() => {
    const response = async () =>
      answerIds?.length > 0 && (await getCommentsView(answerIds));
    response();
  }, [answerIds]);

  useEffect(() => {
    const answersWithComments = answers?.map((item) => {
      const commentsOfAnswer = comments?.filter((innerItem) => {
        return innerItem.answer_id === item.answer_id;
      });
      return { ...item, comments: commentsOfAnswer };
    });

    setAnswers(answersWithComments);
  }, [comments]);

  const providerValue = { question, description, answers, comments };

  return (
    <DetailsPageContext.Provider value={providerValue}>
      {children}
    </DetailsPageContext.Provider>
  );
};
