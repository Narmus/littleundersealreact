import React from "react";
import "./HeaderComponent.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-tag">
        <h2>littleunderseal</h2>
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
