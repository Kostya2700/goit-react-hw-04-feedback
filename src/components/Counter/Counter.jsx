import React from 'react';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  goodFeedback = e => {
    this.setState(p => {
      return { good: p.good + 1 };
    });
  };
  neutralFeedback = e => {
    this.setState(p => {
      return { neutral: p.neutral + 1 };
    });
  };
  badFeedback = e => {
    this.setState(p => {
      return { bad: p.bad + 1 };
    });
  };

  render() {
    return (
      <div className="div">
        <h2 className="h2">{this.state.total}</h2>
        <span className="Counter_good">{this.state.good}</span>
        <span className="Counter_neutral">{this.state.neutral}</span>
        <span className="Counter_bad">{this.state.bad}</span>
        <div className="Counter_controls">
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
      </div>
    );
  }
}
export default Counter;
