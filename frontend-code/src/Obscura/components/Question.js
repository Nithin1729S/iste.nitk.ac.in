import React, { useState } from 'react';
import styled from 'styled-components'


const Question = ({ currQues, setCurrQues, questions, correct, changeScore, updateQuestionSolved, updateQuestionAttempted }) => {
  
  const [error, setErrorMessage] = useState(false)
  const [numAttempts, setnumAttempts] = useState(0)
  const options = questions[currQues]?.options

  const handleCheck = (i) => {
    setErrorMessage(false)
    if (i === correct) {
      setErrorMessage(false)
      numAttempts === 3 ? changeScore(0) : changeScore(200 - 30*numAttempts)
      updateQuestionSolved()
      setCurrQues(currQues + 1)
    }
    else {
      setnumAttempts(numAttempts+1)
      setErrorMessage(true)
    }
  }
  const skipQuestion = () => {
    changeScore(-100)
    setCurrQues(currQues + 1)
    updateQuestionAttempted()
  }

  return (
    <Wrapper>
      <QuestionTop>
        <h1 className="center">Question { currQues + 1 }</h1>
        
        <Skip  onClick={()=>skipQuestion()} style={{backgroundColor:"red !important"}} >Skip(-100)</Skip>
      </QuestionTop>
      <div>
        <h2>{ questions[currQues]?.title }</h2>
        {error && <Error>Wrong Option! Try again! <br/>-50 Penalty</Error>}
        <ButtonGroup>
          { options && options.map((i,index) => (
            <button
              key={ i }
              onClick={()=>handleCheck(index)}
            >
              Option { String.fromCharCode(index+65) }
            </button>
          )) }
        </ButtonGroup>
          <div className="container">
          </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width : 60vw !important;
  height: 80%;
  width: 100%;
  padding: 40px;
  margin: 0px 16px;
  background-color: #262626;
  border-radius: 8px;
  box-shadow: 9px 4px 32px 0px #000000b3;
  * {
    text-align : left;
    font-size: 25px;
    color: #ffeaea;
  }
`;

const ButtonGroup = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  button {
    width: 60%;
    padding : 20px;
    border-radius: 5%/50%;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
    color : #fff;
    margin : 10px;
    border : 0;
    cursor: pointer;
    text-align:center;
  }
  & : nth-of-type(2n){
    background-color: #e83e7d;
    box-shadow: 0px 0px 15px #e83e7d;
  }
  & : nth-of-type(2n+1){
    background-color: #12a389;
    box-shadow: 0px 0px 15px #12a389;
  }
  & : hover {
    transform: scale(0.97);
  }
`
const Error = styled.p`
  color : red;
  text-align : center;
  font-size : 20px;
`

const Skip = styled.button`
  background-color : red;
  border : none;
  color : #fff;
  font-size : 1.5rem;
  padding : 5px;
  box-shadow: 0px 0px 6px red;
  border-radius :5px;
  cursor: pointer;
  &:active{
    background-color : red;
  }
  &:hover{
    background-color : red;
  }
`
const QuestionTop = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : space-between;
    & : hover{
    transform: scale(0.97);
    }
`

export default Question;
