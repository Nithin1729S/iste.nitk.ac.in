import React, { useState } from 'react';
import styled from 'styled-components'


const Question = ({ currQues,setCurrQues,questions,correct,changeScore,updateQuestionSolved }) => {
  const [error, setErrorMessage] = useState(false)
  const options = questions[currQues]?.options

  const handleCheck=(i) => {
    if (i === correct) {
      setErrorMessage("")
      changeScore(300)
      updateQuestionSolved()
      setCurrQues(currQues + 1)
    }
    else {
      changeScore(-30)
      setErrorMessage(true)
    }
  }
  const skipQuestion = () => {
    changeScore(-50)
    setCurrQues(currQues + 1)
    updateQuestionSolved()
  }

  return (
    <Wrapper>
      <QuestionTop>
        <h1 className="center">Question { currQues + 1 }</h1>
        <Skip  onClick={()=>skipQuestion()} style={{backgroundColor:"red !important"}} >Skip(-50)</Skip>
      </QuestionTop>
      <div>
        <h2>{ questions[currQues]?.title }</h2>
        {error && <Error>Wrong Option! Try again! <br/>-30 Penalty</Error>}
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
  max-width: 550px;
  height: 80%;
  width: 100%;
  padding: 40px;
  margin: 0px 16px;
  background-color: #262626;
  border-radius: 8px;
  box-shadow: 9px 4px 32px 0px #000000b3;
  * {
    font-size: 20px;
    color: #ffeaea;
  }
`;

const ButtonGroup = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  button {
    width: 120px;
    padding : 10px;
    border-radius: 20%/50%;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
    color : #fff;
    margin : 10px;
    border : 0;
    cursor: pointer;
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
`
const QuestionTop = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : space-between;
  Skip : hover{
    transform: scale(0.97);
  }
`

export default Question;
