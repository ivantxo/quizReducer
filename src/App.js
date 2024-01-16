import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import NextButton from "./NextButton";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, status: "ready", questions: action.payload };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };

    case "newAnswer":
      return { ...state, answer: action.payload };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              answer={answer}
              index={index}
              numQuestions={numQuestions}
              dispatch={dispatch}
            />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
