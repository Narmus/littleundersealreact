import React, { createContext, useEffect, useState } from "react";
import { listQuestionsController } from "./HomePageController";
import { useNavigate } from "react-router-dom";
import routeContents from "../../Constants/routeContents.json";

export const HomepageContext = createContext({});
export const HomepageContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [listOfQuestions, setListOfQuestions] = useState([]);

  const listQuestionsView = async () => {
    const response = await listQuestionsController();
    setListOfQuestions(response?.data);
  };

  useEffect(() => {
    listQuestionsView();
  }, []);

  const navigateToDetails = (id) => {
    navigate(routeContents.DETAILS_PAGE, { state: id });
  };

  const navigateToPostPage = () => {
    navigate(routeContents.POST_PAGE);
  };

  const providerValue = {
    listOfQuestions,
    navigateToDetails,
    navigateToPostPage,
  };

  return (
    <HomepageContext.Provider value={providerValue}>
      {children}
    </HomepageContext.Provider>
  );
};
