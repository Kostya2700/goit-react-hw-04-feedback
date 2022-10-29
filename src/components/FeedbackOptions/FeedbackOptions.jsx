import React from 'react';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
  goodFeedback: PropTypes.func,
  neutralFeedback: PropTypes.func,
  badFeedback: PropTypes.func,
};
