import React from "react";

import { getSpecificQueryModel, getCommentsModel } from "./DetailsPageModel";

const getSpecificQueryController = async (id) => {
  const response = await getSpecificQueryModel(id);
  return response;
};

const getCommentsController = async (idsOfAnswers) => {
  const response = await getCommentsModel(idsOfAnswers);
  return response;
};

export { getSpecificQueryController, getCommentsController };
