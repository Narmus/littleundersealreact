import React, { createContext, useEffect, useState } from "react";
import { listQuestionsController } from "./HomePageController";

export const HomepageContext = createContext({});
export const HomepageContextProvider = ({ children }) => {
  const [listOfQuestions, setListOfQuestions] = useState([]);

  const listQuestionsView = async () => {
    const response = await listQuestionsController();
    setListOfQuestions(response?.data);
  };

  useEffect(() => {
    listQuestionsView();
  }, []);

  const providerValue = { listOfQuestions };

  return (
    <HomepageContext.Provider value={providerValue}>
      {children}
    </HomepageContext.Provider>
  );
};
