import React from "react";

import { getQuestions } from "../../api/api";

import { listQuestionsAdapter } from "./HomePageAdapter";

const listQuestionsModel = async () => {
  try {
    const response = await getQuestions();
    const adapterResponse = await listQuestionsAdapter(response);
    return adapterResponse;
  } catch (error) {
    console.error(error);
  }
};

export { listQuestionsModel };
