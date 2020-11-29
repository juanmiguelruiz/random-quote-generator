import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Footer = ({className_}) => {
  return (
    <footer className={className_}>
      <p className="center footer">juanmiguelruiz @ DevChallenges.io</p>
    </footer>
  );
};

Footer.propTypes = {
  className_ : PropTypes.string
}
export default Footer;
