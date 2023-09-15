import React from "react";

import { getSpecificQuestion } from "../../api/api";

import { getSpecificQueryAdapter } from "./DetailsPageAdapter";

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

export { getSpecificQueryModel };
