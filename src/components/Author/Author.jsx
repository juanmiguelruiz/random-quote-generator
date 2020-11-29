import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.css";

const Author = ({ name, category, link }) => {

  return (
    <div className="container author__container">
      <Link to="/author" className="author">
        {name}
        <i className="material-icons right author__icon">arrow_right_alt</i>
        <p className="author__category">{category}</p>
      </Link>
    </div>
  );
};

Author.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,

};

export default Author;
