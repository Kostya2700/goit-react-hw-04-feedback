import React from 'react';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
export const FeedbackOptions = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
}) => {
  return (
    <div>
      <button type="button" className={css.btn_good} onClick={goodFeedback}>
        good
      </button>
      <button
        type="button"
        className={css.btn_neutral}
        onClick={neutralFeedback}
      >
        neutral
      </button>
      <button type="button" className={css.btn_bad} onClick={badFeedback}>
        bad
      </button>
    </div>
  );
};
