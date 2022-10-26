import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statisticks } from 'components/Statisticks/Statisticks';
import React from 'react';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
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
    this.positivePercentage = this.countPositiveFeedbackPercentage.call(this);
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            goodFeedback={this.goodFeedback}
            neutralFeedback={this.neutralFeedback}
            badFeedback={this.badFeedback}
          />
        </Section>
        <Section title={'Statisticks'}>
          {this.total ? (
            <Statisticks
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total}
              positivePercentage={this.positivePercentage}
            ></Statisticks>
          ) : (
            <Notification title={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
export default Counter;
