import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getSpecificQueryController } from "./DetailsPageController";

export const DetailsPageContext = createContext({});
export const DetailsPageContextProvider = ({ children }) => {
  const location = useLocation();

  const [question, setQuestion] = useState();
  const [description, setDescription] = useState();
  const [answers, setAnswers] = useState([]);

  const getSpecificQueryView = async (id) => {
    const response = await getSpecificQueryController(id);
    setQuestion(response?.data?.query_question);
    setDescription(response?.data?.query_description);
  };

  useEffect(() => {
    getSpecificQueryView(location?.state);
  }, []);

  const providerValue = { question, description, answers };

  return (
    <DetailsPageContext.Provider value={providerValue}>
      {children}
    </DetailsPageContext.Provider>
  );
};
