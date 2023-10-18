import React from "react";

import { listQuestionsModel } from "./HomePageModel";

const listQuestionsController = async () => {
  const response = await listQuestionsModel();
  return response;
};

export { listQuestionsController };
