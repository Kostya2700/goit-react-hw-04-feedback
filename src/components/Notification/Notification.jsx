import React from 'react';
import PropTypes from 'prop-types';
export const Notification = ({ title }) => {
  return <h3>{title}</h3>;
};
Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
