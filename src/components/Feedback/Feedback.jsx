const Feedback = ({good, neutral, bad, total, positiveFeedback}) => {
  return (
    <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          {good || neutral || bad ? <p>Total: {total}</p> : null}
          {total && <p>Positive: {positiveFeedback}%</p>}
    </div>
  );
};

export default Feedback;
