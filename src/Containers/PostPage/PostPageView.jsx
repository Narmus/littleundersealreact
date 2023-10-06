import React, { createContext, useState } from "react";
import { postQuery } from "../../api/api";

export const PostPageContext = createContext({});

export const PostPageContextProvider = ({ children }) => {
  const [userQuery, setUserQuery] = useState({
    query_question: "",
    query_description: "",
  });

  const onInput = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setUserQuery((prevValue) => {
      return { ...prevValue, [inputName]: inputValue };
    });
  };

  const postQuestion = async () => {
    const response = await postQuery(userQuery);
    console.log("Response", response);
  };

  const providerValue = { onInput, postQuestion };
  return (
    <PostPageContext.Provider value={providerValue}>
      {children}
    </PostPageContext.Provider>
  );
};
