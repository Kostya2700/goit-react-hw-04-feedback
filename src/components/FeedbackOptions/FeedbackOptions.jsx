import React from 'react';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      {options.map(option => (
        <button
          className={css.button_feedback}
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
