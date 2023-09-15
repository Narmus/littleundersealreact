import React from "react";

import "./LayoutComponent.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <div className="header-tag">
          <h2>littleunderseal</h2>
          <div>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </header>
      {children}
      <footer>
        <p className="copyright"> Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;
