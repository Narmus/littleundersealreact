import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import routeContents from "./Constants/routeContents.json";
import HomePage from "./Containers/HomePage";
import DetailsPage from "./Containers/DetailsPage";
import Layout from "./Components/LayoutComponent/LayoutComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path={routeContents.HOME} element={<HomePage />} />
            <Route
              exact
              path={routeContents.DETAILS_PAGE}
              element={<DetailsPage />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
