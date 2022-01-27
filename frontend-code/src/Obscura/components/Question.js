import React from 'react';



const Question = ({ updateQuestionSolved, questionDetail }) => {
  console.log("here")
  const checkAns = () => {
    updateQuestionSolved()
  }
  return (
      <div className='container'>
        <h2>{questionDetail.title}</h2>
        <button className='btn btn-primary' onClick={checkAns}>Answer Question</button>
      </div>);
};

export default Question;
