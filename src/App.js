import "./App.css";
import { useContext, useEffect } from "react";
import { GameContext } from "../src/context/GameContext";
import QuestionCard from "../src/components/QuestionCard";

function App() {
  const {
    getNewQuestion,
    currentQuestion,
    checkAnswer,
    score,
    result,
    isLoading,
  } = useContext(GameContext);

  useEffect(() => {
    getNewQuestion();
  }, []);

  const handleCheckAnswer = (answer) => {
    checkAnswer(answer);
  };

  return (
    <div className="App">
      <QuestionCard
        question={currentQuestion}
        checkAnswer={handleCheckAnswer}
        isLoading={isLoading}
        isCorrect={result}
        score={score}
      />
    </div>
  );
}

export default App;
