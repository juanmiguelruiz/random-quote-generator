import React from "react";

import "./styles.css";

const Author = () => {
  return (
    <div className="container author__container">
      <a href className="author">
        Bill Gates
        <i className="material-icons right author__icon">arrow_right_alt</i>

        <p className="author__category">business</p>
      </a>
    </div>
  );
};

export default Author;
