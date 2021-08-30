import styled from "styled-components";

const AnswerOption = styled.li`
  // display: flex;
  list-style-type: none;
  padding: 15px;
  color: #222;
  width: 80%;
  text-align: center;
  background-color: #f5f6fa;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    background-color: #dcdde1;
  }
`;

const Option = ({ answerText, onClick, ...props }) => {
  return <AnswerOption onClick={onClick}>{answerText}</AnswerOption>;
};

export default Option;
