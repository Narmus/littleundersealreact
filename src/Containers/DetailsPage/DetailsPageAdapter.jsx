import React from "react";

const getSpecificQueryAdapter = (data) => {
  if (data?.status === 200) {
    const adapterResponse = {
      status: data?.status,
      data: data?.data[0],
    };
    return adapterResponse;
  } else {
    return;
  }
};

export { getSpecificQueryAdapter };
