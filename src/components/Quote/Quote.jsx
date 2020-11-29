import React from "react";
import PropTypes from 'prop-types'

import "./styles.css";

const Quote = ({text}) => {
  return (
    <div className="container quote__container">
      <blockquote>
       {text}
      </blockquote>
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string
}

export default Quote;
