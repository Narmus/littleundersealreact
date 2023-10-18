import React from "react";

//Imports
import { HomepageContextProvider } from "./HomePageView";
import HomePageView from "./views/HomePage";

const HomePage = () => {
  return (
    <HomepageContextProvider>
      <HomePageView />
    </HomepageContextProvider>
  );
};

export default HomePage;
