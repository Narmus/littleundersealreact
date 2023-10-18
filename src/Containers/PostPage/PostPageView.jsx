import React, { createContext, useEffect, useState } from "react";
import { postQuery } from "../../api/api";
import { useNavigate } from "react-router-dom";
import routeContents from "../../Constants/routeContents.json";

export const PostPageContext = createContext({});

export const PostPageContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userQuery, setUserQuery] = useState({
    query_question: "",
    query_description: "",
  });

  const [queryValidation, setQueryValidation] = useState({
    question: true,
    description: true,
  });

  const [questionToNavigateTo, setQuestionToNavigateTo] = useState("");

  const onInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setUserQuery((prevValue) => {
      return { ...prevValue, [inputName]: inputValue };
    });
  };

  const postQuestion = async () => {
    const questionLength = userQuery?.query_question?.trim()?.length;
    const descriptionLength = userQuery?.query_description?.trim()?.length;

    if (questionLength > 10 && descriptionLength > 10) {
      questionLength > 10 &&
        setQueryValidation((prevValue) => {
          return { ...prevValue, question: true };
        });

      descriptionLength > 10 &&
        setQueryValidation((prevValue) => {
          return { ...prevValue, description: true };
        });
      const response = await postQuery(userQuery);
      setQuestionToNavigateTo(response?.data?.rows[0]?.query_id);
    } else {
      questionLength < 10 &&
        setQueryValidation((prevValue) => {
          return { ...prevValue, question: false };
        });
      descriptionLength < 10 &&
        setQueryValidation((prevValue) => {
          return { ...prevValue, description: false };
        });
    }
  };

  useEffect(() => {
    questionToNavigateTo &&
      navigate(routeContents.DETAILS_PAGE, { state: questionToNavigateTo });
  }, [questionToNavigateTo]);

  const providerValue = { onInput, postQuestion, queryValidation };
  return (
    <PostPageContext.Provider value={providerValue}>
      {children}
    </PostPageContext.Provider>
  );
};
