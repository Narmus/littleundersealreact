import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import routeContents from "./Constants/routeContents.json";
import Layout from "./Components/LayoutComponent/LayoutComponent";
import HomePage from "./Containers/HomePage";
import DetailsPage from "./Containers/DetailsPage";
import PostPage from "./Containers/PostPage";

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
            <Route
              exact
              path={routeContents.POST_PAGE}
              element={<PostPage />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
