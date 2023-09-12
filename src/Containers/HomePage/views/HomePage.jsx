import React from "react";
import "./HomePage.css";

const HomePageView = () => {
  return (
    <div className="home-page">
      <h1>littleunderseal</h1>
      <input
        className="search-bar"
        type="search"
        placeholder="Type in your Search"
      />
    </div>
  );
};

export default HomePageView;
