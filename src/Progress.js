function Progress({ index, numQuestions, maxPoints, points }) {
  return (
    <div className="progress">
      <progress value={index + 1} max={numQuestions}></progress>
      <p>
        Question {index + 1} / {numQuestions}
      </p>
      <p>
        {points} / {maxPoints}
      </p>
    </div>
  );
}

export default Progress;
