import React from 'react';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
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
FeedbackOptions.propTypes = {
  goodFeedback: PropTypes.func,
  neutralFeedback: PropTypes.func,
  badFeedback: PropTypes.func,
};
