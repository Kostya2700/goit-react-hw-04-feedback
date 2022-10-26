import React from 'react';
export const FeedbackOptions = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
}) => {
  return (
    <div className="counter_controls">
      <button type="button" onClick={goodFeedback}>
        good
      </button>
      <button type="button" onClick={neutralFeedback}>
        neutral
      </button>
      <button type="button" onClick={badFeedback}>
        bad
      </button>
    </div>
  );
};
