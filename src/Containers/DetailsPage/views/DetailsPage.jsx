import React, { useContext } from "react";
import { DetailsPageContext } from "../DetailsPageView";

import "./DetailsPage.css";

const DetailsPageView = () => {
  const { question, description, answers, comments } =
    useContext(DetailsPageContext);
  return (
    <div className="details-page">
      <div className="question-area">
        <h3>{question}</h3>
        <p>{description}</p>
      </div>
      <div className="answers-area">
        {answers?.map((item, index) => {
          return (
            <div key={index}>
              <p>{item?.answer_description}</p>
              {item?.comments?.map((commentItem, index) => {
                return (
                  <p className="comments-line" key={index}>
                    {commentItem?.comment_description}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsPageView;
