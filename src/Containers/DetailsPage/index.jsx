import React from "react";

import { DetailsPageContextProvider } from "./DetailsPageView";
import DetailsPageView from "./views/DetailsPage";

const DetailsPage = () => {
  return (
    <DetailsPageContextProvider>
      <DetailsPageView />
    </DetailsPageContextProvider>
  );
};

export default DetailsPage;
