import React, { useContext } from "react";
import "./HomePage.css";

import { HomepageContext } from "../HomePageView";
import QuestionCard from "../../../Components/QuestionCard/QuestionCardComponent";

const HomePageView = () => {
  const { listOfQuestions, navigateToDetails } = useContext(HomepageContext);

  return (
    <div className="home-page">
      <div className="search-area">
        <h1>littleunderseal</h1>
        <input
          className="search-bar"
          type="search"
          placeholder="Type in your Search"
        />
      </div>
      <div className="questions-area">
        {listOfQuestions?.map((item, index) => {
          return (
            <QuestionCard
              key={index}
              number={item.query_id}
              question={item.query_question}
              answer={item.query_description}
              navigateToDetails={navigateToDetails}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePageView;
