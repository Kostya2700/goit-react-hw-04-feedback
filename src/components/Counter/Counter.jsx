import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statisticks } from 'components/Statisticks/Statisticks';
import { useState } from 'react';
export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = () => {
    return good + neutral + bad;
  };
  const positivePercentage = () => {
    return Math.round((good / total()) * 100);
  };
  const onLeaveFeedback = options => {
    switch (options) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statisticks'}>
        {total() ? (
          <Statisticks
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positivePercentage()}
          ></Statisticks>
        ) : (
          <Notification title={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
