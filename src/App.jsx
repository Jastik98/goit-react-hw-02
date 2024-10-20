import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";
import Option from "./components/Option/Option";
import Feedback from "./components/Feedback/Feedback";


const App = () => {
  const  [feedback, setFeedback] = useState(
    JSON.parse(window.localStorage.getItem("feedbackValue")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  useEffect(() => {
    localStorage.setItem("feedbackValue", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Option
        updapeFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          resetFeedback={resetFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};

export default App;
