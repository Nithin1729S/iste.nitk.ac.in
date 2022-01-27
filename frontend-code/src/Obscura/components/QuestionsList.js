import React from 'react';
import Question from './Question'

const QuestionsList = ({ updateQuestionSolved,questions}) => {
    const QuestionItems =
        questions.map((question) => {
            return (<Question
                updateQuestionSolved={ updateQuestionSolved }
                questionDetail={ question }
            />)
        })

    return (
        <>{QuestionItems}</>
    );
};

export default QuestionsList;
