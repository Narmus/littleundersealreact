import React, { Fragment } from "react";

import "./QuestionCardComponent.css";

const QuestionCard = ({ number, question, answer }) => {
  return (
    <Fragment>
      <h3>
        {number}. {question}
      </h3>
      <p>{answer}</p>
    </Fragment>
  );
};

export default QuestionCard;
