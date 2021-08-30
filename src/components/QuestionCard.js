import styled from "styled-components";
import Option from "../components/AnswerOption";
import HashLoader from "react-spinners/HashLoader";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: 0px 0px 6px #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: #ecf0f1;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;

const CardHeader = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  justify-content: center;
  padding: 20px;
  padding-bottom: 30px;
  font-weight: 600;
  width: 100%;
  transition: all 0.3s;
  font-size: 20px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  align-items: center;
  width: 100%;
  transition: all 0.3s;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #192a56;
  color: #fff;
  font-weight: 700;
  width: 100%;
  border-radius: 10px;
  padding: 30px;
`;

const QuestionCard = ({ question, checkAnswer, isLoading, score }) => {
  return (
    <CardContainer>
      {isLoading ? (
        <HashLoader color="#273c75" />
      ) : (
        <>
          <CardHeader>{question?.question}</CardHeader>
          <CardBody>
            {question?.answers.map((answer) => (
              <Option answerText={answer} onClick={() => checkAnswer(answer)} />
            ))}
          </CardBody>
        </>
      )}
      {score > 0 && !isLoading ? (
        <CardFooter>Your score is {score}</CardFooter>
      ) : null}
    </CardContainer>
  );
};

export default QuestionCard;
