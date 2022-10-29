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
  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
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
    const options = Object.keys(this.state);
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
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
