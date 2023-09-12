import React, { createContext } from "react";

export const HomepageContext = createContext({});
export const HomepageContextProvider = ({ children }) => {
  const providerValue = {};

  return (
    <HomepageContext.Provider value={providerValue}>
      {children}
    </HomepageContext.Provider>
  );
};
