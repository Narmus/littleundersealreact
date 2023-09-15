import React, { useEffect, useState } from "react";
import "./App.css";

//Components
import HomePage from "./Containers/HomePage";
import QuestionCard from "./Components/QuestionCard/QuestionCardComponent";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
