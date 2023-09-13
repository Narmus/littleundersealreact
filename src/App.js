import React, { useEffect, useState } from "react";
import "./App.css";

import { getQuestions } from "./api/api";

//Components
import HomePage from "./Containers/HomePage";
import QuestionCard from "./Components/QuestionCard/QuestionCardComponent";

function App() {
  const [questions, setQuestions] = useState([]);

  const callData = async () => {
    try {
      const resposne = await getQuestions();
      setQuestions(resposne?.data);
      console.log("Response", resposne?.data);
    } catch (error) {
      console.error("Error", error.message);
    }
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <div className="App">
      <HomePage />
      {questions.map((item, index) => {
        return (
          <QuestionCard
            key={index}
            number={item.query_id}
            question={item.query_head}
            answer={item.query_description}
          />
        );
      })}
    </div>
  );
}

export default App;
