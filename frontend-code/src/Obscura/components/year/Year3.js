import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import QuestionWrapper from '../QuestionWrapper'
import { thirdYear, numQuestions } from '../../constants/questions.js'
import obscurabannerv2 from '../../constants/obscurabannerv2.png'


import Alphabet from '../games/alphabet'
class Year3 extends Component {
    state = {
        numberQuestionSolved: 0,
        //questions: [],
        questionScore: 0,
        gameScore: 0,
        showQuestion: true,
    }
    componentDidMount() {
        window.onbeforeunload = function() {
            return true;
        };  
        this.props.setFooterVal("obscura")
        //TODO : api requests to update the states
        // shuffles the questions from the list of first year question and select 2 from the shuffled list
        const shuffled = thirdYear.sort(() => 0.5 - Math.random())
        this.setState({
            questions: shuffled.slice(0, numQuestions[2])
        })
    }
    updateQuestionSolved = () => {
        //upon a correct answer increase the number of correct questions
        // once the number of solved question equals 
        this.setState({
            numberQuestionSolved: this.state.numberQuestionSolved + 1,
        }, () => {
            console.log(this.state.numberQuestionSolved)
            if (this.state.numberQuestionSolved === numQuestions[2]) {
                // make an API request to update the score from the question
                window.alert('Score updated to the backend')
                window.alert(this.state.gameScore+this.state.questionScore)
                this.setState({
                    showQuestion: false
                })
            }
        })
    }
    changeScore = (val) => {
        //update score here
        // if the questions are visible : update the score for the question as 
        if (this.state.showQuestion) {
            this.setState({
                questionScore: this.state.questionScore + val
            })
        }
        else {
            this.setState({
                gameScore: val
            })
        }
    }

    gameOver = () => {
        // TODO : update the game score here
        // TODO : make API request to update score on the backend
        // show some sort of congratulations or something
        // go back to dashboard 
        window.alert('Total Score: ' + this.state.gameScore)
        this.props.history.push('/obscura/dashboard')
        //history.go(0)
    }

    
    render() {
        const questionRender = (
            // the jsx to render the questions
            <Container>
                <QuestionInfo>
                    <h3>Question Score : { this.state.questionScore }</h3>
                    <h3>Remaining Questions : { numQuestions[2] - this.state.numberQuestionSolved - 1 }</h3>
                </QuestionInfo>    
                <QuestionWrapper
                    changeScore={ this.changeScore }
                    questions={ thirdYear }
                    updateQuestionSolved={ this.updateQuestionSolved }
                />
            </Container>
        );
    
        const gameRender = (
            <Alphabet
                changeScore={ this.changeScore } 
                gameOver = {this.gameOver}
            />
        );
        // two components : Questions Component and Game Component
        return (
            <div>
                {/* Adding a go back to dashboard button */}
                {/* <h1>Welcome to Year 1</h1>
                <span><Link to="/obscura/dashboard"><button className="btn btn-primary bg-red">Go Back</button></Link></span> */}
                {/* <h2>Overall Score: {this.state.questionScore+this.state.gameScore}</h2> */}
                { this.state.showQuestion ? questionRender : gameRender}
            </div>
        )
    }
}

export default withRouter(Year3);

const Container = styled.div`
    padding : 100px;
    width: 100%;
    height: 100%;
    background-color: #2c2c2c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${obscurabannerv2});
    background-size: cover;
    overflow-x: hidden;
    margin-top: -64px;
    background-size: cover;
    h1,h2,h3{
        color: #fff !important;
    }
`;

const QuestionInfo = styled.div`
    display : flex;
    flex-direction: row;
    width:90%;
    justify-content: space-between;
    h1,h2,h3{
        color: #fff !important;
    }
`;
