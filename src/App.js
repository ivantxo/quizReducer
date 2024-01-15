import Header from "./Header";
import Main from "./Main";
import StartScreen from "./StartScreen";

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <StartScreen numQuestions={2} />
      </Main>
    </div>
  );
}

export default App;
