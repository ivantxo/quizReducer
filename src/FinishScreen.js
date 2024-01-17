function FinishScreen({ points, maxPoints }) {
  const percentage = Math.ceil((points / maxPoints) * 100);

  let emoji;
  if (percentage >= 0 && percentage < 25) emoji = "😶‍🌫️";

  if (percentage >= 25 && percentage < 50) emoji = "🤐";

  if (percentage >= 50 && percentage < 75) emoji = "😅";

  if (percentage >= 75 && percentage < 100) emoji = "😉";

  if (percentage === 100) emoji = "🙃";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored {points} out of {maxPoints} (
        {percentage}%)
      </p>

      <button className="btn btn-ui">Restart Quiz</button>
    </>
  );
}

export default FinishScreen;
