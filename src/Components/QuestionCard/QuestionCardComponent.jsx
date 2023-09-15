import React, { Fragment } from "react";

import "./QuestionCardComponent.css";

const QuestionCard = ({ number, question, answer }) => {
  return (
    <Fragment>
      <div className="question-card">
        <h3>
          {number}. {question}
        </h3>
        <p>{answer}</p>
      </div>
    </Fragment>
  );
};

export default QuestionCard;
