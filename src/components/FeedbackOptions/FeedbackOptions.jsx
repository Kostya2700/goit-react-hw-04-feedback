import React from 'react';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <>
      <button className={css.button_feedback} type="button" onClick={onGood}>
        Good
      </button>
      <button className={css.button_feedback} type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button className={css.button_feedback} type="button" onClick={onBad}>
        Bad
      </button>
    </>
  );
};
FeedbackOptions.propTypes = {
  onGood: PropTypes.func,
  onNeutral: PropTypes.func,
  onBad: PropTypes.func,
};
