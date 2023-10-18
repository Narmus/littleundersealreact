import React from "react";

const listQuestionsAdapter = (data) => {
  if (data?.status === 200) {
    const adapterResponse = {
      status: data?.status,
      data: data?.data,
    };
    return adapterResponse;
  } else {
    return [];
  }
};

export { listQuestionsAdapter };
