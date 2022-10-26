import React from 'react';
import { Statisticks } from './Statisticks/Statisticks';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  percentage = 0;
  goodFeedback = () => {
    this.setState(p => {
      return { good: p.good + 1 };
    });
  };
  neutralFeedback = () => {
    this.setState(p => {
      return { neutral: p.neutral + 1 };
    });
  };
  badFeedback = () => {
    this.setState(p => {
      return { bad: p.bad + 1 };
    });
  };
  countTotalFeedbacks() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const totalFeedbacks = this.countTotalFeedbacks();
    const goSt = this.state.good;
    return Math.round((goSt * 100) / totalFeedbacks);
  }

  render() {
    this.total = this.countTotalFeedbacks.call(this);
    this.percentage = this.countPositiveFeedbackPercentage.call(this);
    return (
      <div className="div">
        <h2 className="h2">Please leave feedback</h2>
        <div className="counter_controls">
          <button type="button" onClick={this.goodFeedback}>
            good
          </button>
          <button type="button" onClick={this.neutralFeedback}>
            neutral
          </button>
          <button type="button" onClick={this.badFeedback}>
            bad
          </button>
        </div>
        <h2 className="h2">Statisticks</h2>
        <div>
          {this.total ? (
            <Statisticks
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total}
              percentage={this.percentage}
            ></Statisticks>
          ) : (
            <h3>No feedback given </h3>
          )}
        </div>
      </div>
    );
  }
}
export default Counter;
