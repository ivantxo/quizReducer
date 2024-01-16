function NextButton({ answer, index, numQuestions, dispatch }) {
  if (answer === null) return null;

  if (index + 1 < numQuestions) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
}

export default NextButton;
