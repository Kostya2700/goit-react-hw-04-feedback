import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className="feedback">
      <h2 className="feedback__title">{title}</h2>
      {children}
    </div>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
