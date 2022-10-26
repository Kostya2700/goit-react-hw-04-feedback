import React from 'react';
import css from '../Statisticks/Statistick.module.css';
export const Statisticks = ({ good, neutral, bad, total, percentage = 0 }) => {
  return (
    <div className={css.counter}>
      <span className="Counter_good">Good: {good}</span>
      <span className="Counter_neutral">Neutral: {neutral}</span>
      <span className="Counter_bad">Bad: {bad}</span>
      <span>Total:{total}</span>
      <span>Percentage:{percentage}%</span>
    </div>
  );
};
