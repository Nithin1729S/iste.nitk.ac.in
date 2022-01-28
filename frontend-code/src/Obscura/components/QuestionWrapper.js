import React,{useState} from 'react';
import Question from './Question'

const QuestionWrapper = ({ changeScore, questions,updateQuestionSolved }) => {
    const [currQues, setCurrQues] = useState(0)
    
    return (
        <>
            <div className="container">
                <Question
                    currQues={ currQues }
                    setCurrQues={ setCurrQues }
                    questions={ questions }
                    correct={ questions[currQues]?.correctOption }
                    changeScore={ changeScore }
                    updateQuestionSolved={ updateQuestionSolved }
                />
            </div>
        </>
    );
};

export default QuestionWrapper;
