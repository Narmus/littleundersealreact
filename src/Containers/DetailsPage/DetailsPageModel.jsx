import React from "react";

import { getSpecificQuestion, getCommentsForAnswers } from "../../api/api";

import {
  getSpecificQueryAdapter,
  getCommentsAdapter,
} from "./DetailsPageAdapter";

const getSpecificQueryModel = async (id) => {
  try {
    const response = await getSpecificQuestion(id);
    const adapterResponse = getSpecificQueryAdapter(response);
    return adapterResponse;
  } catch (error) {
    console.error(error);
    return;
  }
};

const getCommentsModel = async (idsOfAnswers) => {
  try {
    const response = await getCommentsForAnswers(idsOfAnswers);
    const adapterResponse = getCommentsAdapter(response);
    return adapterResponse;
  } catch (error) {
    console.log(error);
    return;
  }
};

export { getSpecificQueryModel, getCommentsModel };
