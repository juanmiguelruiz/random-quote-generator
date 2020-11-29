import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const RandomButton = ({refetch}) => {
  return (
    <div className="row">
      <div className="random-button__container right">
        <a href className="random-button" onClick={refetch}>
          random <span className="material-icons random-icon">sync</span>
        </a>
      </div>
    </div>
  );
};

RandomButton.propTypes = {
  refetch: PropTypes.string
}

export default RandomButton;
