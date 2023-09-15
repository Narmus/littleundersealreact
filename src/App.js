import React, { useEffect, useState } from "react";
import "./App.css";

//Components
import HomePage from "./Containers/HomePage";
import Layout from "./Components/LayoutComponent/LayoutComponent";

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
