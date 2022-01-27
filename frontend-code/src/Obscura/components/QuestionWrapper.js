import React,{useState} from 'react';
import Question from './Question'

const QuestionWrapper = ({ changeScore, questions, numQuestions,updateQuestionSolved }) => {
    const [currQues, setCurrQues] = useState(0)
    console.log(questions)

    // const QuestionItems =
    //     questions.map((question) => {
    //         return (<Question
    //             updateQuestionSolved={ updateQuestionSolved }
    //             questionDetail={ question }
    //         />)
    //     })

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
