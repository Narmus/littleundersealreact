import React from "react";

import { getSpecificQueryModel } from "./DetailsPageModel";

const getSpecificQueryController = async (id) => {
  const response = await getSpecificQueryModel(id);
  return response;
};

export { getSpecificQueryController };
