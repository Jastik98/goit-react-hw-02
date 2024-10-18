const Option = ({ updapeFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <button type="button" onClick={() => updapeFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updapeFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updapeFeedback("bad")}>
        Bad
      </button>
      {totalFeedback ? (
        <button type="button" onClick={resetFeedback}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Option;
