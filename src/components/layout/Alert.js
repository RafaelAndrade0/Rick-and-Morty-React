import React from "react";
import PropTypes from "prop-types";

const Alert = props => {
  const { msg } = props;
  return <div className='alert alert-danger'>{msg}</div>;
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Alert;
