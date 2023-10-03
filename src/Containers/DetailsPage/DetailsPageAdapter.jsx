import React from "react";

const getSpecificQueryAdapter = (data) => {
  if (data?.status === 200) {
    const adapterResponse = {
      status: data?.status,
      data: data?.data,
    };
    return adapterResponse;
  } else {
    return;
  }
};

const getCommentsAdapter = (data) => {
  if (data?.status === 200) {
    const adapterResponse = [];
    data?.data?.forEach((element) => {
      const dataToPush = {
        comment_id: element?.comment_id,
        comment_description: element?.comment_description,
        user_id: element?.user_id,
        answer_id: element?.answer_id,
      };
      adapterResponse?.push(dataToPush);
    });
    return adapterResponse;
  }
};

export { getSpecificQueryAdapter, getCommentsAdapter };
