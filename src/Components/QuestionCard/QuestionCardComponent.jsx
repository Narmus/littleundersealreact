import React, { Fragment } from "react";

import "./QuestionCardComponent.css";

const QuestionCard = ({ number, question, answer, navigateToDetails }) => {
  return (
    <Fragment>
      <div className="question-card">
        <h3 onClick={() => navigateToDetails(number)}>
          {number}. {question}
        </h3>
        <p>{answer}</p>
      </div>
    </Fragment>
  );
};

export default QuestionCard;
