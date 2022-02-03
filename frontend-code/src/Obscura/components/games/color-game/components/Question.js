import React from 'react'
import styled from 'styled-components'
import { questionList } from '../data/questionList'
let time_id = 0
export default function Question({ finishQuiz, final_answer, finalScore }) {
    const [currentQuestion, setCurrentQuestion] = React.useState(questionList[0])
    //the currentQuestion question stores a particular question.

    //this function gets called whenever we click on any option.
    function active(id) {
        console.log('hii')
        setCurrentQuestion((prev) => {
            return {
                ...prev,
                marked: id
            }
        })
    }

    //this function is called whenever next button is clicked or 5 seconds are up
    function nextQuestion(id) {
        if (id + 1 === questionList.length) {
            clearInterval(time_id)
            final_answer(currentQuestion)
            finalScore()
            finishQuiz()
        } else {
            clearInterval(time_id)
            final_answer(currentQuestion)
            setCurrentQuestion(questionList[id + 1])
        }
    }

    //used to set the timer whenever the question changes.
    React.useEffect(() => {
        time_id = setInterval(() => {
            console.log('oops late')
            nextQuestion(currentQuestion.id)
        }, 2500)
    }, [currentQuestion.id])

    //these are just used for styles
    let style = {
        color: currentQuestion.options[currentQuestion.correctOptionIndex]
    }
    let active_style = {
        backgroundColor: 'red',
        color: 'white'
    }
    return (
        <QuestionContainer>
            <h3>Question : {currentQuestion.id + 1}</h3>
            <QuestionElement style={style}>{currentQuestion.title}</QuestionElement>
            <Options>
                {
                    currentQuestion.options.map((opt, ind) => {
                        return (

                            <Option style={ind === currentQuestion.marked ? active_style : {}}
                                onClick={() => { active(ind) }}>
                                {opt} </Option>
                        )
                    })
                }
            </Options>

            <NextButton onClick={(event) => {
                nextQuestion(currentQuestion.id)
            }}>Next!</NextButton>

        </QuestionContainer>
    )
}

const QuestionContainer = styled.div`
width: 100%;
max-width: 800px;
height: 100%;
background-color: #262626;
padding: 32px;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
border-radius: 16px;
box-shadow: 9px 4px 32px 0px #000000b3;
color: white;
font-weight:700;
padding : 20px;
`;
const NextButton = styled.button`
padding: 12px 32px;
width: 60%;
font-size: 24px;
border: none;
border-radius:8px;
cursor: pointer;
background-color: #13a388;
color: white;`;
const QuestionElement = styled.h1`
width: 100%;
background-color: white;
padding: 4px;
border-radius: 8px;
text-align: center;
font-size: 32px;
font-weight: 1000;
`;
const Options = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
`;
const Option = styled.button`
margin: 8px;
padding: 16px;
border-radius: 4px;
font-size: 20px;
display: flex;
justify-content: center;
align-items:center;
cursor: pointer;
border: none;
background-color: #fff;
`;