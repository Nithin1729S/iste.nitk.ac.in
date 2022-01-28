import React,{useState} from 'react';



const Question = ({ currQues,setCurrQues,questions,correct,changeScore,updateQuestionSolved }) => {
  const [error, setErrorMessage] = useState()
  const options = questions[currQues]?.options

  const handleCheck=(i) => {
    if (i === correct) {
      changeScore(300)
      updateQuestionSolved()
      setCurrQues(currQues + 1)
    }
    else {
      changeScore(-30)
      setErrorMessage("Incorrect selection! -30 Penalty")
    }
  }
  const skipQuestion = () => {
    changeScore(-50)
    setCurrQues(currQues + 1)
    updateQuestionSolved()
  }

  return (
    <>
      <h1 className="center">Question { currQues + 1 }</h1>
      <div>
        {error && <p>Wrong Option! -30 Penalty</p>}
        <h2>{ questions[currQues]?.title }</h2>
        <div className="center">
          { options && options.map((i,index) => (
            <button
              className="btn btn-primary"
              key={ i }
              onClick={()=>handleCheck(index)}
            >
              Option { index }
            </button>
          )) }
          <div className="container">
            <button className="btn" onClick={()=>skipQuestion()} style={{backgroundColor:"red !important"}} >Skip(-50)</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
