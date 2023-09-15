import React, { useContext } from "react";
import { DetailsPageContext } from "../DetailsPageView";

import "./DetailsPage.css";

const DetailsPageView = () => {
  const { question, description, answers } = useContext(DetailsPageContext);
  return (
    <div className="details-page">
      <div className="question-area">
        <h3>{question}</h3>
        <p>{description}</p>
      </div>
      <div className="answers-area">
        {answers.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default DetailsPageView;
