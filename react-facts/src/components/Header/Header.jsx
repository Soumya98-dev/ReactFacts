import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <div className="logo">
        <img src="../public/react-js-logo.png" alt="React logo" />
        <h1>ReactFacts</h1>
      </div>
      <div className="toggler">
        <p className="toggler-light">Light</p>
        <div onClick={props.toggleDarkMode} className="toggler-slider">
          <div className="toggler-circle"></div>
        </div>
        <p className="toggler-dark">Dark</p>
      </div>
    </nav>
  );
}

export default Header;
