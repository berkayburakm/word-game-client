import { useState, createContext } from "react";
import axios from "axios";
import useSound from "use-sound";
import correctSfx from "../sfx/correct.wav";

export const GameContext = createContext();

const Game = ({ children }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const API = "http://localhost:5000/words";

  const [playCorrect] = useSound(correctSfx, {
    volume: 0.5,
  });

  const getNewQuestion = async () => {
    const newQuestion = await axios.get(`${API}/new`);
    try {
      setCurrentQuestion(newQuestion.data.word);
    } catch (err) {
      console.error(err);
    }
  };
  const checkAnswer = async (answer) => {
    setIsLoading(true);
    const answerResult = await axios.post(`${API}/check`, {
      answer,
      word: currentQuestion.question,
    });
    try {
      setResult(answerResult.data.status);
      if (answerResult.data.status) {
        setScore(score + 1);
        playCorrect();
      }
      getNewQuestion();
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        currentQuestion,
        setCurrentQuestion,
        getNewQuestion,
        checkAnswer,
        result,
        isLoading,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default Game;
