import React, { createContext } from "react";

export const PostPageContext = createContext({});

export const PostPageContextProvider = ({ children }) => {
  const providerValue = {};
  return (
    <PostPageContext.Provider value={providerValue}>
      {children}
    </PostPageContext.Provider>
  );
};
