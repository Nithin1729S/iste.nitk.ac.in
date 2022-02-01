import React,{useState} from 'react';
import Question from './Question'
import styled from 'styled-components'


const QuestionWrapper = ({ changeScore, questions,updateQuestionSolved,updateQuestionAttempted }) => {
    const [currQues, setCurrQues] = useState(0)
    
    return (
        <>
            <Container>
                <Question
                    currQues={ currQues }
                    setCurrQues={ setCurrQues }
                    questions={ questions }
                    correct={ questions[currQues]?.correctOption }
                    changeScore={ changeScore }
                    updateQuestionSolved={ updateQuestionSolved }
                    updateQuestionAttempted={ updateQuestionAttempted }
                />
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin : 5%;
`


export default QuestionWrapper;

