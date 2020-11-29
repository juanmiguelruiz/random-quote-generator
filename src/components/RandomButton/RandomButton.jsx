import React from "react";

import "./styles.css";

const RandomButton = () => {
  return (
    <div className="row">
      <div className="random-button__container right">
        <a className="random-button" href="/">
          random <span class="material-icons random-icon">sync</span>
        </a>
      </div>
    </div>
  );
};

export default RandomButton;
